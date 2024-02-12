export const plansMap = new Map([['arcade', 9], ['advanced', 12], ['pro', 15]]);
export const addonsMap = new Map([['onlineService', 1], ['largerStorage', 2], ['customizableProfile', 2]]);
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