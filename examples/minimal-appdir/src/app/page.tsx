"use client";

import { UploadButton } from "@uploadthing/react";
import "@uploadthing/react/styles.css";
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
      <UploadButton<UploadRouter>
        endpoint="dnaUploader"
        appearance={{
          button: { background: "#000", color: "#fff", padding: "10px 20px" },
          container: { display: "flex", flexDirection: "column", gap: "12px" },
        }}
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
