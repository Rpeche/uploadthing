"use client";

import { UploadButton } from "@uploadthing/react";
import "@uploadthing/react/styles.css";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Upload Your DNA File</h1>
      <UploadButton
        endpoint="dnaUploader"
        onClientUploadComplete={(res) => {
          console.log("Upload complete:", res);
          alert("✅ DNA file uploaded successfully!");
        }}
        onUploadError={(error) => {
          alert(`❌ Upload failed: ${error.message}`);
        }}
      />
    </main>
  );
}
