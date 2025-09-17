import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  dnaUploader: f({
    "text/plain": { maxFileSize: "32MB" },
    "text/csv": { maxFileSize: "32MB" },
    "application/octet-stream": { maxFileSize: "32MB" }, // catch-all for raw txt
  }).onUploadComplete(async ({ file }) => {
    console.log("✅ DNA file uploaded:", file);
  }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
