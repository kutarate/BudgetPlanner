import * as TYPE from './types';
import { accordion as initialState } from '../../store/initialState';

const accordion = (state = initialState, { type }) => {
  switch (type) {
    case TYPE.TOGGLE_ACCORDION:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default accordion;
