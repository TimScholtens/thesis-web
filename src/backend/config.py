from pathlib import Path
from flask import Flask
from sqlalchemy import create_engine

# General
DEBUG = 1

# Flask
STATIC_URL_PATH = ''  # Removes 'static' from URL
STATIC_FOLDER_RESOURCES = Path.cwd() / 'static'

app = Flask(__name__, static_url_path=STATIC_URL_PATH)

# SQLAlchemy
db = create_engine('postgres://tim:doyouopm@localhost:5432/opm',
                   echo=DEBUG,
                   executemany_mode='values',
                   executemany_values_page_size=10000,
                   client_encoding='utf8')



