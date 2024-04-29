import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className="flex w-[90%] justify-between m-auto py-8">
      <div className="logo">
        <h2>SoYacht</h2>
      </div>
      <div className="menu">
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
