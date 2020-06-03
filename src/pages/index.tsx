// Gatsby supports TypeScript natively!
import * as React from 'react';
import { PageProps } from 'gatsby';

import { Layout } from '../components/layout/layout';
import { Mission } from '../modules/main/components/sections/mission/mission';
import { Header } from '../modules/main/components/sections/header/header';

export default class DemoPage extends React.PureComponent<PageProps> {

    render(): React.ReactNode {
        return (
            <Layout>
                <Header/>
                <Mission/>
            </Layout>
        );
    }
}
