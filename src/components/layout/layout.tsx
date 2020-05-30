/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Header } from '../header/header';
import { Mission } from '../mission/mission';

interface Props {
    children: React.ReactNode[];
}

export class Layout extends React.PureComponent<Props> {
    render(): React.ReactNode {

        return (
            <React.Fragment>
                <StaticQuery
                    query={graphql`
                        query SiteTitleQuery {
                            site {
                                siteMetadata {
                                  title
                                }
                            }
                        }
                    `}
                    render={data => (
                        <Header siteTitle={data.site.siteMetadata.title}/>
                    )}
                />
                <Mission/>
            </React.Fragment>
        );
    }
}
