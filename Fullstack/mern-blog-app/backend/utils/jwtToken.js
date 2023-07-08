const sendToken = async (user, statusCode, res) => {
  const token = await user.getJwtToken();

  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    withCredentials: true,
    httpOnly: false,
    sameSite: "none",
    secure: true,
  };

  const responseUser = {
    _id: user._id,
    email: user.email,
    name: user.name,
    avatar: user.avatar,
    verified: user.verified,
    admin: user.admin,
    posts: user.posts,
  };

  await res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user: responseUser,
    token,
  });
};

export { sendToken };
