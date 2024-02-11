import { ButtonNext, ButtonWrapper, StepContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { InputField } from "../../Inputs";
import { useNavigate } from "react-router-dom";
import { ErrorMsg } from "../../ErrorMsg/indx";
import { useEffect } from "react";

const newUserFormValidationSchema = zod.object({
    name: zod.string({ required_error: "Name is required" }).min(1, { message: "Name is required" }),
    email: zod.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }),
    email_confirmation: zod.string({ required_error: "Email confirmation is required" }).email({ message: "Invalid email address" })
  }).refine((fildsData) => fildsData.email === fildsData.email_confirmation, {
    message: "Emails don't match",
    path: ["email_confirmation"],
  });

  type NewUserFormData = zod.infer<typeof newUserFormValidationSchema>

export function Step1() {
  const navigate = useNavigate();
    
    const newUserForm = useForm<NewUserFormData>({
        resolver: zodResolver(newUserFormValidationSchema)
      })
    
    const { control,  formState: { errors }, handleSubmit, setValue } = newUserForm

    const handleCreateNewUser = (data: NewUserFormData) => {
      console.log(data);
      localStorage.setItem('user_data', JSON.stringify(data));
      navigate("/select_plan")
    }

    useEffect(() => {
      const storedUserData = localStorage.getItem('user_data');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        setValue('name', userData.name);
        setValue('email', userData.email);
        setValue('email_confirmation', userData.email_confirmation);
      }
    }, [setValue]);

    return (
          <form onSubmit={handleSubmit(handleCreateNewUser)}>
            <StepContainer>
                <span>Name:</span>
                <InputField
                placeholder="Enter your name"
                title="Enter your name"
                control={control}
                name="name"
                />
                 {errors.name?.message && (
                  <ErrorMsg msg={errors.name.message} />
                )}
                <span>Email Address:</span>
                <InputField
                placeholder="Enter your email"
                title="Enter your email"
                control={control}
                name="email"
                />
                {errors.email?.message && (
                  <ErrorMsg msg={errors.email.message} />
                )}
                <span>Confirm Email:</span>
                <InputField
                placeholder="Confirm your email"
                title="Confirm your email"
                control={control}
                name="email_confirmation"
                />
                {errors.email_confirmation?.message && (
                  <ErrorMsg msg={errors.email_confirmation.message} />
                )}
                <ButtonWrapper>
                  <ButtonNext type="submit">
                    Next Step
                  </ButtonNext>
                </ButtonWrapper>
            </StepContainer>
          </form>
    )
}