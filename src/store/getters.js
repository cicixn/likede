const getters = {
  token: (state) => state.user.token,
  userId: (state) => state.user.userInfo.userId,
  userName: (state) => state.user.userInfo.userName,
  userImage: (state) => state.user.userInfo.image,
  likedeLoginTime: (state) => state.user.likedeLoginTime,
};
export default getters;
