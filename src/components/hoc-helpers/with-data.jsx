import React, { Component } from 'react';

import Spinner from '../spinner';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
        }
    
        onError = () => {
            console.log('eror')
        }
    
        componentDidMount() {        
            this.props.getData()
                .then(data => {
                    this.setState({ data});
                })
                .catch(this.onError);            
        }

        render() {
            const { data } = this.state;

            if (!data) return <Spinner />;

            return <View {...this.props} data={data} />
        }
    }
}

export default withData;