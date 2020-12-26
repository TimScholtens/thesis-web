from pathlib import Path
from flask import Flask

STATIC_URL_PATH = ''  # Removes 'static' from URL
STATIC_FOLDER_FRONTEND = './dist/'
STATIC_FOLDER_API = Path.cwd()


app = Flask(__name__, static_url_path=STATIC_URL_PATH, static_folder=STATIC_FOLDER_FRONTEND)
