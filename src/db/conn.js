const mongoose =  require("mongoose")

async function main() {
    try {

        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://Vidal:mIdYV9w1yGuqMUmC@cluster0.087c7nf.mongodb.net/")

        console.log("ok")
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main