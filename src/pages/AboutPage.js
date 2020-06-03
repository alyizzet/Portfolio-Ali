import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hi there! You can call me Ali. I'm a software engineer with experience in AWS & GCP, Python(Django, Keras, ScikitLearn), Javascript(Node, React, React Native), SQL and NoSQL Databases and Go.</p>

            <p>I'm always learning new technologies day, night and fortnight. I believe it is very important to be on the cutting edge always.</p>

            <p>I have obtained my Bachelors from Istanbul Technical University and I will start my Computer Science Masters in University of London this september.</p>

            </Content>
        </div>
    );

}

export default AboutPage;