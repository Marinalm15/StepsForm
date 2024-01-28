import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: auto;
    height: 100vh;
    background-color: aliceblue;
    border-radius: 10px;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LayoutWrapper = styled.div`
    width: 50rem;
    height: 37rem;
    background-color: #fff;
    border-radius: 10px;
    margin: auto;
    padding-left: 1rem;

    display: flex;
    align-items: center;  

    position: relative;
`

export const SidebarWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;

    position: relative;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
