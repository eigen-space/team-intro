import * as React from 'react';
import * as styles from './header.module.scss';
// @ts-ignore
import Dots from 'vanta/dist/vanta.dots.min';
import { Section } from '../../../../../enums/section.enum';
import { YotaIcon } from '../../icons/yota';
import { ArrivalIcon } from '../../icons/arrival';
import { Brand } from '../../brand/brand';

interface Props {
}

export class Header extends React.PureComponent<Props> {
    private static MENU = [
        Section.SERVICES,
        Section.CASES,
        Section.ARTICLES,
        Section.CULTURE
    ];

    private vantaRef = React.createRef<HTMLDivElement>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private vantaEffect: any;

    static Navbar(): React.ReactElement {
        return (
            <div className={styles.header__navbar}>
                {Header.MENU.map(item => (
                    <div key={item} className={styles.header__navbarItem}>
                        {item}
                    </div>
                ))}
            </div>
        );
    }

    static Caption(): React.ReactElement {
        return (
            <h1 className={styles.header__title}>
                Don’t think about product implementation
            </h1>
        );
    }

    static Brands(): React.ReactElement {
        return (
            <div className={styles.header__brands}>
                <div className={styles.header__brandsItem}>
                    <Brand icon={ArrivalIcon}/>
                </div>
                <div className={styles.header__brandsItem}>
                    <Brand icon={YotaIcon}/>
                </div>
            </div>
        );
    }

    static Button(): React.ReactElement {
        return (
            <div className={styles.header__btnContact}>
                Contact us
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
        );
    }

    componentDidMount(): void {
        this.vantaEffect = Dots({
            el: this.vantaRef.current,
            scale: 1,
            scaleMobile: 1,
            color: 0xffffff,
            color2: 0xe1ac00,
            backgroundColor: 0x0
        });
    }

    componentWillUnmount(): void {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
        }
    }

    render(): React.ReactNode {
        return (
            <header className={styles.header}>
                <div className={styles.header__background} ref={this.vantaRef}/>
                <div className={styles.header__container}>
                    <Header.Navbar/>
                    <Header.Caption/>
                    <Header.Brands/>
                    <Header.Button/>
                </div>
            </header>
        );
    }
}
