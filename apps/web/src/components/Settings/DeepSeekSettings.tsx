import React from "react";
import { useSettingsStore } from "../../store/settingsStore";
import {
  Key,
  Globe,
  Cpu,
  Save,
  ExternalLink,
  Sparkles,
  Loader2,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";
import { testDeepSeekConnection } from "../../services/aiService";
import "./DeepSeekSettings.css";

export function DeepSeekSettings() {
  const { deepseekConfig } = useSettingsStore();

  const [apiKey, setApiKey] = React.useState(deepseekConfig?.apiKey || "");
  const [baseUrl, setBaseUrl] = React.useState(
    deepseekConfig?.baseUrl || "https://api.deepseek.com",
  );
  const [model, setModel] = React.useState(
    deepseekConfig?.model || "deepseek-chat",
  );
  const [isTesting, setIsTesting] = React.useState(false);

  const handleSave = () => {
    useSettingsStore.setState({
      deepseekConfig: {
        apiKey,
        baseUrl,
        model,
      },
    });
    toast.success("AI 配置已保存");
  };

  const handleTestConnection = async () => {
    if (!apiKey) {
      toast.error("请先输入 API Key");
      return;
    }

    setIsTesting(true);
    const loadingToast = toast.loading("正在测试连接...");

    try {
      // 临时更新 store 以便测试函数能获取到最新配置
      const oldConfig = useSettingsStore.getState().deepseekConfig;
      useSettingsStore.setState({
        deepseekConfig: { apiKey, baseUrl, model },
      });

      const result = await testDeepSeekConnection();

      // 还原 store (如果用户没点保存)
      if (!useSettingsStore.getState().deepseekConfig?.apiKey) {
        // 如果之前没存过，保持现状
      }

      if (result.error) {
        toast.error(`连接失败: ${result.error}`, { id: loadingToast });
      } else {
        toast.success("连接成功！API Key 有效", { id: loadingToast });
      }
    } catch (error: any) {
      toast.error(`测试出错: ${error.message}`, { id: loadingToast });
    } finally {
      setIsTesting(false);
    }
  };

  const isConfigured = !!deepseekConfig?.apiKey;

  return (
    <div className="deepseek-settings">
      <div className="ai-config-card">
        <div className="ai-config-header">
          <h5>
            <Sparkles size={18} color="var(--accent-primary)" />
            DeepSeek 服务配置
          </h5>
          <p>配置 DeepSeek API 以启用 AI 智能整理功能</p>
        </div>

        <div className="ai-config-body">
          <div className="ai-field">
            <label>API Key</label>
            <div className="ai-input-wrapper">
              <Key size={16} className="ai-input-icon" />
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
              />
            </div>
            <p className="ai-field-tip">
              从{" "}
              <a
                href="https://platform.deepseek.com/"
                target="_blank"
                rel="noreferrer"
              >
                DeepSeek 开放平台{" "}
                <ExternalLink
                  size={12}
                  style={{ display: "inline", verticalAlign: "middle" }}
                />
              </a>{" "}
              获取您的 API Key
            </p>
          </div>

          <div className="ai-field">
            <label>API Base URL</label>
            <div className="ai-input-wrapper">
              <Globe size={16} className="ai-input-icon" />
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="https://api.deepseek.com"
              />
            </div>
            <p className="ai-field-tip">
              通常保持默认即可。如果您使用代理或中转服务，请修改此地址。
            </p>
          </div>

          <div className="ai-field">
            <label>模型名称</label>
            <div className="ai-input-wrapper">
              <Cpu size={16} className="ai-input-icon" />
              <select value={model} onChange={(e) => setModel(e.target.value)}>
                <option value="deepseek-chat">
                  deepseek-chat (通用 - 推荐)
                </option>
                <option value="deepseek-coder">
                  deepseek-coder (代码增强)
                </option>
              </select>
            </div>
            <p className="ai-field-tip">选择适合您创作内容需要的模型。</p>
          </div>
        </div>

        <div className="ai-config-footer">
          <div className="ai-status-hint">
            <div
              className={`status-dot ${isConfigured ? "active" : "inactive"}`}
            />
            <span
              style={{
                color: isConfigured
                  ? "var(--accent-primary)"
                  : "var(--text-tertiary)",
              }}
            >
              {isConfigured ? "服务已配置" : "服务未配置"}
            </span>
          </div>
          <button
            className="btn-ai-test"
            onClick={handleTestConnection}
            disabled={isTesting}
          >
            {isTesting ? (
              <Loader2 size={16} className="spinning" />
            ) : (
              <Send size={16} />
            )}
            测试连接
          </button>
          <button className="btn-ai-save" onClick={handleSave}>
            <Save size={16} />
            保存配置
          </button>
        </div>
      </div>
    </div>
  );
}
