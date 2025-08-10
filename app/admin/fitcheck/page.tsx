export default function AdminBookings() {
  return (
    <div>
      <h2>Bookings Management</h2>

      <div className="admin-card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h3>All Bookings</h3>
          <button className="admin-button">Add New Booking</button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  ID
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Customer
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Service
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "0.75rem" }}>#001</td>
                <td style={{ padding: "0.75rem" }}>Kovács Anna</td>
                <td style={{ padding: "0.75rem" }}>Fit Check</td>
                <td style={{ padding: "0.75rem" }}>2024-01-15</td>
                <td style={{ padding: "0.75rem" }}>
                  <span
                    style={{
                      backgroundColor: "#10b981",
                      color: "white",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    Confirmed
                  </span>
                </td>
                <td style={{ padding: "0.75rem" }}>
                  <button
                    className="admin-button"
                    style={{ marginRight: "0.5rem" }}
                  >
                    Edit
                  </button>
                  <button className="admin-button danger">Delete</button>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "0.75rem" }}>#002</td>
                <td style={{ padding: "0.75rem" }}>Nagy Péter</td>
                <td style={{ padding: "0.75rem" }}>Consultation</td>
                <td style={{ padding: "0.75rem" }}>2024-01-16</td>
                <td style={{ padding: "0.75rem" }}>
                  <span
                    style={{
                      backgroundColor: "#f59e0b",
                      color: "white",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    Pending
                  </span>
                </td>
                <td style={{ padding: "0.75rem" }}>
                  <button
                    className="admin-button"
                    style={{ marginRight: "0.5rem" }}
                  >
                    Edit
                  </button>
                  <button className="admin-button danger">Delete</button>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "0.75rem" }}>#003</td>
                <td style={{ padding: "0.75rem" }}>Szabó Mária</td>
                <td style={{ padding: "0.75rem" }}>Rental</td>
                <td style={{ padding: "0.75rem" }}>2024-01-17</td>
                <td style={{ padding: "0.75rem" }}>
                  <span
                    style={{
                      backgroundColor: "#ef4444",
                      color: "white",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    Cancelled
                  </span>
                </td>
                <td style={{ padding: "0.75rem" }}>
                  <button
                    className="admin-button"
                    style={{ marginRight: "0.5rem" }}
                  >
                    Edit
                  </button>
                  <button className="admin-button danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
