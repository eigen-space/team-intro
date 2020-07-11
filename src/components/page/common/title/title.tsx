import * as React from 'react';
import styles from './title.module.scss';

interface Props {
    title: string;
}

export class Title extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <div className={`${styles.title}`}>
                {this.props.title}
            </div>
        );
    }
}
