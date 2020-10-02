import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { gallery } from './gallery.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  gallery,
  alert
});

export default rootReducer;