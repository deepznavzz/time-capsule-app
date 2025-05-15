import React, { useState } from "react";

// Placeholder for revealed capsules
const sampleCapsules = [
  {
    _id: "1",
    message: "Hello, future me!",
    revealDate: "2024-05-10",
  },
  {
    _id: "2",
    message: "Keep learning and growing!",
    revealDate: "2024-05-12",
  },
];

function Dashboard() {
  const [capsules] = useState(sampleCapsules);

  return (
    <div>
      <h1>Your Revealed Time Capsules</h1>
      {capsules.length === 0 ? (
        <p>No revealed capsules yet.</p>
      ) : (
        capsules.map((capsule) => (
          <div key={capsule._id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#888" }}>
              Revealed on: {new Date(capsule.revealDate).toLocaleDateString()}
            </div>
            <div style={{ marginTop: 8 }}>{capsule.message}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
