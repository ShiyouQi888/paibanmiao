import React, { lazy, Suspense } from "react";
import { Layers, ImageIcon, ChevronRight, Sparkles } from "lucide-react";
import { useWindowControls } from "../../hooks/useWindowControls";
import "./SettingsPanel.css";

const StorageModeSelector = lazy(() =>
  import("../StorageModeSelector/StorageModeSelector").then((m) => ({
    default: m.StorageModeSelector,
  })),
);

const ImageHostSettings = lazy(() =>
  import("./ImageHostSettings").then((m) => ({
    default: m.ImageHostSettings,
  })),
);

const DeepSeekSettings = lazy(() =>
  import("./DeepSeekSettings").then((m) => ({
    default: m.DeepSeekSettings,
  })),
);

export interface SettingsPanelProps {
  initialSection?: "none" | "storage" | "imagehost" | "ai";
}

export function SettingsPanel({ initialSection = "none" }: SettingsPanelProps) {
  const [activeSection, setActiveSection] = React.useState<
    "none" | "storage" | "imagehost" | "ai"
  >(initialSection);
  const { isElectron } = useWindowControls();

  // 当 initialSection 变化时更新内部状态
  React.useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);

  if (activeSection === "storage") {
    return (
      <div className="settings-detail-panel">
        <div className="settings-detail-header">
          <button className="back-btn" onClick={() => setActiveSection("none")}>
            <ChevronRight size={18} style={{ transform: "rotate(180deg)" }} />
            <span>返回设置</span>
          </button>
          <h4>存储模式</h4>
        </div>
        <div className="settings-detail-content">
          <div className="settings-detail-inner">
            <Suspense
              fallback={<div className="settings-loading">加载中...</div>}
            >
              <StorageModeSelector />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === "imagehost") {
    return (
      <div className="settings-detail-panel">
        <div className="settings-detail-header">
          <button className="back-btn" onClick={() => setActiveSection("none")}>
            <ChevronRight size={18} style={{ transform: "rotate(180deg)" }} />
            <span>返回设置</span>
          </button>
          <h4>图床设置</h4>
        </div>
        <div className="settings-detail-content">
          <div className="settings-detail-inner">
            <Suspense
              fallback={<div className="settings-loading">加载中...</div>}
            >
              <ImageHostSettings />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === "ai") {
    return (
      <div className="settings-detail-panel">
        <div className="settings-detail-header">
          <button className="back-btn" onClick={() => setActiveSection("none")}>
            <ChevronRight size={18} style={{ transform: "rotate(180deg)" }} />
            <span>返回设置</span>
          </button>
          <h4>AI 助手设置</h4>
        </div>
        <div className="settings-detail-content">
          <div className="settings-detail-inner">
            <Suspense
              fallback={<div className="settings-loading">加载中...</div>}
            >
              <DeepSeekSettings />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="settings-panel">
      <div className="settings-panel-header">
        <h3 className="settings-panel-title">设置</h3>
        <p className="settings-panel-desc">配置存储方式、图床与 AI 服务</p>
      </div>
      <div className="settings-group">
        <div className="settings-group-title">基础配置</div>
        <div className="settings-group-grid">
          {!isElectron && (
            <button
              className="settings-item"
              onClick={() => setActiveSection("storage")}
            >
              <div className="settings-item-icon">
                <Layers size={20} />
              </div>
              <div className="settings-item-info">
                <div className="settings-item-label">存储模式</div>
                <div className="settings-item-desc">
                  选择文章保存的位置与权限策略
                </div>
              </div>
              <ChevronRight size={16} className="settings-item-arrow" />
            </button>
          )}

          <button
            className="settings-item"
            onClick={() => setActiveSection("imagehost")}
          >
            <div className="settings-item-icon">
              <ImageIcon size={20} />
            </div>
            <div className="settings-item-info">
              <div className="settings-item-label">图床设置</div>
              <div className="settings-item-desc">
                配置第三方图床服务，实现图片一键上传与外链转换
              </div>
            </div>
            <ChevronRight size={16} className="settings-item-arrow" />
          </button>

          <button
            className="settings-item"
            onClick={() => setActiveSection("ai")}
          >
            <div className="settings-item-icon">
              <Sparkles size={20} />
            </div>
            <div className="settings-item-info">
              <div className="settings-item-label">AI 助手</div>
              <div className="settings-item-desc">
                配置 DeepSeek 服务，启用 AI 智能排版与内容整理
              </div>
            </div>
            <ChevronRight size={16} className="settings-item-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
