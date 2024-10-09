import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, request
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app, resources={r"/addConvo": {"origins": "http://127.0.0.1:5000"}})

cred = credentials.Certificate('./firebase-config.json') 
firebase_admin.initialize_app(cred)

db_client = firestore.client()

#this route will add a new conversation to the existing conversation history
@app.route('/addConvo', methods=['POST'])
def add_convo():
    
    data = request.get_json()
    user_id = data['user_id']
    new_convo = data['convo_history']

    try:
        user_ref = db_client.collection('conversations').document(user_id)
        
        #this will add the new convo to the existing convo history as a array of dictionaries
        user_ref.set({
            'convo_history': firestore.ArrayUnion(new_convo)
        }, merge=True)

        return 'New conversation added', 200

    except Exception as e:
        return f"An Error Occurred trying to add new conversation: {e}"
    

#this route will get the entire conversation history for a specific user
@app.route('/getConvo/<user_id>', methods=['GET'])
def process_user_convo(user_id):

    try:
        # Gets the entire document for the specified user_id
        doc = db_client.collection('conversations').document(user_id).get()

        # Checks if the document exists
        if doc.exists:
            # Converts the documents fields to a dictionary
            data = doc.to_dict()
             # Retrieves the convo_history field from the dictionary
            convo_history = data['convo_history']

            return {'convo_history': convo_history}, 200

    except Exception as e:
        return f"An Error Occurred trying to get the conversation history: {e}"



if __name__ == '__main__':
    app.run()