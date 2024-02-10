import { create } from 'zustand'

type addOns = {
    [key: string]: boolean
}

export type periodType = 'monthly' | 'yearly';
export type planType = 'arcade' | 'advanced' | 'pro';

type formDataType = {
    name: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    plan: planType,
    period: periodType,
    addOns: addOns

}

type FormStore = {
    form:  formDataType,
    setForm: (payload: formDataType) => void

}

export const useFormStore = create<FormStore>((set) => ({
    form: {
        name: undefined,
        email: undefined,
        phone: undefined,
        plan: 'arcade',
        period: 'monthly',
        addOns: {
            onlineService: true,
            largerStorage: false,
            customizableProfile: false
        }
    },
    setForm: (payload) => set((state) => ({ form: {...payload}})),
}));