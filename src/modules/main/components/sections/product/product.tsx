import * as React from 'react';
import * as styles from './product.module.scss';
import { Slider } from '../../../../../components/slider/slider';
import products from '../../../../../assets/data/main/products.json';
import { Slide } from './slide/slide';
import { ProductSummary } from './types/product-summary';

interface Props {
}

export class Product extends React.PureComponent<Props> {

    render(): React.ReactNode {

        return (
            <div className={styles.product}>
                <Slider>
                    {(products as ProductSummary[]).map(product => <Slide key={product.info.name} {...product}/>)}
                </Slider>
            </div>
        );
    }
}
