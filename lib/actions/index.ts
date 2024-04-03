import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../supabase/server";

export const logout = async () => {
  "use server";
  const supabse = await createSupabaseServerClient();
  await supabse.auth.signOut();
  redirect("/login");
};
