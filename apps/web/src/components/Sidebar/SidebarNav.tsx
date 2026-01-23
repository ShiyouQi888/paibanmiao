import React from 'react';
import { 
  History, 
  ChevronLeft, 
  ChevronRight,
  PlusCircle,
  HelpCircle,
  Sun,
  Moon,
  Cat,
  User as UserIcon
} from 'lucide-react';
import { useUITheme } from '../../hooks/useUITheme';
import { useAuthStore } from '../../store/authStore';
import './SidebarNav.css';

interface SidebarNavProps {
  isCollapsed: boolean;
  onToggle: () => void;
  activeTab: 'history';
  onTabChange: (tab: 'history') => void;
  onUserClick?: () => void;
  onCreateFile?: () => void;
  children?: React.ReactNode;
}

export function SidebarNav({ 
  isCollapsed, 
  onToggle, 
  activeTab, 
  onTabChange,
  onUserClick,
  onCreateFile,
  children
}: SidebarNavProps) {
  const uiTheme = useUITheme((state) => state.theme);
  const setTheme = useUITheme((state) => state.setTheme);
  const { user } = useAuthStore();

  const handleTabClick = (tab: 'history') => {
    if (activeTab === tab && !isCollapsed) {
      onToggle(); // 如果点击当前激活的标签且未折叠，则折叠
    } else {
      onTabChange(tab);
      if (isCollapsed) {
        onToggle(); // 如果已折叠，则展开
      }
    }
  };

  return (
    <div className={`sidebar-nav-container ${isCollapsed ? 'is-collapsed' : ''}`}>
      {/* 品牌 Logo 区域 */}
      <div className="sidebar-brand">
        <div className="brand-logo">
          <Cat size={20} color="#fff" />
        </div>
        {!isCollapsed && <span className="brand-name">排版喵</span>}
        <button 
          className="brand-collapse-btn"
          onClick={onToggle}
          title={isCollapsed ? "展开" : "折叠"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <div className="sidebar-nav-main">
        {/* 一级导航：图标栏 */}
        <div className="sidebar-nav-rail">
          <div className="rail-top">
            <button 
              className="rail-item action-btn"
              onClick={onCreateFile}
              title="新建文章"
            >
              <PlusCircle size={22} />
            </button>
            <button 
              className={`rail-item ${activeTab === 'history' ? 'is-active' : ''}`}
              onClick={() => handleTabClick('history')}
              title="文章管理"
            >
              <History size={22} />
            </button>
          </div>

          <div className="rail-bottom">
            <button 
              className="rail-item"
              title="帮助"
              onClick={() => window.open('https://github.com/tenngoxars/paibanmiao', '_blank')}
            >
              <HelpCircle size={22} />
            </button>
            <button 
              className="rail-item"
              onClick={() => setTheme(uiTheme === "dark" ? "default" : "dark")}
              title={uiTheme === "dark" ? "切换到亮色模式" : "切换到暗色模式"}
            >
              {uiTheme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button 
              className="rail-item user-avatar-btn"
              onClick={onUserClick}
              title="用户资料与设置"
            >
              {user?.avatar ? (
                <img src={user.avatar} alt={user.username} className="user-avatar-img" />
              ) : (
                <div className="user-avatar-placeholder">
                  <UserIcon size={20} />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* 二级导航：内容面板 */}
        <div className="sidebar-nav-pane">
          <div className="pane-header">
            <h3>文章管理</h3>
          </div>
          <div className="pane-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
