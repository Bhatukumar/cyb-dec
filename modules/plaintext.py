# input = "WAKANDA FOREVER"
    

# def plaintextToBase32(input):
#     return base64.b32encode(input)

# def plaintextToBase64(input):
#     return base64.b64encode(input)

# def plaintextToBase85(input):
#     return base64.b85encode(input).decode('utf-8')

def toHex(input):
    return input.encode('utf-8').hex()

def toDec(input):
    t = ''
    for x in input:
        tmp = ord(x)
        t += str(tmp)
    return t

def toOct(input):
    t = ''
    for x in input:
        t += (oct(ord(x)).replace("0o", "").zfill(3))
    return (t)

def toBin(input):
    return bin(int(toHex(input), 16))[2:].zfill(8)
        
# def plaintextToRot13(input):
#     return codecs.encode(input,'rot13')

# print(toBin("ABCD"))
    # octal hex binary decimal