"use client";
import { Button } from "@/components/ui/button";
import createSupabaseBrowerClient from "@/lib/supabase/client";
import React from "react";

export default function AuthForm() {
  const supabase = createSupabaseBrowerClient();

  const loginWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `/login/callback`,
      },
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Sign in with Google</h1>
      <p>
        Please use your university Google account <br /> ex.
        example@mhs.unsoed.ac.id
      </p>
      <Button className="w-full font-bold" onClick={loginWithGithub}>
        Google
      </Button>
    </div>
  );
}
