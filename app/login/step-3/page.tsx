'use client'
import Link from "next/link"
import {useState} from "react";
import {redirect} from "next/navigation";


export default function StepThree() {
    const [isOnline, setIsOnline] = useState(false);
    const [isLarger, setIsLarger] = useState(false);
    const [isCustomizable, setICustomizable] = useState(false);

    function radioCheckOnline() {
        setIsOnline(!isOnline)
    }
    function radioCheckLarger() {
        setIsLarger(!isLarger)
    }
    function radioCheckCustomizable() {
        setICustomizable(!isCustomizable)
    }

    function nextPage() {

    }
    return (
        <>
            <header>
                <h1>
                    Pick add-ons
                </h1>
                <p>
                    Add-ons help enhance your gaming experience.
                </p>
            </header>
            <main>
                    <div className={`${isOnline ? "active" : ""} radio-check`}>
                        <input type="checkbox"
                               id="online"
                               name="online"
                               checked={isOnline}
                               onChange={radioCheckOnline}
                        />
                        <label htmlFor="online">
                            <span>Online service</span>
                            Access to multiplayer games
                            <span>+1/mo</span>
                        </label>
                    </div>
                    <div className={`${isLarger ? "active" : ""} radio-check`}>
                        <input type="checkbox"
                               id="larger"
                               name="larger"
                               checked={isLarger}
                               onChange={radioCheckLarger}
                        />
                        <label htmlFor="larger">
                            <span>Larger storage</span>
                            Extra 1TB of cloud save
                            <span>+$2/mo</span>
                        </label>
                    </div>
                    <div className={`${isCustomizable ? "active" : ""} radio-check`}>
                        <input type="checkbox"
                               id="customizable"
                               name="customibzable"
                               checked={isCustomizable}
                               onChange={radioCheckCustomizable}
                        />
                        <label htmlFor="customizable">
                            <span>Customizable profile</span>
                            Custom theme on your profile
                            <span>+$2/mo</span>
                        </label>
                    </div>
                <Link href="./step-2">Go back</Link>
                <Link href="./step-4" onClick={nextPage}>Next Page</Link>
            </main>
        </>
    )
}