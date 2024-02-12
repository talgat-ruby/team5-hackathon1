import { create } from 'zustand'
import exp from "constants";

type addOns = {
    [key: string]: boolean
}

export type periodType = 'monthly' | 'yearly';
export type planType = 'arcade' | 'advanced' | 'pro';

export type formDataType = {
    name: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    plan: planType,
    period: periodType,
    addOns: addOns
}

export type formError = {
    [key: string]: string
}

type FormStore = {
    form:  formDataType,
    error: formError,
    setForm: (payload: formDataType) => void,
    setName: (payload: string | undefined) => void,
    setEmail: (payload: string | undefined) => void,
    setPhone: (payload: string | undefined) => void,
    setPlan: (payload: planType ) => void,
    setPeriod: (payload: periodType ) => void,
    setAddons: (payload: addOns) => void,
    setError: (payload: formError) => void
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
    error: {},
    setForm: (payload) => set((state) => ({ form: {...payload}})),
    setName: (payload) => set((state) => ({form: {...state.form, name: payload}})),
    setEmail: (payload) => set((state) => ({form: {...state.form, email: payload}})),
    setPhone: (payload) => set((state) => ({form: {...state.form, phone: payload}})),
    setPeriod: (payload) => set((state) => ({form: {...state.form, period: payload}})),
    setPlan: (payload) => set((state) => ({form: {...state.form, plan: payload}})),
    setAddons: (payload) => set((state) => ({form: {...state.form, addOns: payload}})),
    setError: (payload) => set((state) => ({error: {...state.error, ...payload}})),

}));