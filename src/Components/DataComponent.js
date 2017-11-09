
import React, { Component } from 'react';

export const DataComponentWrapper = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: false,
                loaded: false
            };
        }

        componentWillMount() {
            this.setState({ loading: true });

            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }));

            this.state.data.map((item, index) => console.log(index, item));
        }

        render() {
            return (
                <div>
                    {this.state.loading ? <div>Loading</div> : <ComposedComponent {...this.state} {...this.props} />}
                </div>
            )
        }
    };
