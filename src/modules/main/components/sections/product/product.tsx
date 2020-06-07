import * as React from 'react';
import * as styles from './product.module.scss';
import { Slider } from '../../../../../components/slider/slider';
import products from '../../../../../assets/data/main/products.json';
import { Slide } from './slide/slide';
import { ProductSummary } from './types/product-summary';
import { Section } from '../../../../../components/section/section';

interface Props {
}

export class Product extends React.PureComponent<Props> {
    private title = 'Cases';

    render(): React.ReactNode {

        return (
            <Section title={this.title}>
                <div className={styles.product}>
                    <Slider>
                        {(products as ProductSummary[]).map(product => <Slide key={product.info.name} {...product}/>)}
                    </Slider>
                </div>
            </Section>
        );
    }
}
