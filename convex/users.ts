import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: { email: v.string(), name: v.string() },
  async handler(ctx, args) {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) {
      throw new Error("User already exists");
    }

    const userId = await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      createdAt: Date.now(),
    });

    return userId;
  },
});

export const getUser = query({
  args: { email: v.string() },
  async handler(ctx, args) {
    return await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
  },
});

export const listUsers = query({
  async handler(ctx) {
    return await ctx.db.query("users").collect();
  },
});
