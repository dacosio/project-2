/* eslint-disable react/prop-types */
import React from "react";
import styled from "@emotion/styled";
import theme from "../../src/utils/Theme";
import "../../src/index.css";
import { ThemeProvider } from "@emotion/react";

const BaseContainer = styled.div`
  display: flex;
  flex: 1;
  // flex-direction: column;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const CenterContainer = styled(BaseContainer)`
  display: flex;
  flex: 1;
  // flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

/**
 *
 * @typedef {Object} ContainerProps
 * @property {Object} [style]
 * @property {Object} children
 * @property {boolean} [center]
 * @property {string} [background]
 * @property {string} [appType]
 *
 */

/**
 *
 * @param {ContainerProps} props
 */

const Container = ({ center = false, children, style }) => {
  const Wrapper = center ? CenterContainer : BaseContainer;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        style={{
          ...style,
        }}
      >
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Container;
