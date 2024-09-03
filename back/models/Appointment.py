from database import db
# from sqlalchemy import Column, Integer # maybe this isn't needed? 

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(230))
    description = db.Column(db.String(250))
    
    def __str__(self):
        return (
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'role: {self.description}, '
        )
