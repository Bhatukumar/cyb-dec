import base64
import codecs


def base32ToPlaintext(input):
    return base64.b32decode(input)

def base32ToHex(input):
    return base64.b32decode(input).hex()

def base32ToRot13(input):
    return codecs.encode(base32ToPlaintext(input),'rot13')

def base32ToBase64(input):
    return base64.b64encode(base32ToPlaintext(input))

def base32ToBase85(input):
    return base64.b85encode(base32ToPlaintext(input))
