import { css } from "styled-components";
import { PropsWithDuration } from "styled-tippy/types";

export const fade = (active: boolean, p: PropsWithDuration) => {
  return css`
    opacity: ${active ? 1 : 0};
    transition: ease opacity ${active ? p.duration[0] : p.duration[1]}ms;
  `;
};
