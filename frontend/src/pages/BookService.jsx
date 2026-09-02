import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from '../../environment';

const BookService = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const UserId = user.UserId;
    const [services, setServices] = useState([]);
    const [mechanics, setMechanics] = useState([]);
    const [formData, setFormData] = useState({
        UserId: UserId,         //user.UserId
        ServiceId: "",
        MechanicId: "",
        Vehicle: ""
    });

    // Get services
    useEffect(() => {
        getServices();
        getMechanics();
    }, []);
   

    const getServices = async () => {
        try {
            const response = await axios.get(
                BACKEND_URL+"/api/service"
            );
            console.log(response.data);
            setServices(response.data);
        } catch (error) {
            console.log("Service Error:", error);
        }
    };
    const getMechanics = async () => {
    try {
        const response = await axios.get(
            BACKEND_URL + "/api/mechanic"
        );

        console.log(response.data);
        setMechanics(response.data);
    } catch (error) {
        console.log("Mechanic Error:", error);
    }
};
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
               BACKEND_URL+ "/api/bookings",
                formData
            );

            console.log(response.data);

            alert("Service booked successfully");

            setFormData({
                ServiceId: "",
                Vehicle: ""
            });

        } catch (error) {
            console.log("Booking Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">

                <h1 className="mb-2 text-2xl font-bold text-gray-800">
                    Book a Service
                </h1>

                <p className="mb-6 text-sm text-gray-500">
                    Select a service and provide your vehicle details
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Service */}
                    <div className="mb-5">

                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Select Service
                        </label>

                        <select
                            name="ServiceId"
                            value={formData.ServiceId}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                            required
                        >

                            <option value="">
                                Select a service
                            </option>

                            {services.map((service) => (
                                <option
                                    key={service.ServiceId}
                                    value={service.ServiceId}
                                >
                                    {service.FullName} - ₹{service.Price}
                                </option>
                            ))}

                        </select>

                    </div>
                    {/* mechanic */}
                    <div className="mb-5">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Select Mechanic
                        </label>

                        <select
                            name="MechanicId"
                            value={formData.MechanicId}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
                            required
                        >
                            <option value="">
                                Select a mechanic
                            </option>

                            {mechanics.map((mechanic) => (
                                <option
                                    key={mechanic.MechanicId}
                                    value={mechanic.MechanicId}
                                >
                                    {mechanic.MechanicName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Vehicle */}
                    <div className="mb-6">

                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Vehicle
                        </label>

                        <input
                            type="text"
                            name="Vehicle"
                            value={formData.Vehicle}
                            onChange={handleChange}
                            placeholder="e.g. Honda City"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
                    >
                        Book Service
                    </button>

                </form>

            </div>

        </div>
    );
};

export default BookService;