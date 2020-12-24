from config import app
from flask import send_file, jsonify


@app.route('/')
def home():
    return send_file(f'{app.static_folder}/index.html')


@app.route('/api/variables')
def variables():
    resp = jsonify(variables=['son', 'en', 'breugel'])
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


if __name__ == '__main__':
    app.run()
