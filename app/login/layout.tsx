import Steps from '../lib/steps';
import React from "react";
export default function LoginLayout({children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    const steps = [{
        'id': 1,
        'num': 'step 1',
        'info': 'your info'
    },
        {
            'id' : 2,
            'num':'step 2',
            'info': 'select plan'
        },
        {
            'id' : 3,
            'num': 'step 3',
            'info': 'add-ons'
        },
        {
            'id': 4,
            'num': 'step 4',
            'info': 'summary'
        }]
    return (
        <main>
            <aside>
                {steps.map((step) => (
                    <Steps stepsObj = {step} key={step.id}/>
                ))}
            </aside>
            <article>
                {children}
            </article>
        </main>
    )
}