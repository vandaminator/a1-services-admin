import { supabase } from "$lib/util/supabaseClient";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  const { id, storeId } = params;

  let { data: Products } = await supabase
    .from("Products")
    .select("*")
    .match({id, Owners: storeId})

  const products = Products ?? [];
  if (products.length === 0) {
    error(401, { message: `Product ${id} does not exist` });
  }

  const info = products[0];

  return { info };
}) satisfies PageServerLoad;
