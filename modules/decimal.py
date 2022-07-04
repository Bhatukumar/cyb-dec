def toHex(input):
    return hex(int(input)).replace("0x","")

def toOct(input):
    return oct(int(input)).replace("0o","")

def toBin(input):
    return bin(int(input))[2:].zfill(8)

# def toPlaintext(input):
#     t = []
#     ans = ''
#     for x in input.split(' '):
#         t.append(x)
#     for x in t:
#         ans += chr(int(x))
#     return ''.join(t) 

# print(toPlaintext("103 105"))