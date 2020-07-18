import * as React from 'react';
import { graphql, PageProps, StaticQuery } from 'gatsby';

import { Layout } from '../components/layout/layout';

interface Content extends PageProps {
    header: string;
}

export default class DemoPage extends React.PureComponent<Content> {

    render(): React.ReactNode {
        return (
            <Layout>
                <StaticQuery
                    query={graphql`
                        query {
                            allMarkdownRemark(filter: {
                             frontmatter: { template: { eq: "main" } } 
                             }) {
                                edges {
                                    node {
                                        frontmatter {
                                            path
                                            header
                                        }
                                    }
                                }
                            }
                        }
                    `}
                    render={data => (<h1>{data.header}</h1>)}
                />
                <p>Welcome to page ({this.props.path})</p>
            </Layout>
        );
    }
}