const mongoose = require("mongoose");

const { Schema } = mongoose
const {userSchema} = require("./user")
const funcionarioSchema = new Schema(
    {
    nome: {
        type: String,
        require: true
    },

    sobrenome: {
        type: String,
        require: true
    },

    idade: {
        Type: Number,
        require: true,
    },
    funcao: {
        Type: String,
        require: true,
    }

},
{timestamps : true}
)

const Funcionario = mongoose.model("User", userSchema)

module.exports = Funcionario;