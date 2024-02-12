import { useLocation } from "react-router-dom";
import { Title, FormContainer } from "./styles";


export function FormBox() {

    const location = useLocation();
    let title;
    let description;

    switch (location.pathname) {
        case '/':
            title = 'Personal Info';
            description = 'Please provide your name, email address, and phone number'
            break;
        case '/select_plan':
            title = 'Select your plan';
            description = 'You have the option of monthly or yearly billing'
            break;
        case '/pick_add_ons':
            title = 'Pick add-ons';
            description = 'Add-ons help enhance your gaming experience'
            break;
    }

    return (
    <FormContainer>
    <Title>
       <h2>{title}</h2>
       <p>{description}</p>
   </Title>
   </FormContainer>
   )
}