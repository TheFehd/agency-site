"use client";

import { motion, type HTMLMotionProps, type Variant } from "motion/react";
import * as React from "react";

import {
  Slot,
  type WithAsChild,
} from "@/components/animate-ui/primitives/animate/slot";
import { getStrictContext } from "@/lib/get-strict-context";

const buildVariant = ({
  opacity,
  rotation,
  offset,
  isVertical,
  rotateAxis,
}: {
  opacity: number;
  rotation: number;
  offset: string | null;
  isVertical: boolean;
  rotateAxis: string;
}): Variant => ({
  opacity,
  [rotateAxis]: rotation,
  ...(isVertical && offset !== null ? { y: offset } : {}),
  ...(!isVertical && offset !== null ? { x: offset } : {}),
});

type FlipDirection = "top" | "bottom" | "left" | "right";

type FlipButtonContextType = {
  from: FlipDirection;
  isVertical: boolean;
  rotateAxis: string;
};

const [FlipButtonProvider, useFlipButton] =
  getStrictContext<FlipButtonContextType>("FlipButtonContext");

type FlipButtonProps = WithAsChild<
  HTMLMotionProps<"button"> & {
    from?: FlipDirection;
    tapScale?: number;
  }
>;

function FlipButton({
  from = "top",
  tapScale = 0.95,
  asChild = false,
  style,
  children,
  ...props
}: FlipButtonProps) {
  const isVertical = from === "top" || from === "bottom";
  const rotateAxis = isVertical ? "rotateX" : "rotateY";

  const motionProps = {
    "data-slot": "flip-button" as const,
    initial: "initial" as const,
    whileHover: "hover" as const,
    whileTap: { scale: tapScale },
    style: {
      display: "inline-grid",
      placeItems: "center",
      perspective: "1000px",
      ...style,
    },
    ...props,
  };

  return (
    <FlipButtonProvider value={{ from, isVertical, rotateAxis }}>
      {asChild ? (
        <Slot {...motionProps}>{children as React.ReactElement}</Slot>
      ) : (
        <motion.button {...motionProps}>{children}</motion.button>
      )}
    </FlipButtonProvider>
  );
}

type FlipButtonFaceProps = WithAsChild<HTMLMotionProps<"span">>;

function FlipButtonFront({
  transition = { type: "spring", stiffness: 280, damping: 20 },
  style,
  ...props
}: FlipButtonFaceProps) {
  const { from, isVertical, rotateAxis } = useFlipButton();
  const frontOffset = from === "top" || from === "left" ? "50%" : "-50%";

  return (
    <motion.span
      data-slot="flip-button-front"
      variants={{
        initial: buildVariant({
          opacity: 1,
          rotation: 0,
          offset: "0%",
          isVertical,
          rotateAxis,
        }),
        hover: buildVariant({
          opacity: 0,
          rotation: 90,
          offset: frontOffset,
          isVertical,
          rotateAxis,
        }),
      }}
      transition={transition}
      style={{
        gridArea: "1 / 1",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...props}
    />
  );
}

function FlipButtonBack({
  transition = { type: "spring", stiffness: 280, damping: 20 },
  style,
  ...props
}: FlipButtonFaceProps) {
  const { from, isVertical, rotateAxis } = useFlipButton();
  const backOffset = from === "top" || from === "left" ? "-50%" : "50%";

  return (
    <motion.span
      data-slot="flip-button-back"
      variants={{
        initial: buildVariant({
          opacity: 0,
          rotation: 90,
          offset: backOffset,
          isVertical,
          rotateAxis,
        }),
        hover: buildVariant({
          opacity: 1,
          rotation: 0,
          offset: "0%",
          isVertical,
          rotateAxis,
        }),
      }}
      transition={transition}
      style={{
        gridArea: "1 / 1",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...props}
    />
  );
}

export {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
  useFlipButton,
  type FlipButtonFaceProps as FlipButtonBackProps,
  type FlipButtonFaceProps as FlipButtonFrontProps,
  type FlipButtonProps,
  type FlipDirection,
};
