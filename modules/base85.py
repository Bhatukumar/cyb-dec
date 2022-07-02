import base64
import codecs

def base85ToPlaintext(input):
    return base64.b85encode(input.encode('utf-8')).decode('utf-8')

def base85ToBase32(input):
    return base64.b32encode(base85ToPlaintext(input))

def base85ToBase64(input):
    return base64.b64encode(base85ToPlaintext(input))

def base85ToHex(input):
    return base64.b16encode(base85ToPlaintext(input))

def base85ToRot13(input):
    return codecs.encode(base85ToPlaintext(input),'rot13')