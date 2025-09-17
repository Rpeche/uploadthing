import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  dnaUploader: f({
    "text/plain": { maxFileSize: "4MB" }, // raw DNA files are usually txt
  })
    .onUploadComplete(async ({ file }) => {
      console.log("DNA file uploaded:", file.url);

      // 🔗 OPTIONAL: Send file URL to Make.com webhook
      await fetch("https://hook.eu1.make.com/YOUR_WEBHOOK_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileUrl: file.url }),
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
