import * as React from 'react';
import { PageSection } from '../../common/page-section/page-section';
import { Title } from '../../common/title/title';
import { Paragraph } from '../../common/paragraph/paragraph';

interface Props {
    content: string;
}

export class Background extends React.PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <PageSection>
                <Title title={'Background'}/>
                <Paragraph content={this.props.content}/>
            </PageSection>
        );
    }
}
