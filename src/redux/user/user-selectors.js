const getToken = state => state.auth.token;
const isAuth = state => state.auth.isLoggedIn;

const userSelectors = { getToken, isAuth };

export default userSelectors;
