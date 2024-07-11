import { supabase } from '$lib/util/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {
    if (locals.user?.email !== "a1serviceslesotho@gmail.com") {
        error(404, "This page is for the owner of a1-services")
    }
    let { data: Store } = await supabase.from("Store").select("*");
    return {
        stores: Store ?? []
    };
}) satisfies PageServerLoad;