"use client";

import { UploadButton } from "@uploadthing/react";
import "@uploadthing/react/styles.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
