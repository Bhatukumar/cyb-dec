import sys
import json
from typing import Type
from modules import base32c, base64c as bs64
from modules import base32c as bs32
from modules import base85 as bs85
from modules import hexc as hex
from modules import rot13c as rot13
from modules import plaintext as pt


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
            return pt.plaintextToHex(Text)
        elif To == "Base32":
            return pt.plaintextToBase32(Text)
        elif To == "Base64":
            return pt.plaintextToBase64(Text)
        elif To == "Base85":
            return pt.plaintextToBase85(Text)
        elif To == "ROT13":
            return pt.plaintextToRot13(Text)

    if From == "Hex":
        if To == "Hex":
            return Text
        elif To == "Plaintext":
            return hex.hexToPlaintext(Text)
        elif To == "Base32":
            return hex.hexToBase32(Text)
        elif To == "Base64":
            return hex.hexToBase64(Text)
        elif To == "Base85":
            return hex.hexToBase85(Text)
        elif To == "ROT13":
            return hex.hexToRot13(Text)

    if From == "Base32":
        if To == "Base32":
            return Text
        elif To == "Plaintext":
            return bs32.base32ToPlaintext(Text)
        elif To == "Base64":
            return bs32.base32ToBase64(Text)
        elif To == "Base85":
            return bs32.base32ToBase85(Text)
        elif To == "ROT13":
            return bs32.base32ToRot13(Text)
        elif To == "Hex":
            return bs32.base32ToHex(Text)

    if From == "Base64":
        if To == "Base64":
            return Text
        elif To == "Plaintext":
            return bs64.base64ToPlaintext(Text)
        elif To == "Base32":
            return bs64.base64ToBase32(Text)
        elif To == "Base85":
            return bs64.base64ToBase85(Text)
        elif To == "Hex":
            return bs64.base64ToHex(Text)
        elif To == "ROT13":
            return bs64.base64ToRot13(Text)

    if From == "Base85":
        if To == "Base85":
            return Text
        elif To == "Plaintext":
            return bs85.base85ToPlaintext(Text)
        elif To == "Hex":
            return bs85.base85ToHex(Text)
        elif To == "Base32":
            return bs85.base85ToBase32(Text)
        elif To == "Base64":
            return bs85.base85ToBase64(Text)
        elif To == "ROT13":
            return bs85.base85ToRot13(Text)
        
    if From == "ROT13":
        if To == "ROT13":
            return Text
        elif To == "Plaintext":
            return rot13.rot13ToPlaintext(Text)
        elif To == "Base32":
            return rot13.rot13ToBase32(Text)
        elif To == "Base64":
            return rot13.rot13ToBase64(Text)
        elif To == "Base85":
            return rot13.rot13ToBase85(Text)
        elif To == "Hex":
            return rot13.rot13ToHex(Text)
    return False
if __name__ == '__main__':
    main()
