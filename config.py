from flask import Flask

STATIC_URL_PATH = ''  # Removes 'static' from URL
STATIC_FOLDER = 'dist/'

app = Flask(__name__, static_url_path=STATIC_URL_PATH, static_folder=STATIC_FOLDER)
