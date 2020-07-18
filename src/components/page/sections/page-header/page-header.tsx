import * as React from 'react';
import styles from './page-header.module.scss';
import commonStyles from '../../../../common/styles/common.module.scss';
import { Brand } from '../../../../modules/main/components/brand/brand';

interface Props {
    title: string;
    icon: React.ComponentClass<{}>;
    mission: string;
    imageUrl: string;
}

export class PageHeader extends React.PureComponent<Props> {

    render(): React.ReactNode {
        const { title, icon, mission, imageUrl } = this.props;

        return (
            <div className={`${commonStyles.container} ${styles.header}`}>
                <h1 className={styles.header__title}>{title}</h1>
                <Brand icon={icon}/>
                <h2 className={styles.header__mission}>{`— ${mission}`}</h2>
                <img className={styles.header__product} src={imageUrl}/>
            </div>
        );
    }
}
