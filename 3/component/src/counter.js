import React, {Component, Fragment} from 'react';

class counter extends Component{

    state = {
        cnt : 0,
        fixedNumber: 0
    }

    render(){
        const {cnt, fixedNumber} = this.state;
        return (
            <Fragment>
                <h1>{cnt}</h1>
                <button onClick={() => {this.setState({cnt : cnt + 1})}}>add</button>
            </Fragment>
        );
    }
};

export default counter;