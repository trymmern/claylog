import { HomeIcon, PaintBrushIcon, UserIcon } from "@heroicons/react/16/solid";
import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
} from "@material-tailwind/react";
import logo from "app/assets/svgs/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { NavButton } from "./NavButton";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      () => window.innerWidth >= 960 && setOpenNav(false);
    });
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavButton to="" title="Home" icon={<HomeIcon className="size-5" />} />
      <NavButton
        to="/glazes"
        title="Glazes"
        icon={<PaintBrushIcon className="size-5" />}
      />
    </ul>
  );

  return (
    <div className="max-h-[768px] w-[calc(100%+32px)] overflow-scroll">
      <Navbar
        className="sticky top-0 z-10 h-max max-w-full px-4 py-4 lg:px-6 lg:py-6 dark:bg-gray-800 rounded-b-lg drop-shadow-2xl text-blue-400"
        aria-label="main navigation"
        aria-required="true"
      >
        <div className="container mx-auto flex items-center justify-between gap-2 lg:gap-6">
          <div className="flex items-center gap-2 lg:gap-6">
            <Link to="/" className="mr-2 lg:mr-6">
              <img src={logo} width={90} height={90} />
            </Link>
            <div className="hidden lg:block">{navList}</div>
          </div>
          <NavButton
            to="/login"
            title="Log In"
            icon={<UserIcon className="size-5" />}
          />
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
