import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from '../images/amazon-logo.png'

function Location() {
  const [newFullName, setNewFullName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPincode, setNewPincode] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddAddress = () => {
    if (newFullName.trim() !== "" && newAddress.trim() !== "" && newPincode.trim() !== "" && newPhoneNumber.trim() !== "") {
      if (editIndex === -1) {
        setAddresses([...addresses, { fullName: newFullName, address: newAddress, pincode: newPincode, phoneNumber: newPhoneNumber }]);
      } else {
        const updatedAddresses = [...addresses];
        updatedAddresses[editIndex] = { fullName: newFullName, address: newAddress, pincode: newPincode, phoneNumber: newPhoneNumber };
        setAddresses(updatedAddresses);
        setEditIndex(-1);
      }
      setNewFullName("");
      setNewAddress("");
      setNewPincode("");
      setNewPhoneNumber("");
    }
  }

  const handleEditAddress = (index) => {
    setNewFullName(addresses[index].fullName);
    setNewAddress(addresses[index].address);
    setNewPincode(addresses[index].pincode);
    setNewPhoneNumber(addresses[index].phoneNumber);
    setEditIndex(index);
  }

  const handleRemoveAddress = (index) => {
    const updatedAddresses = [...addresses];
    updatedAddresses.splice(index, 1);
    setAddresses(updatedAddresses);
    setEditIndex(-1);
  }

  const navigate = useNavigate();

  return (
    <div className="address">
      <h1 className="address-heading">Your Addresses <img src={image} alt="" onClick={() => navigate("/homepage")}/></h1>
      <div className="address-content">
        <p>Full Name</p>
      <input
        type="text"
        placeholder="Enter full name"
        value={newFullName}
        onChange={(e) => setNewFullName(e.target.value)}
      />
      </div>
      <div className="address-content">
        <p>Full Address</p>
        <input
        type="text"
        placeholder="Enter an address"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      </div>
      <div className="address-content">
        <p>Pin Code</p>
        <input
        type="text"
        placeholder="Enter a PIN code"
        value={newPincode}
        onChange={(e) => setNewPincode(e.target.value)}
      />  ``
      </div>
      <div className="address-content">
        <p>Phone Number</p>
        <input
        type="text"
        placeholder="Enter a phone number"
        value={newPhoneNumber}
        onChange={(e) => setNewPhoneNumber(e.target.value)}
      />
      </div>
      <button onClick={handleAddAddress} className="address-button">
        {editIndex === -1 ? "Add Address" : "Update Address"}
      </button>

      <ul>
        {addresses.map((address, index) => (
          <li key={index} className="address-container">
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={newFullName}
                  onChange={(e) => setNewFullName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter an address"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter a PIN code"
                  value={newPincode}
                  onChange={(e) => setNewPincode(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter a phone number"
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <p>Full Name: {address.fullName}</p>
                <p>Address: {address.address}</p>
                <p>PIN Code: {address.pincode}</p>
                <p>Phone Number: {address.phoneNumber}</p>
              </div>
            )}
            {editIndex !== index && (
              <button onClick={() => handleEditAddress(index)} className="address-edit">Edit</button>
            )}
            <button onClick={() => handleRemoveAddress(index)} className="address-remove">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Location;
