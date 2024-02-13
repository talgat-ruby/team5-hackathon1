export type subscription = {
    'monthly': number,
    'yearly': number
};
export const plansMap:Map<string, subscription> = new Map([
    ['arcade', {'monthly': 9, 'yearly': 90}],
    ['advanced', {'monthly': 12, 'yearly': 120}],
    ['pro', {'monthly': 15, 'yearly': 150}]
]);
export const addonsMap:Map<string, subscription> = new Map([
    ['onlineService', {'monthly': 1, 'yearly': 10}],
    ['largerStorage', {'monthly': 2, 'yearly': 20}],
    ['customizableProfile', {'monthly': 2, 'yearly': 20}]
]);

export const subscriptionType = {
    monthly: 'mo',
    yearly: 'yr'
}
export const subscriptionTypeLong = {
    monthly: 'month',
    yearly: 'year'
}

export enum AppRoutes {
    STEP1 = 'step1',
    STEP2 = 'step2',
    STEP3 = 'step3',
    STEP4 = 'step4',
    STEP5 = 'step5'
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.STEP1]:'/step1',
    [AppRoutes.STEP2]: '/step2',
    [AppRoutes.STEP3]: '/step3',
    [AppRoutes.STEP4]: '/step4',
    [AppRoutes.STEP5]: '/confirm'
};