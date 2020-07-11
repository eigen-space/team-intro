/* eslint-disable max-len */
import * as React from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '../../components/layout/layout';
import { Background } from '../../components/page/sections/background/background';
import { Task } from '../../components/page/sections/task/task';
import { Challenges } from '../../components/page/sections/challenges/challenges';
import { PageHeader } from '../../components/page/sections/page-header/page-header';
import { ArrivalIcon } from '../../modules/main/components/icons/arrival';

export default class DataStudioPage extends React.PureComponent<PageProps> {

    render(): React.ReactNode {
        return (
            <Layout>
                <PageHeader title={'Data Studio'} icon={ArrivalIcon} mission={'Create a single information space across the company on the basis of actual and consistent data at any time.'}/>
                <Background
                    content={'Top management of all the companies requires answers. Answers for questions about projects, people and money. Arrival is no exception. The only exception is that Arrival has a very ambitious goal. It is to hav'}/>
                <Task
                    conclusion={'he next step was to create an MVP to prove the solution we have. It was the visualization of the data as a graph to be able to drill down into the'}
                    content={'As a result, we got the muddled list of user stories we need. We worked with it to get something more strong, consistent and plausible. And voila, here it is, we have the '}
                    introduction={'Our starting point was to dig into the actual problem of stakeholders. Each of our projects is about solving problems for customers. We are trying to grasp what t'}
                    tasks={['Discover data to make decisions', 'Discover data to make decisions', 'Discover data to make decisions']}/>
                <Challenges productChallenges={['1', '2', '3']} technicalChallenges={['1', '2', '3']}/>
            </Layout>
        );
    }
}
