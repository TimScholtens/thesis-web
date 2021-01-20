from config import app
from flask import Blueprint, send_file

HOME = Blueprint('home', __name__, template_folder='static')


@HOME.route('/', defaults={'page': 'index'})
def show(page):
    try:
        return send_file('pages/%s.html' % page)
    except TemplateNotFound:
        abort(404)

    return send_file(f'{app.static_folder}/index.html')
