/**
 * combine reducers
 */
import { combineReducers } from 'redux';
import postsBySubreddit from './postsBySubreddit';
import selectedsubreddit from './selectedsubreddit';

const reducers = combineReducers({
	postsBySubreddit,
	selectedsubreddit
});

export default reducers;