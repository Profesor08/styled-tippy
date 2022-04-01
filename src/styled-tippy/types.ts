import { css, FlattenSimpleInterpolation } from "styled-components";
import { Instance, Placement, Props } from "tippy.js";

export interface ITippyBox {
  animation: ReturnType<typeof css>;
}

export interface ITippyArrow {
  position: ReturnType<typeof css>;
}

export interface ITippyAttrs {
  "data-placement"?: Placement;
  "data-reference-hidden"?: string | undefined;
  "data-escaped"?: string | undefined;
}

export type PropsWithDuration = Omit<Props, "duration"> & {
  duration: [number, number];
};

export type StyledTippyRenderFunction = (props: {
  animation: FlattenSimpleInterpolation;
  arrowPosition: FlattenSimpleInterpolation;
  attrs: {
    "data-placement": Placement;
    "data-reference-hidden"?: string;
    "data-escaped"?: string;
  };
  instance?: Instance;
}) => React.ReactNode;
