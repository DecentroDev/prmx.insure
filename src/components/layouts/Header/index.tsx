import Button from "@/components/ui/Button";
import { HStack } from "@/components/utils/h-stack";
import { body, container } from "@/components/utils/primitives";
import { Link } from "react-router-dom";
import logo from "/images/logo.svg";
import logoDark from "/images/logo_dark.svg";
import xDarkIcon from "/images/home/x_dark_icon.svg";
import xIcon from "/images/home/x_icon.svg";
import MenuIcons from "./icons/MenuIcons";
import { useState } from "react";
import Tag from "@/components/ui/Tag";
import CloseIcon from "./icons/CloseIcon";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/libs/utils";

const mobileMenuVariant = {
  open: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  close: {
    y: "-100%",
    opacity: 0,
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

const ulVariant = {
  open: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const liVariant = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  close: {
    opacity: 0,
    y: "150%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

interface Link {
  label: string;
  href: string;
}

const NAVBAR_LINKS: Link[] = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Feature",
    href: "#feature",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Program",
    href: "#program",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrollDown, setIsScrollDown] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 104) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }

    if (latest > previous) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  });

  const handleOpen = () => {
    setIsDropdownOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <motion.div
      animate={isOpen ? "visible" : "hidden"}
      initial="visible"
      variants={{ isOpen: { y: 0 }, hidden: { y: "-100%" } }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "sticky top-0 z-[99999]",
        isScrollDown
          ? "bg-white border-b border-primary/20"
          : "bg-transparent border-none"
      )}
    >
      <div
        className={container({
          className: cn(
            "h-navbar-mobile lg:h-navbar flex items-center justify-between relative"
          ),
        })}
      >
        <a href="#">
          {isScrollDown ? (
            <img src={logoDark} alt="logo" width={108} height={25.561} />
          ) : (
            <img src={logo} alt="logo" width={108} height={25.561} />
          )}
        </a>

        <HStack spacing={40} className="hidden lg:flex">
          <HStack spacing={40}>
            {NAVBAR_LINKS?.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={body({
                  variant: 18,
                  className: cn(
                    "font-manrope text-white transition-all hover:opacity-60",
                    isScrollDown ? "text-primary" : "text-white"
                  ),
                })}
              >
                {label}
              </a>
            ))}
          </HStack>
          <HStack>
            <Button variant={isScrollDown ? "solid" : "bordered"}>
              LAUNCH APP
            </Button>
            <a href="https://x.com/PRMX_2024" target="_blank">
              <Button variant={isScrollDown ? "solid" : "bordered"} iconOnly>
                {isScrollDown ? (
                  <img src={xIcon} alt="x" />
                ) : (
                  <img src={xDarkIcon} alt="x" />
                )}
              </Button>
            </a>
          </HStack>
        </HStack>

        <Button
          iconOnly
          variant="bordered"
          className="rounded flex lg:hidden"
          onClick={handleOpen}
        >
          <MenuIcons />
        </Button>

        <motion.div
          initial="close"
          animate={isDropdownOpen ? "open" : "close"}
          exit="close"
          variants={mobileMenuVariant}
          className="fixed inset-0 bg-white flex-col py-10 flex lg:hidden min-h-[600px] overflow-auto"
        >
          <motion.div variants={ulVariant} className="flex flex-col h-full">
            <HStack
              justify="between"
              className="px-6 pb-6 border-b border-primary/40"
            >
              <Button>LAUNCH APP</Button>
              <Button
                iconOnly
                variant="bordered"
                className="rounded"
                onClick={handleClose}
              >
                <CloseIcon />
              </Button>
            </HStack>
            <motion.ul className="flex flex-col justify-center items-center gap-6 flex-1">
              {NAVBAR_LINKS?.map(({ href, label }) => (
                <motion.li key={label} variants={liVariant}>
                  <a
                    href={href}
                    className="text-primary font-manrope text-xl font-bold"
                    onClick={handleClose}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={liVariant}
              className="mt-10 font-manrope text-base font-bold flex justify-center"
            >
              <HStack>
                <Tag theme="gradient" />
                <a href="https://x.com/PRMX_2024" target="_blank">
                  <Button variant="bordered" iconOnly>
                    <img src={xDarkIcon} alt="x" />
                  </Button>
                </a>
              </HStack>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
