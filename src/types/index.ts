import { ReactNode } from 'react';

export interface ProductModel {
    id: string | number;
    name: string;
    image: string;
    price: string;
    /* description: string; */
    features: string[];
    images?: string[];
}

export interface AdvantageItem {
    id: string | number;
    title: string;
    description: string;
    icon: string;
}

export interface CaseItem {
    id: string | number;
    title: string;
    description: string;
    image: string;
    link?: string;
    type?: 'photo' | 'video';
    videoUrl?: string;
}

export interface ReviewItem {
    id: string;
    author: string;
    date: string;
    rating: number;
    text: string;
    productName?: string;
    reply?: {
        author: string;
        date: string;
        text: string;
    };
}

export interface StyledProps {
    offset?: number;
    count?: number;
    filled?: boolean;
    active?: boolean;
}

export interface ErrorBoundaryProps {
    children: ReactNode;
}

export interface ErrorBoundaryState {
    hasError: boolean;
} 