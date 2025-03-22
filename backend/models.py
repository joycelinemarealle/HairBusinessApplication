#import all necessary parts of SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Numeric
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

#Create a base class that models will inherit from
Base = declarative_base()

#Define the customer model
class Customer(Base):
    __tablename__ = 'customers'
    id = Column(Integer, primary_key= True) #unique id
    name = Column(String, nullable=False) #customer name cannot be empty
    email = Column(String, unique = True, nullable = False) #Unique email per customer
    phone = Column (String)

    #One to Many relationship: A customer can have many appointments
    appointments = relationship("Appointment",back_populates="customer")

#Define service model
class Service(Base):
    __tablename__ = 'services'
    id = Column (Integer, primary_key = True)
    service_name = Column(String, nullable =False)
    description = Column(String)
    price = Column(Numeric)

class Appoointment(Base):
    __tablename__ = 'appointments'
    id = Column(Integer, primary_key =True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False) #Link to customer
    service_id = Column(Integer,ForeignKey('services.id)')) #optional link to customer
    appointment_date = Column(DateTime, nullable=False)
    status = Column(String, default = 'pending')

    #Many to one many appt to one customer
    #Many  appt to one serive
    customer = relationship("Customer",back_populates="appointments")
    service = relationship("Service", back_populates="appointments")
