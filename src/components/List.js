import React from 'react';
import { Col } from 'react-bootstrap'
import { withStyles } from '@material-ui/core/styles';
import '../styles/List.css'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({

});

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: null,
        }
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    onMouseEnter(id) {
        this.setState({
            selectedId: id
        })
    }

    onMouseLeave() {
        this.setState({
            selectedId: null
        })
    }

    onImageClick = (item) => {
        this.props.history.push(`/btcn04/photo/${item.id}`)
    } 

    render() {
        return (
            <div>
                <Col mdPush={1} xs={12} md={10}>
                    <GridList cellHeight={250} cols={3}>
                        {this.props.IMAGES.map(item => (
                            <GridListTile onMouseLeave={() => this.onMouseLeave()} onMouseEnter={() => this.onMouseEnter(item.id)} key={item.id}>
                                <img onClick={() => this.onImageClick(item)} src={item.url_n} alt={item.title} />
                                {
                                    item.id === this.state.selectedId && <GridListTileBar
                                        title={<h4>{item.title}</h4>}
                                        subtitle={<span style={{ fontSize: 16, marginBottom: 5 }}>By: {item.ownername} <br /> Views: {item.views}</span>}
                                    /> }
                            </GridListTile>
                        ))}
                    </GridList>
                </Col>
            </div>
        );
    }
}

export default withStyles(styles)(List)
