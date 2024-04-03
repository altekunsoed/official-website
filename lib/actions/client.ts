"use client";
import { redirect } from "next/navigation";
import createSupabaseBrowerClient from "../supabase/client";

export const loginWithGoogleClient = async () => {
  const supabase = createSupabaseBrowerClient();
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });
};

export const logoutClient = async () => {
  const supabase = createSupabaseBrowerClient();
  await supabase.auth.signOut();
  redirect("/auth");
};
