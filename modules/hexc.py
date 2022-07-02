import codecs
import base64

def hexToPlaintext(input):
    return codecs.decode(input,'hex')

def hexToBase32(input):
    return base64.b32encode(hexToPlaintext(input))

def hexToBase64(input):
    return base64.b64encode(hexToPlaintext(input))

def hexToBase85(input):
    return base64.b85encode(hexToPlaintext(input))

def hexToRot13(input):
    return codecs.encode(hexToPlaintext(input),'rot13')