const getCurrentUserName = state => state.auth.user.name;
const isAuthenticated = state => state.auth.token;

export default {
    getCurrentUserName,
    isAuthenticated
  };
  