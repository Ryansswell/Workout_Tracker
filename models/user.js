const mongoose = require("mongoose");

const UserSchema = new.mongoose.Schema({
    title: {
        type: String
    },
    isPriority: {
        type: Boolean,
        default: false,
    },
});

const UserListSchema = new.mongoose.Schema({
    title: {
        type: String
    },
    user_id: {
        type: mongoose.SchemaType.ObjectId
    },
    todos: [UserSchema]
});

const List = mongoose.model("UserList", UserListSchema);

module.exports = List;