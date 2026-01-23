import React from 'react';
import { Palette, Send } from 'lucide-react';
import './WorkbenchHeader.css';

interface WorkbenchHeaderProps {
  onThemeClick?: () => void;
  onCopyClick?: () => void;
}

export function WorkbenchHeader({ onThemeClick, onCopyClick }: WorkbenchHeaderProps) {
  return (
    <header className="workbench-header">
      <div className="header-content">
        <h1 className="header-title">排版工作台</h1>
        <p className="header-subtitle">AI智能排版 · 富文本编辑 · 一键复制到微信</p>
      </div>
      
      <div className="header-actions">
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
