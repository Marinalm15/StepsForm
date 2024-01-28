import styled from "styled-components";

export const StepContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #243f58;
    font-weight: 700;

    span {
        margin-top: 2rem;
        margin-left: 5px;
    }
    

`

export const ButtonNext = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;

    nav {
        width: 7rem;
        background-color: #243f58;
        padding: 0.5rem 2rem;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        margin-top: 7rem;
        display: flex;
        gap: 0.5rem;
        color: white;
        text-decoration: none;
  }
`