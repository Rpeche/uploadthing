// src/app/api/uploadthing/route.ts
import { createRouteHandler } from "uploadthing/next";
import { uploadRouter } from "./core";

// 👇 v7 uses createRouteHandler (not createNextRouteHandler)
export const { GET, POST } = createRouteHandler({
  router: uploadRouter,
});
