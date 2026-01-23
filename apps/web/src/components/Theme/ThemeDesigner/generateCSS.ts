// 可视化主题设计器 - CSS 生成函数
import type { DesignerVariables } from "./types";
import {
  headingStylePresets,
  quoteStylePresets,
} from "../../../config/styleOptions";

/**
 * 获取标题预设 CSS 模板
 */
export function getHeadingPresetCSS(
  presetId: string,
  color: string,
  tag: string,
): { content: string; extra: string } {
  const preset = headingStylePresets.find((p) => p.id === presetId);
  if (!preset) return { content: "", extra: "" };
  const css = preset.cssTemplate(color, tag);
  return { content: css.content || "", extra: css.extra || "" };
}

/**
 * 获取引用预设 CSS
 */
export function getQuotePresetCSS(
  presetId: string,
  color: string,
  bgColor: string,
  textColor: string,
  borderWidth: number,
  borderStyle: string,
  padding: number,
  centered?: boolean,
): { base: string; extra: string } {
  const preset = quoteStylePresets.find((p) => p.id === presetId);
  if (!preset) return { base: "", extra: "" };
  const css = preset.cssTemplate(
    color,
    bgColor,
    textColor,
    borderWidth,
    borderStyle,
    padding,
    centered,
  );
  return { base: css.base || "", extra: css.extra || "" };
}

/**
 * 获取代码主题 CSS
 */
export function getCodeThemeCSS(themeId: string): string {
  const themes: Record<string, string> = {
    github: `
            #paibanmiao .hljs-comment, #paibanmiao .hljs-quote { color: #998; font-style: italic; }
            #paibanmiao .hljs-keyword, #paibanmiao .hljs-selector-tag, #paibanmiao .hljs-subst { color: #333; font-weight: bold; }
            #paibanmiao .hljs-string, #paibanmiao .hljs-doctag { color: #d14; }
            #paibanmiao .hljs-title, #paibanmiao .hljs-section, #paibanmiao .hljs-selector-id { color: #900; font-weight: bold; }
            #paibanmiao .hljs-type, #paibanmiao .hljs-class .hljs-title { color: #458; font-weight: bold; }
            #paibanmiao .hljs-variable, #paibanmiao .hljs-template-variable { color: #008080; }
            #paibanmiao .hljs-attr { color: #000080; }
        `,
    monokai: `
            #paibanmiao .hljs { color: #f8f8f2; }
            #paibanmiao .hljs-comment, #paibanmiao .hljs-quote { color: #75715e; }
            #paibanmiao .hljs-keyword, #paibanmiao .hljs-selector-tag, #paibanmiao .hljs-literal { color: #f92672; }
            #paibanmiao .hljs-string, #paibanmiao .hljs-attr { color: #e6db74; }
            #paibanmiao .hljs-title, #paibanmiao .hljs-section { color: #a6e22e; }
            #paibanmiao .hljs-type, #paibanmiao .hljs-class .hljs-title { color: #66d9ef; font-style: italic; }
            #paibanmiao .hljs-built_in, #paibanmiao .hljs-selector-attr { color: #ae81ff; }
        `,
    vscode: `
            #paibanmiao .hljs { color: #d4d4d4; }
            #paibanmiao .hljs-comment { color: #6a9955; }
            #paibanmiao .hljs-keyword { color: #569cd6; }
            #paibanmiao .hljs-string { color: #ce9178; }
            #paibanmiao .hljs-literal { color: #569cd6; }
            #paibanmiao .hljs-number { color: #b5cea8; }
            #paibanmiao .hljs-function { color: #dcdcaa; }
            #paibanmiao .hljs-class { color: #4ec9b0; }
            #paibanmiao .hljs-attr { color: #9cdcfe; }
        `,
    "night-owl": `
            #paibanmiao .hljs { color: #d6deeb; }
            #paibanmiao .hljs-comment { color: #637777; font-style: italic; }
            #paibanmiao .hljs-keyword { color: #c792ea; }
            #paibanmiao .hljs-selector-tag { color: #ff5874; }
            #paibanmiao .hljs-string { color: #ecc48d; }
            #paibanmiao .hljs-variable { color: #addb67; }
            #paibanmiao .hljs-number { color: #f78c6c; }
            #paibanmiao .hljs-function { color: #82aaff; }
            #paibanmiao .hljs-attr { color: #7fdbca; }
        `,
    dracula: `
            #paibanmiao .hljs { color: #f8f8f2; }
            #paibanmiao .hljs-comment { color: #6272a4; }
            #paibanmiao .hljs-keyword { color: #ff79c6; }
            #paibanmiao .hljs-selector-tag { color: #ff79c6; }
            #paibanmiao .hljs-literal { color: #bd93f9; }
            #paibanmiao .hljs-string { color: #f1fa8c; }
        `,
  };
  return themes[themeId] || themes.github;
}

/**
 * 生成完整 CSS
 */
export function generateCSS(v: DesignerVariables): string {
  const h1Preset = getHeadingPresetCSS(v.h1.preset || "simple", v.h1.color || v.primaryColor, "h1");
  const h2Preset = getHeadingPresetCSS(v.h2.preset || "simple", v.h2.color || v.primaryColor, "h2");
  const h3Preset = getHeadingPresetCSS(v.h3.preset || "simple", v.h3.color || v.primaryColor, "h3");
  const h4Preset = getHeadingPresetCSS(v.h4.preset || "simple", v.h4.color || v.primaryColor, "h4");

  const quotePreset = getQuotePresetCSS(
    v.quotePreset,
    v.quoteBorderColor || v.primaryColor,
    v.quoteBackground,
    v.quoteTextColor,
    v.quoteBorderWidth,
    v.quoteBorderStyle,
    v.quotePaddingX,
    v.quoteTextCentered,
  );

  const footnoteHeaderPreset = getHeadingPresetCSS(
    v.footnoteHeaderStyle || "simple",
    v.footnoteHeaderColor || v.primaryColor,
    ".footnotes-sep",
  );

  return `
/* 由可视化设计器生成 */

#paibanmiao {
  font-family: ${v.fontFamily};
  font-size: ${v.fontSize};
  color: ${v.paragraphColor};
  line-height: ${v.lineHeight};
  padding: 0 ${v.pagePadding}px;
  word-break: break-word;
}

#paibanmiao figcaption {
  color: ${v.imageCaptionColor};
  font-size: ${v.imageCaptionFontSize}px;
  text-align: ${v.imageCaptionTextAlign};
  margin-top: 8px;
}

#paibanmiao strong { 
  color: ${v.strongStyle === "color" ? v.strongColor : "inherit"}; 
  font-weight: bold;
}

#paibanmiao p {
  margin: ${v.paragraphMargin}px 0;
  padding: ${v.paragraphPadding}px 0;
  text-indent: ${v.textIndent ? "2em" : "0"};
  text-align: ${v.textJustify ? "justify" : "left"};
}

#paibanmiao h1 .content {
  ${h1Preset.content}
}

#paibanmiao h1 { 
  font-size: ${v.h1.fontSize}px;
  color: ${v.h1.color || v.primaryColor};
  margin: ${v.h1.marginTop}px 0 ${v.h1.marginBottom}px; 
  ${v.h1.centered ? "text-align: center;" : ""}
  font-weight: ${v.h1.fontWeight};
  letter-spacing: ${v.h1.letterSpacing}px;
}
${h1Preset.extra}

#paibanmiao h2 .content {
  ${h2Preset.content}
}

#paibanmiao h2 { 
  font-size: ${v.h2.fontSize}px;
  color: ${v.h2.color || v.primaryColor};
  margin: ${v.h2.marginTop}px 0 ${v.h2.marginBottom}px; 
  ${v.h2.centered ? "text-align: center;" : ""}
  font-weight: ${v.h2.fontWeight};
  letter-spacing: ${v.h2.letterSpacing}px;
}
${h2Preset.extra}

#paibanmiao h3 .content {
  ${h3Preset.content}
}

#paibanmiao h3 { 
  font-size: ${v.h3.fontSize}px;
  color: ${v.h3.color || v.primaryColor};
  margin: ${v.h3.marginTop}px 0 ${v.h3.marginBottom}px; 
  ${v.h3.centered ? "text-align: center;" : ""}
  font-weight: ${v.h3.fontWeight};
  letter-spacing: ${v.h3.letterSpacing}px;
}
${h3Preset.extra}

#paibanmiao h4 .content {
  ${h4Preset.content}
}

#paibanmiao h4 { 
  font-size: ${v.h4.fontSize}px;
  color: ${v.h4.color || v.primaryColor};
  margin: ${v.h4.marginTop}px 0 ${v.h4.marginBottom}px; 
  ${v.h4.centered ? "text-align: center;" : ""}
  font-weight: ${v.h4.fontWeight};
  letter-spacing: ${v.h4.letterSpacing}px;
}
${h4Preset.extra}

#paibanmiao blockquote, 
#paibanmiao .multiquote-1, 
#paibanmiao .multiquote-2, 
#paibanmiao .multiquote-3 {
  background: ${v.quoteBackground};
  color: ${v.quoteTextColor};
  padding: ${v.quotePaddingY}px ${v.quotePaddingX}px;
  font-size: ${v.quoteFontSize}px;
  line-height: ${v.quoteLineHeight};
  ${quotePreset.base}
}

#paibanmiao blockquote p,
#paibanmiao .multiquote-1 p,
#paibanmiao .multiquote-2 p,
#paibanmiao .multiquote-3 p { 
  margin: 0;
  ${v.quoteTextCentered ? "text-align: center;" : ""}
}
${quotePreset.extra}

#paibanmiao pre {
  background: ${v.codeBackground};
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

#paibanmiao pre code {
  font-size: ${v.codeFontSize}px;
  display: block;
  padding: 16px;
  overflow-x: auto;
}

#paibanmiao pre.custom {
  position: relative;
  padding-top: ${v.showMacBar ? "32px" : "0"};
}

#paibanmiao pre.custom::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 12px;
  width: 12px;
  height: 12px;
  background: #ff5f56;
  border-radius: 50%;
  box-shadow: 20px 0 0 #ffbd2e, 40px 0 0 #27c93f;
  display: ${v.showMacBar ? "block" : "none"};
  z-index: 1;
}

#paibanmiao code {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 0.9em;
  background: ${v.inlineCodeBackground};
  color: ${v.inlineCodeColor};
  padding: 2px 4px;
  border-radius: 4px;
  ${v.inlineCodeStyle === "github" ? "border: 1px solid rgba(0,0,0,0.1); background: #f6f8fa;" : ""}
}

#paibanmiao pre code,
#paibanmiao pre code.hljs {
  background: transparent;
  color: inherit;
  padding: 16px;
  border-radius: 0;
}
${getCodeThemeCSS(v.codeTheme)}

#paibanmiao a {
  color: ${v.linkColor || v.primaryColor};
  text-decoration: ${v.linkUnderline ? "underline" : "none"};
}

#paibanmiao em {
  color: ${v.italicColor};
  font-style: italic;
}

#paibanmiao del {
  color: ${v.delColor};
}

#paibanmiao mark {
  background: ${v.markBackground};
  color: ${v.markColor};
}

#paibanmiao hr {
  border: none;
  height: ${v.hrHeight}px;
  background: ${v.hrColor};
  margin: ${v.hrMargin}px 0;
  border-top: ${v.hrStyle !== "solid" ? `${v.hrHeight}px ${v.hrStyle} ${v.hrColor}` : "none"};
}

#paibanmiao table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 14px;
}

#paibanmiao th {
  background: ${v.tableHeaderBackground};
  color: ${v.tableHeaderColor};
  font-weight: bold;
}

#paibanmiao th, #paibanmiao td {
  border: 1px solid ${v.tableBorderColor};
  padding: 8px 12px;
  text-align: left;
}

#paibanmiao tr:nth-child(even) {
  background: ${v.tableZebra ? "rgba(0,0,0,0.02)" : "transparent"};
}

#paibanmiao .footnote-word {
  color: ${v.footnoteColor || v.primaryColor};
  font-weight: bold;
}

#paibanmiao .footnote-ref {
  vertical-align: super;
  font-size: 0.8em;
}

#paibanmiao .footnote-ref a {
  text-decoration: none;
  color: ${v.footnoteColor || v.primaryColor};
}

#paibanmiao .footnote-item {
  font-size: ${v.footnoteFontSize}px;
  color: #666;
}

#paibanmiao .footnote-num {
  font-weight: bold;
  margin-right: 4px;
}

#paibanmiao .footnote-num a,
#paibanmiao .footnote-item a.footnote-backref {
  color: ${v.footnoteColor || v.primaryColor};
  text-decoration: none;
}

#paibanmiao .footnote-item p {
  display: inline;
}

#paibanmiao .footnotes-sep:before {
  content: "${v.footnoteHeader}";
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${v.footnoteHeaderColor || v.primaryColor};
  ${footnoteHeaderPreset.content}
}
${footnoteHeaderPreset.extra}

#paibanmiao .callout {
  margin: 16px 0;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #eee;
}

#paibanmiao img {
  max-width: 100%;
  border-radius: ${v.imageBorderRadius}px;
  margin: ${v.imageMargin}px auto;
  display: block;
}

#paibanmiao ul { list-style-type: ${v.ulStyle}; padding-left: 20px; margin: ${v.paragraphMargin}px 0; font-size: ${!v.ulFontSize || v.ulFontSize === "inherit" ? v.fontSize : v.ulFontSize}; }
#paibanmiao ul ul { list-style-type: ${v.ulStyleL2}; margin: 4px 0; }
#paibanmiao ol { list-style-type: ${v.olStyle}; padding-left: 20px; margin: ${v.paragraphMargin}px 0; font-size: ${!v.olFontSize || v.olFontSize === "inherit" ? v.fontSize : v.olFontSize}; }
#paibanmiao ol ol { list-style-type: ${v.olStyleL2}; margin: 4px 0; }
#paibanmiao li { margin: ${v.listSpacing}px 0; line-height: ${v.lineHeight}; }

#paibanmiao ul li::marker,
#paibanmiao ol li::marker {
  color: ${v.listMarkerColor};
}

#paibanmiao ul ul li::marker,
#paibanmiao ol ol li::marker,
#paibanmiao ul ol li::marker,
#paibanmiao ol ul li::marker {
  color: ${v.listMarkerColorL2};
}

#paibanmiao .imageflow-layer1 {
  margin: 16px 0;
  overflow: hidden;
}

#paibanmiao .imageflow-layer2 {
  white-space: nowrap;
  overflow-x: auto;
}

#paibanmiao .imageflow-layer3 {
  display: inline-block;
  width: 80%;
  margin-right: 12px;
  vertical-align: top;
}

#paibanmiao .imageflow-img {
  width: 100%;
  border-radius: 8px;
}

#paibanmiao .imageflow-caption {
  text-align: center;
  font-size: 14px;
  color: #888;
  margin-top: 4px;
}

#paibanmiao .callout-title {
  font-weight: bold;
  margin-bottom: 8px;
}

#paibanmiao .callout-icon {
  margin-right: 8px;
}

#paibanmiao .callout p {
  margin: 0;
}

#paibanmiao .callout-note { border-left: 4px solid #6366f1; background: #f5f5ff; }
#paibanmiao .callout-tip { border-left: 4px solid #10b981; background: #ecfdf5; }
#paibanmiao .callout-important { border-left: 4px solid #8b5cf6; background: #f5f3ff; }
#paibanmiao .callout-warning { border-left: 4px solid #f59e0b; background: #fffbeb; }
#paibanmiao .callout-caution { border-left: 4px solid #ef4444; background: #fff5f5; }

#paibanmiao .mermaid .node foreignObject {
  line-height: normal;
}
#paibanmiao .mermaid .label {
  color: inherit;
}
#paibanmiao .mermaid .label * {
  color: inherit;
}
`;
}
