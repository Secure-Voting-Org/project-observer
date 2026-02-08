import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('general'); // 'general' | 'expenditure'
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch(`http://${window.location.hostname}:5000/api/observer/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('observer', JSON.stringify(data.observer));
                navigate('/dashboard');
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Server connection failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                {/* Left Side: Visuals */}
                <div className="login-visual">
                    {/* TrustBallot Branding in Visual Area */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <img
                            src="/assets/images/logo.png"
                            alt="TrustBallot Logo"
                            style={{ height: '80px', width: 'auto', background: 'white', borderRadius: '12px', padding: '5px' }}
                        />
                    </div>

                    <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', color: 'white' }}>{t('login.title')}</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.6 }}>
                        {t('login.subtitle')}
                        <br /><br />
                        Access the ECI's secure monitoring tools, real-time analytics, and statutory reporting modules.
                    </p>
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                        <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', fontSize: '0.9rem' }}>
                            {t('login.secure_access')}
                        </div>
                        <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', fontSize: '0.9rem' }}>
                            {t('login.encrypted')}
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="login-form-section">
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#192742' }}>{t('login.welcome')}</h2>
                    <p style={{ color: '#666', marginBottom: '2.5rem' }}>{t('login.identify')}</p>

                    {/* Tricolor Role Toggle */}
                    <div className="role-toggle">
                        <button
                            className={`role-btn ${role === 'general' ? 'active' : ''}`}
                            onClick={() => setRole('general')}
                        >
                            {t('login.general_obs')}
                        </button>
                        <button
                            className={`role-btn ${role === 'expenditure' ? 'active' : ''}`}
                            onClick={() => setRole('expenditure')}
                        >
                            {t('login.expenditure_obs')}
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>{t('login.username')}</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="e.g. observer1"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>{t('login.password')}</label>
                            <input
                                type="password"
                                className="input-field"
                                placeholder="Enter secure password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <div style={{ color: '#d32f2f', marginBottom: '1.5rem', fontWeight: 500, background: '#ffebee', padding: '1rem', borderRadius: '8px' }}>⚠️ {error}</div>}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn btn-primary"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                background: '#F7941D', // Saffron for Primary Action
                                color: 'white',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(247, 148, 29, 0.3)',
                                transition: 'all 0.3s'
                            }}
                        >
                            {isLoading ? t('login.verifying') : `${t('login.access_portal')} →`}
                        </button>
                    </form>

                    <p style={{ marginTop: '2rem', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
                        {t('login.unauthorized')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
