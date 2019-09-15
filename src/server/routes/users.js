module.exports = function (userModel, express, logger) {
    const router = express.Router();
  
    router.add('/', (req, res, next) => {
        return userModel.addUser(req.body,
            (error, user) => {
              if (error) {
                return reject(new Error('failed to add user'))
              } else {
                res.status(204).end();
              }
            });
    });

    router.get('/', (req, res, next) => {
      // Write GET handler here
    });

    router.delete('/:userid', (req, res, next) => {
      // Write DELETE handler here
    });

    return router;
}
