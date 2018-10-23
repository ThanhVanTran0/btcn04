import React from 'react';
import List from './List'

import ImgLoading from '../images/loading.gif'

class Explore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            IMAGES: [],
            maxPage: null,
            page: 1,
            showLoading: true,
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.loadMore = this.loadMore.bind(this)
    }

    async componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)

        try {
            let source = await fetch('https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=8808c69017e5203bff0d704643c98a50&extras=owner_name%2C+views%2Curl_n&per_page=20&page=1&format=json&nojsoncallback=1')
            let photos = (await source.json()).photos;
            console.log(photos);
            this.setState({
                IMAGES: photos.photo,
                maxPage: photos.pages,
                page: this.state.page + 1,
                showLoading: false

            })
        } catch (error) {
            alert('ERROR: ' + error.message)
        }

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
        if (windowBottom >= docHeight) {
            this.loadMore();
        }
    }

    async loadMore() {
        if (this.state.page > this.state.maxPage) return;
        try {
            let source = await fetch(`https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=8808c69017e5203bff0d704643c98a50&extras=owner_name%2C+views%2Curl_n&per_page=20&page=${this.state.page}&format=json&nojsoncallback=1`)
            let photos = (await source.json()).photos;
            this.setState({
                IMAGES: this.state.IMAGES.concat(photos.photo),
                page: this.state.page + 1
            })
        } catch (error) {
            alert('ERROR: ' + error.message)
        }
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <List IMAGES={this.state.IMAGES} history={this.props.history} />
                {this.state.showLoading && <img src={ImgLoading}/>}
            </div>
        );
    }
}

export default Explore
