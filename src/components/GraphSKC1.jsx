import {React, useRef} from "react";

import Result from "../data/data.json"

import Chart from 'chart.js/auto'
import { Bar, Line } from "react-chartjs-2"
import '@progress/kendo-theme-material/dist/all.css';

import { Button } from '@progress/kendo-react-buttons'
import { PDFExport } from '@progress/kendo-react-pdf'

export default function GraphSKC1() {
    var sessions = [];

    const pdfExportComponent = useRef(null);
    const Export = (event) => {
        pdfExportComponent.current.save();
    }

    //Définir les abcisses des graphes
    Result.map((resultDetail, index) => {
        if (!sessions.includes("T" + (resultDetail.session_id - 1)) && resultDetail.session_id != '') {
            sessions.push("T" + (resultDetail.session_id - 1))
        }
    })

    // Definir les valeurs en ordonnés selon le score skinbiosense
    var product1_1 = [0, 0, 0, 0];
    var product2_1 = [0, 0, 0, 0];

    var product1_2 = [0, 0, 0, 0];
    var product2_2 = [0, 0, 0, 0];
    Result.map((resultDetail, index) => {
        switch (resultDetail.product_code) {
            case 417432:
                // Fore each product Zone 1 no test product & Zone 2 test product

                if (resultDetail.zone_code == 1) {
                    if (resultDetail.score_skinbiosense == 2) {

                        // Zone de raisonnement un peu statique par rapport à ce dataset need to dynamiser
                        switch (resultDetail.session_id) {
                            case 1:
                                product1_1[0] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;
                            case 2:
                                product1_1[1] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;

                            case 3:
                                product1_1[2] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;
                            case 4:
                                product1_1[3] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;

                            default:
                                break;
                        }
                    }
                } else if (resultDetail.zone_code == 2) {
                    if (resultDetail.score_skinbiosense == 1) {
                        switch (resultDetail.session_id) {
                            case 1:
                                product1_2[0] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;
                            case 2:
                                product1_2[1] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;

                            case 3:
                                product1_2[2] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;
                            case 4:
                                product1_2[3] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

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
                                product2_1[0] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100
                                break;
                            case 2:
                                product2_1[1] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100
                                break;

                            case 3:
                                product2_1[2] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100
                                break;
                            case 4:
                                product2_1[3] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;

                            default:
                                break;
                        }
                    }
                } else if (resultDetail.zone_code == 2) {
                    if (resultDetail.score_skinbiosense == 1) {
                        switch (resultDetail.session_id) {
                            case 1:
                                product2_2[0] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;
                            case 2:
                                product2_2[1] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;

                            case 3:
                                product2_2[2] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

                                break;
                            case 4:
                                product2_2[3] += parseFloat(resultDetail.mesure.replace(',', '.')) / 100

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

    // Remplir second graph pour pondérer le premier
    var list_users = [];
    var list_averages = [];

    Result.map((resultDetail, index) => {
        if (!list_users.includes(resultDetail.user_id)
            && resultDetail.user_id != "zone_code"
            && resultDetail.user_id != "score_skinbiosense"
            && resultDetail.user_id != "product_code"
            && resultDetail.user_id != "session_id") {

            list_users.push(resultDetail.user_id)

        }
    })

    list_users.forEach(user => {
        let average = 0;
        Result.map((resultDetail, index) => {
            if (resultDetail.user_id == user && resultDetail.score_skinbiosense == 1) {
                average += parseFloat(resultDetail.mesure.replace(',', '.')) / 100
            }
        })
        list_averages.push(average)
    })

    return (
        <div>
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div className="button-area">
                    <Button onClick={Export}>Export</Button>
                </div>
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
                        height={400}
                        width={600}
                    />
                    {/*
                    second graphique pour pondérer les résultats affichés par le premier
                */}
                    <Bar
                        data={{
                            labels: list_users,
                            datasets: [{
                                label: '# of Votes',
                                data: list_averages,
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
            </PDFExport>
        </div>
    );
}