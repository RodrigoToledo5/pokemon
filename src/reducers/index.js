import pokemonSearch from './reducerSearch';
import scoreTable from './scoreTable';
import { combineReducers } from 'redux';

const rootReducer=combineReducers({pokemonSearch,scoreTable})

export default rootReducer;