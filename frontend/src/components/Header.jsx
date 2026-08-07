import { motion } from "framer-motion";
import "../Styles/Header.css";
import { Sparkles } from "lucide-react";

function Header() {
  return (
    <motion.header
  className="hero"
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>

      <div className="hero-badge">
        <Sparkles size={16}/>
        AI Powered Website Analyzer
      </div>

      <h1>
        Page <span>Pulse</span>
      </h1>

      <p>
        Analyze websites for SEO, accessibility,
        content quality and overall performance
        in just a few seconds.
      </p>

    </motion.header>
  );
}

export default Header;