'use client'
import Link from "next/link";
import React, {useState} from "react";

const plans = new Map([['arcade', 9], ['advanced', 12], ['pro', 15]]);
export default function Page() {
    const [plan, setPlan] = useState<string>('arcade');
    const [subscription, setSubscription] = useState<string>('monthly');
    const handleSubmit = () => {
        localStorage.setItem('plan', plan);
        localStorage.setItem('plan_price', String(plans.get(plan)))
        localStorage.setItem('subscription', subscription)
        console.log(plan, subscription);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlan(e.target.value);
    }
    const handleChangeSubscription = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (subscription === 'yearly') {
            setSubscription('monthly');
        } else {
            setSubscription('yearly');
        }
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
            <form className='flex flex-col gap-y-6'>
                <fieldset>
                    <label>
                        <input
                            type='radio'
                            id="contactChoice1"
                            name='arcade'
                            value='arcade'
                            onChange={handleChange}
                            checked={(localStorage.getItem('plan') || plan) === 'arcade'}
                        />
                    </label>
                    <label>
                        <input
                            type='radio'
                            id="contactChoice12"
                            name='advanced'
                            value='advanced'
                            onChange={handleChange}
                            checked={(localStorage.getItem('plan') || plan) === 'advanced'}
                        />
                    </label>
                    <label>
                        <input
                            type='radio'
                            id="contactChoice3"
                            name='pro'
                            value='pro'
                            onChange={handleChange}
                            checked={(localStorage.getItem('plan') || plan) === 'pro'}
                        />
                    </label>
                </fieldset>
                <label>
                    Monthly
                    <input
                        type='radio'
                        value='yearly'
                        onChange={handleChangeSubscription}
                        checked={(localStorage.getItem('subscription') || plan) === 'yearly'}
                    />
                    <span></span>
                    Yearly
                </label>
            </form>
            <section>
                <Link href='../step1'>GO Back</Link>
                <Link onClick={handleSubmit} href='../step3'>Next Step</Link>
            </section>
        </section>
    )
}