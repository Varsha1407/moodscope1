// auth.ts
import { createClient } from "@supabase/supabase-js";

if (!process.env.NEXT_PUBLIC_SURL) {
    throw new Error("Missing env.NEXT_PUBLIC_SURL");
}
if (!process.env.NEXT_PUBLIC_SKEY) {
    throw new Error("Missing env.NEXT_PUBLIC_SKEY");
}

const supabase = createClient(
    process.env.NEXT_PUBLIC_SURL!,
    process.env.NEXT_PUBLIC_SKEY!,
);

export default supabase;
