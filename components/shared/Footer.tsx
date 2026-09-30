"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const hiddenRoutes = ["/login", "/signup"];

const linkColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

const Footer = () => {
  const pathname = usePathname();
  if (hiddenRoutes.includes(pathname)) return <></>;

  return (
    <footer className="bg-white pt-20 pb-8 text-dark">
      <div className="my-container">
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="max-w-lg">
            <Image
              src="/assets/logo/logo-dark.svg"
              alt="ByteSpace"
              width={171}
              height={37}
              className="h-8 w-fit"
            />
            <p className="mt-5 text-sm text-gray">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              className="mt-8 flex items-center gap-3"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-12 w-full flex-1 rounded-full border border-shuttle-gray-100 px-5 text-sm placeholder-shuttle-gray-400 focus:border-persian-blue focus:outline-none"
              />
              <Button
                type="submit"
                size="lg"
                className="h-11.5 rounded-full px-6"
              >
                Subscribe
              </Button>
            </form>
            <p className="mt-5 text-xs text-gray">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-y-8 sm:grid-cols-3">
            {linkColumns.map((column, index) => (
              <ul key={index} className="space-y-4 text-sm">
                {column.map((label) => (
                  <li key={label}>
                    <Link href="/" className="hover:text-persian-blue">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-col-reverse gap-4 border-t border-shuttle-gray-100 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((label) => (
              <Link key={label} href="/" className="hover:text-persian-blue">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
