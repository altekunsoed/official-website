import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AuthButton() {
  const supabase = createSupabaseServerClient();

  const { data } = await (await supabase).auth.getUser();

  const logout = async () => {
    "use server";
    const supabse = await createSupabaseServerClient();
    await supabse.auth.signOut();
    redirect("/login");
  };

  return data.user ? (
    <div className="flex items-center gap-4">
      Hey, {data.user.user_metadata.name}!
      <form action={logout}>
        <Button variant={"destructive"} size={"lg"}>
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
