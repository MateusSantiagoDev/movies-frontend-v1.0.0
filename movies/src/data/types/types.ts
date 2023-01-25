export type LoginRequest = {
    email: string;
    password: string;
};

export type profileRequest = {
    movie: string;
    serie: string;
    anime: string;
}

export type CardRequest = {
    title: string;
    description: string;
    avaliation: number;
    image: string;
}

export type CardDataRequest = {
    id: string;
    title: string;
    description: string;
    avaliation: number;
    image: string;
}