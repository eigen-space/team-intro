import * as React from 'react';
import styles from './section.module.scss';

interface Props {
    title?: string;
}

export class Section extends React.PureComponent<Props> {

    render(): React.ReactNode {
        const { title } = this.props;

        return (
            <div className={styles.section}>
                {title && <h2>{title}</h2>}
                {this.props.children}
            </div>
        );
    }
}
