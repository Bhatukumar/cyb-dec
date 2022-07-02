import sys
import json
from typing import Type
from modules import base32c, base64c as bs64
from modules import base32c as bs32
from modules import base85 as bs85
from modules import hexc as hex
from modules import rot13c as rot13


def main():
    print("Welcome")
    question = json.loads(sys.argv[1])
    Type = readType(question)
    sys.stdout.write(Type)
    sys.stdout.write("\n")
    Text = readText(question)
    sys.stdout.write(Text)
    sys.stdout.write("\n")
    From = readFrom(question)
    sys.stdout.write(From)
    sys.stdout.write("\n")
    To = readTo(question)
    sys.stdout.write(To)
    sys.stdout.write("\n")

    ans = work(Text, From, To)
    sys.stdout.write(ans)
    # sys.stdout.write(str(question['type']))


def readType(y):
    return str(y['type'])
def readText(y):
    return str(y['text'])
def readFrom(y):
    return str(y['from'])
def readTo(y):
    return str(y['to'])
def work(Text, From, To):

    if From == "Plaintext":
        if To == "Plaintext":
            return Text
        elif To == "Hex":
            return hex.encode()
        elif To == "Base32":
            return bs32.encode()
        elif To == "Base64":
            return bs64.encode()
        elif To == "Base85":
            return bs85.encode()
        elif To == "ROT13":
            return rot13.encode()
    if From == "Hex":
        if To == "Hex":
            return Text
        elif To == "Plaintext":
            return hex.decode(Text)
    return False
if __name__ == '__main__':
    main()
