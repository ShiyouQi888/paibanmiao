import React, { useState, useEffect, useRef } from "react";
import {
  Cat,
  ChevronRight,
  Zap,
  ShieldCheck,
  Layout,
  ExternalLink,
  Sparkles,
  Check,
  HelpCircle,
  MessageCircle,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "./LandingPage.css";

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStart = () => {
    onStart();
  };

  const faqs = [
    {
      q: "排版后的文章如何同步到公众号？",
      a: "点击右上角的“复制到公众号”按钮，系统会自动将样式化后的内容复制到剪贴板，您只需在公众号后台编辑器中粘贴即可。这种方式可以完美保留所有样式、间距和交互效果。",
    },
    {
      q: "图片上传失败怎么办？",
      a: "请检查您的图床配置是否正确。默认使用官方临时图床（有效期 24 小时），如果需要永久保存，建议在设置中配置自己的阿里云 OSS、腾讯云 COS 或 GitHub 图床。",
    },
    {
      q: "是否支持自定义 CSS 样式？",
      a: "支持！在主题管理中，您可以点击“自定义”来编写自己的 CSS 样式。我们提供了完整的样式钩子，您可以修改字体、颜色、行高、页边距等所有细节。",
    },
    {
      q: "如何批量导入文章？",
      a: "目前支持通过文件拖拽或点击“新建文章”旁边的下拉箭头选择“导入文件”。支持 .md, .txt 等常见格式，导入后会自动保留 Markdown 语法。",
    },
    {
      q: "专业版和开源版有什么区别？",
      a: "开源版包含所有核心排版功能。专业版额外提供云端多端同步、AI 智能排版建议、无限云存储空间以及更高级的自定义主题功能。",
    },
  ];

  return (
    <div className="landing-page">
      <nav className={`landing-nav${isNavScrolled ? " scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">
              <Cat size={24} color="#07C160" strokeWidth={3} />
            </div>
            <span className="logo-name">排版喵</span>
            <span className="logo-tag">AI 智能排版</span>
          </div>

          <div className="nav-links">
            <a href="#home">首页</a>
            <a href="#features">功能介绍</a>
            <a href="#templates">排版模板</a>
            <a href="#pricing">价格方案</a>
            <a href="#help">帮助中心</a>
          </div>

          <div className="nav-actions">
            <button className="btn-start-nav" onClick={handleStart}>
              <Sparkles size={16} />
              进入工作台
            </button>
          </div>
        </div>
      </nav>

      <header id="home" className="hero-section">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          preload="auto"
          poster="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070"
          onError={(e) => console.error("Landing video load error:", e)}
        >
          <source
            src="https://player.vimeo.com/external/538539091.hd.mp4?s=319a5015f33f07a78377f0a8c2f10b749651f885&profile_id=175"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} />
            AI 驱动的新一代排版工具
          </div>
          <h1>
            我们一起，把公众号排版变成 <span className="highlight-text">5</span>{" "}
            秒的事
          </h1>
          <p className="hero-subtitle">
            排版，不只是格式，也是内容专业度的一部分
          </p>

          <div className="hero-ctas">
            <button className="btn-primary-hero" onClick={handleStart}>
              <Zap size={20} />
              我是公众号作者
            </button>
            <button className="btn-secondary-hero" onClick={handleStart}>
              <Layout size={20} />
              我是内容编辑 / 运营
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>5秒</h3>
              <p>单篇排版耗时</p>
            </div>
            <div className="stat-card">
              <h3>95%</h3>
              <p>排版成功率</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>专业模板</p>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="features-preview">
        <div className="container">
          <div className="section-header">
            <h2>为什么选择排版喵？</h2>
            <p>为微信公众号深度定制，让您的文章脱颖而出</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <Zap />
              </div>
              <h3>极速转换</h3>
              <p>Markdown 一键转微信排版，告别繁琐的样式调整</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Layout />
              </div>
              <h3>精美模板</h3>
              <p>内置数十款专业主题，满足不同风格的创作需求</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <ShieldCheck />
              </div>
              <h3>安全可靠</h3>
              <p>本地存储，保护内容安全，支持多端同步</p>
            </div>
          </div>
        </div>
      </section>

      <section id="templates" className="templates-section">
        <div className="container">
          <div className="section-header">
            <h2>精选排版模板</h2>
            <p>内置 50+ 款专业主题，支持深度定制，让每一篇文章都独具风格</p>
          </div>

          <div className="templates-grid">
            {[
              {
                title: "极简清新",
                tag: "文艺",
                color: "#07C160",
                desc: "适合散文、心情感悟类文章",
              },
              {
                title: "商务精英",
                tag: "职场",
                color: "#1e6bb8",
                desc: "严谨的排版，适合深度行业分析",
              },
              {
                title: "潮流科技",
                tag: "互联网",
                color: "#6366f1",
                desc: "酷炫的代码高亮，科技感十足",
              },
              {
                title: "知性优雅",
                tag: "生活",
                color: "#ec4899",
                desc: "细腻的线条，展现生活之美",
              },
              {
                title: "新闻周刊",
                tag: "资讯",
                color: "#f59e0b",
                desc: "清晰的结构，阅读体验更佳",
              },
              {
                title: "学术论文",
                tag: "教育",
                color: "#6b7280",
                desc: "标准引用格式，专业感拉满",
              },
            ].map((tmpl, i) => (
              <div key={i} className="template-card">
                <div
                  className="template-preview"
                  style={{
                    background: `linear-gradient(135deg, ${tmpl.color}22 0%, ${tmpl.color}11 100%)`,
                  }}
                >
                  <div className="preview-content">
                    <div
                      className="preview-line"
                      style={{ width: "60%", background: tmpl.color }}
                    ></div>
                    <div
                      className="preview-line"
                      style={{
                        width: "80%",
                        background: tmpl.color,
                        opacity: 0.6,
                      }}
                    ></div>
                    <div
                      className="preview-line"
                      style={{
                        width: "40%",
                        background: tmpl.color,
                        opacity: 0.4,
                      }}
                    ></div>
                  </div>
                  <div className="template-tag">{tmpl.tag}</div>
                </div>
                <div className="template-info">
                  <h3>{tmpl.title}</h3>
                  <p>{tmpl.desc}</p>
                  <button className="btn-use-template" onClick={handleStart}>
                    立即使用
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="templates-more">
            <button className="btn-secondary-hero" onClick={handleStart}>
              查看全部 50+ 模板
            </button>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>价格方案</h2>
            <p>开源版永久免费，我们始终相信工具的价值在于连接与创作</p>

            <div className="pricing-toggle">
              <span className={!isYearly ? "active" : ""}>月付</span>
              <button
                className={`toggle-btn ${isYearly ? "yearly" : ""}`}
                onClick={() => setIsYearly(!isYearly)}
              >
                <div className="toggle-dot"></div>
              </button>
              <span className={isYearly ? "active" : ""}>
                年付 <span className="discount-tag">省 20%</span>
              </span>
            </div>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="card-header">
                <h3>开源版</h3>
                <p>适合个人创作者</p>
              </div>
              <div className="price">
                ¥0<span>/永久</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <Check size={16} /> 所有基础排版功能
                </li>
                <li>
                  <Check size={16} /> 本地存储
                </li>
                <li>
                  <Check size={16} /> 50+ 社区主题
                </li>
                <li>
                  <Check size={16} /> 导出 Markdown/HTML
                </li>
              </ul>
              <button className="btn-pricing-secondary" onClick={onStart}>
                开始创作
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="card-badge">最受欢迎</div>
              <div className="card-header">
                <h3>专业版</h3>
                <p>适合专业运营人员</p>
              </div>
              <div className="price">
                ¥{isYearly ? "182" : "19"}
                <span>/{isYearly ? "年" : "月"}</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <Check size={16} /> 开源版所有功能
                </li>
                <li>
                  <Check size={16} /> 云端同步存储
                </li>
                <li>
                  <Check size={16} /> AI 辅助排版建议
                </li>
                <li>
                  <Check size={16} /> 自定义图床支持
                </li>
                <li>
                  <Check size={16} /> 专属排版顾问
                </li>
              </ul>
              <button className="btn-pricing-primary" onClick={onStart}>
                立即升级
              </button>
            </div>

            <div className="pricing-card">
              <div className="card-header">
                <h3>企业版</h3>
                <p>适合团队协作</p>
              </div>
              <div className="price">
                ¥{isYearly ? "950" : "99"}
                <span>/{isYearly ? "年" : "月"}</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <Check size={16} /> 专业版所有功能
                </li>
                <li>
                  <Check size={16} /> 团队协同编辑
                </li>
                <li>
                  <Check size={16} /> 企业级图床管理
                </li>
                <li>
                  <Check size={16} /> 定制品牌 UI 规范
                </li>
                <li>
                  <Check size={16} /> API 接口接入
                </li>
              </ul>
              <button className="btn-pricing-secondary" onClick={onStart}>
                联系我们
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="help" className="help-section">
        <div className="container">
          <div className="section-header">
            <h2>帮助中心</h2>
            <p>遇到问题？我们在这里为您提供全方位的支持</p>
          </div>
          <div className="help-grid">
            <div className="help-card">
              <div className="help-icon">
                <BookOpen />
              </div>
              <h3>快速入门</h3>
              <p>5 分钟学会如何使用排版喵，开启高效排版之旅</p>
              <a
                href="https://github.com/idootop/paibanmiao#readme"
                target="_blank"
                rel="noreferrer"
              >
                查看文档 <ExternalLink size={14} />
              </a>
            </div>
            <div className="help-card">
              <div className="help-icon">
                <MessageCircle />
              </div>
              <h3>常见问题</h3>
              <p>整理了用户在使用过程中最常遇到的问题与解答</p>
              <a href="#faq">
                前往 FAQ <ExternalLink size={14} />
              </a>
            </div>
            <div className="help-card">
              <div className="help-icon">
                <HelpCircle />
              </div>
              <h3>联系支持</h3>
              <p>如果文档无法解决您的问题，欢迎联系我们的技术团队</p>
              <a href="mailto:support@paibanmiao.app">
                发送邮件 <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div id="faq" className="faq-section">
            <h3 className="faq-title">常见问题 FAQ</h3>
            <div className="faq-accordion">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${activeFaq === i ? "active" : ""}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <h4>{faq.q}</h4>
                    {activeFaq === i ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="nav-logo">
                <div className="logo-icon">
                  <Cat size={20} color="#07C160" strokeWidth={3} />
                </div>
                <span className="logo-name">排版喵</span>
              </div>
              <p>让排版更简单，让内容更专业</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>产品</h4>
                <a href="#features">功能介绍</a>
                <a href="#templates">排版模板</a>
                <a href="#pricing">价格方案</a>
              </div>
              <div className="link-group">
                <h4>支持</h4>
                <a href="#help">帮助中心</a>
                <a href="#faq">常见问题</a>
                <a href="mailto:support@paibanmiao.app">联系我们</a>
              </div>
              <div className="link-group">
                <h4>更多</h4>
                <a
                  href="https://github.com/idootop/paibanmiao"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a href="#">隐私政策</a>
                <a href="#">服务条款</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 排版喵 - 保留所有权利</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
