'use client'
import Link from "next/link";
import {redirect} from "next/navigation";
import {useFormStore} from "@/store/zustand";
import {addonsMap, plansMap} from "@/lib/data";
export default function Step4() {
    const form = useFormStore((state) => state.form);
    const setForm = useFormStore((state) => state.setForm);
    const addOns = Object.keys(form.addOns).filter(key => form.addOns[key]);
    const total = addOns.reduce((total, addOn) => total + (addonsMap.get(addOn) || 0), 0) + (plansMap.get(form.plan) || 0);
    const handleClick = () => {

        redirect('/confirm');
    }
    return (
        <section>
            <hgroup className='flex flex-col gap-y-3'>
                <h3 className='text-denim text-5xl font-bold pb-1.5'>
                    Personal info
                </h3>
                <p className='text-figmaGray text-2xl font-normal'>
                    Please provide your name, email address, and phone number.
                </p>
            </hgroup>
            <article>
                <section>
                    <div>
                        <h5>{form.plan} ({form.period})</h5>
                        <Link href="../step3">change</Link>
                    </div>
                    <div>
                        <b>${plansMap.get(form.plan)}/mo</b>
                    </div>
                </section>
                <section>
                    {
                        addOns.map((key) => (
                            <div key={key}>
                                <p>
                                    {key}
                                </p>
                                <span>+${addonsMap.get(key)}/mo</span>
                            </div>
                            )
                        )
                    }
                </section>
            </article>
            <article>
                <p>
                    Total (per month)
                </p>
                <span>
                    +${total}/mo
                </span>
            </article>
            <article>
                <Link href={'../step3'}>Go back</Link>
                <button onClick={handleClick}>Confirm</button>
            </article>
        </section>
    );
};

