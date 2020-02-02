import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            isLoading: true,
            isError: false,
        }
    
        onError = () => {
            this.setState({ isError: true, isLoading:false });
        }
    
        componentDidMount() {        
            this.updateList();
        }

        updateList() {
            this.setState({ isLoading: true, error: false })
            this.props.getData()
                .then(data => {
                    this.setState({ data, isLoading: false, });
                })
                .catch(this.onError);   
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.updateList();
            }
        }

        render() {
            const { data, isLoading, isError } = this.state;

            if (isLoading) return <Spinner />;
            if (isError) return <ErrorIndicator />

            return <View {...this.props} data={data} />
        }
    }
}

export default withData;