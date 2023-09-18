import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { Suspense } from "react";
const Navbar = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getUser();

  return (
    <div className="fixed top-0 w-full z-[999]">
      <nav className="container flex items-center justify-between w-full font-medium bg-transparent font-poppins">
        <Link href={"/"}>
          <Image src={"assets/logo.svg"} width={160} height={27} alt="" />
        </Link>
        <Suspense>
          <ul className="relative flex justify-center gap-12 px-5 py-3 font-medium uppercase">
            {data.user ? (
              <>
                <li>
                  <Link href={"/battles"}>battles</Link>
                </li>
                <li>collection</li>
              </>
            ) : (
              <li>
                <Link href={"/auth/signin"}>sign in</Link>
              </li>
            )}
          </ul>
        </Suspense>
      </nav>
    </div>
  );
};

export default Navbar;
