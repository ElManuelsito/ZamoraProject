from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from routes import auth
from database import db, FULL_URL_DB
from models import User

app = Flask(__name__)
CORS(app)


# indico qué url urilizará SQLALCHEMY para conectarse a la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
# permite que no se rastreen las modificaciones de la db en modo DESARROLLO
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# inicializar
db.init_app(app)

# configurar flask-migrate
migrate = Migrate()
migrate.init_app(app, db)

app.register_blueprint(auth)

if __name__ == "__main__":
    app.run(port=5000)
