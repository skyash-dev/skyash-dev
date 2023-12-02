"use client";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import dynamic from "next/dynamic";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

export default function NotionPage({ recordMap, isCollection = true }: any) {
  const Code = dynamic(() =>
    import("react-notion-x/build/third-party/code").then((m) => m.Code)
  );
  const Collection = dynamic(() =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection
    )
  );
  const Equation = dynamic(() =>
    import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
  );
  const Modal = dynamic(
    () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
    {
      ssr: false,
    }
  );

  return (
    <NotionRenderer
      disableHeader={true}
      fullPage={isCollection}
      recordMap={recordMap}
      darkMode={true}
      components={
        isCollection
          ? {
              Code,
              Collection,
              Equation,
              Modal,
            }
          : {
              Code,
              Equation,
              Modal,
            }
      }
    />
  );
}
