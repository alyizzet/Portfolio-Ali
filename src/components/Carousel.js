import React from 'react';

import Card from '../components/Card';

import bullsvsbears from '../assets/images/bullsvsbears.jpg'
import devgrub from '../assets/images/devgrub.png';
import lstm from '../assets/images/lstm.png';
import linkedin from '../assets/images/linkedin.png';
import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Gödel Machine',
                    subTitle: 'Intelligent Media Buyer',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Alistair Metin',
                    subTitle: 'LinkedIn',
                    imgSrc: linkedin,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'LSTM - Recurrent Neural Networks',
                    subTitle: 'Forecasting Electricity Futures with High Accuracy - My Bachelors Thesis',
                    imgSrc: lstm,
                    link: 'https://github.com/alyizzet/LSTM-ELK',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Agent Based Modelling ',
                    subTitle: 'Programmatic Advertising Landscape is simulated  in this project using Netlogo',
                    imgSrc: evverest,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Vanilla Javascript Small Projects',
                    subTitle: 'Coming Soon',
                    imgSrc: evverest,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Portfolio Website',
                    subTitle: 'This website is one of my the projects in my react.js portfolio',
                    imgSrc: evverest,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Stock Traders: Bulls vs Bears Game',
                    subTitle: 'Coming Soon...',
                    imgSrc: bullsvsbears,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },

            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;