const userController = {
  async test(req, res, next) {
    res.json({ message: "API is working!" });
  },
};
export default userController;
