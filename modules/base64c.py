import base64

def decode(input):
    return base64.b64decode(input)

def encode(input):
    return base64.b64encode(input)