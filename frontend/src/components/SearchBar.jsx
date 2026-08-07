import "../Styles/Search.css";

import { Loader2, Search } from "lucide-react";
function SearchBar({
  url,
  setUrl,
 analyzeWebsite,
  loading,
}) {
  return (
    <section className="search-section">

      <div className="search-box">

        <Search className="search-icon" size={22} />

        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              analyzeWebsite();
            }
          }}
        />

      </div>

      <button
  className="analyze-btn"
  onClick={analyzeWebsite}
  disabled={loading}
>
  {loading ? (
    <>
      <Loader2 className="spin" size={18} />
      Analyzing...
    </>
  ) : (
    "Analyze Website"
  )}
</button>

    </section>
  );
}

export default SearchBar;