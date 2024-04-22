const mongoose = require("mongoose");

const { Schema } = mongoose
const userSchema = new Schema({
    user: {
        type: String,
        require: true
    },

    senha: {
        type: String,
        require: true
    },

    funcao: {
        type: String,
        require: true
    }

},
{timestamps : true}
)

const User = mongoose.model("User", userSchema)

module.exports = {
    User,
    userSchema
};