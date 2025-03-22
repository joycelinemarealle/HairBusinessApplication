from sqlalchemy import create_engine, text
#use configuration string from config.py
from config import SQLALCHEMY_DATABASE_URI

engine = create_engine(SQLALCHEMY_DATABASE_URI)

with engine.connect() as connection:
    result = connection.execute( text("SELECT version();" ) )
    print(result.fetchone())
