import * as React from 'react';
import { TopListItem } from './top-list-item/top-list-item';
import styles from './top-list.module.scss';

interface Props {
    list: string[];
}

export class TopList extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <div className={styles.container}>
                {this.props.list.map((item, i) => <TopListItem key={item} order={i + 1} content={item}/>)}
            </div>
        );
    }
}
