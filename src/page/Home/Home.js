import React, { Component } from 'react';
import Header from "../../comments/Header/Header";
import Content from "../../comments/Content/Content";
import Footer from "../../comments/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content/>
                <Footer />
            </div>
        );
    }
}

export default Home;