import React, { useState, useCallback } from "react";
import Tippy, { TippyProps } from "@tippyjs/react";
import { Instance, Props } from "tippy.js";
import { PropsWithDuration, StyledTippyRenderFunction } from "../types";
import {
  getValueAtIndexOrReturn,
  getTippyAnimation,
  getTippyArrowPosition,
} from "../utils/utils";

export const StyledTippy: React.VFC<
  {
    render: StyledTippyRenderFunction;
    children: React.ReactElement;
  } & Omit<TippyProps, "render">
> = ({
  children,
  render,
  onShow: onShowProp,
  onHide: onHideProp,
  ...props
}) => {
  const [active, setActive] = useState(false);

  const onShow = useCallback(
    (instance: Instance<Props>) => {
      onShowProp?.(instance);
      requestAnimationFrame(() => setActive(true));
      instance.popper.removeEventListener("transitionend", instance.unmount);
    },
    [onShowProp],
  );

  const onHide = useCallback(
    (instance: Instance<Props>) => {
      onHideProp?.(instance);
      requestAnimationFrame(() => setActive(false));
      instance.popper.addEventListener("transitionend", instance.unmount, {
        once: true,
      });
    },
    [onHideProp],
  );

  return (
    <>
      <Tippy
        arrow={true}
        render={(attrs, content, instance) => {
          if (instance !== undefined) {
            const duration: [number, number] = [
              getValueAtIndexOrReturn(instance.props.duration, 0, [300, 250]),
              getValueAtIndexOrReturn(instance.props.duration, 1, [300, 250]),
            ];
            const props: PropsWithDuration = {
              ...instance.props,
              duration,
            };

            return render({
              animation: getTippyAnimation(active, props, attrs),
              arrowPosition: getTippyArrowPosition(attrs),
            });
          }

          return null;
        }}
        onShow={onShow}
        onHide={onHide}
        {...props}
      >
        {children}
      </Tippy>
    </>
  );
};
