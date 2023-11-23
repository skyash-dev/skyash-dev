"use client";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import dynamic from "next/dynamic";

export default function NotionPage({ recordMap }: any) {
  const Code = dynamic(() =>
    import("react-notion-x/build/third-party/code").then((m) => m.Code)
  );
  // const Collection = dynamic(() =>
  //   import("react-notion-x/build/third-party/collection").then(
  //     (m) => m.Collection
  //   )
  // );
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
      recordMap={recordMap}
      darkMode={true}
      components={{
        Code,
        // Collection,
        Equation,
        Modal,
        Image,
      }}
    />
  );
}
