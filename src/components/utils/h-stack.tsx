'use client';

import { type MotionProps, motion } from 'framer-motion';
import * as React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const hStackVariants = tv(
  {
    base: 'flex flex-wrap items-center',
    variants: {
      justify: {
        left: 'justify-start',
        right: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      align: {
        default: 'items-stretch',
        center: 'items items-center',
        start: 'items-start',
        end: 'items-end',
        baseline: 'items-baseline',
      },
      spacing: {
        0: 'gap-0',
        2: 'gap-0.5',
        4: 'gap-1',
        6: 'gap-1.5',
        8: 'gap-2',
        12: 'gap-3',
        16: 'gap-4',
        20: 'gap-5',
        24: 'gap-6',
        32: 'gap-8',
        40: 'gap-10',
        48: 'gap-12',
        64: 'gap-16',
        none: 'gap-0',
      },
      noWrap: {
        true: 'flex-nowrap',
      },
    },
    compoundVariants: [],
    compoundSlots: [],
    defaultVariants: {
      spacing: 16,
      pos: 'left',
    },
  },
  {
    responsiveVariants: true,
  }
);

export interface HStackProps extends MotionProps, VariantProps<typeof hStackVariants> {
  className?: string;
}

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ className, noWrap, justify, align, spacing, children, ...props }, ref) => {
    return (
      <motion.div className={hStackVariants({ spacing, align, className, noWrap, justify })} ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);
HStack.displayName = 'HStack';

export { HStack, hStackVariants };
