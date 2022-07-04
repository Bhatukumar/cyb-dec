import codecs
import base64


def toPlaintext(input):
    return bytes.fromhex(input).decode('utf-8')

def toDec(input):
    return int(input, 16)

def toOct(input):
    return oct(int(input, 16)).replace("0o","")

def toBin(input):
    return bin(int(input, 16))[2:].zfill(8)

# print(toOct("A1"))

# def hexToBase32(input):
#     return base64.b32encode(hexToPlaintext(input))


# def hexToBase64(input):
#     return base64.b64encode(hexToPlaintext(input))


# def hexToBase85(input):
#     return base64.b85encode(hexToPlaintext(input))


# def hexToRot13(input):
#     return codecs.encode(hexToPlaintext(input), 'rot13')

# print(hexToBin("ABAAE"))