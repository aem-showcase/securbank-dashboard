import './expenses.css';

import React, { useEffect, useState} from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
import {
    BarChart,
    LineChart
  } from 'echarts/charts';

import {
    GridComponent,
    TooltipComponent,
    TitleComponent,
    DatasetComponent,
} from 'echarts/components';
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
    CanvasRenderer,
// SVGRenderer,
} from 'echarts/renderers';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Register the required components
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, LineChart, CanvasRenderer]
  );

export default function Expenses({expensesTitle}) {

    const [showExpenses, setshowExpenses] = useState()

    async function getExpenses() {
        setshowExpenses({
            grid: { top: 8, right: 8, bottom: 24, left: 36 },
            xAxis: {
              type: 'category',
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              axisLine: {
                lineStyle: {
                  type: 'dashed'
                  // ...
                }
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: function (value) {
                    const val = Math.round(value/1000)
                    if(val === 0)
                        return val
                    return (val) + 'K'
                },
              }
            },
            
            series: [
              {
                data: [
                    2000, 
                    {
                        value: 10000,
                        // Specify the style for single bar
                        itemStyle: {
                            opacity: 0.5
                        }
                    }, 
                    8000, 
                    {
                        value: 4200,
                        // Specify the style for single bar
                        itemStyle: {
                            opacity: 0.5
                        }
                    }, 
                    3000, 
                    {
                        value: 7000,
                        // Specify the style for single bar
                        itemStyle: {
                            opacity: 0.5
                        }
                    }, 
                    8300, 
                    {
                        value: 2500,
                        // Specify the style for single bar
                        itemStyle: {
                            opacity: 0.5
                        }
                    }, 
                    9000, 
                    {
                        value: 10200,
                        // Specify the style for single bar
                        itemStyle: {
                            opacity: 0.5
                        }
                    }, 
                    11000],
                type: 'bar',
                barWidth: '45%',
                smooth: true,
                tooltip: {
                    trigger: 'item',
                    responsive: true,
                    position: 'top',
                    formatter: '${c}',
                    backgroundColor: '#2C2C2C',
                    borderColor: '#2C2C2C',
                    borderWidth: '0.8',
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                itemStyle: {
                    barBorderRadius: 5,
                    borderWidth: 1,
                    color: 'rgb(2, 150, 166)'
                  }
              },
            ],
            tooltip: {
              trigger: 'axis',
            },
          })
    }

    useEffect(() => {
        getExpenses()
    },[])

    return (
        <div className='expenses'>
            <h4 className='sectionHeading' data-aue-prop="expensesTitle" data-aue-type="text">{expensesTitle}</h4>
            {
                showExpenses &&
                  <ReactEChartsCore 
                    echarts={echarts} 
                    notMerge={true}
                    lazyUpdate={true}
                    option={showExpenses} />
            }
            <div className='info'>
                <div className='infoBox'>
                    <div className='infoBox-top'>
                        <span className='infoBox-title'>Total Income</span><span className='infoBox-summary blue'><FiChevronUp/> 2.11%</span>
                    </div>
                    <div className='infoBox-chartBox'><span className='infoBox-value blue'>+ $4,266.00</span><span className="infoBox-chart"><ReactEChartsCore 
                        echarts={echarts} 
                        style={{height: '75px', width: '75px'}}
                        option={{xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            show: false
                        },
                        yAxis: {
                            type: 'value',
                            show: false
                        },
                        series: [
                            {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            itemStyle: {
                                color: '#0296A6'
                            },
                            lineStyle: {
                                width: 4
                            }
                            }
                        ]}} /></span></div>
                </div>
                <div className='infoBox'>
                <div className='infoBox-top'>
                    <span className='infoBox-title'>Total Expense</span><span className='infoBox-summary pink'><FiChevronDown/> 2.11%</span>
                </div>
                <div className='infoBox-chartBox'><span className='infoBox-value pink'>- $2,346.00</span><span className="infoBox-chart"><ReactEChartsCore 
                    echarts={echarts} 
                    style={{height: '75px', width: '75px'}}
                    option={{xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        show: false
                    },
                    yAxis: {
                        type: 'value',
                        show: false
                    },
                    series: [
                        {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            itemStyle: {
                                color: '#DB2E7E'
                            },
                            lineStyle: {
                                width: 4
                            }
                        }
                    ]}} /></span></div>
                </div>
                <div className='infoBox'>
                    <div className='infoBox-top'> 
                        <span className='infoBox-title'>Balance</span><span className='infoBox-summary'>+15%</span>
                    </div>
                    <div className='infoBox-chartBox'><span className='infoBox-value'>$1,920.00</span><span className="infoBox-chart"><ReactEChartsCore 
                        echarts={echarts} 
                        style={{height: '75px', width: '75px'}}
                        option={{xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            show: false
                        },
                        yAxis: {
                            type: 'value',
                            show: false
                        },
                        series: [
                            {
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            itemStyle: {
                                color: '#000000'
                            },
                            lineStyle: {
                                width: 4
                            }
                            }
                        ]}} /></span></div>
                </div>
            </div>
        </div>
    )
}