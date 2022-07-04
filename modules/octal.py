
def toBin(Input):
    return int(Input,2)

def toDec(Input):
    return int(Input,8)

def toHex(Input):
    return hex(int(Input,8)).replace("0x","")

def toPlaintext(Input):
    x=[Input[i:i+3] for i in range(0, len(Input), 3)]
    str_converted = ""
    for octal_char in x:
        str_converted += chr(int(octal_char, 8))
    return str_converted 


# print(toPlaintext("110145154154157040127157162154144"))