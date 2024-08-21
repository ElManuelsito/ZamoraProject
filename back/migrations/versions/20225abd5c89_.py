"""empty message

Revision ID: 20225abd5c89
Revises: 262ad86dd43f
Create Date: 2024-08-20 18:21:58.285930

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '20225abd5c89'
down_revision = '262ad86dd43f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('role', sa.String(length=250), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('role')

    # ### end Alembic commands ###
