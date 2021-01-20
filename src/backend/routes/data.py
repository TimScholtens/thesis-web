from flask import Blueprint, jsonify
from controller.geojson import get_provinces
from controller.data import get_variables

DATA_API = Blueprint('variables_api', __name__)


def get_blueprint():
    """Return the blueprint for the main app module"""
    return DATA_API


@DATA_API.route('/api/variables')
def variables():
    resp = jsonify(variables=get_variables())
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@DATA_API.route('/api/geojson/provinces')
def provinces():
    list_provinces = get_provinces()
    resp = jsonify(list_provinces)
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp
