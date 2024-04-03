"use client";
import { Button } from "@/components/ui/button";
import { loginWithGoogleClient } from "@/lib/actions/client";
import React from "react";

export default function AuthForm() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Sign in with Google</h1>
      <p>
        Please use your university Google account <br /> ex.
        example@mhs.unsoed.ac.id
      </p>

      <Button className="w-full font-bold" onClick={loginWithGoogleClient}>
        Google
      </Button>
    </div>
  );
}
