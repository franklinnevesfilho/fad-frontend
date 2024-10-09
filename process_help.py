import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, request
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app, resources={r"/user": {"origins": "http://localhost:5173"}})

cred = credentials.Certificate('./firebase-config.json') 
firebase_admin.initialize_app(cred)

db_client = firestore.client()

#this route will create the key to query the database
@app.route('/user', methods=['POST'])
def process_users():

    data = request.get_json()

    reason = data['user_topic'].lower()  
    language = data['language'].lower()   
    city = data['city'].lower() 
         
    collection_key = f"{reason}-{language}-{city}"
    
    try:
        result = get_service_list(collection_key)
        
        print(result)
        return [result], 200
    
    except Exception as e:
        return f"An Error Occurred: {e}"


#helper function to access the database
def get_service_list(collection_key):
    try:
        service_ref = db_client.collection(collection_key).document('list')

        if not service_ref.get().exists:
                return []
        
        service_doc = service_ref.get().to_dict()

        return service_doc
    except Exception as e:
        return {'error in get_service_list function'}, 500  # Return error as JSON


if __name__ == '__main__':
    app.run()