const {User: UserModel, User} = require("../models/user");
const userRepository = require("../repository/userRepository");



const userController = {

        create : async(req, res) => {
            try {
                const user = {
                    user: req.body.user,
                    senha: req.body.senha,
                    funcao: req.body.funcao,
                };

                const response = await userRepository.create(user);

                res.status(201).json({response, msg: "criado"})
            } catch (error) {
                console.log(error);
            }
        },

        getAll : async(req, res) => {
            try {
                const user = await userRepository.findAll();
                res.json(user);
            } catch (error) {
                console.log(error);
            }
        },

        get: async(req, res) => {
            try {
                const id = req.params.id;
                const user = await userRepository.findOne(id);

                if(!user) {
                    res.status(404).json({msg: 'Serviço não encontrado'});
                    return;
                }

                res.json(user);
            } catch (error) {
                console.log(error);
            }
        },

        delete: async(req, res) => {
            try {
                const id = req.params.id

                const user = await userRepository.findOne(id)

                if(!user) {
                    res.status(404).json({msg: 'Não localizado.'});
                    return;
                }

                const deleteUser = await userRepository.delete(id);
                res.status(200).json({msg: 'Usuario deletado'});
                
            } catch (error) {
                console.log(error)
            }
        },

        update: async (req, res) => {

            const id = req.params.id;

            const user = {
                user: req.body.user,
                senha: req.body.senha,
                funcao: req.body.funcao,
            };

            const updatedUsers = await userRepository.update(id, user);

            if(!updatedUsers) {
                res.status(404).json({ msg: "Usuario não encontrado" })
                return;
            }

            res.status(200).json({ user, msg: "Usuario atualizado com sucesso" });
        },
        login: async (req, res) => {
            try {

                const login = {
                    user: req.body.user,
                    senha: req.body.senha,
                };

                const user = await userRepository.findUser(login);
                if (!user) {
                    res.status(404).json({ msg: "Usuario ou senha invalido"})
                    return;
                }

                res.status(200).json({ msg: "OKOK"});


            } catch (error) {
                console.log(error);
            }
        }

};
       


module.exports = userController;
