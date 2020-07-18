import { Company } from './company';
import { Review } from './review';

interface Task {
    description: string;
    features: string[];
}

export interface Info {
    name: string;
    task: Task;
}

export interface ProductSummary {
    company: Company;
    info: Info;
    review: Review;
}