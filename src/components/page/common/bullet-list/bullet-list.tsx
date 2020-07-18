import * as React from 'react';
import styles from './bullet-list.module.scss';
import { BulletListItem } from '../../../../types/bullet-list-item';
import commonStyles from '../../../../common/styles/common.module.scss';

interface Props {
    item: BulletListItem;
}

export class BulletList extends React.PureComponent<Props> {

    render(): React.ReactNode {
        const { title, items } = this.props.item;
        return (
            <div className={`${styles.bulletList} ${commonStyles.text}`}>
                <div className={commonStyles.text}>
                    {title}
                </div>
                <ul>
                    {items.map(item => <li key={item} className={commonStyles.text}>{item}</li>)}
                </ul>
            </div>
        );
    }
}
