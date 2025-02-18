import Link from "next/link";

const footerData = [
  {
    title: "Use Cases",
    links: [
      { text: "UI Design", href: "/ui-design" },
      { text: "UX Design", href: "/ux-design" },
      { text: "Wireframing", href: "/wireframing" },
    ],
  },
  {
    title: "Explore",
    links: [
      { text: "Design", href: "/design" },
      { text: "Prototyping", href: "/prototyping" },
      { text: "Development Features", href: "/development-features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", href: "/blog" },
      { text: "Best Practices", href: "/best-practices" },
      { text: "Colors", href: "/colors" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-white py-6 p-2">
      <div className="px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black mb-4 flex justify-center md:justify-start">
          <Link href="/">
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
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4 md:justify-start">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            <img
              src="/data/static/images/in.jpeg"
              alt=""
              className="w-10 h-10 "
            />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            <img
              src="/data/static/images/x.jpg"
              alt=""
              className="w-10 h-10 "
            />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            <img
              src="/data/static/images/y.png"
              alt=""
              className="w-10 h-10 "
            />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            <img
              src="/data/static/images/li.png"
              alt=""
              className="w-10 h-10 "
            />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between gap-8">
          {footerData.map((section) => (
            <div key={section.title} className="flex-1 min-w-[200px]">
              <h4 className="font-semibold text-gray-800 mb-2">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <p className="text-gray-600 text-center">
          All right reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
