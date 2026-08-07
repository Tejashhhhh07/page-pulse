import "../Styles/Recommendations.css";
import { CheckCircle, AlertTriangle } from "lucide-react";

function Recommendations({ result }) {
  const recommendations = [];

  if (
    !result.metaDescription ||
    result.metaDescription === "No description found"
  ) {
    recommendations.push({
      type: "warning",
      text: "Add a meta description to improve SEO.",
    });
  } else {
    recommendations.push({
      type: "success",
      text: "Meta description is present.",
    });
  }

  if (result.h1Count === 0) {
    recommendations.push({
      type: "warning",
      text: "No H1 heading found.",
    });
  } else {
    recommendations.push({
      type: "success",
      text: "H1 heading detected.",
    });
  }

  if (result.imagesWithoutAlt > 0) {
    recommendations.push({
      type: "warning",
      text: `${result.imagesWithoutAlt} image(s) are missing alt attributes.`,
    });
  } else {
    recommendations.push({
      type: "success",
      text: "All images have alt attributes.",
    });
  }

  if (result.wordCount < 300) {
    recommendations.push({
      type: "warning",
      text: "Content is quite short. Consider adding more useful information.",
    });
  } else {
    recommendations.push({
      type: "success",
      text: "Good content length.",
    });
  }

  return (
    <div className="recommendation-card">
      <h2>SEO Recommendations</h2>

      {recommendations.map((item, index) => (
        <div key={index} className={`recommendation ${item.type}`}>
          {item.type === "success" ? (
            <CheckCircle size={20} />
          ) : (
            <AlertTriangle size={20} />
          )}

          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Recommendations;