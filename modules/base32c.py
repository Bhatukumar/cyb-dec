import base64

def decode(input):
    return base64.b32decode(input)

def encode(input):
    return base64.b32encode(input)