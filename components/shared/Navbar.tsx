"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const logoOnlyRoutes = ["/login", "/signup"];

const Navbar = () => {
  const pathname = usePathname();
  const showLogoOnly = logoOnlyRoutes.includes(pathname);

  return (
    <div className="flex items-center justify-between w-full max-w-laptop mx-auto h-30">
      <Image src="/assets/logo/logo.svg" alt="Logo" width={171} height={37} />

      {!showLogoOnly && (
        <>
          <div className="space-x-6">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Courses</Link>
            <Link href={"/"}>Creators</Link>
          </div>

          <div className="space-x-6">
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign Up</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
