"use client";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ScrollAnimationWrapper = ({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1, "0px 0px -100px 0px");

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeLeft":
        return "scroll-animate-left";
      case "fadeRight":
        return "scroll-animate-right";
      case "scale":
        return "scroll-animate-scale";
      default:
        return "scroll-animate-hidden";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${
        isVisible ? "scroll-animate-visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
