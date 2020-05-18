// Gatsby supports TypeScript natively!
import * as React from 'react';
import { PageProps } from 'gatsby';

import { Layout } from '../components/layout/layout';

export default class DemoPage extends React.PureComponent<PageProps> {

    render(): React.ReactNode {
        return (
            <Layout>
                <h1>Hi from the demo page</h1>
                <p>Welcome to page ({this.props.path})</p>
            </Layout>
        );
    }
}
