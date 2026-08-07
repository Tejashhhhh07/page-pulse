import "../Styles/Card.css";
import { motion } from "framer-motion";
function MetricCard({ icon, title, value }) {
  const getBadge = () => {
    if (title === "Status") {
      return Number(value) === 200 ? "success" : "danger";
    }

    if (title === "Images Without Alt") {
      return Number(value) === 0 ? "success" : "warning";
    }

    return "primary";
  };

  return (
    <motion.div
  className="metric-card"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
      <div className="metric-header">
        <div className="metric-icon">
          {icon}
        </div>

        <span className={`badge ${getBadge()}`}>
          {title === "Status"
            ? Number(value) === 200
              ? "Healthy"
              : "Issue"
            : title === "Images Without Alt"
            ? Number(value) === 0
              ? "Good"
              : "Warning"
            : "Metric"}
        </span>
      </div>

      <h4>{title}</h4>

      <h2>{value}</h2>
    </motion.div>
  );
}

export default MetricCard;