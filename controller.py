import sys, json
from .modules import base32c as bs32
from .modules import base64c as bs64
from .modules import base85 as bs85
from .modules import hexc as hex
from .modules import rot13c as rot13

def read_JSON():
    line = sys.stdin.readlines()

def write_JSON():
    sys.stdout.write("HELLO WORLD!\nWAKANDA FOREVER!")
    print("HELLO WORLD!\nWAKANDA FOREVER!");

def main():
    
    lines = read_JSON()

    write_JSON()

if __name__ == '__main__':
    main()

