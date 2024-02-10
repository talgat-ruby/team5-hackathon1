'use client'
import React, {useState} from "react";
import Link from "next/link";
import {redirect} from "next/navigation";
import {periodType, planType, useFormStore} from "@/store/zustand";

const addOns = new Map([['onlineService', 1], ['largerStorage', 2], ['customizableProfile', 2]]);
export default function Step3() {
    const form = useFormStore((state) => state.form);
    const setForm = useFormStore((state) => state.setForm);
    console.log(form, 'step3');

    const handleSubmit = (formData : FormData) => {
        setForm({
            ...form,
            addOns: {
                ...form.addOns,
                onlineService: Boolean(formData.get('onlineService')),
                largerStorage: Boolean(formData.get('largerStorage')),
                customizableProfile: Boolean(formData.get('customizableProfile'))

            },
        });
        redirect('/step4');
    }

    return (
        <section>
            <hgroup className='flex flex-col gap-y-3'>
                <h3 className='text-denim text-5xl font-bold pb-1.5'>
                    Pick add-ons
                </h3>
                <p className='text-figmaGray text-2xl font-normal'>
                    Add-ons help enhance your gaming experience.
                </p>
            </hgroup>
            <form action={handleSubmit}>
                <section>
                    <label className='flex'>
                        <input
                            type='checkbox'
                            name='onlineService'
                            value='onlineService'
                            checked={Boolean(localStorage.getItem('onlineService'))  || undefined}
                        />
                        <hgroup>
                            <h5>Online service</h5>
                            <p>Access to multiplayer games</p>
                        </hgroup>
                        <span>
                            +$1/mo
                        </span>
                    </label>
                    <label className='flex'>
                        <input
                            type='checkbox'
                            name='largerStorage'
                            value='largerStorage'
                            checked={Boolean(localStorage.getItem('largerStorage'))  || undefined}
                        />
                        <hgroup>
                            <h5>Larger storage</h5>
                            <p>Extra 1TB of cloud save</p>
                        </hgroup>
                        <span>
                            +$2/mo
                        </span>
                    </label>
                    <label className='flex'>
                        <input
                            type='checkbox'
                            name='customizableProfile'
                            value='customizableProfile'
                            checked={Boolean(localStorage.getItem('customizableProfile'))  || undefined}
                        />
                        <hgroup>
                            <h5>Customizable profile</h5>
                            <p>Custom theme on your profile</p>
                        </hgroup>
                        <span>
                            +$2/mo
                        </span>
                    </label>
                </section>
                <section>
                    <Link href='../step2'>Go Back</Link>
                    <button type='submit'>Next Step</button>
                </section>
            </form>
        </section>
    );
};