import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../../environment';


const Dashboard = () => {
    const [page, setPage] = useState(1);
    const limit = 10;
    const [dashboard, setDashboard] = useState(null);
    const [booking, setBooking] = useState([]);

  useEffect(() => {
    getDashboard();
    getBooking();
  }, [page]);
   const token = localStorage.getItem("token");
  const getDashboard = async () => {
    try {
      const response = await axios.get(
        BACKEND_URL+"/api/dashboard", {
            headers: {
                    Authorization: `Bearer ${token}` // <--- Yeh bhejna zaroori hai!
                }
        });

      console.log(response.data);
      setDashboard(response.data);

    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };
  const getBooking = async () => {
    try {
      const response = await axios.get(
        BACKEND_URL+"/api/bookings",{
            params: {
                page: page,
                limit: limit
            },
            headers: {
                Authorization: `Bearer ${token}` // <--- Yeh bhejna zaroori hai!
            }
        });

      console.log(response.data);                                       //{count, rows} me data aa rha ye object hahi and rows aaray hai

      setBooking(response.data.rows);

    } catch (error) {
      console.log( error);
    }
  };
  return (
    
    <>
        <div className="min-h-screen bg-gray-100 p-12">

    <h1 className="mb-6 text-3xl font-bold text-gray-800">
      Dashboard
    </h1>

    {dashboard && (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm text-gray-500">
            Total Customers
          </h2>

          <p className="mt-2 text-3xl font-bold">
            {dashboard.totalCustomers}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm text-gray-500">
            Total Mechanics
          </h2>

          <p className="mt-2 text-3xl font-bold">
            {dashboard.totalMechanics}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm text-gray-500">
            Total Bookings
          </h2>

          <p className="mt-2 text-3xl font-bold">
            {dashboard.totalBookings}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm text-gray-500">
            Completed Bookings
          </h2>

          <p className="mt-2 text-3xl font-bold">
            {dashboard.completedBookings}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm text-gray-500">
            Total Revenue
          </h2>

          <p className="mt-2 text-3xl font-bold">
            ₹{dashboard.totalRevenue}
          </p>
        </div>

      </div>
    )}
    <div className="mt-8 rounded-xl bg-white p-6 shadow">

  <h2 className="mb-4 text-xl font-bold">
    Recent Bookings
  </h2>
    <button disabled={page === 1} onClick={() => setPage(page - 1)}  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50">
     prev
    </button>
    
    <button onClick={() => setPage(page + 1)} className="rounded-lg bg-blue-300 px-4 py-2 text-sm font-medium text-white shadow-sm transition  disabled:cursor-not-allowed disabled:opacity-50">
        Next
    </button>
    <table className="w-full">
      <thead>
        <tr className="border-b text-left">
          <th className="p-3">Booking ID</th>
          <th className="p-3">User Name</th>
          <th className="p-3">Mechanic Name</th>
          <th className="p-3">Service Name</th>
          <th className="p-3">Vehicle</th>
          <th className="p-3">Status</th>
          <th className="p-3">Amount</th>
        </tr>
      </thead>

      <tbody>
        {booking.map((booking) => (
          <tr key={booking.BookingId} className="border-b">
            <td className="p-3">{booking.BookingId}</td>
            <td className="p-3">{booking.User?.FullName}</td>
            <td className="p-3">{booking.Mechanic?.Name || "Not Assigned"}</td>
            <td className="p-3">{booking.Service?.FullName}</td>
            <td className="p-3">{booking.Vehicle}</td>
            <td className="p-3">
                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                        booking.Status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : booking.Status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : booking.Status === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                >
          {booking.Status}
        </span>
      </td>
            <td className="p-3">₹{booking.Amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  

</div>

  </div>
  
    </>
    
  )
}

export default Dashboard