module.exports = function(userModel, express, logger) {
  const router = express.Router();

  router.post("/", (req, res, next) => {
    console.log('user.js')
    return userModel.addUser(req.body, (error, user) => {
      console.log(req.body);
      if (error) {
        console.log("error adding user");
        Promise.reject(new Error("failed to add user"));
      } else {
        console.log("successfully added user");
        res.send(user)
        // res.status(204).end();
      }
    });
  });

  router.get("/", (req, res, next) => {
    // Write GET handler here
    return userModel.getUsers(req.body, error => {
      if (error) {
        return Promise.reject(new Error("failed to get users"));
      }
    });
  });

  router.delete("/:userid", (req, res, next) => {
    // Write DELETE handler here
    return userModel.removeUser(req.params.userid, (error) => {
      if (error) {
        console.log("error removing user");
        Promise.reject(new Error("failed to remove user"));
      } else {
        console.log("successfully removed user");
        res.status(404).end();
      }
    });
  });

  return router;
};
