import { CheckCircle } from "@phosphor-icons/react";
import { ThanksContainer } from "./styles";

export function Finishing() {
    return (
        <ThanksContainer>
            <CheckCircle size={60} color="green" weight="fill"/>
            <h2>
                Thank you!
            </h2>
            <p>Thanks for confirming your subscription! <br/> We hope you have fun using our platform. </p>
        </ThanksContainer>
    )
}