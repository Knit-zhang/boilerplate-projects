def vigenere(message, key, direction=1):
    final_message = ""
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    key_index = 0
    for char in message.lower():
        
        if not char.isalpha():
            final_message += char
        else:
            key_char = key[key_index % len(key)]
            key_index += 1

            offset = alphabet.index(key_char)
            index = alphabet.find(char)
            new_index = (index + offset * direction) % len(alphabet)
            final_message += alphabet[new_index]
    return final_message

def encrypt(message, key):
    return vigenere(message, key)

def decrypt(message, key):
    return vigenere(message, key, -1)

text = 'freecodecamp is awesome'
custom_key = 'happycoding'
encryption = encrypt(text, custom_key)
decryption = decrypt(encryption, custom_key)
print(f'Encryption: {encryption}\nDecryption: {decryption}')




