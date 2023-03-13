export type IGenerateId = () => string
export type IMatch = {
    id?: string,
    teamA: string,
    teamB: string,
    matchDate: Date,
    score?: [number, number]
    value?: number
    isOpen?: boolean
}
export type IUser = {
    id?: string;
    name: string;
    email: string;
    isAdmin?: boolean;
    score?: number;
}

export type IBet = {
    id?: string,
    match: Required<IMatch>,
    user: Omit<IUser, "password">
}