import React from 'react';
import { Company } from '../types/company';
import { Info } from '../types/product-summary';
import { Review } from '../types/review';
import styles from './slide.module.scss';

interface Props {
    company: Company;
    review: Review;
    info: Info;
}

export class Slide extends React.PureComponent<Props> {

    render(): React.ReactNode {
        const { company, info, review } = this.props;

        return (
            <div className={styles.slide}>
                <div>
                    <div>
                        <p>{company.name}</p>
                        <p>{company.description}</p>
                    </div>
                    <div>
                        <p>{review.description}</p>
                        <p>— {review.author}, {review.role}</p>
                    </div>
                </div>
                <div>
                    <p>{info.name}</p>
                    <p>{info.task.description}</p>
                    <ul>
                        {info.task.features.map(f => (<li>{f}</li>))}
                    </ul>
                </div>
            </div>
        );
    }
}