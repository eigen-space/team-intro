import * as React from 'react';
import * as styles from './product.module.scss';
import { Slider } from '../../../../../components/slider/slider';

interface Props {
}

export class Product extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <div className={styles.product}>
                <Slider>
                    <div className={styles.product__content}>
                        1 slider<br/>
                        — Define high standards of software quality in the software development industry developing
                        products at the appropriate level and solving urgent problems of the community by creating
                        the necessary tools and approaches.
                    </div>
                    <div className={styles.product__content}>
                        2 slider<br/>
                        — Define high standards of software quality in the software development industry developing
                        products at the appropriate level and solving urgent problems of the community by creating
                        the necessary tools and approaches.
                    </div>
                </Slider>
            </div>
        );
    }
}
