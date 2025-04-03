import json
import pytest
from app import app #import your flask app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_customer_registration_success(client):
    payload = {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "phone": "123-456-7890"
    }

    response = client.post('/customers',
                           data=json.dumps(payload),
                           content_type='application/json')

    #Convert response data to python dictionary
    data = json.loads(response.get_data())
    assert response.status_code ==200
    assert data.get("message")=="Customer registered successfully"
    assert data.get("data")==payload

def test_customer_registration_bad_request(client):
    #Missing required fields like email and phone
    payload ={
        "name": "John Doe"
    }
    response = client.post('/customers',
                           data=json.dumps(payload),
                           content_type='application/json')

    #For example expect 400 error if API validates input correctly
    assert response.status_code == 400

def test_appointment_booking_success(client):
    payload = {
        "customer_id": 1,
        "service_id": 2,
        "appointment_date":"2025-28-03Ti09:00:00",
        "status": "pending"
    }
    response = client.post('/appointments',
                           data = json.dumps(payload),
                           content_type='application/json')
    data = json.loads(response.get_data())
    assert response.status_code ==200
    assert data.get("message") == "Appointment booked successfully"
    assert data.get("data")==payload

def test_appointment_booking_bad_request(client):
    payload ={
        "customer_id" :1
    }

    response = client.post('/appointments',
                           data = json.dumps(payload),
                           content_type='application/json')

    data = json.loads(response.get_data())

    assert response.status_code == 400
    assert data.get("message") == "Appointment booking failed"
