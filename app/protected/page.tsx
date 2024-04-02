import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createSupabaseServerClient();

  const { data, error } = await (await supabase).auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  const logout = async () => {
    "use server";
    const supabse = await createSupabaseServerClient();
    await supabse.auth.signOut();
    redirect("/login");
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <form action={logout}>
        <Button>SignOut</Button>
      </form>
      this is protected page
    </div>
  );
}
