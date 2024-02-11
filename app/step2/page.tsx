'use client'
import Link from "next/link";
import React, {useState} from "react";
import {redirect} from "next/navigation";
import {periodType, planType, useFormStore} from "@/store/zustand";
import step2Css from './step2.module.css';

const plans = new Map([['arcade', 9], ['advanced', 12], ['pro', 15]]);

export default function Step2() {
    const form = useFormStore((state) => state.form);
    const setForm = useFormStore((state) => state.setForm);
    const [currentPlan, setCurrentPlan] = useState(form.plan);
    const [currentPeriod, setCurrentPeriod] = useState(form.period);
    console.log(form, 'step2');

    const handleSubmit = (formData: FormData) => {
       setForm({
            ...form,
            plan: currentPlan as planType,
            period: currentPeriod as periodType
        });
       redirect('/step3');
    }

    return (
        <section className='flex flex-col gap-y-8 mt-10'>
            <hgroup className='flex flex-col gap-y-3'>
                <h3 className='text-denim text-5xl font-bold pb-1.5'>
                    Select your plan
                </h3>
                <p className='text-figmaGray text-2xl font-normal'>
                    You have the option of monthly or yearly billing.
                </p>
            </hgroup>
            <form action={handleSubmit} className='flex flex-col gap-y-6'>
                <fieldset id='plan'>
                    <label htmlFor='arcade' className='flex'>
                        Arcade
                    </label>
                    <input
                        type='radio'
                        id="arcade"
                        name='plan'
                        value='arcade'
                        checked={(currentPlan === 'arcade') || undefined}
                        onChange={(e) => setCurrentPlan(e.target.value as planType)}
                    />
                    <label htmlFor='advanced'>
                        Advanced
                    </label>
                    <input
                        type='radio'
                        id="advanced"
                        name='plan'
                        value='advanced'
                        checked={(currentPlan === 'advanced') || undefined}
                        onChange={(e) => setCurrentPlan(e.target.value as planType)}

                    />
                    <label htmlFor='pro'>
                        Pro
                    </label>
                    <input
                        type='radio'
                        id="pro"
                        name='plan'
                        value='pro'
                        checked={(currentPlan === 'pro') || undefined}
                        onChange={(e) => setCurrentPlan(e.target.value as planType)}

                    />
                </fieldset>
                <fieldset id='subscription'>
                    <label htmlFor='monthly' >
                        Monthly
                    </label>
                    <input
                        type='radio'
                        id='monthly'
                        value='monthly'
                        name='subscription'
                        checked={(currentPeriod === 'monthly') || undefined}
                        onChange={(e) => setCurrentPeriod(e.target.value as periodType)}
                    />
                    <label htmlFor='yearly'>
                        Yearly
                    </label>
                    <input
                        type='radio'
                        id='yearly'
                        value='yearly'
                        name='subscription'
                        checked={(currentPeriod === 'yearly') || undefined}
                        onChange={(e) => setCurrentPeriod(e.target.value as periodType)}
                    />
                </fieldset>
                <section>
                    <Link href='../step1'>GO Back</Link>
                    <button type='submit'>Next Step</button>
                </section>
            </form>
        </section>
    )
}