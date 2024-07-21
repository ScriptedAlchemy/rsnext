/* eslint-disable */
import { useState, useEffect } from "react";

export default function ExposedPages() {
  const [pageMap] = useState("");
  const [pageMapV2] = useState("");

  return (
    <>
      <h1>This app exposes the following pages:</h1>

      <h2>./pages-map</h2>
      <pre>{JSON.stringify(pageMap, undefined, 2)}</pre>

      <h2>./pages-map-v2</h2>
      <pre>{JSON.stringify(pageMapV2, undefined, 2)}</pre>
    </>
  );
}
