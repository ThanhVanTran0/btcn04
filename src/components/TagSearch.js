import React from 'react';

import List from './List'

import ImgLoading from '../images/loading.gif'

export default class TagSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
    }

    async componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
        
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight && !this.props.showLoading) {
            this.props.taiThem(this.props.page + 1, this.props.maxPage,this.props.query);
        }
    }

    render() {
        return (
            <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                <List IMAGES={this.props.IMAGES} history={this.props.history} />
                {this.props.showLoading && <img src={ImgLoading}/>}
            </div>
        );
    }
}