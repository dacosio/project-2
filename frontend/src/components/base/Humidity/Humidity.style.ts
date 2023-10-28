import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    display: flex;
    flex:0.25;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.3rem;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};
    width: 212px;
    height:212px;
`

export const SvgContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
`