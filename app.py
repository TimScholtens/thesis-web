from config import app
from flask import send_file


@app.route('/')
def home():
    return send_file(f'{app.static_folder}/index.html')


if __name__ == '__main__':
    app.run()
