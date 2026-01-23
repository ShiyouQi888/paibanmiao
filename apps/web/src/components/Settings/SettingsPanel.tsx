import React, { lazy, Suspense } from 'react';
import { Layers, ImageIcon, ChevronRight } from 'lucide-react';
import { useWindowControls } from '../../hooks/useWindowControls';
import './SettingsPanel.css';

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

export function SettingsPanel() {
  const [activeSection, setActiveSection] = React.useState<'none' | 'storage' | 'imagehost'>('none');
  const { isElectron } = useWindowControls();

  if (activeSection === 'storage') {
    return (
      <div className="settings-detail-panel">
        <div className="settings-detail-header">
          <button className="back-btn" onClick={() => setActiveSection('none')}>
            <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} />
            <span>返回设置</span>
          </button>
          <h4>存储模式</h4>
        </div>
        <div className="settings-detail-content">
          <div className="settings-detail-inner">
            <Suspense fallback={<div className="settings-loading">加载中...</div>}>
              <StorageModeSelector />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'imagehost') {
    return (
      <div className="settings-detail-panel">
        <div className="settings-detail-header">
          <button className="back-btn" onClick={() => setActiveSection('none')}>
            <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} />
            <span>返回设置</span>
          </button>
          <h4>图床设置</h4>
        </div>
        <div className="settings-detail-content">
          <div className="settings-detail-inner">
            <Suspense fallback={<div className="settings-loading">加载中...</div>}>
              <ImageHostSettings />
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
        <p className="settings-panel-desc">配置存储方式与图床服务</p>
      </div>
      <div className="settings-group">
        <div className="settings-group-title">基础配置</div>
        <div className="settings-group-grid">
          {!isElectron && (
            <button className="settings-item" onClick={() => setActiveSection('storage')}>
              <div className="settings-item-icon">
                <Layers size={20} />
              </div>
              <div className="settings-item-info">
                <div className="settings-item-label">存储模式</div>
                <div className="settings-item-desc">选择文章保存的位置与权限策略</div>
              </div>
              <ChevronRight size={16} className="settings-item-arrow" />
            </button>
          )}
          
          <button className="settings-item" onClick={() => setActiveSection('imagehost')}>
            <div className="settings-item-icon">
              <ImageIcon size={20} />
            </div>
            <div className="settings-item-info">
              <div className="settings-item-label">图床设置</div>
              <div className="settings-item-desc">配置图片上传服务与鉴权信息</div>
            </div>
            <ChevronRight size={16} className="settings-item-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
