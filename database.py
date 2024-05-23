import mysql.connector

mydb = mysql.connector.connect(user='root', 
                              password='2220221048K',
                              host='127.0.0.1',
                              database='tienda')

mycursor = mydb.cursor()

def create(name, email, password):
  sql = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
  val = (name, email, password)
  mycursor.execute(sql, val)
  mydb.commit()

def delete(email):
  sql = "DELETE FROM users where email = %s"
  val = (email)
  mycursor.execute(sql, val)
  mydb.commit()

def update(name, email, password):
  sql = "UPDATE users SET name = %s, password = %s WHERE email = %s"
  val = (name, password, email)
  mycursor.execute(sql, val)
  mydb.commit()