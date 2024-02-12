'use server'

import axios from "axios";
import {formDataType} from "@/store/zustand";

export async function submitForm(formData: formDataType) {
    const data = await axios.post('http://localhost:8081', {
        formData
    }, {
        headers: {
            "Content-Type": 'application/json'
        }
    });
    console.log(data)
}