"use client";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function SignInPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();
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
