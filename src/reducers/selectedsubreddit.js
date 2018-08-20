/**
 * selectedsubreddit reducer
 */
import { SELECT_SUBREDDIT } from '../actions';

const selectedsubreddit = (state = 'reactjs', action) => {
	switch (action.type){
		case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
	}
}

export default selectedsubreddit;