'use client'
import Link from "next/link";
import {useFormStore} from "@/store/zustand";
import {addonsMap, plansMap, routePaths, subscriptionType, subscriptionTypeLong} from "@/lib/data";
import React from "react";
import Text from "@/lib/components/Text/Text";
import axios from "axios";
import { useRouter } from 'next/navigation'

export default function Step4() {
    const form = useFormStore((state) => state.form);
    const setError = useFormStore(state => state.setError);
    const addOns = Object.keys(form.addOns).filter(key => form.addOns[key]);
    const total = addOns.reduce((total, addOn) => total + (addonsMap.get(addOn)?.[form.period] || 0), 0) + (plansMap.get(form.plan)?.[form.period] || 0);
    console.log(form, 'step4')
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/forms', form, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            setError({});
            router.push(routePaths.step5)
        } catch (e) {
            setError(e?.response.data.error)
            router.push(routePaths.step1)
        }
    }

    return (
        <>
            <section>
                <Text
                    title='Finishing up'
                    description='Double-check everything looks OK before confirming.'
                />
                <article>
                    <section>
                        <div>
                            <h5>{form.plan} ({form.period})</h5>
                            <Link href="../step3">change</Link>
                        </div>
                        <div>
                            <b>${plansMap.get(form.plan)?.[form.period]}/{subscriptionType[form.period]}</b>
                        </div>
                    </section>
                    <section>
                        {
                            addOns.map((key) => (
                                <div key={key}>
                                    <p>
                                        {key}
                                    </p>
                                    <span>+${addonsMap.get(key)?.[form.period]}/{subscriptionType[form.period]}</span>
                                </div>
                                )
                            )
                        }
                    </section>
                </article>
                <article>
                    <p>
                        Total (per {subscriptionTypeLong[form.period]})
                    </p>
                    <span>
                        +${total}/{subscriptionType[form.period]}
                    </span>
                </article>
            </section>
                <section>
                    <Link href={routePaths.step3}>GO Back</Link>
                    <button onClick={handleSubmit}>Next Step</button>
                </section>
        </>
    );
};

