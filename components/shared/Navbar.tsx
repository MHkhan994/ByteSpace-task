"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const logoOnlyRoutes = ["/login", "/signup"];

const Navbar = () => {
  const pathname = usePathname();
  const showLogoOnly = logoOnlyRoutes.includes(pathname);

  return (
    <div className="absolute top-0 z-30 w-full">
      <div className="grid grid-cols-3 items-center my-container h-30">
        <Image
          src="/assets/logo/logo.svg"
          className="h-10 w-fit"
          alt="Logo"
          width={270}
          height={80}
        />

        {!showLogoOnly && (
          <>
            <div className="flex justify-center gap-6 font-normal flex-1 text-shuttle-gray-50 ">
              <Link className="hover:text-primary" href={"/"}>
                Home
              </Link>
              <Link className="hover:text-primary" href={"/"}>
                Courses
              </Link>
              <Link className="hover:text-primary" href={"/"}>
                Creators
              </Link>
            </div>

            <div className="space-x-6 ms-auto text-shuttle-gray-50">
              <Link className="hover:text-primary" href="/login">
                Login
              </Link>
              <Link className="hover:text-primary" href="/signup">
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
