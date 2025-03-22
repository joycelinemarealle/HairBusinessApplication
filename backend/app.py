from urllib import request

from flask import Flask, jsonify
from flask_restful import Resource, Api
app = Flask(__name__)
api = Api(app)

#customer registration API
class CustomerRegistration(Resource):
    def  post(self):
        data = request.get_json() #get data from request body
        #here validate and save customer details to my database
        #For now return received data
        return jsonify({
                "message":"Customer registered successfully",
                "data": data
            })

#Appointmenet API
class AppointmentBooking(Resource):
    def post(self):
        data = request.get_json()
        #validate data and book input (eg check if customers exists
        return jsonify({
            "message":"Appointment booked successfully",
            "data":data
        })

#Service Management API
class ServiceManagement(Resource):
    def get(self):
        #retrieve and return a list of services (dummy data here)
        services = [
            {"id":1, "service_name": "boho braids", "description": "The look that keeps on giving", "price":120.0},
        {"id":2, "service_name": "passion twist", "description": "bouncy curls", "price":100.0},
        ]

        return jsonify(services)

    def post(self):
        #TODO logic to add new service
        data = request.get_json()
        return ({
            "message":"Service management successful",
        })

    def put(self):
        data = request.get_json()
        # Logic to update an existing service.
        return jsonify({
            "message": "Service updated successfully",
            "data": data
        })

    def delete(self):
        data = request.get_json()
        # Logic to delete a service.
        return jsonify({
            "message": "Service deleted successfully",
            "data": data
        })

#Register endpoint with api
api.add_resource(CustomerRegistration, '/customers')
api.add_resource(AppointmentBooking, '/appointments')
api.add_resource(ServiceManagement, '/services')

if __name__== '__main__':
    app.run(debug=True, port=5000)




# from flask import Flask
#
# app = Flask(__name__)
# @app.route('/')
#
#
# def home():
#     return "Hello Joyceline"
#
# if __name__== '__main__':
#     app.run(debug=True)
