import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class SetStatePage extends Component {
    static defaultProps = {
        msg: "omg"
    };

    static propTypes = {
        msg: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        document.getElementById('test').addEventListener('click', this.setCounter);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdaten", nextProps, nextState);
        return true;
    }

    setCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        }, function () {
            console.log(this.state.counter);
        })
    }
    render() {
        return (
            <div>
                <h3>SetStatePage</h3>
                <button onClick={this.setCounter}>
                    {this.state.counter}
                </button>
                <button id="test">
                    原生事件{this.state.counter}
                </button>
            </div>
        )
    }
}
