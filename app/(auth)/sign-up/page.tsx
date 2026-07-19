'use client';

import {useForm} from "react-hook-form";
import {Form} from "radix-ui";
import InputField from "@/components/forms/inputField";
import {error} from "next/dist/build/output/log";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";

function SignUp() {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting}
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: "us",
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology',
        },
        mode: 'onBlur'
    })
    const onSubmit = async (data: SignUpFormData) => {
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
                Sign Up & Personalize
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    validation={{ required: 'Full name is required', minLength: 2 }}
                />

                <InputField
                    name="email"
                    label="Email"
                    placeholder="john@example.com"
                    register={register}
                    error={errors.email}
                    validation={{  required: 'Email name is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8 }}
                />

                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />

                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk tolerance"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />

                <button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating Account': "Start your Investing Journey"}
                </button>
            </form>
        </>
    );
}

export default SignUp;