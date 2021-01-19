from config import app, STATIC_FOLDER_API
from flask_swagger_ui import get_swaggerui_blueprint
import routes.variables as variable_api

# region swagger specific
SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "Seans-Python-Flask-REST-Boilerplate"
    }
)
app.register_blueprint(SWAGGERUI_BLUEPRINT, url_prefix=SWAGGER_URL)
# endregion


app.register_blueprint(variable_api.get_blueprint())

if __name__ == '__main__':
    app.run(debug=True)
