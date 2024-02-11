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

    const {control, formState: { errors }, handleSubmit} = planForm

    const handleSelectedPlan = (data: SelectedPlanFormData) => {
        console.log(data);
        localStorage.setItem('plan', JSON.stringify(data));
        navigate("/select_plan")
    }

    useEffect(() => {
        const storedPlan = localStorage.getItem('plan');
        if (storedPlan) {
            const parsedPlan = JSON.parse(storedPlan);
            setSelected(parsedPlan.selectedPlan);
        }
    }, []);

    return (
        
        <Step2Container>
        <form onSubmit={handleSubmit(handleSelectedPlan)}>
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
                                setSelected(plan.name);
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