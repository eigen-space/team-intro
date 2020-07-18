import * as React from 'react';
import styles from './top-list-item.module.scss';
import commonStyles from '../../../../../common/styles/common.module.scss';

interface Props {
    order: number;
    content: string;
}

export class TopListItem extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <div className={styles.topListItem}>
                <div className={styles.topListItem__order}>
                    {this.props.order}
                </div>
                <div className={commonStyles.text}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}
