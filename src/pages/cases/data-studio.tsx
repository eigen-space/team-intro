/* eslint-disable max-len */
import * as React from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '../../components/layout/layout';
import { Background } from '../../components/page/sections/background/background';
import { Task } from '../../components/page/sections/task/task';
import { Challenges } from '../../components/page/sections/challenges/challenges';
import { PageHeader } from '../../components/page/sections/page-header/page-header';
import { ArrivalIcon } from '../../modules/main/components/icons/arrival';
import data from '../../assets/cases/data-studio/data.json';
import { PageData } from '../../types/page-data';

export default class DataStudioPage extends React.PureComponent<PageProps> {
    private content = data as PageData;

    render(): React.ReactNode {
        return (
            <Layout>
                <PageHeader
                    title={this.content.title}
                    icon={ArrivalIcon}
                    mission={this.content.mission}
                    imageUrl={this.content.imageUrl}
                />
                <Background content={this.content.background}/>
                <Task
                    conclusion={this.content.taskConclusion}
                    introduction={this.content.taskIntroduction}
                    tasks={this.content.tasks}/>
                <Challenges
                    productChallenges={this.content.productChallenges}
                    technicalChallenges={this.content.technicalChallenges}
                />
            </Layout>
        );
    }
}
