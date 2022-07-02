import base64
import codecs

def base64ToPlaintext(input):
    return base64.b64decode(input)

def base64ToBase32(input):
    return base64.b32encode(base64ToPlaintext(input))

def base64ToBase85(input):
    return base64.b64encode(base64ToPlaintext(input))

def base64ToHex(input):
    return base64.b16encode(base64ToPlaintext(input))

def base64ToRot13(input):
    return codecs.encode(base64ToPlaintext(input),'rot13')