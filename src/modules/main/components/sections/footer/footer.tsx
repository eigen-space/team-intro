import * as React from 'react';
import * as styles from './footer.module.scss';
import { Locale } from '../../../../../common/locale';

interface Props {
}

export class Footer extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <div className={styles.footer}>
                <div className={styles.footer__content}>
                    {Locale.EMAIL}
                </div>
            </div>
        );
    }
}
