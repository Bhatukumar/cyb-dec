import codecs

def decode(input):
    return codecs.decode(input,'hex')



def encode(input):
    return codecs.encode(input,'hex').decode('ascii')
