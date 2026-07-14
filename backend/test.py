from security import (
    create_access_token,
    verify_access_token
)

token = create_access_token({
    "enrollment": "22010231",
    "role": "student"
})

print("TOKEN:")
print(token)

print()

payload = verify_access_token(token)

print("PAYLOAD:")
print(payload)