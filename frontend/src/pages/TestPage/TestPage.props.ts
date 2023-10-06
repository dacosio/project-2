interface Card {
    _id: string;
    title: string;
    body: string;
}

export interface TestPageGeneratedProps {
    data: Card[] | undefined;
    title: string;
    body: string;
}