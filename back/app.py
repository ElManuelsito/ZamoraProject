from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



if __name__ == "__main__":
    app.run(port=5000)



    # app.regsiter_blueprint(auth)
# from routes import auth