import React from 'react';
import { Company } from '../types/company';
import { Info } from '../types/product-summary';
import { Review } from '../types/review';

interface Props {
    company: Company;
    review: Review;
    info: Info;
}

export class Slide extends React.PureComponent<Props> {

    render(): React.ReactNode {
        const { company } = this.props;

        return (
            <div>{company.name}</div>
        );
    }
}