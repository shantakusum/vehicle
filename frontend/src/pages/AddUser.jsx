import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from '../../environment';

const AddUser = () => {

    const [formData, setFormData] = useState({
        FullName: "",
        UserEmail: "",
        Password: "",
        Phone: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                BACKEND_URL+"/api/customers",
                formData
            );

            console.log(response.data);

            alert("User added successfully");

            setFormData({
                FullName: "",
                UserEmail: "",
                Password: "",
                Phone: ""
            });

        } catch (error) {
            console.log("Add User Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">

                <h1 className="mb-2 text-2xl font-bold text-gray-800">
                    Add Customer
                </h1>

                <p className="mb-6 text-sm text-gray-500">
                    Create a new customer account
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="FullName"
                            value={formData.FullName}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            name="UserEmail"
                            value={formData.UserEmail}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Phone
                        </label>

                        <input
                            type="text"
                            name="Phone"
                            value={formData.Phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
                    >
                        Add Customer
                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddUser;