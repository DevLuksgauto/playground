'use client'

import { TSignUpSchema, signUpSchema } from '../lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';



export const FormWithRhfAndZod = () => {
  const {
          register,
          handleSubmit,
          formState: { errors, isSubmitting},
          reset,
      } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
      });
  
      const onSubmit = async (data: TSignUpSchema) => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log(data);
          reset();
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
}
