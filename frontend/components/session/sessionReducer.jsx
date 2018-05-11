import {merge} from 'lodash';

const SessionReducer = (state = {'username': 'kek'}, action) => {
  Object.freeze(state);
  switch(action.type) {

    default:
      return state;
  }
}

export default SessionReducer;
