import styled from "styled-components";

interface ButtonProps {
    selected: boolean;
}

export const Step2Container = styled.div`
    width: 100%;
    height: 28rem;
`

export const PlanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const PlanBox = styled.button<ButtonProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7rem;
    padding: 1rem;

    border: 1px solid blue;
    border-radius: 10px;

    background-color: white;
    cursor: pointer;

    background-color: ${props => props.selected ? "#ecf1f6" : "#fff"};

    &:hover {
        background-color: #ecf1f6;
    }

    div {
        margin-bottom: 2rem;
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
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10rem;
`