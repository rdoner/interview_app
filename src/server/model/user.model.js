module.exports = function(mongoose, logger) {
  const userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      organization: { type: String, required: true, trim: true }
    },
    { collection: "DBUsers" }
  );

  userSchema.statics.addUser = function(data, cb) {
    // Write ADD USER method here
    return this.save(data)
      .then(() => {
        cb();
      })
      .catch(err => {
        logger.error(err);
        cb(err, null);
      });

    // const user = new this(data);

    // return this.save(err => {
    //   if (err) return res.status(500).send(err);
    //   return res.status(200).send(this);
    // });
  };

  userSchema.statics.getUsers = function(cb) {
    // Write GET USERS method here
    return this.find((cb)
        .then(() => {
          cb();
        })
        .catch(err => {
          logger.error(err);
          cb(err, null);
        })
    );
  };

  userSchema.statics.removeUser = function(id, cb) {
    return this.deleteOne({ _id: id })
      .then(() => {
        cb();
      })
      .catch(err => {
        logger.error(err);
        cb(err, null);
      });
  };

  return mongoose.model("DBUsers", userSchema);
};
