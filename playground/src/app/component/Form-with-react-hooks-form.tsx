'use client'

import React from 'react';
import { type FieldValues, useForm } from 'react-hook-form';

export const FormWithReactHooksForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
        reset,
        getValues
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        await new Promise(resolve => {
            setTimeout(resolve, 1000);
            console.log(data);
        });

        reset();
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-y-2">
            <input
                {
                    ...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "E-mail inválido",
                        },
                    })
                }
                type='email'
                placeholder='E-mail'
                className="px-4 py-2 rounded text-black"/>
                {
                    errors.email && (
                        <p className="text-red-500 text-center">{`${errors.email.message}`}</p>
                    )
                }
            <input
                {
                    ...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters'
                        },
                        maxLength: {value: 20, message: 'Password cannot be more than 20 characters'},
                    })
                }
                type="password"
                placeholder='Password'
                className="px-4 py-2 rounded text-black"/>
                {
                    errors.password && (
                        <p className='text-red-500 text-center'>{`${errors.password.message}`}</p>
                    )
                }
            <input
                {
                    ...register('confirmPassword', {
                        required: 'Confirm password is required',
                        validate: (value) => 
                            value === getValues('password')  || "Password must match",
                    })
                }
                type="password"
                placeholder='Confirm Password'
                className="px-4 py-2 rounded text-black"/>
                {errors.confirmPassword && (
                    <p className="text-red-500 text-center">{`${errors.confirmPassword.message}`}</p>
                )}
            <button
            disabled={isSubmitting}
            type='submit'
            className="bg-blue-500 disabled:bg-gray-500 py-2 rounded">
                Submit
            </button>
        </form>
    )
}
