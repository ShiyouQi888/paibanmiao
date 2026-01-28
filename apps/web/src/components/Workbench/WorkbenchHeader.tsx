import React from "react";
import { Palette, Send, Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { useSettingsStore } from "../../store/settingsStore";
import "./WorkbenchHeader.css";

interface WorkbenchHeaderProps {
  onThemeClick?: () => void;
  onCopyClick?: () => void;
  onSettingsClick?: (section?: "storage" | "imagehost" | "ai") => void;
}

export function WorkbenchHeader({
  onThemeClick,
  onCopyClick,
  onSettingsClick,
}: WorkbenchHeaderProps) {
  const { deepseekConfig } = useSettingsStore();

  const handleAIClick = () => {
    if (!deepseekConfig?.apiKey) {
      toast.error("请先配置 DeepSeek API Key");
      onSettingsClick?.("ai");
      return;
    }
    toast.success("AI 整理功能已启用，请在编辑器工具栏中使用");
  };

  return (
    <header className="workbench-header">
      <div className="header-content">
        <h1 className="header-title">排版工作台</h1>
        <p className="header-subtitle">
          AI智能排版 · 富文本编辑 · 一键复制到微信
        </p>
      </div>

      <div className="header-actions">
        <button
          className="btn-ai-write"
          onClick={handleAIClick}
          title="AI 创作辅助"
        >
          <Sparkles size={16} strokeWidth={2} />
          <span>AI 创作</span>
        </button>
        <button
          className="btn-secondary"
          onClick={onThemeClick}
          title="主题管理"
        >
          <Palette size={16} strokeWidth={2} />
          <span>主题管理</span>
        </button>
        <button
          className="btn-copy-wechat"
          onClick={onCopyClick}
          title="复制到公众号"
        >
          <Send size={16} strokeWidth={2} />
          <span>复制到公众号</span>
        </button>
      </div>
    </header>
  );
}
