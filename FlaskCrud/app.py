from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from routes.route import funcionarios
from model.models import db


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'


db.init_app(app)
app.register_blueprint(funcionarios)
with app.app_context():
    db.create_all()

app.run(debug=True)