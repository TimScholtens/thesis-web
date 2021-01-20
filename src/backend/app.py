from config import app
from routes import (
    data as data_api,
    home as home,
)

# Register routes
app.register_blueprint(data_api.get_blueprint())
app.register_blueprint(home.get_blueprint())

print(app.url_map)

if __name__ == '__main__':
    app.run(debug=True)
