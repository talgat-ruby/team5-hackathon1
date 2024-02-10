'use client'
import React from "react";
import {redirect} from "next/navigation";
import {useFormStore} from "@/store/zustand";

export default function Step1() {
    const error = true;
    const form = useFormStore((state) => state.form);
    const setForm = useFormStore((state) => state.setForm);

    const handleSubmit = (formData: FormData) => {
        setForm({
            ...form,
            name: String(formData.get('name')),
            email: String(formData.get('email')),
            phone: String(formData.get('phone'))
        });
        console.log(form);
        redirect('/step2');
    }
    return (
        <section className='flex flex-col gap-y-8 mt-10'>
            <hgroup className='flex flex-col gap-y-3'>
                <h3 className='text-denim text-5xl font-bold pb-1.5'>
                    Personal info
                </h3>
                <p className='text-figmaGray text-2xl font-normal'>
                    Please provide your name, email address, and phone number.
                </p>
            </hgroup>
            <form action={handleSubmit} className='flex flex-col gap-y-6'>
                <div className='flex flex-col gap-y-2'>
                    <label
                        className='text-denim'
                        htmlFor='name'
                    >
                        Name
                    </label>
                    <input
                        name='name'
                        type='text'
                        placeholder='e.g. Stephen King'
                        value={localStorage.getItem('name') || undefined }
                        className='border-borderColor p-2.5 text-denim font-medium border-2 rounded-md text-2xl'
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label
                        className='text-denim'
                        htmlFor='email'
                    >
                        Email Address
                    </label>
                    <input
                        name='email'
                        type='email'
                        placeholder='e.g. stephenking@lorem.com'
                        value={localStorage.getItem('email') || undefined}
                        className='border-borderColor p-2.5 text-denim font-medium border-2 rounded-md text-2xl'
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label
                        className='text-denim flex justify-between'
                        htmlFor='phone'
                    >
                        Phone Number
                        <span className='text-redErrors font-medium'>
                               This field is required
                           </span>
                    </label>
                    <input
                        name='phone'
                        type='text'
                        placeholder='e.g. +1 234 567 890'
                        value={localStorage.getItem('phone') || undefined}
                        className={'p-2.5 text-denim font-medium border-2 rounded-md text-2xl'.concat(' ', error ? 'border-redErrors ' : 'border-borderColor ')}
                    />
                </div>
                <div className='flex flex-row-reverse'>
                    <button
                        type='submit'
                        className='bg-denim text-white border-none outline-none cursor-pointer font-medium px-2.5 py-4 rounded-md hover:bg-lightDenim ease-out duration-300'
                    >
                        Next Step
                    </button>
                </div>
            </form>
        </section>
    )
}