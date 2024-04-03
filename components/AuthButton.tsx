import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { logout } from "@/lib/actions/server";

export default async function AuthButton() {
  const supabase = createSupabaseServerClient();

  const { data } = await supabase.auth.getUser();

  return data.user ? (
    <div className="flex items-center gap-4">
      Hey, {data.user.user_metadata.name}!
      <form action={logout}>
        <Button variant={"outline"} size={"lg"}>
          Sign Out
        </Button>
      </form>
    </div>
  ) : (
    <Link href="/login">
      <Button variant={"default"} size={"lg"}>
        Sign In
      </Button>
    </Link>
  );
}
