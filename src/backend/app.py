from flask import jsonify, send_file, request, Response
from controller.data import get_variables, get_neighbourhoods_data
from controller.geojson import get_neighbourhoods
from config import app, STATIC_FOLDER_RESOURCES, PORT


@app.route('/')
def home():
    return send_file(f'{STATIC_FOLDER_RESOURCES / "index.html"}')


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


@app.route('/api/variables/neighbourhood', methods=['POST', 'OPTIONS'])
def neighbourhoods_data():
    if request.method == 'OPTIONS':
        resp = Response("")
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return resp

    if request.method == 'POST':
        req = request.get_json()
        selected_neighbourhoods_code = req['neighbourhoods_code']
        selected_years = req['years']
        selected_bioclims = req['bioclims']

        neighbourhoods_data_query_result = get_neighbourhoods_data(
            neighbourhoods_code=selected_neighbourhoods_code,
            years=selected_years,
            bioclims=selected_bioclims
        )
        resp = jsonify(neighbourhoods_data_query_result)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers["Content-Disposition"] = "attachment; filename=BIOCLIM.json"

        return resp


# if __name__ == '__main__':
#     app.run(debug=True, port=PORT)
