import { supabase } from "$lib/util/supabaseClient";
import { error, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  return {
    user: locals.user,
  };
}) satisfies PageServerLoad;

export const actions = {
  login: async ({ cookies, request }) => {
    const formData = await request.formData();
    const emailValue = formData.get("email");
    const passwordValue = formData.get("password");

    if (emailValue === null) error(400, "No email value");
    if (passwordValue === null) error(400, "No password value");

    const email = emailValue.toString();
    const password = passwordValue.toString();

    const { data, error: err } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const sessionId = data.session?.access_token;
    const userEmail= data.user?.email ?? "Admin"
    const uid = data.user?.id ?? ""
    const isA1 = userEmail === "a1serviceslesotho@gmail.com"

    if (sessionId === undefined) error(500);

    cookies.set("sessionid", sessionId, { path: "/" });
    if (isA1) return { success: true, isA1, email, uid }
    return { success: true, email, uid };
  },

  logout: async (event) => {
    event.cookies.delete("sessionid", { path: "/" });
    event.locals.user = null;
  },
} satisfies Actions;
