import styled from "styled-components";

interface InputProps {
    checked: boolean;
}

export const Step3Container = styled.div`
    width: 100%;
    height: 28rem;

    form {
        height: 80%; 
    }
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const AddonBox = styled.div<InputProps>`
    display: flex;
    flex-direction: row; 
    align-items: center;
    padding: 1rem;
    justify-content: space-between;

    border: 1px solid blue;
    border-radius: 10px;

    background-color: white;

    background-color: ${props => props.checked ? "#ecf1f6" : "#fff"};

    div {
        display: flex;
        flex-direction: row;  
        gap: 1rem;
    }

    &:hover {
        background-color: #ecf1f6;
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

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 8rem;
`