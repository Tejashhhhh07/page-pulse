import "../Styles/EmptyState.css";
import { Search, BarChart3, ShieldCheck, Sparkles } from "lucide-react";

function EmptyState() {
  return (
    <div className="empty-state">

      <Search size={70} className="empty-icon" />

      <h2>Ready to Analyze</h2>

      <p>
        Enter any website URL above and get an instant SEO report with
        useful insights.
      </p>

      <div className="feature-list">

        <div className="feature">
          <BarChart3 size={20} />
          <span>SEO Score</span>
        </div>

        <div className="feature">
          <ShieldCheck size={20} />
          <span>Website Metrics</span>
        </div>

        <div className="feature">
          <Sparkles size={20} />
          <span>SEO Suggestions</span>
        </div>

      </div>

    </div>
  );
}

export default EmptyState;