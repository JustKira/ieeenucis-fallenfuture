"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SignInPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient();

  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleGoogleSignin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    router.refresh();
  };
  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) {
      setLoading(false);
      return console.log(error);
    }

    setLoading(false);

    router.refresh();
  });

  return (
    <div className="">
      <button
        className="w-full"
        onClick={() => {
          handleGoogleSignin();
        }}
      >
        Google
      </button>
    </div>
  );
}

export default SignInPage;
