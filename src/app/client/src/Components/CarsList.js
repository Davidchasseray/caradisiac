import React, { Component } from 'react';
import Car from './Car';

class CarsList extends Component {
    

    render() {
        if (this.props.searchRes !== null) {
            let rows = [];
            this.props.searchRes.forEach((element, index) => {
                rows.push(<Car car={element._source} key={index} />);
            });
            return (
                <div id="accordion">
                    {rows}
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default CarsList;