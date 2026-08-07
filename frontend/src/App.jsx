import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Globe,
  Search,
  Sparkles,
  Loader2,
} from "lucide-react";

import "./Styles/Global.css";

import Footer from "./components/Footer";
import SeoScore from "./components/SeoScore";
import StatusGrid from "./components/StatusGrid";
import Recommendations from "./components/Recommendations";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setError("Please enter a website URL.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("https://page-pulse-6ovf.onrender.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to analyze website.");
      }

      console.log("Analysis Result:", data);

      setResult(data);
    } catch (err) {
      console.error("Analysis error:", err);

      setError(
        err.message ||
          "Unable to analyze the website. Please check the URL and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="ambient ambient-left"></div>
      <div className="ambient ambient-right"></div>

      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">
            <Activity size={18} />
          </div>

          <span>Page Pulse</span>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          Website Intelligence
        </div>
      </nav>

      <main className="hero">
        {!result && (
          <>
            <div className="hero-badge">
              <Sparkles size={15} />
              <span>AI Powered Website Analyzer</span>
            </div>

            <h1>
              Make your website
              <br />
              <span>perform better.</span>
            </h1>

            <p className="hero-description">
              Analyze SEO, accessibility, content quality and website
              performance with actionable insights in seconds.
            </p>
          </>
        )}

        <div className="search-box">
          <div className="url-icon">
            <Globe size={19} />
          </div>

          <input
            type="text"
            placeholder="https://example.com"
            aria-label="Website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAnalyze();
              }
            }}
          />

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="spin" size={17} />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <span>Analyze Website</span>
                <ArrowRight size={17} />
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!result && !loading && !error && (
          <>
            <div className="hero-trust">
              <span>
                <span className="dot"></span>
                No signup required
              </span>

              <span className="divider">•</span>

              <span>Instant analysis</span>

              <span className="divider">•</span>

              <span>Actionable insights</span>
            </div>

            <section className="empty-card">
              <div className="empty-icon">
                <Search size={38} strokeWidth={1.6} />
              </div>

              <h2>Ready to analyze</h2>

              <p>
                Enter a website URL above and get a detailed report
                covering SEO, content, accessibility and performance.
              </p>

              <div className="empty-features">
                <div className="empty-feature">
                  <span className="feature-number">01</span>
                  <span>SEO Score</span>
                </div>

                <div className="empty-feature">
                  <span className="feature-number">02</span>
                  <span>Website Metrics</span>
                </div>

                <div className="empty-feature">
                  <span className="feature-number">03</span>
                  <span>Actionable Suggestions</span>
                </div>
              </div>
            </section>
          </>
        )}

        {loading && (
          <div className="loading-message">
            <Loader2 className="spin" size={28} />
            <span>Analyzing your website...</span>
          </div>
        )}

        {result && !loading && (
          <section className="results-section">
            <div className="results-heading">
              <span>ANALYSIS COMPLETE</span>
              <h2>Website Performance Report</h2>
              <p>{result.url || url}</p>
            </div>

            <SeoScore result={result} />

            <StatusGrid result={result} />

            <Recommendations result={result} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;