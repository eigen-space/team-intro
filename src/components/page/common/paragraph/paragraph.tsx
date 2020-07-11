import * as React from 'react';
import styles from './paragraph.module.scss';

interface Props {
    content: string;
}

export class Paragraph extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <div className={`${styles.paragraph}`}>
                {this.props.content}
            </div>
        );
    }
}
