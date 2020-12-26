from flask import jsonify
from config import STATIC_FOLDER_API


def get_provinces():
    """
        :return string of provinces
    """
    with open(STATIC_FOLDER_API / 'geojson' / 'provinces.json') as f:
    # with open(STATIC_FOLDER_API / 'geojson' / 'provinces - subset - II.json') as f:
        return f.read()
