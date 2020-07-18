import * as React from 'react';
import styles from './bullet-list.module.scss';
import { BulletListItem } from '../../../../types/bullet-list-item';

interface Props {
    item: BulletListItem;
}

export class BulletList extends React.PureComponent<Props> {

    render(): React.ReactNode {
        const { title, items } = this.props.item;
        return (
            <div className={styles.bulletList}>
                <div className={styles.bulletList__title}>
                    {title}
                </div>
                <ul>
                    {items.map(item => <li key={item} className={styles.bulletList__item}>{item}</li>)}
                </ul>
            </div>
        );
    }
}
