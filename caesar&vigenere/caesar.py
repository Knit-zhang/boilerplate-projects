def caesar(message, offset):
    final_message = ""
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for char in message.lower():
        # Append all non-letter characters to the message
        if not char.isalpha():
            final_message += char
        else:
            index = alphabet.find(char)
            new_index = (index + offset) % 26
            final_message += alphabet[new_index]
    return final_message

def encrypt(message, offset):
    return caesar(message, offset)

def decrypt(message, offset):
    return caesar(message, -offset)

text = ''
encencryption = encrypt(text, 3)
decryption = decrypt(encencryption, 3)
print(f'Encryption: {encencryption}\nDecryption: {decryption}')



