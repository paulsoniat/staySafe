var userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    //maybe add other things here
});
var User = mongoose.model('User', userSchema);

module.exports.User = User;