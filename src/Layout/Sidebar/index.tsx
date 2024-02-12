import { NumberCircleOne, NumberCircleThree, NumberCircleTwo } from "@phosphor-icons/react";
import { FistTitle, SecondTitle, SidebarContainer, StepNumber, StepWrapper, Steps } from "./styles";
import { useLocation } from "react-router-dom";

export function Sidebar() {
    const { pathname } = useLocation()

    return (
        <SidebarContainer>
           <Steps>
                <StepNumber>
                {pathname != "/" && <NumberCircleOne size={32} /> }
                {pathname == "/" && <NumberCircleOne size={32} weight="fill" /> }
                </StepNumber>
                <StepWrapper>
                    <FistTitle>Step 1</FistTitle>
                    <SecondTitle>YOUR INFO</SecondTitle>
                </StepWrapper>
           </Steps>

           <Steps>
                <StepNumber>
                    {pathname != "/select_plan" && <NumberCircleTwo size={32} /> }
                    {pathname == "/select_plan" && <NumberCircleTwo size={32} weight="fill" /> }
                </StepNumber>
                <StepWrapper>
                    <FistTitle>Step 2</FistTitle>
                    <SecondTitle>SELECT PLAN</SecondTitle>
                </StepWrapper>
           </Steps>

           <Steps>
           <StepNumber>
                {pathname != "/pick_add_ons" && <NumberCircleThree size={32} /> }
                {pathname == "/pick_add_ons" && <NumberCircleThree size={32} weight="fill" /> }
                </StepNumber>
                <StepWrapper>
                    <FistTitle>Step 3</FistTitle>
                    <SecondTitle>ADD-ONS</SecondTitle>
                </StepWrapper>
           </Steps>

        </SidebarContainer>
    )
}