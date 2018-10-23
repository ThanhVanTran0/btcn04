import React from 'react';

import { Col, Row, Grid } from 'react-bootstrap'

import '../styles/Photo.css'

export default class Photo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            url: '',
            ownerName: '',
            view: '',
            description: '',
            date: '',
            tags: [],
        }
    }

    async componentDidMount() {
        try {
            let source2 = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8808c69017e5203bff0d704643c98a50&photo_id=${this.state.id}&format=json&nojsoncallback=1`)
            let source = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=8808c69017e5203bff0d704643c98a50&photo_id=${this.state.id}&format=json&nojsoncallback=1`);
            let data = (await source.json()).photo;
            let size = (await source2.json()).sizes.size[7];
            console.log(size);
            this.setState({
                view: data.views,
                description: data.description._content,
                date: data.dates.taken,
                tags: data.tags.tag,
                ownerName: data.owner.username,
                url: size.source,

            })
        } catch (error) {
            alert('ERROR: ' + error.message)
        }
    }

    render() {
        return (
            <div>
                <Col mdPush={1} xs={12} md={10}>
                    <img src={this.state.url} style={{ width: '100%', height: 600 }}></img>
                    <hr className="KeNgang"></hr>
                    <div>
                        <h3>{this.state.ownerName}</h3>
                        <h4>View: <span>{this.state.view}</span></h4>
                        <h4>Description: </h4>
                        <h5>{this.state.description}</h5>
                        <h4>Date: <span>{this.state.date}</span></h4>
                    </div>
                    <hr className="KeNgang"/>
                    <div>
                        <h3>Tag</h3>
                        {
                            this.state.tags.map(item => 
                                <a key={item.id} className="Tag" onClick={()=> this.props.history.push(`/btcn04/search`)}>{item._content}</a>
                            )
                        }
                    </div>
                </Col>
            </div>
        )
    }
}