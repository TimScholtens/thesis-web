from config import app, STATIC_FOLDER_API
from flask import send_file, jsonify
from controller.geojson import get_provinces
from controller.variables import get_variables

@app.route('/')
def home():
    return send_file(f'{app.static_folder}/index.html')


@app.route('/api/variables')
def variables():
    resp = jsonify(variables=get_variables())
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/api/geojson/provinces')
def provinces():
    list_provinces = get_provinces()
    resp = jsonify(list_provinces)
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


if __name__ == '__main__':
    app.run(debug=True)
