import flask
from flask import render_template
from flask import request
from flask import url_for
import logging

app = flask.Flask(__name__)
app.debug=True
app.logger.setLevel(logging.DEBUG)
app.secret_key=12434352


@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(port=3000, host="0.0.0.0")
