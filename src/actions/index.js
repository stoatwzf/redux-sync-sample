/**
 * action constant
 */
const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
const REQUEST_POSTS = 'REQUEST_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';



/**
 * action creator
 */
const selectSubreddit = subreddit => ({
	type: SELECT_SUBREDDIT,
	subreddit
});
const invalidatesubreddit = subreddit => ({
	type: INVALIDATE_SUBREDDIT,
	subreddit
});
const requestPosts = subreddit => ({
	type: REQUEST_POSTS,
	subreddit
});
const receivePosts = (subreddit, json) => ({
	type: RECEIVE_POSTS,
	subreddit,
	posts: json.data.children.map(child => child.data),
	receivedAt: Date.now()
});



/**
 * thunk action
 */
const fetchPosts = subreddit => {
	return dispatch => {
		dispatch(requestPosts(subreddit));

		return fetch('http://127.0.0.1:8080')
			.then(
				res => res.json(),
				err => console.log(err)
			)
			.tehn(json => {
				dispatch(receivePosts(subreddit, json));
			})
	}
}



export {
	SELECT_SUBREDDIT,
	INVALIDATE_SUBREDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS,
	selectSubreddit,
	invalidatesubreddit,
	requestPosts,
	receivePosts,
}