import { createUploadthing, type FileRouter, createRouteHandler } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  dnaUploader: f({
    "text/plain": { maxFileSize: "32MB" }, // raw DNA txt files
    "text/csv": { maxFileSize: "32MB" },   // some services export CSV
  }).onUploadComplete(async ({ file }) => {
    console.log("✅ DNA file uploaded:", file.url);

    // OPTIONAL: Forward to Make.com webhook
    // await fetch("https://hook.eu1.make.com/YOUR_WEBHOOK_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ fileUrl: file.url }),
    // });
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

// 👇 Correct helper for v7+
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
