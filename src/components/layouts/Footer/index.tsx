import Tag from "@/components/ui/Tag";
import { HStack } from "@/components/utils/h-stack";
import { body, container } from "@/components/utils/primitives";
import { Link } from "react-router-dom";
import logoDark from "/images/logo_dark.svg";
import xIcon from "/images/home/x_icon.svg";

interface Link {
  label: string;
  href: string;
}

const LINKS: Link[] = [
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

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className={container({ className: "relative pt-5 pb-[62px]" })}>
        <HStack
          justify="between"
          className="flex-col lg:flex-row py-10 border-b border-[#EBEAED] gap-8"
        >
          <a href="#">
            <img src={logoDark} alt="logo_dark" />
          </a>

          <ul className="flex gap-10 flex-wrap justify-center">
            {LINKS?.map(({ label, href }) => (
              <li
                key={label}
                className={body({ variant: 16, className: "text-primary" })}
              >
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </HStack>

        <HStack justify="between" className="flex-col lg:flex-row pt-10 gap-8">
          <p className={body({ variant: 16, className: "text-primary/40" })}>
            © 2024 PRMX. All rights reserved.
          </p>
          <HStack spacing={8}>
            <Tag theme="gradient" />
            <Link
              to="https://x.com/PRMX_2024"
              target="_blank"
              className="bg-primary-dark w-[28px] h-[28px] flex justify-center items-center rounded-full"
            >
              <img src={xIcon} />
            </Link>
          </HStack>
        </HStack>
      </div>
    </footer>
  );
};

export default Footer;
