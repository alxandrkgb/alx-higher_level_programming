#!/usr/bin/python3

def read_file(filename=""):
    with open(filename, 'r') as file:
        contents = file.read()
        print(contents, end='')
