/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type IProp = {
    onSubmit: SubmitHandler<FieldValues>
    children: React.ReactNode
    resolver?: any
    defaultValues?: any
}

type FormConfig = {
    resolver?: any;
    defaultValues?: any;
}
const MainForm = ({ onSubmit, children, resolver, defaultValues }: IProp) => {
    const formConfig: FormConfig = {}

    if (resolver) {
        formConfig.resolver = resolver
    }
    if (defaultValues) {
        formConfig.defaultValues = defaultValues
    }
    const submit = (data: FieldValues) => {

        onSubmit(data)
        // methods.reset()
    }
    const methods = useForm(formConfig);
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit)} >
                {children}
            </form>
        </FormProvider>
    );
};

export default MainForm;