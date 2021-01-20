from config import STATIC_FOLDER_RESOURCES
from flask import Blueprint, send_file, abort
from jinja2 import TemplateNotFound

HOME = Blueprint(
    'home',
    __name__,
)


def get_blueprint():
    return HOME


@HOME.route('/')
def home():
    try:
        return send_file(f'{STATIC_FOLDER_RESOURCES / "dist" / "index.html"}')
    except TemplateNotFound:
        abort(404)


@HOME.route('/index.html')
def home_index():
    try:
        return send_file(f'{STATIC_FOLDER_RESOURCES / "dist" / "index.html"}')
    except TemplateNotFound:
        abort(404)


@HOME.route('/2b3e1faf89f94a4835397e7a43b4f77d.png')
def png_1():
    try:
        return send_file(f'{STATIC_FOLDER_RESOURCES / "dist" / "2b3e1faf89f94a4835397e7a43b4f77d.png"}')
    except TemplateNotFound:
        abort(404)


@HOME.route('/416d91365b44e4b4f4777663e6f009f3.png')
def png_2():
    try:
        return send_file(f'{STATIC_FOLDER_RESOURCES / "dist" / "416d91365b44e4b4f4777663e6f009f3.png"}')
    except TemplateNotFound:
        abort(404)


@HOME.route('/8f2c4d11474275fbc1614b9098334eae.png')
def png_3():
    try:
        return send_file(f'{STATIC_FOLDER_RESOURCES / "dist" / "8f2c4d11474275fbc1614b9098334eae.png"}')
    except TemplateNotFound:
        abort(404)
