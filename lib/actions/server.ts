"use server";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../supabase/server";

export const loginWithGoogle = async () => {
  "use server";
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
};

export const logout = async () => {
  "use server";
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/auth");
};
