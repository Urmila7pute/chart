import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './title';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const COLORS = [
    { start: "#0088FE", end: "#98CFFE" },
    { start: "#1BCFB4", end: "#8FFFFF" },
    { start: '#FED713', end: "#FFFF5E" },
    { start: "#FE6382", end: "#FEAFBF" },
    { start: "#da9d35", end: "#e96935" },
];
export default class BarChartExample extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <Title>Bar Chart</Title>
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <defs>
                            {data.map((entry, index) => (
                                <linearGradient id={`myGradient`}>
                                    <stop
                                        offset="0%"
                                        stopColor={COLORS[index % COLORS.length].start}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor={COLORS[index % COLORS.length].end}
                                    />
                                </linearGradient>
                            ))}
                        </defs>
                        <Bar dataKey="pv" fill={`url(#myGradient)`} />
                        <defs>
                            {data.map((entry, index) => (
                                <linearGradient id={`myGradient1`}>
                                    <stop
                                        offset="0%"
                                        stopColor={'#1BCFB4'}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor={'#8FFFFF'}
                                    />
                                </linearGradient>
                            ))}
                        </defs>
                        <Bar dataKey="uv" fill={`url(#myGradient1)`} />
                    </BarChart>
                </ResponsiveContainer>
            </React.Fragment>
        );
    }
}
