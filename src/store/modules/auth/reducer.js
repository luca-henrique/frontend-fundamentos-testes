import { produce } from 'immer';
import Types from './types';

const INITIAL_STATE = {
  token: new Date().getTime().toString(),
  loading: false,
};

function Auth(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.READ_MARKETS_REQUEST: {
      return produce(state, (draft) => {
        draft.loading = true;
      });
    }

    default:
      return state;
  }
}
export default Auth;
