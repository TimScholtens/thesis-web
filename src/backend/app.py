from config import app, STATIC_FOLDER_API
from routes import (
    data as data_api,
    home as home,
)

# Register routes
app.register_blueprint(data_api.get_blueprint())


if __name__ == '__main__':
    app.run(debug=True)
