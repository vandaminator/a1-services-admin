import { supabase } from "$lib/util/supabaseClient";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ params }) => {
  let { data: Store, error: Error } = await supabase
    .from("Store")
    .select("*")
    .eq("owners", params.storeId);

  if (!Store || Store.length == 0) {
    error(404, { message: "Store not found" });
  } else if (Error) {
    console.error(
      "Error in [storeId]/layout.server.ts in load function. code %i \n %O",
      Error.code,
      Error
    );
    error(500, { message: "something went wrong" });
  }
  const store = Store[0];
  return { store };
}) satisfies LayoutServerLoad;
