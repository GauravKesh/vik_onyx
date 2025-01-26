"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Products", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Community", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10 top-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 1024 1280"
              fill="none"
            >
              <rect width="1024" height="1280" rx="80" fill="white" />
              <path
                d="M512 640C512 614.805 522.009 590.641 539.825 572.825C557.641 555.009 581.804 545 607 545C632.196 545 656.359 555.009 674.175 572.825C691.991 590.641 702 614.805 702 640C702 665.196 691.991 689.359 674.175 707.175C656.359 724.991 632.196 735 607 735C581.804 735 557.641 724.991 539.825 707.175C522.009 689.359 512 665.196 512 640V640Z"
                stroke="black"
                stroke-width="35"
              />
              <path
                d="M322 830C322 804.804 332.009 780.641 349.825 762.825C367.641 745.009 391.804 735 417 735H512V830C512 855.196 501.991 879.359 484.175 897.175C466.359 914.991 442.196 925 417 925C391.804 925 367.641 914.991 349.825 897.175C332.009 879.359 322 855.196 322 830Z"
                stroke="black"
                stroke-width="35"
              />
              <path
                d="M512 355V545H607C632.196 545 656.359 534.991 674.175 517.175C691.991 499.359 702 475.196 702 450C702 424.804 691.991 400.641 674.175 382.825C656.359 365.009 632.196 355 607 355H512Z"
                stroke="black"
                stroke-width="35"
              />
              <path
                d="M322 450C322 475.196 332.009 499.359 349.825 517.175C367.641 534.991 391.805 545 417 545H512V355H417C391.805 355 367.641 365.009 349.825 382.825C332.009 400.641 322 424.804 322 450Z"
                stroke="black"
                stroke-width="35"
              />
              <path
                d="M322 640C322 665.196 332.009 689.359 349.825 707.175C367.641 724.991 391.804 735 417 735H512V545H417C391.804 545 367.641 555.009 349.825 572.825C332.009 590.641 322 614.805 322 640Z"
                stroke="black"
                stroke-width="35"
              />
            </svg>
          </Link>
          <div className="hidden md:block flex items-baseline space-x-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 px-5 py-3 rounded-md text-lg font-medium transform transition duration-300 hover:scale-110"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <button className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium transform transition duration-200 hover:scale-105">
            Sign in
          </button>
          <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm font-medium transform transition duration-200 hover:scale-105">
            Register
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-gray-900 transform rotate-90"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-3 pt-3 pb-5 space-y-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 block px-5 py-3 rounded-md text-lg font-medium transform transition duration-200 hover:scale-110"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 border-t border-gray-300 pt-5">
            <button className="text-gray-700 hover:text-gray-900 block w-full text-left px-4 py-3 rounded-md text-lg font-medium transform transition duration-200 hover:scale-110">
              Sign in
            </button>
            <button className="bg-yellow-500 text-white block w-full text-left px-5 py-3 rounded-md text-lg font-medium transform transition duration-200 hover:scale-110 mt-1">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
