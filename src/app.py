from flask import Flask, render_template
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, 
            template_folder= "templates", 
            static_folder= "static")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/tienda")
def tienda():
    return render_template("tienda.html")

@app.route("/carrito")
def carrito():
    return render_template("carrito.html")

if __name__ == "__main__":
    app.run(debug=True, port=5050)