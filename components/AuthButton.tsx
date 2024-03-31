import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <Button variant={"destructive"} size={"sm"}>
          Sign Out
        </Button>
      </form>
    </div>
  ) : (
    <Link href="/login">
      <Button variant={"default"} size={"sm"}>
        Sign In
      </Button>
    </Link>
  );
}
