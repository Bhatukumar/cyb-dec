def toDec(input): 
    return int(input, 2) 

def toHex(input):
    return hex(toDec(input)).replace('0x','')

def toOct(input):
    return oct(int(input,2)).replace('0o','')

def toPlaintext(input):
 
    def BinaryToDecimal(binary):
        string = int(binary, 2)
        return string

    bin_data = input
    str_data =' '
    for i in range(0, len(bin_data), 7):
        temp_data = bin_data[i:i + 7] 
        decimal_data = BinaryToDecimal(temp_data)
        str_data = str_data + chr(decimal_data)

    return str_data

# print(tohex('0101101'))
