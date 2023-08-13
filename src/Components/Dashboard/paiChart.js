import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import Title from './title';
import './index.css'
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = [
    { start: "#0088FE", end: "#98CFFE" },
    { start: "#1BCFB4", end: "#8FFFFF" },
    { start: '#FED713', end: "#FFFF5E" },
    { start: "#FE6382", end: "#FEAFBF" },
    { start: "#da9d35", end: "#e96935" },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload,// percent, 
        value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 11;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
            {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text> */}
        </g>
    );
};

export default class Example extends PureComponent {
    state = {
        activeIndex: 0,
    };

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <React.Fragment>
                <Title>Pie Chart</Title>
                <ResponsiveContainer width="99%" height="100%" >
                    <div className='container'>
                    <PieChart width={300} height={300}>
                        <defs>
                            {data.map((entry, index) => (
                                <linearGradient id={`myGradient${index}`}>
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
                        <Pie
                            activeIndex={this.state.activeIndex}
                            activeShape={renderActiveShape}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={//window.innerWidth < 475 ? 40 :
                                60}
                            outerRadius={ //window.innerWidth < 475 ? 60 :
                                80}
                            dataKey="value"
                            onMouseEnter={this.onPieEnter}
                        >
                            {data.map((entry, index) => (
                                <Cell fillOpacity={1} key={`cell-${index}`} fill={`url(#myGradient${index})`} />
                            ))}
                        </Pie>
                    </PieChart>
                    </div>
                </ResponsiveContainer>
            </React.Fragment>
        );
    }
}
