import { useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import {
  ITippyArrow,
  ITippyBox,
  StyledTippy,
  StyledTippyRenderFunction,
} from "./styled-tippy";

const Toggle = styled.div`
  border: 2px solid black;
`;

const TippyArrow = styled.div<ITippyArrow>`
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

const TippyBox = styled.div<ITippyBox>`
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

const tippyRender: StyledTippyRenderFunction = ({
  animation,
  arrowPosition,
}) => {
  return (
    <TippyBox animation={animation}>
      <TippyArrow position={arrowPosition} />
      Text Text Text Text
    </TippyBox>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  gap: 32px;
`;

const Example1 = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  gap: 16px;
`;

const Example2 = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto;
  gap: 16px;
`;

const App = () => {
  const animation = "perspective";

  const [showInteractive, setShowInteractive] = useState(true);

  return (
    <Container>
      <Example1>
        <StyledTippy render={tippyRender} placement="top" animation={animation}>
          <Toggle>top</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="top-start"
          animation={animation}
        >
          <Toggle>top-start</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="top-end"
          animation={animation}
        >
          <Toggle>top-end</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="right"
          animation={animation}
        >
          <Toggle>right</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="right-start"
          animation={animation}
        >
          <Toggle>right-start</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="right-end"
          animation={animation}
        >
          <Toggle>right-end</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="bottom"
          animation={animation}
        >
          <Toggle>bottom</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="bottom-start"
          animation={animation}
        >
          <Toggle>bottom-start</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="bottom-end"
          animation={animation}
        >
          <Toggle>bottom-end</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="left"
          animation={animation}
        >
          <Toggle>left</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="left-start"
          animation={animation}
        >
          <Toggle>left-start</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="left-end"
          animation={animation}
        >
          <Toggle>left-end</Toggle>
        </StyledTippy>
        <StyledTippy render={tippyRender} placement="top" animation={animation}>
          <Toggle>top</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="top-start"
          animation={animation}
        >
          <Toggle>top-start</Toggle>
        </StyledTippy>
        <StyledTippy
          render={tippyRender}
          placement="top-end"
          animation={animation}
        >
          <Toggle>top-end</Toggle>
        </StyledTippy>
      </Example1>

      <Example2>
        <Toggle onClick={() => setShowInteractive(!showInteractive)}>
          is-interactive: {showInteractive}
        </Toggle>
        {showInteractive ? (
          <StyledTippy
            render={tippyRender}
            placement="bottom"
            animation={animation}
            interactive={true}
            duration={2000}
          >
            <Toggle>top</Toggle>
          </StyledTippy>
        ) : (
          <Toggle>top</Toggle>
        )}
      </Example2>
    </Container>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
