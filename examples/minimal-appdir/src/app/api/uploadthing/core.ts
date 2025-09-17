import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  dnaUploader: f({ "*": { maxFileSize: "32MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("✅ DNA file uploaded:", file.url);
      console.log("📂 File details (from UploadThing):", JSON.stringify(file, null, 2));
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
