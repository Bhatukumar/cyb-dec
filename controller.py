import sys
import json
# from modules import base64c as bs64
# from modules import base32c as bs32
# from modules import base85 as bs85
# from modules import rot13c as rot13
from modules import hexc as hex
from modules import plaintext as pt
from modules import octal as oct
from modules import decimal as dec
from modules import binaryc as bin


def main():
    question = json.loads(sys.argv[1])
    Type = readType(question)
    Text = readText(question)
    From = readFrom(question)
    To = readTo(question)

    ans = str(work(Text, From, To))
    sys.stdout.write(ans)


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
            return pt.toHex(Text)
        # elif To == "Base32":
        #     return pt.plaintextToBase32(Text)
        # elif To == "Base64":
        #     return pt.plaintextToBase64(Text)
        # elif To == "Base85":
        #     return pt.plaintextToBase85(Text)
        # elif To == "ROT13":
        #     return pt.plaintextToRot13(Text)
        elif To == "Decimal":
            return pt.toDec(Text)
        elif To == "Octal":
            return pt.toOct(Text)
        elif To == "Binary":
            return pt.toBin(Text)

    if From == "Hex":
        if To == "Hex":
            return Text
        elif To == "Plaintext":
            return hex.toPlaintext(Text)
        # elif To == "Base32":
        #     return hex.hexToBase32(Text)
        # elif To == "Base64":
        #     return hex.hexToBase64(Text)
        # elif To == "Base85":
        #     return hex.hexToBase85(Text)
        # elif To == "ROT13":
        #     return hex.hexToRot13(Text)
        elif To == "Octal":
            return hex.toOct(Text)
        elif To == "Decimal":
            return hex.toDec(Text)
        elif To == "Binary":
            return hex.toBin(Text)

    if From == "Octal":
        if To == "Octal":
            return Text
        elif To == "Decimal":
            return oct.toDec(Text)
        elif To == "Binary":
            return oct.toBin(Text)
        elif To == "Hex":
            return oct.toHex(Text)
        elif To == "Plaintext":
            return oct.toPlain(Text)

    if From == "Decimal":
        if To == "Deciaml":
            return Text
        elif To == "Hex":
            return dec.toHex(Text)
        elif To == "Octal":
            return dec.toOct(Text)
        elif To == "Binary":
            return dec.toBin(Text)
        elif To == "Plaintext":
            return dec.toPlaintext(Text)

    if From == "Binary":
        if To == "Binary":
            return Text
        elif To == "Hex":
            return bin.toHex(Text)
        elif To == "Decimal":
            return bin.toDec(Text)
        elif To == "Plaintext":
            return bin.toPlaintext(Text)
        elif To == "Octal":
            return bin.toOct(Text)        

    # if From == "Base32":
    #     if To == "Base32":
    #         return Text
    #     elif To == "Plaintext":
    #         return bs32.base32ToPlaintext(Text)
    #     elif To == "Base64":
    #         return bs32.base32ToBase64(Text)
    #     elif To == "Base85":
    #         return bs32.base32ToBase85(Text)
    #     elif To == "ROT13":
    #         return bs32.base32ToRot13(Text)
    #     elif To == "Hex":
    #         return bs32.base32ToHex(Text)

    # if From == "Base64":
    #     if To == "Base64":
    #         return Text
    #     elif To == "Plaintext":
    #         return bs64.base64ToPlaintext(Text)
    #     elif To == "Base32":
    #         return bs64.base64ToBase32(Text)
    #     elif To == "Base85":
    #         return bs64.base64ToBase85(Text)
    #     elif To == "Hex":
    #         return bs64.base64ToHex(Text)
    #     elif To == "ROT13":
    #         return bs64.base64ToRot13(Text)

    # if From == "Base85":
    #     if To == "Base85":
    #         return Text
    #     elif To == "Plaintext":
    #         return bs85.base85ToPlaintext(Text)
    #     elif To == "Hex":
    #         return bs85.base85ToHex(Text)
    #     elif To == "Base32":
    #         return bs85.base85ToBase32(Text)
    #     elif To == "Base64":
    #         return bs85.base85ToBase64(Text)
    #     elif To == "ROT13":
    #         return bs85.base85ToRot13(Text)

    # if From == "ROT13":
    #     if To == "ROT13":
    #         return Text
    #     elif To == "Plaintext":
    #         return rot13.rot13ToPlaintext(Text)
    #     elif To == "Base32":
    #         return rot13.rot13ToBase32(Text)
    #     elif To == "Base64":
    #         return rot13.rot13ToBase64(Text)
    #     elif To == "Base85":
    #         return rot13.rot13ToBase85(Text)
    #     elif To == "Hex":
    #         return rot13.rot13ToHex(Text)

    return False


if __name__ == '__main__':
    main()
