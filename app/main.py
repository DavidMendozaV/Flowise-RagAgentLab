import requests

API_URL = "http://localhost:3000/api/v1/prediction/c233ebd1-535d-4737-879b-10e5cddade95"

def query(payload):
    response = requests.post(API_URL, json=payload)
    return response.json()
    
output = query({
    "question": "Hey, how are you?",
})
