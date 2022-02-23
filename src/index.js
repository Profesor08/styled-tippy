import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render } from "react-dom";
import styled from "styled-components";
import { StyledTippy, } from "./styled-tippy";
const Toggle = styled.div `
  border: 2px solid black;
`;
const TippyArrow = styled.div `
  position: absolute;
  background-color: inherit;
  ${(p) => p.position};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, 0);
    width: 16px;
    height: 8px;
    background-color: inherit;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }
`;
const TippyBox = styled.div `
  position: relative;
  padding: 12px 16px;
  box-shadow: 0px 4px 10px rgba(80, 86, 131, 0.2);
  border-radius: 6px;
  background: #ffffff;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  ${(p) => p.animation};
`;
const tippyRender = ({ animation, arrowPosition, }) => {
    return (_jsxs(TippyBox, Object.assign({ animation: animation }, { children: [_jsx(TippyArrow, { position: arrowPosition }, void 0), "Text Text Text Text"] }), void 0));
};
const App = () => {
    const animation = "perspective";
    return (_jsxs("div", Object.assign({ style: {
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "auto auto auto",
            gap: "16px",
        } }, { children: [_jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "top", animation: animation }, { children: _jsx(Toggle, { children: "top" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "top-start", animation: animation }, { children: _jsx(Toggle, { children: "top-start" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "top-end", animation: animation }, { children: _jsx(Toggle, { children: "top-end" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "right", animation: animation }, { children: _jsx(Toggle, { children: "right" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "right-start", animation: animation }, { children: _jsx(Toggle, { children: "right-start" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "right-end", animation: animation }, { children: _jsx(Toggle, { children: "right-end" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "bottom", animation: animation }, { children: _jsx(Toggle, { children: "bottom" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "bottom-start", animation: animation }, { children: _jsx(Toggle, { children: "bottom-start" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "bottom-end", animation: animation }, { children: _jsx(Toggle, { children: "bottom-end" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "left", animation: animation }, { children: _jsx(Toggle, { children: "left" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "left-start", animation: animation }, { children: _jsx(Toggle, { children: "left-start" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "left-end", animation: animation }, { children: _jsx(Toggle, { children: "left-end" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "top", animation: animation }, { children: _jsx(Toggle, { children: "top" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "top-start", animation: animation }, { children: _jsx(Toggle, { children: "top-start" }, void 0) }), void 0), _jsx(StyledTippy, Object.assign({ render: tippyRender, placement: "top-end", animation: animation }, { children: _jsx(Toggle, { children: "top-end" }, void 0) }), void 0)] }), void 0));
};
const rootElement = document.getElementById("root");
render(_jsx(App, {}, void 0), rootElement);
//# sourceMappingURL=index.js.map