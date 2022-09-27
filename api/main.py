import os

import requests
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS


load_dotenv(dotenv_path="./.venv/.env.local")


UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")

# to disable debug mode, add DEBUG= in env.local. To enable it, delete the DEBUG entry from .env.local
DEBUG = bool(os.environ.get("DEBUG", True))

# print(DEBUG)
# print(UNSPLASH_KEY)

if not UNSPLASH_KEY:
    raise EnvironmentError(
        "Please create .env.local file and save UNSPLASH_KEY in it !"
    )


app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = DEBUG


@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {"Accept-Version": "V1", "Authorization": "Client-ID " + UNSPLASH_KEY}
    params = {"query": word}
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="localhost", port="5050")
