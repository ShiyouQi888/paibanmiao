/**
 * 内置主题定义
 * 提取自 editorStore.ts，集中管理所有预设主题
 */
import {
  basicTheme,
  customDefaultTheme,
  codeGithubTheme,
  academicPaperTheme,
  auroraGlassTheme,
  bauhausTheme,
  cyberpunkNeonTheme,
  emergencyTheme,
  foodTheme,
  governmentTheme,
  knowledgeBaseTheme,
  luxuryGoldTheme,
  medicalTheme,
  morandiForestTheme,
  neoBrutalismTheme,
  policeTheme,
  receiptTheme,
  scienceTheme,
  sportsTheme,
  sunsetFilmTheme,
  techTheme,
  templateTheme,
  retroDesktopTheme,
  sketchTheme,
  vaporwaveTheme,
  blueprintTheme,
  midnightCoffeeTheme,
  nordicLightTheme,
  cyberRoseTheme,
  forestWhisperTheme,
  smartFocusTheme,
  colorBlockLabTheme,
} from "@paibanmiao/core";

// 从 ThemeDesigner 导入共享类型（解决类型重复定义问题）
import type {
  DesignerVariables,
  HeadingStyle,
} from "../../components/Theme/ThemeDesigner/types";
export type { DesignerVariables, HeadingStyle };

/**
 * 自定义主题接口
 */
export interface CustomTheme {
  id: string;
  name: string;
  css: string;
  isBuiltIn: boolean;
  createdAt: string;
  updatedAt: string;
  /** 编辑模式：创建时确定，不可更改 */
  editorMode?: "visual" | "css";
  /** 可视化设计器变量，仅 visual 模式存在 */
  designerVariables?: DesignerVariables;
}

/**
 * 主题定义接口（简化版，用于向后兼容）
 */
export interface ThemeDefinition {
  id: string;
  name: string;
  css: string;
}

/**
 * 内置主题列表
 */
export const builtInThemes: CustomTheme[] = [
  {
    id: "default",
    name: "默认主题",
    css: basicTheme + "\n" + customDefaultTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "academic-paper",
    name: "学术论文",
    css: basicTheme + "\n" + academicPaperTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "government",
    name: "政务号",
    css: basicTheme + "\n" + governmentTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "police",
    name: "警务号",
    css: basicTheme + "\n" + policeTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "emergency",
    name: "应急号",
    css: basicTheme + "\n" + emergencyTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "medical",
    name: "医务号",
    css: basicTheme + "\n" + medicalTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "science-pop",
    name: "科普号",
    css: basicTheme + "\n" + scienceTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "technology",
    name: "科技号",
    css: basicTheme + "\n" + techTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "sports",
    name: "体育号",
    css: basicTheme + "\n" + sportsTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "food",
    name: "餐饮号",
    css: basicTheme + "\n" + foodTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "aurora-glass",
    name: "极光玻璃",
    css: basicTheme + "\n" + auroraGlassTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "bauhaus",
    name: "包豪斯",
    css: basicTheme + "\n" + bauhausTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "cyberpunk-neon",
    name: "赛博朋克",
    css: basicTheme + "\n" + cyberpunkNeonTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "knowledge-base",
    name: "知识库",
    css: basicTheme + "\n" + knowledgeBaseTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "luxury-gold",
    name: "黑金奢华",
    css: basicTheme + "\n" + luxuryGoldTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "morandi-forest",
    name: "莫兰迪森林",
    css: basicTheme + "\n" + morandiForestTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "neo-brutalism",
    name: "新粗野主义",
    css: basicTheme + "\n" + neoBrutalismTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "receipt",
    name: "购物小票",
    css: basicTheme + "\n" + receiptTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "sunset-film",
    name: "落日胶片",
    css: basicTheme + "\n" + sunsetFilmTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "template",
    name: "主题模板",
    css: basicTheme + "\n" + templateTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "retro-desktop",
    name: "复古电脑",
    css: basicTheme + "\n" + retroDesktopTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "sketch",
    name: "手绘草图",
    css: basicTheme + "\n" + sketchTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "vaporwave",
    name: "蒸汽波",
    css: basicTheme + "\n" + vaporwaveTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "blueprint",
    name: "蓝图草案",
    css: basicTheme + "\n" + blueprintTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "midnight-coffee",
    name: "午夜咖啡",
    css: basicTheme + "\n" + midnightCoffeeTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "nordic-light",
    name: "北欧极简",
    css: basicTheme + "\n" + nordicLightTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "cyber-rose",
    name: "赛博玫瑰",
    css: basicTheme + "\n" + cyberRoseTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "forest-whisper",
    name: "森林私语",
    css: basicTheme + "\n" + forestWhisperTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "smart-focus",
    name: "智能焦点",
    css: basicTheme + "\n" + smartFocusTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "color-block-lab",
    name: "色块实验室",
    css: basicTheme + "\n" + colorBlockLabTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

/**
 * 默认主题列表（向后兼容格式）
 */
export const defaultThemes: ThemeDefinition[] = [
  {
    id: "default",
    name: "默认主题",
    css: basicTheme + "\n" + customDefaultTheme + "\n" + codeGithubTheme,
  },
];

/**
 * 获取默认主题 CSS
 */
export function getDefaultThemeCSS(): string {
  return builtInThemes[0].css;
}
