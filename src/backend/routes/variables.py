from flask import jsonify, abort, request, Blueprint, send_file
from config import app
from flask import send_file, jsonify
from controller.geojson import get_provinces
from controller.variables import get_variables


VARIABLES_API = Blueprint('variables_api', __name__)


def get_blueprint():
    """Return the blueprint for the main app module"""
    return VARIABLES_API


@VARIABLES_API.route('/')
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
