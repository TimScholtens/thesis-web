from flask import jsonify, abort, send_file, request
from jinja2 import TemplateNotFound
from controller.data import get_variables
from controller.geojson import get_provinces
from config import app, STATIC_FOLDER_RESOURCES


@app.route('/')
def home():
    try:
        return send_file(f'{STATIC_FOLDER_RESOURCES / "dist" / "index.html"}')
    except TemplateNotFound:
        abort(404)


@app.route('/api/variables')
def variables():
    resp = jsonify(variables=get_variables())
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/api/geojson/provinces', methods=['GET'])
def provinces_list():
    list_provinces = get_provinces()
    resp = jsonify(list_provinces)
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/api/geojson/provinces/', methods=['POST'])
def provinces_data():
    selected_provinces = request.form['provinces']
    selected_years = request.form['years']
    selected_bioclims = request.form['bioclims']

    print(selected_years,selected_provinces,selected_bioclims)


if __name__ == '__main__':
    app.run(debug=True)
