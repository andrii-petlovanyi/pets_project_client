const getToken = state => state.auth.token;
const isAuth = state => state.auth.isLoggedIn;
const user = state => state.auth.user;

const userSelectors = { getToken, isAuth, user };

export default userSelectors;
