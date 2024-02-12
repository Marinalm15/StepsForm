import styled from "styled-components";

export const StepContainer = styled.div`
    height: 28rem;
    display: flex;
    flex-direction: column;
    color: #243f58;
    font-weight: 700;

    span {
        margin-top: 2rem;
        margin-left: 5px;
    }
`

export const ButtonWrapper = styled.div`
    height: 100%;
    justify-content: end;
    display: flex;
    align-items: end;
`

export const ButtonNext = styled.button`
    width: 10rem;
    background-color: #243f58;
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    display: flex;
    color: white;
    text-decoration: none;
    border: none;
    bottom: 0;
    cursor: pointer;
`