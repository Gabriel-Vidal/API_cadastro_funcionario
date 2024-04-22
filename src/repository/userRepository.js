const {User: UserModel, User} = require("../models/user");


class UserRepository  {

    async findOne(id){
        const user = UserModel.findById(id);
        return user;
    }

    async findUser(userpost){
        const user = UserModel.findOne({user: userpost.user, senha: userpost.senha});
        return user;
    }

    async findAll(){
        const user = await UserModel.find();
        return user;
    }

    async delete(id){
        const del = UserModel.findByIdAndDelete(id);
        return del;
    }

    async create(user){
        const response = UserModel.create(user);
        return response;
    }

    async update(id, user){
        const update = UserModel.findByIdAndUpdate(id, user);
        return update;
    }
};


const userRepository = new UserRepository;
module.exports = userRepository;