import React from 'react';
import './Schedule.css';

const Schedule = () => {
    var rows = [];
    for (var i = 0; i < 11; i++) {
        rows.push(
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }

    return(
        <div className="schedule">
            <h3 className="schedule_title">Schedule</h3>
            <table>
                <thead>
                    <tr>
                        <th className="time">Time</th>
                        <th>Mo</th>
                        <th>Tu</th>
                        <th>We</th>
                        <th>Th</th>
                        <th>Fr</th>
                        <th>Sa</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default Schedule;

