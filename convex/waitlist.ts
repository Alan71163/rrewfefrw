import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addToWaitlist = mutation({
  args: { email: v.string(), name: v.string() },
  async handler(ctx, args) {
    const existing = await ctx.db
      .query("waitlistEntries")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) {
      throw new Error("Email already on waitlist");
    }

    const entryId = await ctx.db.insert("waitlistEntries", {
      email: args.email,
      name: args.name,
      subscribedAt: Date.now(),
    });

    return entryId;
  },
});

export const getWaitlistEntry = query({
  args: { email: v.string() },
  async handler(ctx, args) {
    return await ctx.db
      .query("waitlistEntries")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
  },
});

export const listWaitlist = query({
  async handler(ctx) {
    return await ctx.db.query("waitlistEntries").collect();
  },
});
