import codecs

def decode(input):
    return codecs.decode(input,'rot13')

def encode(input):
    return codecs.encode(input,'rot13')