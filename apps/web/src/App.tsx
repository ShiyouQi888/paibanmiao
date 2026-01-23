import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Toaster } from "react-hot-toast";
import { MarkdownEditor } from "./components/Editor/MarkdownEditor";
import { MarkdownPreview } from "./components/Preview/MarkdownPreview";
import { useFileSystem } from "./hooks/useFileSystem";
import { useMobileView } from "./hooks/useMobileView";
import { MobileToolbar } from "./components/common/MobileToolbar";
import { useEditorStore } from "./store/editorStore";
import "./styles/global.css";
import "./App.css";

import { useStorageContext } from "./storage/StorageContext";
import { Loader2 } from "lucide-react";
import { useHistoryStore } from "./store/historyStore";
import { useFileStore } from "./store/fileStore";
import { platform } from "./lib/platformAdapter";

const HistoryPanel = lazy(() =>
  import("./components/History/HistoryPanel").then((m) => ({
    default: m.HistoryPanel,
  })),
);
const HistoryManager = lazy(() =>
  import("./components/History/HistoryManager").then((m) => ({
    default: m.HistoryManager,
  })),
);
const Welcome = lazy(() =>
  import("./components/Welcome/Welcome").then((m) => ({ default: m.Welcome })),
);
const UpdateModal = lazy(() =>
  import("./components/UpdateModal/UpdateModal").then((m) => ({
    default: m.UpdateModal,
  })),
);
const ThemePanel = lazy(() =>
  import("./components/Theme/ThemePanel").then((m) => ({ default: m.ThemePanel })),
);
const UserSettingsModal = lazy(() =>
  import("./components/Settings/UserSettingsModal").then((m) => ({ default: m.UserSettingsModal })),
);
import { LandingPage } from "./components/LandingPage/LandingPage";
import { MobileThemeSelector } from "./components/Theme/MobileThemeSelector";
import { SidebarNav } from "./components/Sidebar/SidebarNav";
import { WorkbenchHeader } from "./components/Workbench/WorkbenchHeader";

interface UpdateEventData {
  latestVersion: string;
  currentVersion: string;
  releaseNotes?: string;
  force?: boolean;
}

interface ElectronUpdateAPI {
  onUpdateAvailable?: (callback: (data: UpdateEventData) => void) => () => void;
  onUpToDate?: (
    callback: (data: { currentVersion: string }) => void,
  ) => () => void;
  onUpdateError?: (callback: () => void) => () => void;
  removeUpdateListener?: (handler: (() => void) | undefined) => void;
  openReleases?: () => void;
}

function App() {
  const { workspacePath, saveFile, createFile } = useFileSystem();
  const { type: storageType, ready } = useStorageContext();
  const historyLoading = useHistoryStore((state) => state.loading);
  const fileLoading = useFileStore((state) => state.isLoading);
  const { isMobile, activeView, setActiveView } = useMobileView();
  const copyToWechat = useEditorStore((state) => state.copyToWechat);
  const [showThemePanel, setShowThemePanel] = useState(false);
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(() => {
    // Electron 模式不显示官网，Web 模式默认显示
    if (platform.isElectron) return false;
    // 如果 URL 有 workspace 参数或已经在编辑器中，可以跳过
    const params = new URLSearchParams(window.location.search);
    return !params.has('editor');
  });

  // 全局保存快捷键（统一监听器）
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        saveFile(true); // showToast = true
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [saveFile]);

  // 使用统一的平台适配器
  const isElectron = platform.isElectron;
  const platformName = platform.name ?? "web";

  // 更新提示状态
  const [updateInfo, setUpdateInfo] = useState<{
    latestVersion: string;
    currentVersion: string;
    releaseNotes: string;
  } | null>(null);

  // 监听 Electron 更新事件
  useEffect(() => {
    if (!isElectron) return;
    const electron = window.electron as { update?: ElectronUpdateAPI };
    if (!electron?.update?.onUpdateAvailable) return;

    const availableHandler = electron.update.onUpdateAvailable(
      (data: UpdateEventData) => {
        // 检查是否跳过了此版本（除非是强制检查）
        const skippedVersion = localStorage.getItem("paibanmiao-skipped-version");
        if (!data.force && skippedVersion === data.latestVersion) {
          return; // 用户之前选择跳过此版本
        }

        setUpdateInfo({
          latestVersion: data.latestVersion,
          currentVersion: data.currentVersion,
          releaseNotes: data.releaseNotes || "",
        });
      },
    );

    const upToDateHandler = electron.update.onUpToDate?.(
      (data: { currentVersion: string }) => {
        // 使用 react-hot-toast 显示已是最新版本
        import("react-hot-toast").then(({ default: toast }) => {
          toast.success(`当前已是最新版本 (${data.currentVersion})`);
        });
      },
    );

    const errorHandler = electron.update.onUpdateError?.(() => {
      import("react-hot-toast").then(({ default: toast }) => {
        toast.error("检查更新失败，请稍后重试");
      });
    });

    return () => {
      electron.update?.removeUpdateListener?.(availableHandler);
      if (upToDateHandler)
        electron.update?.removeUpdateListener?.(upToDateHandler);
      if (errorHandler) electron.update?.removeUpdateListener?.(errorHandler);
    };
  }, [isElectron]);

  const [showHistory, setShowHistory] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("paibanmiao-show-history");
    return saved !== "false";
  });
  const [activeTab, setActiveTab] = useState<'history'>('history');

  const handleCreateFile = React.useCallback(async () => {
    await createFile();
    setShowHistory(false); // 直接显示编辑器和预览区，折叠侧边栏
  }, [createFile]);

  const [historyWidth, setHistoryWidth] = useState<string>(
    showHistory ? "280px" : "0px",
  );

  useEffect(() => {
    try {
      localStorage.setItem("paibanmiao-show-history", String(showHistory));
    } catch {
      /* 忽略持久化错误 */
    }
  }, [showHistory]);

  useEffect(() => {
    if (showHistory) {
      setHistoryWidth("280px");
      return;
    }
    const timer = window.setTimeout(() => setHistoryWidth("0px"), 350);
    return () => window.clearTimeout(timer);
  }, [showHistory]);

  const mainClass = "app-main";
  const mainStyle = useMemo(
    () =>
      ({
        "--history-width": historyWidth,
        "--nav-width": "64px",
      }) as CSSProperties,
    [historyWidth],
  );

  const [splitRatio, setSplitRatio] = useState(50); // 默认 50/50
  const isDraggingRef = React.useRef(false);

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    const workspace = document.querySelector('.workspace');
    if (!workspace) return;
    const rect = workspace.getBoundingClientRect();
    const newRatio = ((e.clientX - rect.left) / rect.width) * 100;
    if (newRatio > 20 && newRatio < 80) { // 限制拖拽范围
      setSplitRatio(newRatio);
    }
  }, []);

  const handleMouseUp = React.useCallback(() => {
    isDraggingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'default';
  }, [handleMouseMove]);

  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
  }, [handleMouseMove, handleMouseUp]);

  if (showLanding) {
    return (
      <LandingPage 
        onStart={() => setShowLanding(false)} 
      />
    );
  }

  // Electron 模式：强制选择工作区
  if (isElectron && !workspacePath) {
    return (
      <>
        <Toaster position="top-center" />
        <Suspense
          fallback={
            <div className="workspace-loading">
              <Loader2 className="animate-spin" size={24} />
            </div>
          }
        >
          <Welcome />
        </Suspense>
      </>
    );
  }

  return (
    <div className="app" data-platform={platformName} data-mobile={isMobile}>
      {/* 更新提示 Modal */}
      {updateInfo && (
        <Suspense fallback={null}>
          <UpdateModal
            latestVersion={updateInfo.latestVersion}
            currentVersion={updateInfo.currentVersion}
            releaseNotes={updateInfo.releaseNotes}
            onClose={() => setUpdateInfo(null)}
            onDownload={() => {
              (
                window.electron as { update?: ElectronUpdateAPI }
              )?.update?.openReleases?.();
              setUpdateInfo(null);
            }}
            onSkipVersion={() => {
              localStorage.setItem(
                "paibanmiao-skipped-version",
                updateInfo.latestVersion,
              );
              setUpdateInfo(null);
            }}
          />
        </Suspense>
      )}
      {/* 只在存储上下文完全就绪且确认为 IndexedDB 模式时才渲染 HistoryManager */}
      {!isElectron && ready && storageType === "indexeddb" && (
        <Suspense fallback={null}>
          <HistoryManager />
        </Suspense>
      )}

      {/* 主题管理 Modal (桌面端) */}
      {!isMobile && (
        <Suspense fallback={null}>
          <ThemePanel
            open={showThemePanel}
            onClose={() => setShowThemePanel(false)}
          />
        </Suspense>
      )}

      {/* 用户资料与设置 Modal (桌面端) */}
      {!isMobile && (
        <Suspense fallback={null}>
          <UserSettingsModal
            isOpen={isUserSettingsOpen}
            onClose={() => setIsUserSettingsOpen(false)}
          />
        </Suspense>
      )}

      <>
        <Toaster
          position="top-center"
          toastOptions={{
            className: "premium-toast",
            style: {
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: "#1a1a1a",
              boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.12)",
              borderRadius: "50px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: 500,
              border: "1px solid rgba(0, 0, 0, 0.05)",
              maxWidth: "400px",
            },
            success: {
              iconTheme: {
                primary: "#07c160",
                secondary: "#fff",
              },
              duration: 2000,
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
              duration: 3000,
            },
          }}
        />
        <main
          className={mainClass}
          style={mainStyle}
          data-show-history={showHistory}
        >
          {!isMobile && (
            <SidebarNav 
              isCollapsed={!showHistory} 
              onToggle={() => setShowHistory(prev => !prev)}
              activeTab={activeTab}
              onTabChange={setActiveTab as any}
              onUserClick={() => setIsUserSettingsOpen(true)}
              onCreateFile={handleCreateFile}
            >
              {ready && (
                <Suspense
                  fallback={
                    <div className="workspace-loading">
                      <Loader2 className="animate-spin" size={24} />
                    </div>
                  }
                >
                  <HistoryPanel />
                </Suspense>
              )}
            </SidebarNav>
          )}

          <div className="workspace-container">
             <WorkbenchHeader
               onThemeClick={() => setShowThemePanel(true)}
               onCopyClick={copyToWechat}
             />
             <div className="workspace-content">
                <div
                  className="workspace"
                  data-mobile-view={isMobile ? activeView : undefined}
                >
                  <div
                    className="editor-pane"
                    style={!isMobile ? { width: `${splitRatio}%` } : undefined}
                  >
                    {/* 存储未就绪或文件/历史加载中显示 loading */}
                    {!ready ||
                    fileLoading ||
                    (historyLoading &&
                      !isElectron &&
                      storageType === "indexeddb") ? (
                      <div className="workspace-loading">
                        <Loader2 className="animate-spin" size={24} />
                        <p>正在加载文章</p>
                      </div>
                    ) : (
                      <MarkdownEditor />
                    )}
                  </div>

                  {!isMobile && (
                    <div
                      className="workspace-divider"
                      onMouseDown={handleMouseDown}
                    >
                      <div className="divider-line" />
                    </div>
                  )}

                  <div
                     className="preview-pane"
                     style={
                       !isMobile ? { width: `${100 - splitRatio}%` } : undefined
                     }
                   >
                     {!ready ||
                     fileLoading ||
                     (historyLoading &&
                       !isElectron &&
                       storageType === "indexeddb") ? (
                       <div className="workspace-loading">
                         <Loader2 className="animate-spin" size={24} />
                         <p>正在加载文章</p>
                       </div>
                     ) : (
                       <MarkdownPreview />
                     )}
                   </div>
                </div>
            </div>
          </div>

          {/* 移动端底部工具栏 */}
          {isMobile && (
            <MobileToolbar
              activeView={activeView}
              onViewChange={setActiveView}
              onCopyToWechat={copyToWechat}
              onOpenTheme={() => setShowThemePanel(true)}
            />
          )}
        </main>
      </>

      {/* 移动端主题选择器 */}
      {isMobile && (
        <MobileThemeSelector
          open={showThemePanel}
          onClose={() => setShowThemePanel(false)}
        />
      )}
    </div>
  );
}

export default App;
