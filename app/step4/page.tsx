'use client'
import Link from "next/link";
import {redirect} from "next/navigation";

const Page = () => {
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
                        <h5>{localStorage.getItem('plan')} ({localStorage.getItem('subscription')})</h5>
                        <Link href="../step3">change</Link>
                    </div>
                    <div>
                        <b>${localStorage.getItem('plan_price')}/mo</b>
                    </div>
                </section>
                <section>
                    <div>
                        <p>
                            Online Service
                        </p>
                        <span>+$1/mo</span>
                    </div>
                    <div>
                        <p>
                            Larger Storage
                        </p>
                        <span>+$2/mo</span>
                    </div>
                    <div>
                        <p>
                            Larger Storage
                        </p>
                        <span>+$2/mo</span>
                    </div>
                </section>
            </article>
            <article>
                <p>
                    Total (per month)
                </p>
                <span>
                    +$12/mo
                </span>
            </article>
            <article>
                <Link href={'../step3'}>Go back</Link>
                <button onClick={handleClick}>Confirm</button>
            </article>
        </section>
    );
};

export default Page;