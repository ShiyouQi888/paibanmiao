export const smartFocusTheme = `
#paibanmiao {
  background-color: #ffffff;
  color: #333333;
  padding: 40px 25px;
  line-height: 1.8;
  font-family: "PingFang SC", "Microsoft YaHei", -apple-system, sans-serif;
  counter-reset: section;
}

/* 智能焦点：一级标题 */
#paibanmiao h1 {
  font-size: 1.6em;
  font-weight: bold;
  color: #1a1a1a;
  margin: 45px 0 25px 0;
  padding: 10px 15px;
  background-color: #f8f9fa;
  border-left: 6px solid #ffde03;
  border-radius: 0 8px 8px 0;
  line-height: 1.2;
}

/* 智能焦点：二级标题 */
#paibanmiao h2 {
  font-size: 1.35em;
  font-weight: bold;
  color: #1a1a1a;
  margin: 35px 0 20px 0;
  display: flex;
  align-items: center;
}

#paibanmiao h2::before {
  content: "0" counter(section);
  counter-increment: section;
  display: inline-block;
  font-family: serif;
  font-style: italic;
  font-size: 0.8em;
  color: #03a9f4;
  margin-right: 12px;
  border-bottom: 2px solid #ffde03;
}

/* 智能焦点：三级标题 */
#paibanmiao h3 {
  font-size: 1.15em;
  font-weight: bold;
  color: #444444;
  margin-top: 25px;
  text-decoration: underline;
  text-decoration-color: #ffde03;
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
}

/* 重点词汇：自动识别（通过 strong 标签实现） */
#paibanmiao strong {
  color: #000;
  font-weight: bold;
  background: linear-gradient(to bottom, transparent 60%, #ffde03 60%, #ffde03 95%, transparent 95%);
  padding: 0 2px;
}

/* 重点词汇：高亮识别（通过 mark 标签实现） */
#paibanmiao mark {
  background-color: #ffde03;
  color: #000;
  padding: 2px 4px;
  border-radius: 2px;
  font-weight: bold;
}

/* 重点词汇：变色/色块化（通过 em 标签实现） */
#paibanmiao em {
  font-style: normal;
  color: #ffffff;
  background-color: #03a9f4;
  padding: 2px 6px;
  border-radius: 4px;
  margin: 0 2px;
  font-size: 0.95em;
}

/* 技术名词/色块（通过 code 标签实现） */
#paibanmiao code {
  font-family: "Consolas", "Monaco", monospace;
  background-color: #f3f3f3;
  color: #e91e63;
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  font-size: 0.9em;
}

/* 引用块：焦点强调 */
#paibanmiao blockquote {
  margin: 30px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-left: 4px solid #1a1a1a;
  color: #666666;
  position: relative;
}

#paibanmiao blockquote p {
  margin: 0;
}

/* 代码块：深色背景下的色块 */
#paibanmiao pre {
  background-color: #2d2d2d;
  color: #cccccc;
  padding: 20px;
  border-radius: 8px;
  margin: 25px 0;
  overflow-x: auto;
  font-size: 0.9em;
  line-height: 1.5;
}

#paibanmiao pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  border: none;
}

/* 表格：清晰色块排版 */
#paibanmiao table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  font-size: 0.95em;
}

#paibanmiao th {
  background-color: #f3f3f3;
  color: #333333;
  font-weight: bold;
  padding: 12px;
  border-bottom: 2px solid #1a1a1a;
  text-align: left;
}

#paibanmiao td {
  padding: 10px 12px;
  border-bottom: 1px solid #eeeeee;
}

#paibanmiao tr:nth-child(even) td {
  background-color: #fafafa;
}

/* 列表 */
#paibanmiao ul, #paibanmiao ol {
  padding-left: 25px;
  margin: 20px 0;
}

#paibanmiao li {
  margin-bottom: 10px;
}

/* 自定义滚动条 */
#paibanmiao pre::-webkit-scrollbar {
  height: 6px;
}

#paibanmiao pre::-webkit-scrollbar-thumb {
  background-color: #555555;
  border-radius: 3px;
}
`;
