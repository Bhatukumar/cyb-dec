import codecs
import base64

def hextoplaintext(input):
    return codecs.decode(input,'hex')

def hextobase32(input):
    return base64.b32encode(hextoplaintext(input))

def hextobase64(input):
    return base64.b64encode(hextoplaintext(input))

def hextobase85(input):
    return base64.b85encode(hextoplaintext(input))

def hextorot13(input):
    return codecs.encode(hextoplaintext(input),'rot13')