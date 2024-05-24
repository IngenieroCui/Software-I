import mysql.connector

mydb = mysql.connector.connect(host='localhost', 
                               port = 3306,
                               user='root',
                               password= '',
                               database='software',
                               auth_plugin='mysql_native_password')

if mydb.is_connected():
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

  def leerProductos():
    sql = "select * from productos WHERE codigo_id = 2045"
    mycursor.execute(sql)
    myResult = mycursor.fetchall()
    print(myResult)

  leerProductos()
else:
  print("no")
