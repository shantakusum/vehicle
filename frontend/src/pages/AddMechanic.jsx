import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from '../../environment';

const AddMechanic = () => {

    const [formData, setFormData] = useState({
        Name: "",
        Phone: "",
        Status: "Available"
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
                BACKEND_URL+"/api/mechanic",
                formData
            );

            console.log(response.data);

            alert("Mechanic added successfully");

            setFormData({
                Name: "",
                Phone: "",
                Status: "Available"
            });

        } catch (error) {
            console.log("Add Mechanic Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">

                <h1 className="mb-2 text-2xl font-bold text-gray-800">
                    Add Mechanic
                </h1>

                <p className="mb-6 text-sm text-gray-500">
                    Add a new mechanic to your team
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Mechanic Name
                        </label>

                        <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            placeholder="Enter mechanic name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Phone */}
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

                    {/* Status */}
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Status
                        </label>

                        <select
                            name="Status"
                            value={formData.Status}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                        >
                            <option value="Available">Available</option>
                            <option value="Busy">Busy</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
                    >
                        Add Mechanic
                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddMechanic;