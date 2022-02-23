import { css } from "styled-components";
import { PropsWithDuration, ITippyAttrs } from "styled-tippy/types";

export const scale = (
  active: boolean,
  p: PropsWithDuration,
  attrs: ITippyAttrs,
  value: number,
) => {
  const placement = attrs["data-placement"];
  let origin = "bottom";

  if (placement.includes("top")) {
    origin = "bottom";
  } else if (placement.includes("bottom")) {
    origin = "top";
  } else if (placement.includes("left")) {
    origin = "right";
  } else if (placement.includes("right")) {
    origin = "left";
  }

  return css`
    opacity: ${active ? 1 : 0};
    transform: scale(${active ? 1 : value});
    transform-origin: ${origin};
    transition: ease opacity ${active ? p.duration[0] : p.duration[1]}ms,
      ease transform ${active ? p.duration[0] : p.duration[1]}ms;
  `;
};
