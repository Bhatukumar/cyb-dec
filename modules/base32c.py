import base64
import codecs


def base32toplaintext(input):
    return base64.b32decode(input)

def base32tohex(input):
    return base64.b32decode(input).hex()

def base32torot13(input):
    return codecs.encode(base32toplaintext(input),'rot13')

def base32tobase64(input):
    return base64.b64encode(base32toplaintext(input))

def base32tobase64(input):
    return base64.b85encode(base32toplaintext(input))
