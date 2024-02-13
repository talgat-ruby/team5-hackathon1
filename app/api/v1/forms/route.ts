import {NextRequest, NextResponse} from "next/server";
import axios, {AxiosError} from "axios";

export async function POST(req: NextRequest) {

    const form = await req.json();
    try {
        const res = await axios.post('http://localhost:8081/api/v1/forms', {...form}, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        return NextResponse.json(res.status);
    }
    catch (e) {
        if (e instanceof  AxiosError) {
            return NextResponse.json((e.response.data || undefined), {status: 400})
        }
        console.log(e);
    }
}