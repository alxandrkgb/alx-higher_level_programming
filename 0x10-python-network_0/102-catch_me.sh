#!/bin/bash

# Use curl to send a PUT request to the specific URL and set the user-agent header to "I am from Holberton"
curl -s -X PUT -H "User-Agent: I am from Holberton" -d "user_id=98" 0.0.0.0:5000/catch_me
