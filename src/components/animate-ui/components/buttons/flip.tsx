"use client";

import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import {
  FlipButton as FlipButtonPrimitive,
  FlipButtonBack as FlipButtonBackPrimitive,
  FlipButtonFront as FlipButtonFrontPrimitive,
  type FlipButtonProps as FlipButtonPrimitiveProps,
} from "@/components/animate-ui/primitives/buttons/flip";
import { buttonVariants } from "@/components/ui/button";
import { getStrictContext } from "@/lib/get-strict-context";
import { cn } from "@/lib/utils";

type FlipButtonContextType = VariantProps<typeof buttonVariants>;

const [FlipButtonProvider, useFlipButton] =
  getStrictContext<FlipButtonContextType>("FlipButtonContext");

type FlipButtonProps = FlipButtonPrimitiveProps &
  VariantProps<typeof buttonVariants>;

function FlipButton({ variant, size, ...props }: FlipButtonProps) {
  return (
    <FlipButtonProvider value={{ variant, size }}>
      <FlipButtonPrimitive {...props} />
    </FlipButtonProvider>
  );
}

type FlipButtonFaceProps = VariantProps<typeof buttonVariants> &
  React.ComponentProps<typeof FlipButtonFrontPrimitive>;

function FlipButtonFront({ variant, size, className, ...props }: FlipButtonFaceProps) {
  const ctx = useFlipButton();
  return (
    <FlipButtonFrontPrimitive
      className={cn(
        buttonVariants({
          variant: variant ?? ctx.variant,
          size: size ?? ctx.size,
          className,
        }),
      )}
      {...props}
    />
  );
}

type FlipButtonBackProps = VariantProps<typeof buttonVariants> &
  React.ComponentProps<typeof FlipButtonBackPrimitive>;

function FlipButtonBack({ variant, size, className, ...props }: FlipButtonBackProps) {
  const ctx = useFlipButton();
  return (
    <FlipButtonBackPrimitive
      className={cn(
        buttonVariants({
          variant: variant ?? ctx.variant,
          size: size ?? ctx.size,
          className,
        }),
      )}
      {...props}
    />
  );
}

export {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
  type FlipButtonBackProps,
  type FlipButtonFaceProps,
  type FlipButtonProps,
};
