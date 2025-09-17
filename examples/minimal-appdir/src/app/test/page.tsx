"use client";

import { useState } from "react";

export default function TestUpload() {
  const [result, setResult] = useState("");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    // call your UploadThing endpoint directly
    const res = await fetch("/api/uploadthing", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    console.log("Upload response:", json);
    setResult(JSON.stringify(json, null, 2));
  }

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Test DNA Upload (Raw)</h1>
      <input type="file" onChange={handleUpload} />
      <pre style={{ marginTop: "20px", maxWidth: "500px", whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </main>
  );
}
