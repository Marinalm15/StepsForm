import { NumberCircleFour, NumberCircleOne, NumberCircleThree, NumberCircleTwo } from "@phosphor-icons/react";
import { FistTitle, SecondTitle, SidebarContainer, StepNumber, StepWrapper, Steps } from "./styles";

export function Sidebar() {
    return (
        <SidebarContainer>
           <Steps>
                <StepNumber>
                <NumberCircleOne size={32} />
                </StepNumber>
                <StepWrapper>
                    <FistTitle>Step 1</FistTitle>
                    <SecondTitle>YOUR INFO</SecondTitle>
                </StepWrapper>
           </Steps>

           <Steps>
                <StepNumber>
                    <NumberCircleTwo size={32} />
                </StepNumber>
                <StepWrapper>
                    <FistTitle>Step 2</FistTitle>
                    <SecondTitle>SELECT PLAN</SecondTitle>
                </StepWrapper>
           </Steps>

           <Steps>
           <StepNumber>
                    <NumberCircleThree size={32} />
                </StepNumber>
                <StepWrapper>
                    <FistTitle>Step 3</FistTitle>
                    <SecondTitle>ADD-ONS</SecondTitle>
                </StepWrapper>
           </Steps>

           <Steps>
           <StepNumber>
                    <NumberCircleFour size={32} />
                </StepNumber>
                <StepWrapper>
                    <FistTitle>Step 4</FistTitle>
                    <SecondTitle>SUMMARY</SecondTitle>
                </StepWrapper>
           </Steps>

        </SidebarContainer>
    )
}