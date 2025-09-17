"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "~/api/uploadthing/route";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Upload Your DNA File</h1>
      <UploadButton<OurFileRouter>
        endpoint="dnaUploader"
        onClientUploadComplete={(res) => {
          console.log("Upload complete:", res);
          alert("✅ DNA file uploaded successfully!");
        }}
        onUploadError={(error: Error) => {
          alert(`❌ Upload failed: ${error.message}`);
        }}
      />
    </main>
  );
}
