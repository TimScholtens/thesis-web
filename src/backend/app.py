from flask import jsonify, send_file, request
from controller.data import get_variables, get_neighbourhoods_data
from controller.geojson import get_neighbourhoods
from config import app, STATIC_FOLDER_RESOURCES


@app.route('/')
def home():
    return send_file(f'{STATIC_FOLDER_RESOURCES / "dist" / "index.html"}')


@app.route('/api/variables')
def variables():
    resp = jsonify(variables=get_variables())
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/api/geojson/neighbourhood', methods=['GET'])
def neighbourhood_list():
    list_neighbourhoods = get_neighbourhoods()
    resp = jsonify(list_neighbourhoods)
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/api/geojson/provinces', methods=['POST'])
def provinces_data():
    selected_provinces = request.form['provinces']
    selected_years = request.form['years']
    selected_bioclims = request.form['bioclims']

    resp = jsonify(get_neighbourhoods_data(provinces=selected_provinces, year=selected_years, bioclim=selected_bioclims))
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


if __name__ == '__main__':
    app.run(debug=True)
