const buildIndustryTheme = (primary: string, accent: string, soft: string) => `
#paibanmiao {
  background-color: #ffffff;
  color: #333333;
  padding: 40px 25px;
  line-height: 1.75;
  font-family: "PingFang SC", "Microsoft YaHei", -apple-system, sans-serif;
}

/* 标题样式：权威且稳重 */
#paibanmiao h1 {
  color: ${primary};
  font-size: 1.55em;
  font-weight: bold;
  margin: 45px 0 25px 0;
  padding-bottom: 10px;
  border-bottom: 3px solid ${primary};
  display: block;
}

#paibanmiao h2 {
  color: ${primary};
  font-size: 1.3em;
  font-weight: bold;
  margin: 35px 0 20px 0;
  padding-left: 12px;
  border-left: 5px solid ${accent};
  line-height: 1.4;
}

#paibanmiao h3 {
  color: ${primary};
  font-size: 1.15em;
  font-weight: bold;
  margin-top: 25px;
  display: flex;
  align-items: center;
}

#paibanmiao h3::before {
  content: "●";
  color: ${accent};
  font-size: 0.8em;
  margin-right: 8px;
}

/* 重点词汇识别：色块化设计 */
#paibanmiao strong {
  color: #000;
  font-weight: bold;
  background-color: ${soft};
  padding: 1px 4px;
  border-radius: 3px;
  border-bottom: 2px solid ${accent};
}

#paibanmiao em {
  font-style: normal;
  color: ${primary};
  background-color: #f8f9fa;
  padding: 0 4px;
  border: 1px solid ${soft};
  border-radius: 4px;
  font-weight: 500;
}

#paibanmiao mark {
  background-color: ${accent};
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

/* 引用块：专业稳重 */
#paibanmiao blockquote {
  border-left: 4px solid ${primary};
  background: ${soft};
  padding: 20px;
  margin: 30px 0;
  border-radius: 0 8px 8px 0;
  color: #4a5568;
}

#paibanmiao blockquote p {
  margin: 0;
}

/* 链接 */
#paibanmiao a {
  color: ${primary};
  text-decoration: none;
  border-bottom: 1px solid ${accent};
  transition: all 0.3s;
}

/* 代码块 */
#paibanmiao code {
  font-family: "Consolas", "Monaco", monospace;
  background-color: #f1f3f5;
  color: ${primary};
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 0.9em;
}

#paibanmiao pre {
  background-color: #1e293b;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 10px;
  margin: 25px 0;
  overflow-x: auto;
  font-size: 0.9em;
}

#paibanmiao pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  border: none;
}

/* 自定义滚动条 */
#paibanmiao pre::-webkit-scrollbar {
  height: 6px;
}

#paibanmiao pre::-webkit-scrollbar-thumb {
  background-color: ${primary};
  border-radius: 3px;
  opacity: 0.5;
}

/* 表格：清晰专业 */
#paibanmiao table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  font-size: 0.95em;
  border: 1px solid #e2e8f0;
}

#paibanmiao th {
  background-color: ${primary};
  color: #ffffff;
  padding: 12px;
  text-align: left;
}

#paibanmiao td {
  padding: 10px 12px;
  border-bottom: 1px solid #e2e8f0;
}

#paibanmiao tr:nth-child(even) td {
  background-color: ${soft};
}

/* 列表 */
#paibanmiao ul, #paibanmiao ol {
  padding-left: 25px;
  margin: 20px 0;
}

#paibanmiao li {
  margin-bottom: 10px;
}

#paibanmiao hr {
  border: none;
  border-top: 2px solid ${soft};
  margin: 40px 0;
}
`;

export const governmentTheme = buildIndustryTheme(
  "#1a4fb4", // 深政务蓝
  "#0f6fd1", // 亮蓝
  "rgba(26, 79, 180, 0.05)",
);

export const sportsTheme = buildIndustryTheme(
  "#16a34a", // 活力绿
  "#0ea5e9", // 天空蓝
  "rgba(22, 163, 74, 0.05)",
);

export const techTheme = buildIndustryTheme(
  "#4f46e5", // 极客紫
  "#06b6d4", // 科技青
  "rgba(79, 70, 229, 0.05)",
);

export const policeTheme = buildIndustryTheme(
  "#1f2a44", // 警务蓝
  "#f59e0b", // 警徽金
  "rgba(31, 42, 68, 0.05)",
);

export const scienceTheme = buildIndustryTheme(
  "#0ea5e9", // 科普蓝
  "#22c55e", // 自然绿
  "rgba(14, 165, 233, 0.05)",
);

export const emergencyTheme = buildIndustryTheme(
  "#dc2626", // 应急红
  "#f97316", // 橙色警示
  "rgba(220, 38, 38, 0.05)",
);

export const medicalTheme = buildIndustryTheme(
  "#0f766e", // 医护绿
  "#38bdf8", // 天使蓝
  "rgba(15, 118, 110, 0.05)",
);

export const foodTheme = buildIndustryTheme(
  "#b45309", // 美食棕
  "#ef4444", // 鲜艳红
  "rgba(180, 83, 9, 0.05)",
);
