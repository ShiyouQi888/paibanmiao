import { useSettingsStore } from "../store/settingsStore";

export interface AIResponse {
  content: string;
  error?: string;
}

export type AIRole = "system" | "user" | "assistant";

export interface AIMessage {
  role: AIRole;
  content: string;
}

export const callDeepSeek = async (
  messages: AIMessage[],
  options?: {
    stream?: boolean;
    onStream?: (content: string) => void;
  },
): Promise<AIResponse> => {
  const { deepseekConfig } = useSettingsStore.getState();

  if (!deepseekConfig?.apiKey) {
    return {
      content: "",
      error: "请先在设置中配置 DeepSeek API Key",
    };
  }

  const {
    apiKey,
    baseUrl = "https://api.deepseek.com",
    model = "deepseek-chat",
  } = deepseekConfig;

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        stream: options?.stream || false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "请求失败");
    }

    if (options?.stream && response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;

            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices[0].delta?.content || "";
              fullContent += delta;
              options.onStream?.(fullContent);
            } catch (e) {
              console.error("解析流式响应失败", e);
            }
          }
        }
      }
      return { content: fullContent };
    } else {
      const data = await response.json();
      return { content: data.choices[0].message.content };
    }
  } catch (error: any) {
    console.error("DeepSeek API 调用错误:", error);
    return {
      content: "",
      error: error.message || "未知错误",
    };
  }
};

// 预设功能：将普通文档整理为 Markdown
export const convertToMarkdown = async (text: string): Promise<AIResponse> => {
  return callDeepSeek([
    {
      role: "system",
      content:
        "你是一个专业的 Markdown 排版专家。请将用户提供的普通文本内容整理成排版精美的 Markdown 文档。要求：\n1. 合理使用多级标题（# ## ###）。\n2. 识别并整理列表、引用、代码块等元素。\n3. 修正明显的错别字和标点错误。\n4. 保持原文意思，但使结构更加清晰，适合微信公众号阅读排版。\n5. 只输出整理后的 Markdown 内容，不要包含任何解释性文字。",
    },
    {
      role: "user",
      content: text,
    },
  ]);
};

// 预设功能：测试连接
export const testDeepSeekConnection = async (): Promise<AIResponse> => {
  return callDeepSeek([
    {
      role: "user",
      content: "你好，请简单回复 'ok' 即可。",
    },
  ]);
};
