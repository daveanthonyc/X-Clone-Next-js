import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string);

export async function fetchNotes() {
    try {
        const { data } = await supabase
            .from('notes')
            .select('name, created_at, id');
        return data;
    } catch(error) {
        throw new Error(`Error: ${error}`)
    }
}
