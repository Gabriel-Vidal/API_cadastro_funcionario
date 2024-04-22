from model.models import FuncCadastrado, db
from flask_sqlalchemy import SQLAlchemy


class ControllerFuncionario:
    @staticmethod
    def create(nome, sobrenome, funcao):
        novo_func = FuncCadastrado(nome=nome, sobrenome=sobrenome, funcao=funcao)
        print(novo_func)
        db.session.add(novo_func)
        db.session.commit()
        return novo_func
    
    @staticmethod
    def read():
        return FuncCadastrado.query.all()
    
    @staticmethod
    def read_id(id):
        return FuncCadastrado.query.get(id)
    
    @staticmethod
    def update(id, nome, sobrenome, funcao):
        func = FuncCadastrado.query.get(id)
        func.nome = nome
        func.sobrenome = sobrenome
        func.funcao = funcao
        db.session.commit()
        return func
    @staticmethod
    def delete(id):
        func = FuncCadastrado.query.get(id)
        db.session.delete(func)
        db.session.commit()