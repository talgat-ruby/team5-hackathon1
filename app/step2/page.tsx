'use client'
import React, {useState} from "react";
import {redirect} from "next/navigation";
import {periodType, planType, useFormStore} from "@/store/zustand";
import {routePaths} from "@/lib/data";
import Navbar from "@/lib/components/Navbar/Navbar";
import Text from "@/lib/components/Text/Text";


export default function Step2() {
    const form = useFormStore((state) => state.form);
    const {setPlan, setPeriod} = useFormStore();
    const [currentPlan, setCurrentPlan] = useState(form.plan);
    const [currentPeriod, setCurrentPeriod] = useState(form.period);
    console.log(form, 'step2');

    const handleSubmit = () => {
       setPlan(currentPlan);
       setPeriod(currentPeriod);
    }

    return (
        <>
            <section className='flex flex-col gap-y-8 mt-10'>
                <Text
                    title='Select your plan'
                    description='You have the option of monthly or yearly billing.'
                />
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
                </form>
            </section>
            <Navbar
                previous={routePaths.step1}
                next={routePaths.step3}
                onClick={handleSubmit}
            />
        </>
    )
}