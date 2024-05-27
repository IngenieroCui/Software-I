from flask import Flask, render_template, request, jsonify
import mysql.connector
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__,
            template_folder="templates",
            static_folder="static")

# Database connection
mydb = mysql.connector.connect(host='localhost',
                               port=3306,
                               user='root',
                               password='',
                               database='software',
                               auth_plugin='mysql_native_password')

if mydb.is_connected():
    print("R")
    mycursor = mydb.cursor()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/log")
def login_page():
    return render_template("data.html")


@app.route("/carrito")
def carrito():
    return render_template("carrito.html")

@app.route("/signup", methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    print(f"Received signup data: name={name}, email={email}, password={password}")

    try:
        sql = "INSERT INTO usuarios (name, email, password) VALUES (%s, %s, %s)"
        val = (name, email, password)
        mycursor.execute(sql, val)
        mydb.commit()
        return jsonify({'message': 'Signup successful!'}), 200
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return jsonify({'message': f'Error: {err}'}), 500

@app.route("/login", methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    print(f"Received login data: email={email}, password={password}")

    try:
        sql = "SELECT * FROM usuarios WHERE email = %s AND password = %s"
        val = (email, password)
        mycursor.execute(sql, val)
        user = mycursor.fetchone()
        if user:
            return jsonify({'message': 'Login successful!'}), 200
        else:
            return jsonify({'message': 'Invalid email or password'}), 401
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return jsonify({'message': f'Error: {err}'}), 500

@app.route("/api/productos", methods=['GET'])
def get_productos():
    try:
        sql = "SELECT * FROM productos"
        mycursor.execute(sql)
        productos = mycursor.fetchall()
        productos_list = [{'id': prod[0], 'nombre': prod[1], 'precio': prod[5]} for prod in productos]
        return jsonify(productos_list), 200
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return jsonify({'message': f'Error: {err}'}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5050)