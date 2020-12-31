export interface PaintingProps {
    painting: {
        primaryimageurl: string;
        peoplecount: number;
        title: string;
        people: People[];
        dated: string;
        classification: string;
    }
}

export interface People {
    displayname: string;
}