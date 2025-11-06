import { ConvexHttpClient } from "convex/browser";

const convexUrl = import.meta.env.VITE_CONVEX_URL || "http://localhost:3210";

export const convex = new ConvexHttpClient(convexUrl);
