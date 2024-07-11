import { supabase } from "$lib/util/supabaseClient";
import type { PageServerLoad } from "./$types";

export const load = (async ({params}) => {
  let response = await supabase.from("Products").select().eq("Owner", params.storeId)
  const Products = response.data
  return {
    products: Products ?? [],
  };
}) satisfies PageServerLoad;
