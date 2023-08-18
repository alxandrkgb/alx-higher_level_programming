#!/usr/bin/env python3
import sys
import MySQLdb

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: {} <mysql_username> <mysql_password> <database_name>".format(sys.argv[0]))
        sys.exit(1)
    
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    
    try:
        # Connect to the MySQL server
        db = MySQLdb.connect(
            host='localhost',
            port=3306,
            user=username,
            passwd=password,
            db=database
        )
        
        # Create a cursor to execute SQL queries
        cursor = db.cursor()
        
        # Execute the query to fetch states starting with 'N'
        cursor.execute("SELECT * FROM states WHERE name LIKE 'N%' ORDER BY id ASC")
        
        # Fetch all rows and display them
        results = cursor.fetchall()
        for row in results:
            print(row)
        
        # Close the cursor and the database connection
        cursor.close()
        db.close()
        
    except MySQLdb.Error as e:
        print("Error: {}".format(e))
        sys.exit(1)
