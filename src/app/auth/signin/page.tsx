"use client";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function SignInPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  /**
   * @description Initiates a Google Sign-In process by calling the authentication provider,
   * which returns a URL for signing in. This function handles the redirection
   * to the "auth/callback" endpoint, where Supabase signs in the user and adds
   * the session to the cookie.
   *
   */
  const handleGoogleSignin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });
    router.refresh();
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Button
        onClick={() => {
          handleGoogleSignin();
        }}
      >
        Google
      </Button>
    </div>
  );
}

export default SignInPage;
