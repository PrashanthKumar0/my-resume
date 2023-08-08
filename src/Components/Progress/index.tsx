import React from 'react'

import "./style.css";

interface IProgress {
    amount: number;
    max: number;
};

function Progress({ amount, max }: IProgress) {
    const [progressPercentage, setProgressPercentage] = React.useState(((amount / max) * 100));
    return (
        <div className="progress">
            <div className="progress_amount" style={{ width: `${progressPercentage.toFixed(0)}%` }}>
            </div>
        </div>
    )
}

export default Progress