import { createClient } from "@supabase/supabase-js";
import { supaBaseConfig } from "../config";

const supabase = createClient(
  supaBaseConfig.projectUrl,
  supaBaseConfig.supabaseKey,
);

export default supabase;
