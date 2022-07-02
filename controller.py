import sys
import json
from modules import base64c as bs64
from modules import base32c as bs32
from modules import base85
from modules import hexc as hex
from modules import rot13c as rot13


def main():
    question = json.loads(sys.argv[1])
    Type = readType(question)
    Text = readType(question)
    From = readType(question)
    To = readType(question)

    work(Text, From, To)
    # sys.stdout.write(str(y['type']))


def readType(y):
    return str(y['type'])


def readText(y):
    return str(y['text'])


def readFrom(y):
    return str(y['from']).lower()


def readTo(y):
    return str(y['to']).lower()

def work(Text, From, To):
    return False

if __name__ == '__main__':
    main()
