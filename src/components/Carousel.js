import React from 'react';

import Card from '../components/Card';

import bullsvsbears from '../assets/images/bullsvsbears.jpg'
import gödel from '../assets/images/gödel.png';
import lstm from '../assets/images/lstm.png';
import linkedin from '../assets/images/linkedin.png';
import evverest from '../assets/images/evverest.png';
import react_logo from '../assets/images/react.png';
import netlogo from '../assets/images/netlogo.png';

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
                    imgSrc: gödel,
                    link: 'https://github.com/alyizzet/OrionLeadData/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'CV Card',
                    subTitle: 'LinkedIn',
                    imgSrc: linkedin,
                    link: 'https://uk.linkedin.com/in/ali-izzet-metin-71700617a',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Futures Price Forecaster',
                    subTitle: 'My Bachelors Thesis',
                    imgSrc: lstm,
                    link: 'https://github.com/alyizzet/LSTM-ELK',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Agent Based Modelling ',
                    subTitle: 'Digital Advertising Simulations',
                    imgSrc: netlogo,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Vanilla .js Small Projects',
                    subTitle: 'Coming Soon',
                    imgSrc: evverest,
                    link:'https://uk.linkedin.com/in/ali-izzet-metin-71700617a', 
                    selected: false
                },
                {
                    id: 5,
                    title: 'Portfolio Website',
                    subTitle: 'React-app Project',
                    imgSrc: react_logo,
                    link: 'https://github.com/alyizzet/portAli',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Traders:Bulls vs Bears Game',
                    subTitle: 'Coming Soon...',
                    imgSrc: bullsvsbears,
                    link:'https://uk.linkedin.com/in/ali-izzet-metin-71700617a', 
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