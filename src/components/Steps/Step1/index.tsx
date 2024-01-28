import { ButtonNext, StepContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { InputField } from "../../Inputs";
import { NavLink } from "react-router-dom";

const newUserFormValidationSchema = zod.object({
    name: zod.string({ required_error: "Name is required" }).min(1, { message: "Name is required" }),
    role: zod.string({ required_error: "Role is required" }).min(1, { message: "Role is required" }),
    email: zod.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }),
    email_confirmation: zod.string({ required_error: "Email confirmation is required" }).email({ message: "Invalid email address" })
  }).refine((fildsData) => fildsData.email === fildsData.email_confirmation, {
    message: "Emails don't match",
    path: ["email_confirmation"],
  });
  

export function Step1() {
    
    const newUserForm = useForm({
        resolver: zodResolver(newUserFormValidationSchema)
      })
    
      const { control } = newUserForm

    return (
            <StepContainer>
                <span>Name:</span>
                <InputField
                placeholder="Enter your name"
                title="Enter your name"
                control={control}
                name="name"
                />
                <span>Email Address:</span>
                <InputField
                placeholder="Enter your email"
                title="Enter your email"
                control={control}
                name="email"
                />
                <span>Phone Number:</span>
                <InputField
                placeholder="Enter your phone number"
                title="Enter your phone number"
                control={control}
                name="phone number"
                />
            <NavLink to={"/select_plan"}>
                <ButtonNext>
                    <nav>
                        Next Step
                    </nav>
                </ButtonNext>
            </NavLink>
            </StepContainer>
    )
}