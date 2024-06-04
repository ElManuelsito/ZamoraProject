from flask import jsonify, request, Blueprint

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/register', methods=['POST'])
def register():
    # print("estoy dentro de la funcion") # usar esto para debug
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    print(name, email, password) # este print solo se mostraria en consola, no al usuario, pero si en inspect element
    # familia de los codigos 200 es que todo esta bien, la de los 400 q algo salio mal
    # jsonify pertence a flask, y el {} esta vacio porq no hay nada q el back tenga q mandar al front
    # funcion retorna 200, verificable en consola (capaz en inspect element tmb?)
    return jsonify({}), 200

@auth.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    print(email, password)
    return jsonify({}), 200