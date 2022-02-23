import { css } from "styled-components";
import { PropsWithDuration, ITippyAttrs } from "styled-tippy/types";
import { fade } from "styled-tippy/animation/fade";
import { shift } from "styled-tippy/animation/shift";
import { scale } from "styled-tippy/animation/scale";
import { perspective } from "styled-tippy/animation/perspective";

export const getDefaultValue = (
  index: number,
  defaultValue: number | [number, number],
) => {
  return Array.isArray(defaultValue) ? defaultValue[index] : defaultValue;
};

export const getValueAtIndexOrReturn = (
  value: number | [number | null, number | null] | undefined,
  index: number,
  defaultValue: [number, number],
): number => {
  if (Array.isArray(value)) {
    const v = value[index];
    return v === null ? getDefaultValue(index, defaultValue) : v;
  }

  return value === undefined ? getDefaultValue(index, defaultValue) : value;
};

export const getTippyAnimation = (
  active: boolean,
  p: PropsWithDuration,
  attrs: ITippyAttrs,
) => {
  switch (p.animation) {
    case "shift-away":
      return shift(active, p, attrs, 10);
    case "shift-away-subtle":
      return shift(active, p, attrs, 5);
    case "shift-away-extreme":
      return shift(active, p, attrs, 20);
    case "shift-toward":
      return shift(active, p, attrs, -10);
    case "shift-toward-subtle":
      return shift(active, p, attrs, -5);
    case "shift-toward-extreme":
      return shift(active, p, attrs, -20);
    case "scale":
      return scale(active, p, attrs, 0.5);
    case "scale-subtle":
      return scale(active, p, attrs, 0.8);
    case "scale-extreme":
      return scale(active, p, attrs, 0);
    case "perspective":
      return perspective(active, p, attrs, 700, 8, 60);
    case "perspective-subtle":
      return perspective(active, p, attrs, 700, 5, 30);
    case "perspective-extreme":
      return perspective(active, p, attrs, 700, 10, 90);
    case "fade":
      return fade(active, p);
  }

  return fade(active, p);
};

export const getTippyArrowPosition = (attrs: ITippyAttrs) => {
  const placement = attrs["data-placement"];
  let top = "auto";
  let bottom = "auto";
  let left = "auto";
  let right = "auto";
  let rotate = "0deg";

  if (placement === "top") {
    bottom = "0";
    left = "50%";
  } else if (placement === "top-start") {
    bottom = "0";
    left = "20px";
  } else if (placement === "top-end") {
    bottom = "0";
    right = "20px";
  } else if (placement === "bottom") {
    top = "0";
    left = "50%";
    rotate = "180deg";
  } else if (placement === "bottom-start") {
    top = "0";
    left = "20px";
    rotate = "180deg";
  } else if (placement === "bottom-end") {
    top = "0";
    right = "20px";
    rotate = "180deg";
  } else if (placement === "left") {
    right = "0";
    top = "50%";
    rotate = "-90deg";
  } else if (placement === "left-start") {
    right = "0";
    top = "20px";
    rotate = "-90deg";
  } else if (placement === "left-end") {
    right = "0";
    bottom = "20px";
    rotate = "-90deg";
  } else if (placement === "right") {
    left = "0";
    top = "50%";
    rotate = "90deg";
  } else if (placement === "right-start") {
    left = "0";
    top = "20px";
    rotate = "90deg";
  } else if (placement === "right-end") {
    left = "0";
    bottom = "20px";
    rotate = "90deg";
  }

  return css`
    top: ${top};
    bottom: ${bottom};
    left: ${left};
    right: ${right};
    transform-origin: 50% 0;
    transform: rotate(${rotate});
  `;
};
