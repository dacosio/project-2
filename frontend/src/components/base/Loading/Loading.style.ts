import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Overlay background color */
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
  height: ${({ height }) => (height ? height : "8rem")};
  width: ${({ width }) => (width ? width : "8rem")};
  ${({ btnLoading }) =>
    !btnLoading
      ? ` position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%)`
      : null}
`;
