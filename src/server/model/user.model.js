module.exports = function (mongoose, logger) {
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        organization: { type: String, required: true, trim: true }
    }, { collection: 'DBUsers' });

    userSchema.statics.addUser = function (data, cb) {
        // Write ADD USER method here
    };

    userSchema.statics.getUsers = function (cb) {
        // Write GET USERS method here
    };

    userSchema.statics.removeUser = function (id, cb) {
        return this.deleteOne({ "_id": id})
        .then(() => {
            cb();
        })
        .catch((err) => {
            logger.error(err);
            cb(err, null);
        });
    };

    return mongoose.model('DBUsers', userSchema);
};