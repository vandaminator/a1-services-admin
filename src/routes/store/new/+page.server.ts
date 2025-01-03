import { supabase } from "$lib/util/supabaseClient";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  newStore: async ({ request }) => {
    const form = await request.formData();
    const name = form.get("name") as string | null;
    const ownerEmail = form.get("owner-email") as string | null;
    const contacts = form.get("contacts") as string | null;

    if (!name || !ownerEmail || !contacts) {

    }

    let {} = await supabase.auth

    let {} = await supabase.from("Store").insert({contacts: "", name, owners})
  },
};
