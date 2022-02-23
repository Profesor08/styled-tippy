import { css } from "styled-components";
import { PropsWithDuration, ITippyAttrs } from "styled-tippy/types";

export const perspective = (
  active: boolean,
  p: PropsWithDuration,
  attrs: ITippyAttrs,
  perspective: number,
  translate: number,
  rotate: number,
) => {
  const placement = attrs["data-placement"];
  let tx = 0;
  let ty = 0;
  let rx = 0;
  let ry = 0;
  let origin = "bottom";

  if (placement?.includes("top")) {
    ty = translate;
    rx = rotate;
    origin = "bottom";
  } else if (placement?.includes("bottom")) {
    ty = -translate;
    rx = -rotate;
    origin = "top";
  } else if (placement?.includes("left")) {
    tx = translate;
    ry = -rotate;
    origin = "right";
  } else if (placement?.includes("right")) {
    tx = -translate;
    ry = rotate;
    origin = "left";
  }

  return css`
    opacity: ${active ? 1 : 0};
    transform: perspective(${perspective}px)
      translate(${active ? 0 : tx}px, ${active ? 0 : ty}px)
      rotateX(${active ? 0 : rx}deg) rotateY(${active ? 0 : ry}deg);
    transform-origin: ${origin};
    transition: ease opacity ${active ? p.duration[0] : p.duration[1]}ms,
      ease transform ${active ? p.duration[0] : p.duration[1]}ms;
  `;
};
