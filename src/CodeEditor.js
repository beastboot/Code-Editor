// src/CodeEditor.js

import React, { useState } from "react";
import Prism from "prismjs";
import { Highlight, themes } from "prism-react-renderer";
import "prismjs/themes/prism.css";

const CodeEditor = () => {
  const [code, setCode] = useState(`function helloWorld() {
    console.log("Hello, world!");
  }`);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor-container" style={{ display: "flex" }}>
      <textarea
        style={{
          width: "50%",
          height: "400px",
          fontFamily: "monospace",
          fontSize: "16px",
        }}
        value={code}
        onChange={handleChange}
      />
      <Highlight theme={themes.nightOwl} code={code} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, width: "50%", overflow: "auto" }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
