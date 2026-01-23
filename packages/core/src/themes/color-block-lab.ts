export const colorBlockLabTheme = `
#paibanmiao {
  background-color: #ffffff;
  color: #2c3e50;
  padding: 40px 25px;
  line-height: 1.7;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

/* 色块实验室：一级标题 */
#paibanmiao h1 {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 15px 25px;
  margin: 40px 0 25px 0;
  font-size: 1.6em;
  display: block;
  border-left: 10px solid #f39c12;
  box-shadow: 5px 5px 0 #ecf0f1;
}

/* 色块实验室：二级标题 */
#paibanmiao h2 {
  border-left: 8px solid #e74c3c;
  padding: 10px 15px;
  margin: 35px 0 20px 0;
  font-size: 1.35em;
  color: #ffffff;
  background-color: #e74c3c;
  border-radius: 4px;
  box-shadow: 4px 4px 0 #fdf2f2;
}

/* 色块实验室：三级标题 */
#paibanmiao h3 {
  color: #2980b9;
  font-size: 1.15em;
  margin-top: 25px;
  display: flex;
  align-items: center;
  background-color: #e1f5fe;
  padding: 5px 12px;
  border-radius: 20px;
  width: fit-content;
}

#paibanmiao h3::before {
  content: "■";
  margin-right: 8px;
  color: #3498db;
}

/* 重点词汇：亮橙色块 (strong) */
#paibanmiao strong {
  background-color: #f39c12;
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  margin: 0 2px;
}

/* 重点词汇：亮黄色块 (mark) */
#paibanmiao mark {
  background-color: #f1c40f;
  color: #000000;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  margin: 0 2px;
}

/* 重点词汇：紫色块 (em) */
#paibanmiao em {
  font-style: normal;
  background-color: #9b59b6;
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 4px;
  margin: 0 2px;
}

/* 重点词汇：深绿块 (code) */
#paibanmiao code {
  font-family: "Consolas", monospace;
  background-color: #27ae60;
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

/* 引用块：大色块背景 */
#paibanmiao blockquote {
  background-color: #ecf0f1;
  border-top: 4px solid #bdc3c7;
  padding: 20px;
  margin: 30px 0;
  border-radius: 8px;
}

#paibanmiao blockquote p {
  margin: 0;
  color: #7f8c8d;
}

/* 代码块：深蓝黑底色 */
#paibanmiao pre {
  background-color: #1a252f;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  margin: 25px 0;
  overflow-x: auto;
}

#paibanmiao pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  border: none;
}

/* 表格：交替色块 */
#paibanmiao table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
}

#paibanmiao th {
  background-color: #34495e;
  color: #ffffff;
  padding: 12px;
  text-align: left;
}

#paibanmiao td {
  padding: 10px 12px;
  border: 1px solid #dcdde1;
}

#paibanmiao tr:nth-child(even) td {
  background-color: #f5f6fa;
}

/* 列表 */
#paibanmiao ul li::marker {
  color: #e74c3c;
}

#paibanmiao ol li::marker {
  color: #2980b9;
  font-weight: bold;
}

/* 自定义滚动条 */
#paibanmiao pre::-webkit-scrollbar {
  height: 8px;
}

#paibanmiao pre::-webkit-scrollbar-thumb {
  background-color: #34495e;
  border-radius: 4px;
}
`;
