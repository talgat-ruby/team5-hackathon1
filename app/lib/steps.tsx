'use client'
import { usePathname } from 'next/navigation'
export default function Steps({stepsObj}) {
    const pathname = usePathname()
    const resPathname = Number(pathname.slice(-1))
    return (
        <section>
            <div className={stepsObj.id === resPathname ? "active" : ""}>{stepsObj.id}</div>
            <p>{stepsObj.num}</p>
            <h3>{stepsObj.info}</h3>
        </section>
    )
}