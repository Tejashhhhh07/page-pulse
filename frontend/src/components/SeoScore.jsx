import "../Styles/Score.css";
import { motion } from "framer-motion";

function SeoScore({ result }) {
  let score = 100;

  if (
    !result.metaDescription ||
    result.metaDescription === "No description found"
  ) {
    score -= 20;
  }

  if (result.h1Count === 0) {
    score -= 20;
  }

  if (result.imagesWithoutAlt > 0) {
    score -= Math.min(result.imagesWithoutAlt * 2, 20);
  }

  if (result.wordCount < 300) {
    score -= 15;
  }

  score = Math.max(score, 0);

  let status = "Excellent";
  let color = "#6cd4a4";

  if (score < 80) {
    status = "Good";
    color = "#d9b968";
  }

  if (score < 60) {
    status = "Needs Improvement";
    color = "#e58f83";
  }

  return (
    <motion.section
      className="seo-score"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3>SEO HEALTH SCORE</h3>

      <div
        className="score-circle"
        style={{
          borderColor: color,
          boxShadow: `0 0 35px ${color}20`,
        }}
      >
        <span style={{ color }}>{score}</span>
      </div>

      <h2 style={{ color }}>{status}</h2>

      <p>
        Overall website optimization based on SEO best practices.
      </p>
    </motion.section>
  );
}

export default SeoScore;