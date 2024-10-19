"use client";

import Link from "next/link";
import HumeLogo from "./logos/Hume"; // Replace with your logo

export const Nav = ({ replace }: { replace: boolean }) => {
  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      {/* Logo, directs to home */}
      <div>
        <Link href="/">
          <HumeLogo className={"h-5 w-auto"} /> {/* Replace with your own logo */}
        </Link>
      </div>

      {/* Navigation Links */}
      <div className={"ml-auto flex items-center gap-1"}>

        {/* Conditionally render Login Page based on the 'replace' prop */}
        {!replace && (
          <Link href="/login" className="ml-4 text-base font-medium hover:underline">
            Login
          </Link>        
        )}

        { /* Register */ }
        <Link href='/register' className="ml-4 text-base font-medium hover:underline">
          Register
        </Link>

        {replace && (
          <Link href="/logout" className="ml-4 text-base font-medium hover:underline">
            Log out
          </Link>
        )}


        {/* About Us Page */}
        <Link href="/about" className="ml-4 text-base font-medium hover:underline">
          About
        </Link>

        {/* Try Us Now Page */}
        <Link href="/tryusnow" className="ml-4 text-base font-medium hover:underline">
          Try Us Now
        </Link>

      </div>
    </div>
  );
};
