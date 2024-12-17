import { tv } from "tailwind-variants";

export const container = tv({
  base: "mx-auto w-full",
  variants: {
    size: {
      default: "max-w-[1536px] px-4 lg:px-[76px]",
      xl: "max-w-[1668px] px-4 lg:px-[76px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const heading = tv(
  {
    base: "",
    variants: {
      variant: {
        72: "text-[40px] lg:text-[72px]",
        64: "text-[32px] lg:text-[64px] leading-[130%] lg:!leading-[86px]",
        56: "text-[32px] lg:text-[56px] leading-[130%] lg:!leading-[67.2px]",
        48: "text-2xl lg:text-5xl leading-[140%] lg:!leading-[116%]",
        40: "text-2xl lg:text-[40px] leading-[140%] lg:!leading-[116%]",
        36: "text-2xl lg:text-[36px] leading-[140%] lg:!leading-[43.2px]",
        32: "text-2xl lg:text-[32px] leading-[140%] lg:leading-[130%]",
        24: "text-base lg:text-2xl !leading-[160%] lg:leading-[140%]",
        20: "text-base lg:text-xl !leading-[160%] lg:!leading-[158%]",
        16: "text-sm lg:text-base !leading-[140%] lg:!leading-[160%]",
        14: "text-sm !leading-[140%]",
      },
      weight: {
        700: "font-bold",
        600: "font-semibold",
        500: "font-medium",
        400: "font-normal",
      },
    },
    defaultVariants: {
      variant: 32,
      weight: 500,
    },
  },
  {
    responsiveVariants: true,
  }
);

export const body = tv(
  {
    base: "",
    variants: {
      variant: {
        20: "text-base lg:text-xl leading-[150%]",
        18: "text-base lg:text-lg leading-[150%]",
        16: "text-sm lg:text-base",
        14: "text-sm",
        12: "text-xs",
        10: "text-[10px]",
      },
      weight: {
        700: "font-bold",
        600: "font-semibold",
        500: "font-medium",
        400: "font-normal",
      },
    },
    defaultVariants: {},
  },
  {
    responsiveVariants: true,
  }
);
