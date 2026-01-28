import React from 'react';

const ReportsView = () => {
    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Statutory Reports & Communication</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Submission Form */}
                <div className="stat-card">
                    <h3 style={{ marginTop: 0 }}>Submit Report</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Report Type</label>
                            <select style={{ width: '100%', padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }}>
                                <option>Arrival Report</option>
                                <option>Pre-Poll Activity</option>
                                <option>Poll Day Report (Hourly)</option>
                                <option>Post-Poll Scrutiny</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Observations</label>
                            <textarea rows="4" style={{ width: '100%', padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Enter details..." />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Attachments (Photos/Docs)</label>
                            <input type="file" />
                        </div>
                        <button className="btn" style={{ background: 'var(--primary-color)', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', cursor: 'pointer' }}>
                            Upload & Submit
                        </button>
                    </form>
                </div>

                {/* ECI Notices */}
                <div className="stat-card" style={{ background: '#fff8e1', border: '1px solid #ffecb3' }}>
                    <h3 style={{ marginTop: 0, color: '#f57f17' }}>ECI Notice Board</h3>
                    <ul style={{ paddingLeft: '1.2rem' }}>
                        <li style={{ marginBottom: '0.75rem' }}>
                            <strong>URGENT:</strong> Check all VVPAT seals in Sector 4.
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>2 mins ago</div>
                        </li>
                        <li style={{ marginBottom: '0.75rem' }}>
                            Submit 11:00 AM turnout stats immediately.
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>1 hour ago</div>
                        </li>
                        <li>
                            Deployment Plan approved for tomorrow.
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Yesterday</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReportsView;
