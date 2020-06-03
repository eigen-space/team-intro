import * as React from 'react';
import * as styles from './section.module.scss';

interface Props {
}

export class Section extends React.PureComponent<Props> {

    render(): React.ReactElement<{}> {
        return (
            <div className={styles.section}>{this.props.children}</div>
        );
    }
}
