import {NextRequest, NextResponse} from "next/server";
import axios, {AxiosError} from "axios";
import {string, z} from 'zod';
const postSchemaValidate = z.object({
    name: string(),
    email: string().regex(/^\w+([\.-]?\w+)*@[\w-]+\.com$/, 'email is not valid'),
    phone: string().regex(/^[\\+][(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{1,6}$/, 'Phone is not valid'),
    plan: string(),
    period: string(),
    addOns: z.record(z.string(), z.boolean())
}).required();
export async function POST(req: NextRequest) {

    const form = await req.json();
    const result = postSchemaValidate.safeParse(form);

    if(!result.success) {
        const errors: {[key: string]: string} = {}
        result.error.issues.forEach((err) => {
            errors[err.path.toString()] = err.message;
        })
        return NextResponse.json({error: errors}, {status: 400})
    }
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
            return NextResponse.json((e?.response.data || undefined), {status: 400})
        }
        console.log(e);
    }
}