import React from 'react';
import CounterStore from '../stores/CounterStore';
import * as Action from '../actions/Action';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: CounterStore.getCounterValue()
    };

    this.handleIncream = this.handleIncream.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CounterStore.emitChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  onChange() {
    const newCount = CounterStore.getCounterValue();
    this.setState({
      count: newCount
    })
  }

  handleIncream() {
    Action.incream();
  }

  render(){
    return(
      <div>
        <span>Click Counte: {this.state.count}</span>
        <button onClick={this.handleIncream}> + </button>
      </div>
    )
  }
}
