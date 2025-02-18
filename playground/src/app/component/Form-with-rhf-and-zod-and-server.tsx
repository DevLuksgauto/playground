'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { signUpSchema, TSignUpSchema } from '../lib/types';
import { zodResolver } from '@hookform/resolvers/zod';

export const FormWithRhfAndZodAndServer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
        // reset,
        setError,
    } = useForm<TSignUpSchema>({
            resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (data: TSignUpSchema) => {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            alert('Submitting form failed!');
            return
        }

        if (responseData.erros){
            const errors = responseData.errors;
            if (errors.email){
                setError('email', {
                    type: 'server',
                    message: errors.email,
                });
            } else if (errors.password){
                setError('password', {
                    type: 'server',
                    message: errors.password,
                });
            } else if (errors.confirmPassword){
                setError('confirmPassword', {
                    type: 'server',
                    message: errors.confirmPassword,
                });
            } else {
                alert('Something went wrong!')
            }
        };

        // reset();
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-y-2">
            <input
                {
                    ...register('email')
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
                    ...register('password')
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
                    ...register('confirmPassword')
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
};
