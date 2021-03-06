const SessionActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  FETCH_USER: "FETCH_USER",
  FOLLOW_USER: "FOLLOW_USER",
  UNFOLLOW_USER: "UNFOLLOW_USER",
  RECEIVE_USER: "RECEIVE_USER",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",

  signup: user => ({
    type: SessionActions.SIGNUP,
    user
  }),

  login: user => ({
    type: SessionActions.LOGIN,
    user
  }),

  logout: () => ({
    type: SessionActions.LOGOUT
  }),

  fetchUser: username => ({
    type: SessionActions.FETCH_USER,
    username
  }),

  followUser: id => ({
    type: SessionActions.FOLLOW_USER,
    id
  }),

  unfollowUser: id => ({
    type: SessionActions.UNFOLLOW_USER,
    id
  }),

  receiveCurrentUser: currentUser => ({
    type: SessionActions.RECEIVE_CURRENT_USER,
    currentUser
  }),

  receiveUser: user => ({
    type: SessionActions.RECEIVE_USER,
    user
  }),

  receiveErrors: errors => ({
    type: SessionActions.RECEIVE_ERRORS,
    errors
  })
};
export default SessionActions;
