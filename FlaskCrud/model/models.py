from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class FuncCadastrado(db.Model):
    __tablename__='funcionario'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(100))
    sobrenome = db.Column(db.String(100))
    funcao = db.Column(db.String(100))

    def __repr__(self):
        return 'func_cadastrado %r' %self.nome
    