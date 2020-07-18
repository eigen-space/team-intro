import * as React from 'react';
import { default as Slick } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.custom.scss';
import styles from './slider.module.scss';

interface Props {
}

export class Slider extends React.PureComponent<Props> {
    private settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slider-lib',
        autoplay: true
    };

    render(): React.ReactNode {

        return (
            <div className={styles.slider}>
                <Slick {...this.settings}>
                    {this.props.children}
                </Slick>
            </div>
        );
    }
}
