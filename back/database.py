from flask_sqlalchemy import SQLAlchemy

# inicializar objeto sqlalchemy
db = SQLAlchemy()

# configurar db
USER_DB = 'postgres'
PASS_DB = '1138'
URL_DB = 'localhost'
NAME_DB = 'zamoraProjectDB'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'