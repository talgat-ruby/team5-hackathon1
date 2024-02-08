import { redirect } from 'next/navigation';

export default function Login() {
    return (
        redirect("login/step-1")
    )
}