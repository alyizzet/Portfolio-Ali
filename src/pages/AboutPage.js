import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>

            <p>Hi there! You can call me Ali. I'm a software engineer with demonstrable experience in: </p>
            <ol>Amazon Web Services & Google Cloud Platform</ol> 
            <ol>Apache Spark, Kafka & Airflow</ol>
            <ol>Python(Django, Keras, ScikitLearn and all sorts of libraries, I love Python!)  </ol> 
            <ol>Javascript(Express.js, React.js, React Native) </ol> 
            <ol>SQL and NoSQL Databases(PostgreSQL, MongoDB, Redis, ClickhouseDB, kdb+)</ol> 
    
            <p>I'm always learning new technologies by day, night and fortnight. I believe it is very important to be on the cutting edge always all the time.</p>

            <p>I have obtained my Bachelors from Istanbul Technical University and I will start my Computer Science Masters at Birkbeck College University of London this september.</p>


            </Content>
        </div>
    );

}

export default AboutPage;