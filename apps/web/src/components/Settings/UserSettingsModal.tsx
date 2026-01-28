import React, { useState } from "react";
import {
  X,
  User,
  Settings as SettingsIcon,
  LogOut,
  Camera,
  Mail,
  Shield,
  Info,
} from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { SettingsPanel } from "./SettingsPanel";
import "./UserSettingsModal.css";

interface UserSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "profile" | "settings";
  initialSection?: "none" | "storage" | "imagehost" | "ai";
}

export function UserSettingsModal({
  isOpen,
  onClose,
  initialTab = "profile",
  initialSection = "none",
}: UserSettingsModalProps) {
  const { user, logout, updateUser } = useAuthStore();
  const [activeTab, setActiveTab] = useState<"profile" | "settings">(
    initialTab,
  );

  // 当 initialTab 变化时更新内部状态
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="user-settings-overlay" onClick={onClose}>
      <div className="user-settings-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-sidebar">
          <div className="modal-sidebar-header">
            <div className="mini-user-info">
              <div className="mini-avatar">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.username} />
                ) : (
                  <User size={18} />
                )}
              </div>
              <div className="mini-details">
                <span className="mini-name">{user?.username}</span>
                <span className="mini-tag">专业版用户</span>
              </div>
            </div>
          </div>

          <div className="modal-nav">
            <button
              className={`nav-item ${activeTab === "profile" ? "is-active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              <User size={18} />
              <span>个人资料</span>
            </button>
            <button
              className={`nav-item ${activeTab === "settings" ? "is-active" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              <SettingsIcon size={18} />
              <span>系统设置</span>
            </button>
            <button
              className="nav-item mobile-only logout-nav-item"
              onClick={() => {
                logout();
                onClose();
              }}
            >
              <LogOut size={18} />
              <span>退出登录</span>
            </button>
          </div>

          <div className="modal-sidebar-footer">
            <button
              className="logout-btn"
              onClick={() => {
                logout();
                onClose();
              }}
            >
              <LogOut size={18} />
              <span>退出登录</span>
            </button>
          </div>
        </div>

        <div className="modal-content">
          {activeTab === "profile" ? (
            <div className="profile-section">
              <div className="section-header">
                <h2>个人资料</h2>
                <p>管理您的账号信息与公开资料</p>
              </div>

              <div className="profile-card">
                <div className="avatar-upload">
                  <div className="large-avatar">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.username} />
                    ) : (
                      <User size={48} />
                    )}
                    <button className="edit-avatar-btn">
                      <Camera size={16} />
                    </button>
                  </div>
                  <div className="avatar-info">
                    <h3>您的头像</h3>
                    <p>支持 JPG、PNG 格式，建议尺寸 200x200</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-item">
                    <label>用户名</label>
                    <div className="input-wrapper">
                      <User size={16} />
                      <input
                        type="text"
                        value={user?.username || ""}
                        onChange={(e) =>
                          updateUser({ username: e.target.value })
                        }
                        placeholder="请输入用户名"
                      />
                    </div>
                  </div>
                  <div className="form-item">
                    <label>电子邮箱</label>
                    <div className="input-wrapper">
                      <Mail size={16} />
                      <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className="form-item full-width">
                    <label>个人简介</label>
                    <textarea
                      value={user?.bio || ""}
                      onChange={(e) => updateUser({ bio: e.target.value })}
                      placeholder="介绍一下你自己吧..."
                      rows={3}
                    />
                  </div>
                </div>

                <div className="security-status">
                  <div className="status-item">
                    <Shield size={16} className="status-icon safe" />
                    <span>账号安全等级：高</span>
                  </div>
                  <div className="status-item">
                    <Info size={16} className="status-icon" />
                    <span>上次登录：2024-01-23 10:30 (北京)</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="settings-section">
              <SettingsPanel initialSection={initialSection} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
