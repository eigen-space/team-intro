import { Link } from 'gatsby';
import * as React from 'react';
import * as styles from './header.module.scss';

interface Props {
    siteTitle?: string;
}

interface DefaultProps {
    siteTitle: string;
}

export class Header extends React.PureComponent<Props & DefaultProps> {
    static defaultProps: DefaultProps = { siteTitle: '' };

    render(): React.ReactNode {
        return (
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <h1 className={styles.header__title}>
                        <Link to="/" className={styles.header__link} >
                            {this.props.siteTitle}
                        </Link>
                    </h1>
                </div>
            </header>
        );
    }
}
