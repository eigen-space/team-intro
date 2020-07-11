import * as React from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '../components/layout/layout';
import { Header } from '../modules/main/components/sections/header/header';
import { Mission } from '../modules/main/components/sections/mission/mission';
import { Product } from '../modules/main/components/sections/product/product';

export default class DemoPage extends React.PureComponent<PageProps> {

    render(): React.ReactNode {
        return (
            <Layout>
                <Header/>
                <Mission/>
                <Product/>
            </Layout>
        );
    }
}
