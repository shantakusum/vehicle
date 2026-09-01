import React, { useState } from "react";
import axios from "axios";

const AddService = () => {

    const [formData, setFormData] = useState({
        FullName: "",
        Category: "",
        Price: ""
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
                "http://localhost:5000/api/service",
                formData
            );

            console.log(response.data);

            alert("Service added successfully");

            setFormData({
                FullName: "",
                Category: "",
                Price: ""
            });

        } catch (error) {
            console.log("Add Service Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">

                <h1 className="mb-2 text-2xl font-bold text-gray-800">
                    Add Service
                </h1>

                <p className="mb-6 text-sm text-gray-500">
                    Add a new vehicle service
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Service Name */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Service Name
                        </label>

                        <input
                            type="text"
                            name="FullName"
                            value={formData.FullName}
                            onChange={handleChange}
                            placeholder="e.g. Engine Repair"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Category
                        </label>

                        <select
                            name="Category"
                            value={formData.Category}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Engine">Engine</option>
                            <option value="Oil & Maintenance">
                                Oil & Maintenance
                            </option>
                            <option value="Tyres">Tyres</option>
                            <option value="Battery">Battery</option>
                            <option value="Brakes">Brakes</option>
                            <option value="AC">AC</option>
                            <option value="General">General</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Price
                        </label>

                        <input
                            type="number"
                            name="Price"
                            value={formData.Price}
                            onChange={handleChange}
                            placeholder="Enter service price"
                            min="0"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
                    >
                        Add Service
                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddService;