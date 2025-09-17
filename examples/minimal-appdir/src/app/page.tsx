"use client";

import { UploadButton } from "@uploadthing/react";
import "@uploadthing/react/styles.css";

// 👇 must match your export in core.ts
import type { UploadRouter } from "@/app/api/uploadthing/core";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Upload Your DNA File</h1>
      <p>API URL Check: {process.env.NEXT_PUBLIC_UPLOADTHING_URL || "default"}</p>
      <UploadButton<UploadRouter>
        endpoint="dnaUploader"
        onClientUploadComplete={(res) => {
          console.log("✅ Upload complete:", res);
          alert("✅ DNA file uploaded successfully!");
        }}
        onUploadError={(error: Error) => {
          console.error("❌ Upload failed:", error);
          alert(`❌ Upload failed: ${error.message}`);
        }}
      />
    </main>
  );
}
