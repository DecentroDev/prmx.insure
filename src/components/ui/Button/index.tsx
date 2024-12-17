"use client";

import { Spinner, forwardRef } from "@nextui-org/react";
import { type HTMLMotionProps, motion } from "framer-motion";
import type { ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const buttonVariant = tv(
  {
    base: "inline-flex font-mono font-bold min-h-0 cursor-pointer items-center justify-center text-base outline-none transition-all focus:outline-none disabled:cursor-not-allowed active:scale-95 scale-100 duration-400 font-garet font-bold",
    variants: {
      variant: {
        bordered:
          'px-4 py-3 text-primary relative rounded z-0 overflow-hidden bg-gradient-primary before:content-[""] before:absolute before:block before:inset-0 before:rounded-inherit before:m-[1px] before:bg-white before:z-[-2] font-bold',
        solid:
          'px-4 py-3 text-white relative rounded z-0 overflow-hidden bg-gradient-primary before:content-[""] before:absolute before:block before:inset-0 before:rounded-inherit before:m-[1px] before:bg-gradient-primary before:z-[-2] font-bold',
      },
      size: {
        none: "gap-xs text-sm",
        xs: "gap-xs p-2 h-8 text-sm rounded",
        sm: "gap-xs p-2 h-9 text-sm rounded",
        md: "gap-sm h-[38px] px-4 py-3 text-sm rounded",
        lg: "gap-sm h-12 lg:h-[52px] px-4 py-3 lg:px-5 lg:py-[18px] text-base rounded",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      iconOnly: {
        true: "aspect-square p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      fullWidth: false,
    },
  },
  {
    responsiveVariants: true,
  }
);

interface Props
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariant> {
  asChild?: boolean;
  loadingIcon?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loadingPlacement?: "start" | "end";
  loading?: boolean;
  children?: ReactNode;
}

const Button = forwardRef<"button", Props>((props, ref) => {
  const {
    className,
    children,
    disabled,
    variant,
    fullWidth,
    size,
    iconOnly,
    loading,
    loadingIcon = <Spinner className="h-5 w-5" />,
    loadingPlacement = "start",
    startIcon,
    endIcon,
    type = "button",
    ...etc
  } = props;

  return (
    <motion.button
      className={buttonVariant({
        variant,
        iconOnly,
        fullWidth,
        size,
        className,
      })}
      ref={ref}
      disabled={loading || disabled}
      aria-disabled={loading || disabled}
      type={type}
      {...etc}
    >
      {startIcon && !loading && startIcon}
      {loading && loadingPlacement === "start" && loadingIcon}
      {children && typeof children === "string" ? (
        <span>{children}</span>
      ) : (
        children
      )}
      {loading && loadingPlacement === "end" && loadingIcon}
      {endIcon && endIcon}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;
