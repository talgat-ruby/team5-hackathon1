'use client'
import React, {useState} from "react";
import Link from "next/link";
import {redirect} from "next/navigation";

const addOns = new Map([['onlineService', 1], ['largerStorage', 2], ['customizableProfile', 2]]);
const Page = () => {
    const [onlineService, setOnlineService] = useState<boolean>(false);
    const [largerStorage, setLargerStorage] = useState<boolean>(false);
    const [customizableProfile, setCustomizableProfile] = useState<boolean>(false);

    const handleSubmit = (e : React.FormEvent) => {
        localStorage.setItem('onlineService', String(onlineService));
        localStorage.setItem('onlineService_price', String(addOns.get('onlineService')));
        localStorage.setItem('largerStorage', String(largerStorage));
        localStorage.setItem('largerStorage_price', String(addOns.get('largerStorage')));
        localStorage.setItem('customizableProfile', String(customizableProfile));
        localStorage.setItem('customizableProfile_price', String(addOns.get('customizableProfile')));
        console.log(onlineService, largerStorage, customizableProfile);
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
            <form>
                <section>
                    <label className='flex'>
                        <input
                            type='checkbox'
                            name='onlineService'
                            value='onlineService'
                            checked={Boolean(localStorage.getItem('onlineService'))  || onlineService}
                            onChange={(e) => setOnlineService(e.target.checked)}
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
                            checked={Boolean(localStorage.getItem('largerStorage'))  || largerStorage}
                            onChange={(e) => setLargerStorage(e.target.checked)}
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
                            checked={Boolean(localStorage.getItem('customizableProfile'))  || customizableProfile}
                            onChange={(e) => setCustomizableProfile(e.target.checked)}
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
                    <Link onClick={handleSubmit} href='../step4' type='submit'>Next Step</Link>
                </section>
            </form>
        </section>
    );
};

export default Page;