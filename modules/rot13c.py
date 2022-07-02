import codecs
import base64

def rot13toplaintext(input):
    return codecs.decode(input,'rot13')

def rot13tobase32(input):
    return base64.b32encode(rot13toplaintext(input))

def rot13tobase64(input):
    return base64.b64encode(rot13toplaintext(input))

def rot13tobase85(input):
    return base64.b85encode(rot13toplaintext(input))

def rot13tohex(input):
    return base64.b16encode(rot13toplaintext(input))