import * as React from 'react';
import { PageSection } from '../../common/page-section/page-section';
import { Title } from '../../common/title/title';
import { Paragraph } from '../../common/paragraph/paragraph';
import { TopList } from '../../common/top-list/top-list';
import { SectionModeType } from '../../common/page-section/enums/enums';
import styles from './task.module.scss';

interface Props {
    introduction: string;
    conclusion: string;
    tasks: string[];
}

export class Task extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <PageSection mode={SectionModeType.SECONDARY}>
                <Title title={'Task'}/>
                <Paragraph content={this.props.introduction}/>
                <div className={styles.listWrapper}>
                    <TopList list={this.props.tasks}/>
                </div>
                {this.props.conclusion && <Paragraph content={this.props.conclusion}/>}
            </PageSection>
        );
    }
}
