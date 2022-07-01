import base64

def encode(input):
    return base64.b85encode(input.encode('utf-8')).decode('utf-8')

def decode(input):
    return base64.b85decode(input).decode('utf-8')