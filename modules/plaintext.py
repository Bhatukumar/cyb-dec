import base64
import codecs



def plaintextToBase32(input):
    return base64.b32encode(input)

def plaintextToBase64(input):
    return base64.b64encode(input)

def plaintextToBase85(input):
    return base64.b85encode(input).decode('utf-8')

def plaintextToHex(input):
    return codecs.encode(input,'hex').decode('ascii')

def plaintextToRot13(input):
    return codecs.encode(input,'rot13')
