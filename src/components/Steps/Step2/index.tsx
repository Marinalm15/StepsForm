import { NavLink, useNavigate } from "react-router-dom";
import { plansOptions } from "../../../helpers/plans";
import { ButtonContainer, ButtonNext, ButtonWrapper, PlanBox, PlanWrapper, Step2Container } from "./styles";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { ErrorMsg } from "../../ErrorMsg/indx";

const selectedPlanFormValidationSchema = zod.object({
    selectedPlan: zod.string().min(1),
});

type SelectedPlanFormData = zod.infer<typeof selectedPlanFormValidationSchema>

export function Step2() {
    const [selected, setSelected] = useState("")
    const navigate = useNavigate()

    const planForm = useForm<SelectedPlanFormData>({
        resolver: zodResolver(selectedPlanFormValidationSchema)
    })

    const {control, formState: { errors }, handleSubmit, setValue} = planForm

    const handleSelectedPlan = (planName: string) => {
        setSelected(planName);
    }

    const handleNextStep = (data: SelectedPlanFormData) => {
        console.log(data);
        localStorage.setItem('selectedPlan', JSON.stringify(data));
        navigate("/pick_add_ons")
    }

    useEffect(() => {
        const storedPlan = localStorage.getItem('selectedPlan');
        if (storedPlan) {
            const parsedPlan = JSON.parse(storedPlan);
            setValue('selectedPlan', parsedPlan.selectedPlan);
            setSelected(parsedPlan.selectedPlan);
        }
    }, [setValue]);

    return (
        
        <Step2Container>
        <form onSubmit={handleSubmit(handleNextStep)}>
            <PlanWrapper>
            {plansOptions.map(plan => {
                return (
                    <Controller
                    key={plan.name}
                    control={control}
                    name="selectedPlan"
                    render={({ field }) => (
                        <PlanBox
                            onClick={() => {
                                handleSelectedPlan(plan.name);
                                field.onChange(plan.name);
                            }}
                            selected={selected === plan.name}
                        >
                            <div>{plan.img}</div>
                            <span>{plan.name}</span>
                            <span>{plan.price}</span>
                        </PlanBox>
                    )}
                />
                )
            })}
            </PlanWrapper>
            {errors.selectedPlan && 
                <ErrorMsg msg="Please select a plan" />
            }
            <ButtonContainer>
                  <NavLink to={"/"}>
                    Go Back
                </NavLink>
                <ButtonWrapper>
                  <ButtonNext type="submit">
                    Next Step
                  </ButtonNext>
                </ButtonWrapper>
            </ButtonContainer>
        </form>    
        </Step2Container>
        
    )
}