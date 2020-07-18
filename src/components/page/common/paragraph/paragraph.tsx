import * as React from 'react';
import styles from './paragraph.module.scss';
import commonStyles from '../../../../common/styles/common.module.scss';

interface Props {
    content: string;
}

export class Paragraph extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <div className={`${styles.paragraph} ${commonStyles.text}`}>
                {this.props.content}
            </div>
        );
    }
}
