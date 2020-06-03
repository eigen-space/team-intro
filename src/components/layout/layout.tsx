/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';

export class Layout extends React.PureComponent {

    render(): React.ReactNode {

        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}
