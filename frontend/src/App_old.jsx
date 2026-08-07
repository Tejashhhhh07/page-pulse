import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SeoScore from "./components/SeoScore";
import StatusGrid from "./components/StatusGrid";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeWebsite = async () => {
    setError("");
    setResult(null);

    if (!url.trim()) {
      setError("Please enter a website URL.");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("Please enter a valid URL (e.g. https://example.com)");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/analyze",
        {
          url,
        }
      );

      setResult(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Unable to analyze the website."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />

      <SearchBar
        url={url}
        setUrl={setUrl}
        analyzeWebsite={analyzeWebsite}
        loading={loading}
      />

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      {!result && !loading && !error && <EmptyState />}

{result && (
  <>
    <SeoScore result={result} />
    <StatusGrid result={result} />
    <Recommendations result={result} />
  </>
)}

      <Footer />
    </div>
  );
}

export default App;