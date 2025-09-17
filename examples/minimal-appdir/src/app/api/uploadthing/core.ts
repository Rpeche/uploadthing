import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  dnaUploader: f({ "*": { maxFileSize: "32MB" } }) // accept ANY file type
    .onUploadComplete(async ({ file }) => {
      console.log("✅ DNA file uploaded:", file.url);
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
