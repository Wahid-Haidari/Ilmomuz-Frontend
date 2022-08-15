import React from 'react';
import './Dashboard.css';
import Schedule from './Schedule';

const Dashboard = () => {
    return(
        <div className="big_container">
            <h1 className="title">Dashboard</h1>
            <div className="dashboard_cards">
                <article className="card">
                    <h5>Total students</h5>
                    <h1>930</h1>
                </article>
                <article className="card">
                    <h5>Instructors</h5>
                    <h1>6</h1>
                </article>
                <article className="card">
                    <h5>Groups</h5>
                    <h1>19</h1>
                </article>
            </div>
            <Schedule/>
        </div>
        
    );
}

export default Dashboard;

