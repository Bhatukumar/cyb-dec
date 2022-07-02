import codecs
import base64

def rot13ToPlaintext(input):
    return codecs.decode(input,'rot13')

def rot13ToBase32(input):
    return base64.b32encode(rot13ToPlaintext(input))

def rot13ToBase64(input):
    return base64.b64encode(rot13ToPlaintext(input))

def rot13ToBase85(input):
    return base64.b85encode(rot13ToPlaintext(input))

def rot13ToHex(input):
    return base64.b16encode(rot13ToPlaintext(input))