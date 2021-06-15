from pathlib import Path
from flask import Flask
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# General
DEBUG = 1
PORT = 8000

# Flask
STATIC_URL_PATH = ''  # Removes 'static' from URL
STATIC_FOLDER_RESOURCES = Path.cwd() / 'static'

app = Flask(__name__, static_url_path=STATIC_URL_PATH, static_folder=str(STATIC_FOLDER_RESOURCES))

# SQLAlchemy
db = create_engine('postgres://timadmin@datalabopm:doyouopm1!@datalabopm.postgres.database.azure.com:5432/opm',
                   echo=DEBUG,
                   executemany_mode='values',
                   executemany_values_page_size=10000,
                   client_encoding='utf8')

base = declarative_base(db)
Session = sessionmaker(db)