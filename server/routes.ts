import type { Express } from "express";
import { createServer, type Server } from "http";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { z } from "zod";

// Submissions are appended to JSON-lines files so nothing is lost before an
// email or CRM integration is added. Set DATA_DIR on the host to persist them.
const dataDir = process.env.DATA_DIR || path.resolve(process.cwd(), "data");

const inquirySchema = z.object({
  company: z.string().trim().min(1).max(200),
  country: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  volume: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().max(5000).optional().default(""),
});

const newsletterSchema = z.object({
  email: z.string().trim().email().max(200),
});

async function saveSubmission(file: string, record: Record<string, unknown>) {
  await mkdir(dataDir, { recursive: true });
  const line = JSON.stringify({ ...record, receivedAt: new Date().toISOString() });
  await appendFile(path.join(dataDir, file), line + "\n", "utf8");
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/inquiries", async (req, res) => {
    const parsed = inquirySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Please fill in company, country and a valid email." });
    }
    await saveSubmission("inquiries.jsonl", parsed.data);
    res.status(201).json({ ok: true });
  });

  app.post("/api/newsletter", async (req, res) => {
    const parsed = newsletterSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Please enter a valid email." });
    }
    await saveSubmission("newsletter.jsonl", parsed.data);
    res.status(201).json({ ok: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
