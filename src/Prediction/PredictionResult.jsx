import React, { Component } from 'react';
import './predictionResult.css';
import downloadIcon from '../../src/assets/image/download_complete.gif';
import { useLocation } from 'react-router-dom';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import Menu1 from './menu1';
export default function PredictionResult() {


    const location = useLocation();
    const { state } = location; // Get the state object passed from the previous page

    const handlePrint = () => {
        window.print();
    };

    const integerPart3 = parseInt(state[3], 10);
    const integerPart2 = parseInt(state[2], 10);
    const integerPart1 = parseInt(state[1], 10);
    const integerPart0 = parseInt(state[0], 10);


    const data = [
        {
            name: "Total Profit",
            uv: integerPart3
        },
        {
            name: state[4],
            uv: integerPart2,
        },
        {
            name: state[5],
            uv: integerPart1,
        },
        {
            name: state[6],
            uv: integerPart0,
        },
        
        // {
        //     name: "Total In "+state[4],
        //     uv: state[7]
        // },
        // {
        //     name: "Total In "+state[5],
        //     uv: state[8]
        // },
        // {
        //     name: "Total In "+state[6],
        //     uv: state[9]
        // },
        // {
        //     name: "Total Investment",
        //     uv: state[10]
        // },
    ];

    return (

        <div className='pred-result-page-rs1'>
            <Menu1></Menu1>
            <div className="pred-res-head ">
                <div className='pred-res-head-left'>Estimated Profit Report</div> <div className="pred-res-head-right"> <button className='pred-btn-download' onClick={handlePrint}><img src={downloadIcon} className='img-btn-download-png' />Download report</button> </div>
            </div>

            <div className="pre-res-cards-container">

                <div className="pred-res-card-1-first d-flex flex-column" id="pred-res-first-card">
                    <span>Total profit</span>
                    <div className="pred-card-1-body-first d-flex flex-row">
                        <div className="pred-card-1-body-left-first">{integerPart3}</div>
                        <div className="pred-card-1-body-right-first">Icon 20%</div>
                    </div></div>

                <div className="pred-res-card-1 d-flex flex-column">
                    <span>{state[4]} profit</span>
                    <div className="pred-card-1-body d-flex flex-row">
                        <div className="pred-card-1-body-left">{integerPart2}</div>
                        <div className="pred-card-1-body-right">Icon 20%</div>
                    </div></div>

                <div className="pred-res-card-1 d-flex flex-column">
                    <span>{state[5]} profit</span>
                    <div className="pred-card-1-body d-flex flex-row">
                        <div className="pred-card-1-body-left">{integerPart1}</div>
                        <div className="pred-card-1-body-right">Icon 20%</div>
                    </div></div>

                <div className="pred-res-card-1 d-flex flex-column">
                    <span>{state[6]} profit</span>
                    <div className="pred-card-1-body d-flex flex-row">
                        <div className="pred-card-1-body-left">{integerPart0}</div>
                        <div className="pred-card-1-body-right">Icon 20%</div>
                    </div></div>
                    {state[7]}<br></br>
                    {state[8]}<br></br>
                    {state[9]}<br></br>
                    {state[10]}<br></br>
            </div>

            <div className="pred-graph-dynamic">
                <AreaChart
                    width={1300}
                    height={240}
                    data={data}
                    margin={{
                        top: 10,
                        right: 16,
                        left: 16,
                        bottom: 0
                    }}
                >
                    <defs>
                        <linearGradient id="rainbowGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(249, 51, 249, 0.981)" />
                            <stop offset="17%" stopColor="rgb(255, 76, 255)" />
                            <stop offset="34%" stopColor="rgb(255, 138, 255)" />
                            <stop offset="51%" stopColor="rgba(255, 172, 255, 0.969)" />
                            <stop offset="68%" stopColor="rgba(255, 203, 255, 0.947)" />
                            <stop offset="85%" stopColor="rgba(255, 243, 255, 0.418)" />
                            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.141)" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="rgba(254, 125, 26, 0.98)" fill="url(#rainbowGradient)" />
                </AreaChart>
            </div>

        </div>
    )
}
