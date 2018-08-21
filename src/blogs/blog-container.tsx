import * as React from 'react';
import Blog from './blog';
import BlogHeader from './blog-header';
import { Grid, Row, Col, OverlayTrigger, Popover } from 'react-bootstrap';
import * as myData from '.././data/blog.json';
import { Iblog } from './blog.interface';

export class Container extends React.Component<any, any> {
    data: Iblog;

    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        try {
            this.data = myData as Iblog;
        } catch (e) {
            console.log(e);
            this.data = {};
        }
    }

    calculatePosition = () => {
        return {
            lg: (this.data.size.lg || 1),
            md: (this.data.size.md || 1),
            sm: (this.data.size.sm || 1),
            xs: (this.data.size.xs || 1)
        };
    }

    createRow = () => {
        const size = this.calculatePosition();
        return (
            this.data && this.data.body && this.data.body.map((content, key) => {
                return (
                    <Col key={key} md={size.md} lg={size.lg} sm={size.sm} xs={size.xs}>
                        <Blog {...content} />
                    </Col>
                );
            })
        );
    }

    render() {
        return (
            <div>
                <BlogHeader />
                <Grid fluid={true}>
                    <Row>
                        {this.createRow()};
                    </Row>
                </Grid>
            </div>
        );
    }
}