import { Box } from "@chakra-ui/react";

import hljs from "highlight.js/lib/core";
import sql from "highlight.js/lib/languages/sql";
import markdown from "highlight.js/lib/languages/markdown";

import "highlight.js/styles/nord.css";
import { useEffect } from "react";

hljs.registerLanguage("sql", sql);
hljs.registerLanguage("markdown", markdown);
// hljs.highlightAll();

function HighlightJS(props, lang) {
  useEffect(() => {
    // hljs.initHighlightingOnLoad();
    hljs.highlightAll();
  });

  return (
    <Box m="5px" boxShadow="2xl">
      <pre>
        <code className={props.lang}>{props.code}</code>
      </pre>
    </Box>
  );
}

export default HighlightJS;
