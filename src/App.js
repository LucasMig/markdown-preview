import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
        ></textarea>
      </section>
    </main>
  );
}

export default App;
