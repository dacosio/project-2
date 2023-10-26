import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    .mobile-drawer {
        display: flex;
        border-radius: 20px 20px 0 0;
    }
`

export const InnerDrawer = styled.div`
    overflow: scroll;
    width: 100%;
`

export const Body = styled.div`
    padding: 3rem 1rem 2rem 1rem;
`
export const Header = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 1.5rem;
    padding-top: 1rem;
    position: fixed;
    width: 100%;
    z-index: 10000;
    background-color: white;
    border-radius: 20px 20px 0 0;
`