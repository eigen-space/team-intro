/* eslint-disable max-len */
import * as React from 'react';
import styles from './page-header.module.scss';
import commonStyles from '../../../../common/styles/common.module.scss';
import { Brand } from '../../../../modules/main/components/brand/brand';

interface Props {
    title: string;
    icon: React.ComponentClass<{}>;
    mission: string;
}

export class PageHeader extends React.PureComponent<Props> {

    render(): React.ReactNode {
        const { title, icon, mission } = this.props;

        return (
            <div className={`${commonStyles.container} ${styles.header}`}>
                <h1 className={styles.header__title}>{title}</h1>
                <Brand icon={icon}/>
                <div className={styles.header__mission}>{`— ${mission}`}</div>
                <img className={styles.header__product} src={'../../../../assets/data/cases/data-studio/images/data-studio-product.png'}/>
            </div>
        );
    }
}
