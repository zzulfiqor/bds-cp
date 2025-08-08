import Link from "next/link";
import Image from "next/image";
import { useState, ReactNode } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CelebrationIcon from "@mui/icons-material/Celebration";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const navs = [
    { title: "About Us", path: "/about" },
    { title: "Dive School", path: "/dive-school" },
    { title: "Dive Tour", path: "/dive-tour" },
    { title: "Diving Spot", path: "/dive-spot" },
    { title: "Gallery", path: "/gallery" },
  ];

  const [hamburgerHovered, setHamburgerHovered] = useState(false);
  const [showSideNavBar, setShowSideNavBar] = useState(false);
  const logoClasses = [
    "transition-all ease-in-out duration-300",
    "h-[45px] md:h-[50px] w-auto bg-cover",
    "hover:filter hover:drop-shadow-[0_2px_3px_primary]",
  ].join(" ");

  return (
    <>
      {/* Side Nav Bar */}
      <SideNavBar
        showSideNavBar={showSideNavBar}
        navs={navs}
        setShowSideNavBar={setShowSideNavBar}
      />

      {/* Bottom Bar */}
      <BottomBar showSideNavBar={showSideNavBar} />

      <div
        className={`z-10 sticky w-full bg-primaryDark mx-auto my-auto py-4 px-4 md:py-4 ${
          isScrolled ? "top-0 opacity-90" : "bg-opacity-40"
        } transition-all ease-in-out duration-300`}
      >
        <div className="container mx-auto">
          <nav className="flex justify-between items-center my-auto">
            {/* Hamburger Menu */}
            <div className="block md:hidden">
              <button
                onClick={() => setShowSideNavBar(!showSideNavBar)}
                onMouseEnter={() => setHamburgerHovered(true)}
                onMouseLeave={() => setHamburgerHovered(false)}
                className="focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="w-8 h-8 text-white hover:text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all ease-in-out duration-300"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={`M4 6h16M4 12h16M4 18h${hamburgerHovered ? "16" : "7"}`}
                  />
                </svg>
              </button>
            </div>

            {/* Logo Image */}
            <div className="w-full flex justify-center md:justify-between">
              <Link href="/" legacyBehavior>
                <a>
                  <Image
                    src="/logo-white.png"
                    alt="logo"
                    width={200} // sesuaikan ukuran
                    height={50} // sesuaikan ukuran
                    className={logoClasses}
                  />
                </a>
              </Link>
            </div>

            {/* Nav Items */}
            <div className="hidden md:block">
              <ul className="flex space-x-1">
                {navs.map((nav, index) => (
                  <li key={index}>
                    <Link href={nav.path} legacyBehavior>
                      <a>
                        <NavItem title={nav.title} centerText />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

function BottomBar({ showSideNavBar }: { showSideNavBar: boolean }) {
  return (
    <div className="block md:hidden w-full">
      <div
        className={`fixed ${
          showSideNavBar ? "z-0" : "z-30"
        } bottom-0 w-full h-[75px] bg-primary opacity-90 mx-auto my-auto py-4 px-8 md:py-4 block md:hidden`}
      >
        <div className="container mx-auto h-full flex items-center">
          <nav className="flex justify-between items-center w-full">
            <div className="w-full flex justify-center md:justify-between gap-8">
              <BottomNavItem
                title="Whatsapp"
                icon={<WhatsAppIcon fontSize="large" />}
                onClick={() =>
                  window.open(
                    "https://wa.me/6281979778878?text=Hello%20BDS%2C%20I%20would%20like%20to%20inquire%20about%20the%20packages%20you%20offer.",
                    "_blank"
                  )
                }
              />

              <BottomNavItem
                title="Event"
                icon={<CelebrationIcon fontSize="large" />}
                onClick={() => {
                  window.location.href = "/event";
                }}
              />

              <BottomNavItem
                title="Booking"
                icon={<MailIcon fontSize="large" />}
                onClick={() => {
                  window.location.href =
                    "mailto:info@banyuwangidivingschool.com?subject=Inquiry%20about%20packages&body=Hello%20BDS%2C%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20the%20packages%20you%20offer.%0D%0A%0D%0AThank%20you.";
                }}
              />

              <BottomNavItem
                title="Location"
                icon={<MapIcon fontSize="large" />}
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Banyuwangi+Dive+School/@-8.0553465,114.4301391,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd13f001b61576b:0xeb557bcf1efad7c0!8m2!3d-8.0553465!4d114.4301391!16s%2Fg%2F11lmkc1g7y?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

function SideNavBar({
  showSideNavBar,
  navs,
  setShowSideNavBar,
}: {
  showSideNavBar: boolean;
  navs: { title: string; path: string }[];
  setShowSideNavBar: (value: boolean) => void;
}) {
  return (
    <>
      <div
        className={`fixed z-10 top-0 left-0 h-full w-full bg-primaryDark bg-opacity-45 ${
          showSideNavBar ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all ease-in-out duration-200 block md:hidden`}
        onClick={() => setShowSideNavBar(false)}
        aria-hidden="true"
      ></div>
      <div
        className={`fixed z-20 top-0 left-0 h-full w-3/4 bg-primaryDark ${
          showSideNavBar ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all ease-in-out duration-450 block md:hidden`}
      >
        <ul className="flex flex-col p-4">
          <li>
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/logo-white.png"
                alt="logo"
                width={160}
                height={40}
                className="h-[40px] w-auto bg-cover mt-2 mx-3"
              />
              <button
                onClick={() => setShowSideNavBar(false)}
                className="focus:outline-none px-4"
                aria-label="Close navigation menu"
              >
                <svg
                  className="w-5 h-5 text-white hover:text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </li>
          {navs.map((nav, index) => (
            <li key={index}>
              <Link href={nav.path} legacyBehavior>
                <a onClick={() => setShowSideNavBar(false)}>
                  <NavItem title={nav.title} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function NavItem({
  title,
  centerText,
}: {
  title: string;
  centerText?: boolean;
}) {
  return (
    <div className={`py-3 px-4 w-[140px] ${centerText ? "text-center" : ""}`}>
      <p className="transition-all ease-in-out duration-250 text-white text-lg font-bold hover:text-secondary">
        {title}
      </p>
    </div>
  );
}

interface BottomNavItemProps {
  title: string;
  icon: ReactNode;
  onClick: () => void;
}

function BottomNavItem({ title, icon, onClick }: BottomNavItemProps) {
  return (
    <button
      onClick={onClick}
      className="transition-all ease-in-out duration-250 text-white text-xs font-bold hover:text-secondary mt-2 focus:outline-none"
      aria-label={title}
    >
      <div className="py-0 px-4 flex flex-col items-center">
        {icon}
        {title}
      </div>
    </button>
  );
}
