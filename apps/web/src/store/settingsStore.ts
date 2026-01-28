import { create } from "zustand";
import { persist } from "zustand/middleware";

// 图床上传配置类型
export interface GithubConfig {
  token: string;
  repo: string; // 例如 'username/repo'
  branch?: string;
  useJsDelivr?: boolean;
}

export interface LocalConfig {
  serverUrl: string; // 例如 'http://localhost:4000/api'
}

export interface DeepSeekConfig {
  apiKey: string;
  baseUrl?: string;
  model?: string;
}

export interface SettingsStore {
  githubConfig?: GithubConfig;
  localConfig?: LocalConfig;
  deepseekConfig?: DeepSeekConfig;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    () => ({
      deepseekConfig: {
        apiKey: "",
        baseUrl: "https://api.deepseek.com",
        model: "deepseek-chat",
      },
    }),
    {
      name: "paibanmiao-settings",
    },
  ),
);
