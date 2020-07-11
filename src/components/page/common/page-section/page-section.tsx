import * as React from 'react';
import styles from './page-section.module.scss';
import commonStyles from '../../../../common/styles/common.module.scss';
import { SectionModeType } from './enums/enums';

interface Props {
    mode?: SectionModeType;
}

interface DefaultProps {
    mode: SectionModeType;
}

export class PageSection extends React.PureComponent<Props, {}, DefaultProps> {
    static defaultProps: DefaultProps = { mode: SectionModeType.PRIMARY };

    render(): React.ReactNode {
        const { mode } = this.props;

        const modeStyles = mode === SectionModeType.PRIMARY ? styles.primaryModeStyles : styles.secondaryModeStyles;

        return (
            <div className={`${commonStyles.container} ${modeStyles}`}>
                {this.props.children}
            </div>
        );
    }
}
