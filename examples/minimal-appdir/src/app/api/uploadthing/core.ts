import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  dnaUploader: f({
    "text/plain": { maxFileSize: "32MB" },
    "text/csv": { maxFileSize: "32MB" },
  }).onUploadComplete(async ({ file }) => {
    console.log("✅ DNA file uploaded:", file.url);
  }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
