export default function handler(request, response) {
  const config = {
    SUPABASE_URL: process.env.SUPABASE_URL || "",
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || "",
  };

  response.setHeader("Content-Type", "application/javascript; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.status(200).send(`window.LOGIC_BREACH_CONFIG = ${JSON.stringify(config)};`);
}
