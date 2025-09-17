import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  dnaUploader: f({
    "text/plain": { maxFileSize: "32MB" },
    "text/csv": { maxFileSize: "32MB" },
  }).onUploadComplete(async ({ file }) => {
    console.log("✅ DNA file uploaded:", file.url);

    // OPTIONAL: forward to Make.com
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
