import { css } from "styled-components";
import { PropsWithDuration, ITippyAttrs } from "styled-tippy/types";

export const shift = (
  active: boolean,
  p: PropsWithDuration,
  attrs: ITippyAttrs,
  offset: number,
) => {
  const placement = attrs["data-placement"];
  let x = 0;
  let y = 0;

  if (placement.includes("top")) {
    y = offset;
  } else if (placement.includes("bottom")) {
    y = -offset;
  } else if (placement.includes("left")) {
    x = offset;
  } else if (placement.includes("right")) {
    x = -offset;
  }

  return css`
    opacity: ${active ? 1 : 0};
    transform: translate(${active ? 0 : x}px, ${active ? 0 : y}px);
    transition: ease opacity ${active ? p.duration[0] : p.duration[1]}ms,
      ease transform ${active ? p.duration[0] : p.duration[1]}ms;
  `;
};
