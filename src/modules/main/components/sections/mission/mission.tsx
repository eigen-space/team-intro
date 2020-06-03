import * as React from 'react';
import * as styles from './mission.module.scss';

interface Props {
}

export class Mission extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <div className={styles.mission}>
                <div className={styles.mission__container}>
                    <div className={styles.mission__content}>
                        Our mission<br/>
                        — Define high standards of software quality in the software development industry developing
                        products at the appropriate level and solving urgent problems of the community by creating
                        the necessary tools and approaches.
                    </div>
                </div>
            </div>
        );
    }
}
