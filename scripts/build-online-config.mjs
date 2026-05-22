import { writeFileSync } from "node:fs";

const config = {
  supabaseUrl: process.env.FUOL_SUPABASE_URL || "",
  supabaseAnonKey: process.env.FUOL_SUPABASE_ANON_KEY || "",
  presenceRoom: process.env.FUOL_PRESENCE_ROOM || "fuol-amigos-en-vivo",
};

writeFileSync(
  "online-config.js",
  `window.FUOL_ONLINE_CONFIG = window.FUOL_ONLINE_CONFIG || ${JSON.stringify(config, null, 2)};\n`,
);
