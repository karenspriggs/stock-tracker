'use client';

import {useForm} from "react-hook-form";
import InputField from "@/components/forms/inputField";
import FooterLink from "@/components/forms/FooterLink";

function SignIn() {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting}
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    })
    const onSubmit = async (data: SignInFormData) => {
        try{
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <h1 className="form-title">
                Sign In
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="john@example.com"
                    register={register}
                    error={errors.email}
                    validation={{  required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8 }}
                />

                <button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing In': "Sign In"}
                </button>

                <FooterLink text="Dont have an account?" linkText="Sign Up" href="/sign-up"/>
            </form>
        </>
    );
}

export default SignIn;