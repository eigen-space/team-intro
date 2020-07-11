import * as React from 'react';
import { createElement } from 'react';
import * as styles from './brand.module.scss';

interface Props {
    icon: React.ComponentClass<{}>;
}

export class Brand extends React.PureComponent<Props> {
    private icon: React.ComponentElement<{}, React.Component>;

    constructor(props: Props) {
        super(props);
        this.icon = createElement(props.icon);
    }

    render(): React.ReactNode {
        return (
            <div className={styles.brand}>
                {this.icon}
            </div>
        );
    }
}
