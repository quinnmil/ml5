from flask import Flask
from flask import render_template
from flask import request
from flask import url_for
import pymongo
from pymongo import MongoClient
client = MongoClient()
db = client.test_db
collection = db.test_collection
app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/image")
def image():
        return render_template('image.html')


if __name__ == '__main__':
 app.run()

