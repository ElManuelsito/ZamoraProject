from flask import jsonify, request, Blueprint
from database import db
from models.User import User
# import requests

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/register', methods=['POST'])
def register():
    # print("estoy dentro de la funcion") # usar esto para debug
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    print(name, email, password) # este print solo se mostraria en consola, no al usuario, pero si en inspect element
    role = 'user' # familia de los codigos 200 es que todo esta bien, la de los 400 q algo salio mal
    # jsonify pertence a flask, y el {} esta vacio porq no hay nada q el back tenga q mandar al front
    # funcion retorna 200, verificable en consola (capaz en inspect element tmb?)

    print("We're down ere")
    if User.query.filter_by(email=email).first():
        print("im here!")
        return jsonify({'mensaje':'ya existe un usuario registrado con ese mail'}), 401
    else:
        print("maybe here??")
        # el name a la derecha del atributo es el mismo que está en User.py, tiene que llamarse igual, si en
        # User.py name se llama name1, en esta variable el atributo deberia ser 'name=name1' 
        user = User(name=name, email=email, password=password, role=role)
        db.session.add(user)
        db.session.commit()

        return jsonify(role=role), 200
    

@auth.route('/login', methods=['POST'])
def login():
    # tanto request.json como data.get como se muestran aca son validas
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    print(email, password)

    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    print('role', role)

    if emailDb and emailDb.password == password:
        print('logeado correctament')
        return jsonify(role=role), 200
    else:
        response = {'Mensaje': 'Error'}
        print('no logeado, datos erroneos')
        return jsonify(response), 401


# externalApi = Blueprint('externalApi')