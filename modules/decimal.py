def toHex(input):
    return hex(input)

def toOct(input):
    return oct(input)

def toBin(input):
    return bin(input)[2:].zfill(8)

def toPlaintext(input):
    t = []
    for x in input.split(' '):
        t.append(chr(x))
    return ''.join(t)