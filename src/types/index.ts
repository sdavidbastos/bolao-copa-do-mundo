export type IGenerateId = () => string
export type IScore = { teamA: number, teamB: number }
export type IMatch = {
    id?: string,
    teamA: string,
    teamB: string,
    matchDate: number,
    score?: IScore
    activate?: boolean
}
export type IUser = {
    id?: string;
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    score?: number;
}

export type IBettings = {
    [key: string]: Required<IUser>[]
}

export type IBet = {
    id?: string,
    match: Required<IMatch>,
    bettings?: IBettings,
    amount?: number,
    value?: number,
    open?: boolean
}