from flask import jsonify
from config import STATIC_FOLDER_RESOURCES
from pathlib import Path


def get_neighbourhoods():
    """
        :return string of provinces
    """
    with open(Path(STATIC_FOLDER_RESOURCES) / 'geojson' / 'neighbourhoods.json') as f:
        # with open(STATIC_FOLDER_API / 'geojson' / 'provinces - subset - II.json') as f:
        return f.read()
