import React from "react";
import { X, History } from "lucide-react";
import { HistoryPanel } from "./HistoryPanel";
import "./MobileHistoryModal.css";

interface MobileHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileHistoryModal({
  isOpen,
  onClose,
}: MobileHistoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="mobile-history-overlay" onClick={onClose}>
      <div
        className="mobile-history-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-history-header">
          <div className="header-left">
            <History size={20} className="header-icon" />
            <span>文章管理</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="mobile-history-content">
          <HistoryPanel />
        </div>
      </div>
    </div>
  );
}
