import * as React from 'react';
import { PageSection } from '../../common/page-section/page-section';
import { Title } from '../../common/title/title';
import { BulletList } from '../../common/bullet-list/bullet-list';
import { BulletListItem } from '../../../../types/bullet-list-item';

interface Props {
    productChallenges: string[];
    technicalChallenges: string[];
}

export class Challenges extends React.PureComponent<Props> {
    private readonly productChallengesItem: BulletListItem;
    private readonly technicalChallengesItem: BulletListItem;

    constructor(props: Props) {
        super(props);

        this.productChallengesItem = {
            title: 'Product challenges we had:',
            items: props.productChallenges
        };
        this.technicalChallengesItem = {
            title: 'Technical challenges we had:',
            items: props.technicalChallenges
        };
    }

    render(): React.ReactNode {
        return (
            <PageSection>
                <Title title={'Challenges'}/>
                <BulletList item={this.productChallengesItem}/>
                <BulletList item={this.technicalChallengesItem}/>
            </PageSection>
        );
    }
}
