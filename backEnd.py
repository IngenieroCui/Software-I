from flask import Flask, render_template
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

template_dir = os.path.join(current_dir, "src", "templates", "styles")

app = Flask(__name__, template_folder= "templates")

@app.route("/")
def home():
    return render_template('login.html')

if __name__ == "__main__":
    app.run(debug=True, port=5050)