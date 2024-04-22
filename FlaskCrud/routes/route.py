from flask import Flask, render_template, request, redirect, url_for, jsonify, Blueprint
from model.models import FuncCadastrado
from controllers.funcController import ControllerFuncionario

app = Flask(__name__)

funcionarios = Blueprint('funcionarios', __name__)

@funcionarios.route("/", methods=["GET", "POST"])
def main():
    return render_template("funcionarios.html")

@funcionarios.route("/search", methods=["GET"])
def search_func():
    query = request.args.get('q', '')
    if query:
        func = FuncCadastrado.query.filter(FuncCadastrado.nome.like(f'%{query}')).all()
        print('funcionarios')
        return jsonify([func.to_dict() for func in funcionarios])
    return jsonify([])

@funcionarios.route("/cadastro", methods=["POST", "GET"])
def criar_func():
    if request.method == "GET":
        return render_template("form.html")
    data = request.form.to_dict()
    nome = data.get('nome')
    sobrenome = data.get('sobrenome')
    funcao = data.get('funcao')
    if nome and sobrenome and funcao:
        ControllerFuncionario.create(nome, sobrenome, funcao)
        return redirect(url_for('funcionarios.listar_funcionarios'))
    else:
        return jsonify({'erro': 'Todos os campos são obrigatórios'}), 400
    
@funcionarios.route("/funcionarios", methods=["GET"])
def listar_funcionarios():
    funcs = ControllerFuncionario.read()
    return render_template("funcionarios.html", funcs=funcs)


@funcionarios.route("/funcionarios/<int:id>", methods=["GET"])
def delete_func(id):
    ControllerFuncionario.delete(id)
    return redirect(url_for('funcionarios.listar_funcionarios'))

@funcionarios.route("/funcinarios/<int:id>", methods=["POST", "GET"])
def edit_func(id):
    func = ControllerFuncionario.read_id(id)
    if request.method == "GET":
        return render_template("edit.html", func=func)
    data = request.form.to_dict()
    nome = data.get('nome')
    sobrenome = data.get('sobrenome')
    funcao = data.get('funcao')
    ControllerFuncionario.update(id, nome, sobrenome, funcao)
    
    return redirect(url_for('funcionarios.listar_funcionarios'))

