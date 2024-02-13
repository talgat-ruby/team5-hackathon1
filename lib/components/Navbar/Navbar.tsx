import React, {FC} from 'react';
import Link from "next/link";

interface NavbarProps {
    previous?: string,
    next: string,
    onClick?: () => void
}
const Navbar:FC<NavbarProps> = ({previous, next, onClick}) => {
    return (
        <nav onClick={onClick}>
            <section>
                {previous && <Link href={previous}>GO Back</Link>}
                <Link href={next}>Next Step</Link>
            </section>
        </nav>
    );
};

export default Navbar;