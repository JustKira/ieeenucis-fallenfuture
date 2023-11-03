"use client";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function SignOutPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  //TODO - Better DESCRIPTION
  /**
   * @description Initiates a Google Sign-In process by calling the authentication provider,
   * which returns a URL for signing in. This function handles the redirection
   * to the "auth/callback" endpoint, where Supabase signs in the user and adds
   * the session to the cookie.
   *
   */
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push("/");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Button
        onClick={() => {
          handleSignOut();
        }}
      >
        SignOut
      </Button>
    </div>
  );
}

export default SignOutPage;
