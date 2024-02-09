'use client';
import {redirect} from "next/navigation";
import React, {FormEvent, useState} from "react";
import Link from "next/link";

export default function Page() {
    const error = true;
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('phoneNumber', phoneNumber);
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
               <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
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
                            value={localStorage.getItem('fullName') || fullName}
                            onChange={(e) => setFullName(e.target.value)}
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
                            value={localStorage.getItem('email') || email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={localStorage.getItem('phoneNumber') || phoneNumber }
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className={'p-2.5 text-denim font-medium border-2 rounded-md text-2xl'.concat(' ', error ? 'border-redErrors ' : 'border-borderColor ')}
                       />
                   </div>
                   <div className='flex flex-row-reverse'>
                       <Link
                           onClick={handleSubmit}
                           href='../step2'
                           className='bg-denim text-white border-none outline-none cursor-pointer font-medium px-2.5 py-4 rounded-md hover:bg-lightDenim ease-out duration-300'
                       >
                           Next Step
                       </Link>
                   </div>
               </form>
           </section>
    )
}