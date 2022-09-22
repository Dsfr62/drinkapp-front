export interface CardProps {
    image?: any;
    title: string;
    likes: number;
    is_liked: boolean;
    is_saved: boolean;
    author: string;
    min_player?: number;
    max_player?: number;
};