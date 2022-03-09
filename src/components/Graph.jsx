import React from "react";

import Result from "../data/data.json"

import Chart from 'chart.js/auto'
import {Line} from "react-chartjs-2"

export default function Graph() {
    var sessions = [];
    var averages = [];

    Result.map((resultDetail, index) => {
        if(!sessions.includes("T" + (resultDetail.session_id-1)) && resultDetail.session_id != ''){
            sessions.push("T" + (resultDetail.session_id-1))
        }
    })

    console.log(sessions)
    return (
        <div style={{width:"550px", height:"450px"}}>
            <Line
                data={{ 
                    labels: sessions,
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={"25%"}
                width={"35%"}
            />
        </div>
    );
}