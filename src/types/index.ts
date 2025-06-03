export interface ProductModel {
    id: string;
    name: string;
    description: string;
    price: string;
    features: string[];
    image: string;
}

export interface AdvantageItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface CaseItem {
    id: string;
    title: string;
    description: string;
    image: string;
    type: 'photo' | 'video';
    videoUrl?: string;
}

export interface ReviewItem {
    id: string;
    author: string;
    text: string;
    rating: number;
    date: string;
    avatar?: string;
    link?: string;
} 