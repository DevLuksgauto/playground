'use client'

import React, { useState } from 'react'

export const FormWithoutReactHooksForm = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ errors, setErrors ] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (password !== confirmPassword){
            setErrors(["Password and confirm password must match"]);
            setIsSubmitting(false);
            return;
        };

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsSubmitting(false);
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
        {errors.length > 0 && (
            <ul>
                {errors.map(error => (
                    <li
                        key={error}
                        className="bg-red-100 text-red-500 px-4 py-2 rounded"
                    >
                        {error}
                    </li>
                ))}
            </ul>
        )}
        <input
            value={email}
            type="email"
            name="email"
            id="email"
            required
            placeholder='E-mail'
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2 rounded text-black"/>
        <input
            value={password}
            type="password"
            name="password"
            id="password"
            required
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            className="px-4 py-2 rounded text-black"/>
        <input
            value={confirmPassword}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            placeholder='Confirm Password'
            onChange={e => setConfirmPassword(e.target.value)}
            className="px-4 py-2 rounded text-black"/>
        <button
        type='submit'
        disabled={isSubmitting}
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
        >
            Submit
        </button>
    </form>
  )
}
