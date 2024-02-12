'use client'
import React, {useCallback, useRef} from "react";
import {useFormStore} from "@/store/zustand";
import {routePaths} from "@/lib/data";
import Text from "@/lib/components/Text/Text";
import Navbar from "@/lib/components/Navbar/Navbar";
export default function Step1() {
    const {form, error, setName, setPhone, setEmail} = useFormStore();
    const formRef = useRef<HTMLFormElement | null>(null);
    console.log(error)
    const handleSubmit = (formData: FormData) => {
        setName(String(formData.get('name')));
        setEmail(String(formData.get('email')));
        setPhone(String(formData.get('phone')));
    }

    return (
        <>
            <section className='flex flex-col gap-y-8 mt-10'>
                <Text
                    title={'Personal info'}
                    description={'Please provide your name, email address, and phone number.'}
                />
                <form ref={formRef} action={handleSubmit} className='flex flex-col gap-y-6'>
                    <div className='flex flex-col gap-y-2'>
                        <label
                            className='text-denim'
                            htmlFor='name'
                        >
                            Name
                            {
                                error?.name && <span className='text-redErrors font-medium'>
                                   {error?.name}
                                </span>
                            }
                        </label>

                        <input
                            required
                            name='name'
                            type='text'
                            placeholder='e.g. Stephen King'
                            value={form.name || undefined}
                            onChange={(e) => setName(e.target.value)}
                            className={'p-2.5 text-denim font-medium border-2 rounded-md text-2xl'.concat(' ', error?.name ? 'border-redErrors ' : 'border-borderColor ')}

                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label
                            className='text-denim'
                            htmlFor='email'
                        >
                            Email Address
                            {
                                error?.email && <span className='text-redErrors font-medium'>
                                   {error?.email}
                                </span>
                            }
                        </label>
                        <input
                            required
                            name='email'
                            type='email'
                            placeholder='e.g. stephenking@lorem.com'
                            value={form.email || undefined}
                            onChange={(e) => setEmail(e.target.value)}
                            className={'p-2.5 text-denim font-medium border-2 rounded-md text-2xl'.concat(' ', error?.email ? 'border-redErrors ' : 'border-borderColor ')}

                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label
                            className='text-denim flex justify-between'
                            htmlFor='phone'
                        >
                            Phone Number
                            {error?.phone && <span className='text-redErrors font-medium'>
                                   {error?.phone}
                            </span>}
                        </label>
                        <input
                            required
                            name='phone'
                            type='text'
                            placeholder='e.g. +1 234 567 890'
                            value={form.phone || undefined}
                            onChange={(e) => setPhone(e.target.value)}
                            className={'p-2.5 text-denim font-medium border-2 rounded-md text-2xl'.concat(' ', error?.phone ? 'border-redErrors ' : 'border-borderColor ')}
                        />
                    </div>
                </form>
            </section>
            <Navbar
                next={routePaths.step2}
                onClick={() => formRef.current?.requestSubmit()}
            />
        </>
    )
}