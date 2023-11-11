import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(91, 91, 96, 0.8); /* Overlay background color */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
export const Container = styled.div<{
  width?: string;
  height?: string;
  btnLoading?: boolean;
}>`
  height: ${({ height }) => (height ? height : "16rem")};
  width: ${({ width }) => (width ? width : "16rem")};
  ${({ btnLoading }) =>
    !btnLoading
      ? ` position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%)`
      : null}
`;
