import { NavLink, useNavigate } from "react-router-dom";
import { AddonBox, ButtonContainer, ButtonNext, ButtonWrapper, InputsWrapper, Step3Container } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Checkbox } from "antd";

interface InputsCheck {
    online_service: boolean;
    larger_storage: boolean;
    costumizable_porfile: boolean;
}

export function Step3() {
    const [check, setCheck] = useState({
        online_service: false,
        larger_storage: false,
        costumizable_porfile: false
    })
    const navigate = useNavigate()

    const planForm = useForm<InputsCheck>({})

    const {control, handleSubmit, setValue} = planForm

    const handleSelectedAddons = (data: InputsCheck) => {
        console.log(data);
        localStorage.setItem('addon', JSON.stringify(data));
        navigate("/finishing_up");
    };

    useEffect(() => {
        const storedAddon = localStorage.getItem('addon');
        if (storedAddon) {
            const parsedAddon = JSON.parse(storedAddon);
            setValue("online_service", parsedAddon.online_service)
            setValue("larger_storage", parsedAddon.larger_storage)
            setValue("costumizable_porfile", parsedAddon.costumizable_porfile)
            setCheck(parsedAddon);
        }
    }, [setValue]);

    return (
        <Step3Container>
            <form onSubmit={handleSubmit(handleSelectedAddons)}>
            <InputsWrapper>
                <Controller
                    key="1"
                    control={control}
                    name="online_service"
                    render={({ field }) => (
                        <AddonBox checked={check.online_service}>
                            <div>
                                <Checkbox 
                                    onClick={() => {
                                        setCheck(prevState => ({
                                            ...prevState,
                                            online_service: true 
                                        }));
                                        field.onChange(true);
                                    }}
                                    checked={check.online_service}
                                />
                                <p>Acess to multiplayers games</p>
                            </div>
                            <p>+$1/mo</p>
                        </AddonBox>
                    )}
                />

                <Controller
                    key="2"
                    control={control}
                    name="larger_storage"
                    render={({ field }) => (
                        <AddonBox checked={check.larger_storage}>
                            <div>
                                <Checkbox 
                                    onClick={() => {
                                        setCheck(prevState => ({
                                            ...prevState,
                                            larger_storage: true 
                                        }));
                                        field.onChange(true);
                                    }}
                                    checked={check.larger_storage}
                                />
                                <p>Extra 1TB of cloud save</p>
                            </div>
                            <p>+$3/mo</p>
                        </AddonBox>
                    )}
                />

                <Controller
                    key="3"
                    control={control}
                    name="costumizable_porfile"
                    render={({ field }) => (
                        <AddonBox checked={check.costumizable_porfile}>
                            <div>
                                <Checkbox 
                                    onClick={() => {
                                        setCheck(prevState => ({
                                            ...prevState,
                                            costumizable_porfile: true 
                                        }));
                                        field.onChange(true);
                                    }}
                                    checked={check.costumizable_porfile}
                                />
                                <p>Costum theme of your profile</p>
                            </div>
                            <p>+$2/mo</p>
                        </AddonBox>
                    )}
                />
               </InputsWrapper>


            <ButtonContainer>
                <NavLink to={"/select_plan"}>
                    Go Back
                </NavLink>
                <ButtonWrapper>
                    <ButtonNext type="submit">
                        Confirm
                    </ButtonNext>
                </ButtonWrapper>
            </ButtonContainer>
            </form>
        </Step3Container>
    )
}