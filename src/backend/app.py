from config import app, STATIC_FOLDER_API
from flask import send_file, jsonify


@app.route('/')
def home():
    return send_file(f'{app.static_folder}/index.html')


@app.route('/api/variables')
def variables():
    resp = jsonify(variables=['son', 'en', 'breugel'])
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/api/geojson/provinces')
def provinces():
    with open(STATIC_FOLDER_API / 'geojson' / '')
    pass


if __name__ == '__main__':
    app.run()
