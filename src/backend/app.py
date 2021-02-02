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
def neighbourhoods_list():
    list_neighbourhoods = get_neighbourhoods()
    resp = jsonify(list_neighbourhoods)
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/api/variables/neighbourhood', methods=['POST'])
def neighbourhoods_data():

    req = request.get_json()
    selected_neighbourhoods_code = req['neighbourhoods_code']
    selected_years = req['years']
    selected_bioclims = req['bioclims']

    # print(selected_bioclims, selected_years, selected_neighbourhoods_code)
    # print(type(selected_bioclims), type(selected_years), type(selected_neighbourhoods_code))

    resp = jsonify(get_neighbourhoods_data(
        neighbourhoods_code=selected_neighbourhoods_code,
        years=selected_years,
        bioclims=selected_bioclims
    ))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers["Content-Disposition"] = "attachment; filename=BIOCLIM.json"

    return resp


if __name__ == '__main__':
    app.run(debug=True)
