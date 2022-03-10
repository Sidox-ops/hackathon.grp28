import React from "react";

import Result from "../data/data.json"

import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2"

export default function GraphSKC1() {
    var sessions = [];
    var averages = [];

    Result.map((resultDetail, index) => {
        if (!sessions.includes("T" + (resultDetail.session_id - 1)) && resultDetail.session_id != '') {
            sessions.push("T" + (resultDetail.session_id - 1))
        }
    })

    //1 no test 2 test

    var product1_1 = [0, 0, 0, 0];
    var product2_1 = [0, 0, 0, 0];

    var product1_2 = [0, 0, 0, 0];
    var product2_2 = [0, 0, 0, 0];


    Result.map((resultDetail, index) => {


        switch (resultDetail.product_code) {
            case 417432:
                if (resultDetail.zone_code == 1) {
                    if (resultDetail.score_skinbiosense == 1) {
                        switch (resultDetail.session_id) {
                            case 1:
                                product1_1[0] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;
                            case 2:
                                product1_1[1] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;

                            case 3:
                                product1_1[2] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;
                            case 4:
                                product1_1[3] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;

                            default:
                                break;
                        }
                    }
                } else if (resultDetail.zone_code == 2) {
                    if (resultDetail.score_skinbiosense == 1) {
                        switch (resultDetail.session_id) {
                            case 1:
                                product1_2[0] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;
                            case 2:
                                product1_2[1] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;

                            case 3:
                                product1_2[2] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;
                            case 4:
                                product1_2[3] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;

                            default:
                                break;
                        }
                    }
                }

                break;
            case 100218:
                if (resultDetail.zone_code == 1) {
                    if (resultDetail.score_skinbiosense == 1) {
                        switch (resultDetail.session_id) {
                            case 1:
                                product2_1[0] += parseFloat(resultDetail.mesure.replace(',', '.'))/100
                                break;
                            case 2:
                                product2_1[1] += parseFloat(resultDetail.mesure.replace(',', '.'))/100
                                break;

                            case 3:
                                product2_1[2] += parseFloat(resultDetail.mesure.replace(',', '.'))/100
                                break;
                            case 4:
                                product2_1[3] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;

                            default:
                                break;
                        }
                    }
                } else if (resultDetail.zone_code == 2) {
                    if (resultDetail.score_skinbiosense == 1) {
                        switch (resultDetail.session_id) {
                            case 1:
                                product2_2[0] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;
                            case 2:
                                product2_2[1] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;

                            case 3:
                                product2_2[2] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;
                            case 4:
                                product2_2[3] += parseFloat(resultDetail.mesure.replace(',', '.'))/100

                                break;

                            default:
                                break;
                        }
                    }
                }
                break;

            default:
                break;
        }

    })



    console.log("product 1", product1_1);
    console.log("product 2", product2_1);
    console.log("product 1", product1_2);
    console.log("product 2", product2_2);
    console.log(sessions);
    return (
        <div>
            <div style={{ width: "650px", height: "550px", display: "inline-flex", margin: "40px" }}>
                <Line
                    data={{
                        labels: sessions,
                        datasets: [
                            {
                                label: 'No Product 417432',
                                data: product1_1,
                                backgroundColor: [
                                    'rgba(54, 162, 235, 1)',

                                ],
                                borderColor: [
                                    'rgba(54, 162, 235, 1)',

                                ],
                                borderWidth: 1
                            },
                            {
                                label: 'No Product 100218',
                                data: product2_1,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 1)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                ],
                                borderWidth: 1
                            },
                            {
                                label: 'Product 417432',
                                data: product1_2,
                                backgroundColor: [
                                    'rgba(153, 102, 255, 1)',
    
                                ],
                                borderColor: [
                                    'rgba(153, 102, 255, 1)',
    
                                ],
                                borderWidth: 1
                            },
                            {
                                label: 'Product 100218',
                                data: product2_2,
                                backgroundColor: [
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderColor: [
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    }}
                    height={"25%"}
                    width={"35%"}
                />
            </div>
        </div>
    );
}