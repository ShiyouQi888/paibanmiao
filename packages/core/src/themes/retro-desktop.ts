export const retroDesktopTheme = `
#paibanmiao {
  background-color: #ffffff;
  color: #000000;
  padding: 40px 25px;
  line-height: 1.6;
  font-family: "MS Sans Serif", "Tahoma", "Arial", "PingFang SC", "Microsoft YaHei", sans-serif;
}

#paibanmiao h1 {
  background: #000080;
  background: linear-gradient(90deg, #000080 0%, #1084d0 100%);
  color: #ffffff;
  padding: 8px 15px;
  margin: 40px 0 20px 0;
  font-size: 1.4em;
  font-weight: bold;
  border-top: 2px solid #dfdfdf;
  border-left: 2px solid #dfdfdf;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  display: flex;
  align-items: center;
}

#paibanmiao h1::before {
  content: "💻";
  margin-right: 10px;
  font-size: 1.1em;
}

#paibanmiao h2 {
  background-color: #c0c0c0;
  color: #000000;
  padding: 6px 12px;
  margin-top: 35px;
  font-size: 1.2em;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  display: inline-block;
}

#paibanmiao h3 {
  color: #000080;
  font-size: 1.1em;
  margin-top: 25px;
  border-bottom: 2px solid #c0c0c0;
  padding-bottom: 3px;
}

#paibanmiao p {
  margin: 1.2em 0;
}

#paibanmiao blockquote {
  background-color: #c0c0c0;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  padding: 15px 20px;
  margin: 25px 0;
  color: #000000;
  position: relative;
}

#paibanmiao blockquote::before {
  content: "i";
  position: absolute;
  top: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  background: #000080;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: serif;
  font-weight: bold;
  font-size: 12px;
}

#paibanmiao strong {
  color: #000080;
  font-weight: bold;
}

#paibanmiao code {
  background-color: #dfdfdf;
  color: #c0392b;
  padding: 2px 6px;
  border: 1px solid #808080;
  border-radius: 0;
  font-family: "Consolas", "Courier New", monospace;
}

#paibanmiao pre {
  background-color: #000000;
  color: #00ff00;
  border: 3px solid #c0c0c0;
  border-top-color: #808080;
  border-left-color: #808080;
  padding: 20px;
  margin: 25px 0;
  font-family: "Consolas", "Courier New", monospace;
  overflow-x: auto;
  box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5);
}

#paibanmiao pre code {
  background: transparent;
  color: #00ff00;
  padding: 0;
  border: none;
}

/* 自定义滚动条 */
#paibanmiao pre::-webkit-scrollbar {
  height: 8px;
  background-color: #c0c0c0;
}

#paibanmiao pre::-webkit-scrollbar-thumb {
  background-color: #dfdfdf;
  border: 1px solid #000;
  border-top-color: #fff;
  border-left-color: #fff;
  border-right-color: #808080;
  border-bottom-color: #808080;
}

#paibanmiao table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  border: 2px solid #808080;
}

#paibanmiao th {
  background-color: #c0c0c0;
  color: #000000;
  padding: 10px;
  border: 1px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
  text-align: left;
}

#paibanmiao td {
  padding: 8px 10px;
  border: 1px solid #dfdfdf;
  background-color: #ffffff;
}

#paibanmiao tr:nth-child(even) td {
  background-color: #f5f5f5;
}

#paibanmiao hr {
  border: none;
  border-top: 2px solid #808080;
  border-bottom: 2px solid #ffffff;
  margin: 40px 0;
}

#paibanmiao a {
  color: #0000ee;
  text-decoration: underline;
}

#paibanmiao ul, #paibanmiao ol {
  padding-left: 25px;
}

#paibanmiao li {
  margin: 0.5em 0;
}
`;
