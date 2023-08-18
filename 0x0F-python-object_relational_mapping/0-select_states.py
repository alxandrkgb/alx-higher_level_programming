#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    # Get MySQL credentials from command line arguments
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    # Connect to the MySQL server
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=username,
        passwd=password,
        db=database
    )

    # Create a cursor object to interact with the database
    cursor = db.cursor()

    # Execute the query to retrieve states and sort by id
    query = "SELECT * FROM states ORDER BY id ASC;"
    cursor.execute(query)

    # Fetch all the results
    results = cursor.fetchall()

    # Display the results
    for row in results:
        print(row)

    # Close the cursor and the database connection
    cursor.close()
    db.close()
