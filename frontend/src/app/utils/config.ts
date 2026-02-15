const mode = process.env.PRODUCTION ? "prod" : "dev";

console.info(`Currently Running in ${mode} Mode!`);

const BACKEND_URL = "http://localhost:1337";

let SERVER_URL: string;

const ANALYTICS_ID = "G-MZMTQJ9HQX";

if (mode == "dev") {
  SERVER_URL = "http://localhost:1337";
} else {
  SERVER_URL = "https://deerhack.deerwalk.edu.np";
}

const supaBaseConfig = {
  projectUrl: "https://fifnzxukjdzyymlygked.supabase.co/",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZm56eHVramR6eXltbHlna2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNjE1MzMsImV4cCI6MjA1NjkzNzUzM30.fNT-4olQKZaCy__Rn4EiyCFdLsy6Emj7MMoMqnodYqY",
};

console.info(`Backend URL: ${BACKEND_URL} | Server URL: ${SERVER_URL}`);

export { BACKEND_URL, SERVER_URL, ANALYTICS_ID, supaBaseConfig };
