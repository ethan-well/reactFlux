import React from 'react';
import { EventEmitter } from 'events';
import * as ActionTypes from '../actions/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

const counterValue = {
  'first': 0
}

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValue() {
    return counterValue['first'];
  },

  emitChange() {
    this.emit('change');
  },

  emitChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener(callback);
  }
});

AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.INCREAM:
      counterValue['first'] ++;
      CounterStore.emitChange();
      break;
    default:
      console.log('default');
  }
});

export default CounterStore;
