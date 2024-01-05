var options = {
        series: [
        {
            name: "Sales",
            data: []
        },
        {
        name: 'Revenue',
        data: [31, 40, 28, 51, 42, 109, 100]
        }, 
        {
        name: 'Profit',
        data: [11, 32, 45, 32, 34, 52, 41]
        }],
        chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
        format: 'dd/MM/yy HH:mm'
        },
    },
    };

    var chart = new ApexCharts(document.querySelector("#revenue_chart"), options);
    chart.render();


    var options = {
        series: [45, 35, 70, 15],
        chart: {
        width: '400px',
        type: 'pie',
        },
    labels: ["Mobile", "Laptop", "Desktop", "Tablet"],
    theme: {
        monochrome: {
            enabled: true
        }
    },
    plotOptions: {
        pie: {
        dataLabels: {
            offset: -5
        }
        }
    },
    dataLabels: {
        formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
        }
        },
    legend: {
        show: false
    }
};

    var chart = new ApexCharts(document.querySelector("#round_chart"), options);
    chart.render();


    var options = {
        series: [{
            data: [44, 55, 41, 64, 22, 47, 19]
        }],
            chart: {
            type: 'bar',
            height: 313
        },
        plotOptions: {
            bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
            fontSize: '12px',
            colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        tooltip: {
            shared: true,
            intersect: false
        },
        xaxis: {
            categories: [2020, 2021, 2022, 2023],
        },
    };

    var chart = new ApexCharts(document.querySelector("#client_chart"), options);
    chart.render();


    var options = {
        series: [
        {
            data: [
                {
                x: '2008',
                y: [2800, 4500]
                },
                {
                x: '2009',
                y: [3200, 4100]
                },
                {
                x: '2010',
                y: [2950, 7800]
                },
                {
                x: '2011',
                y: [3000, 4600]
                },
                {
                x: '2012',
                y: [3500, 4100]
                },
                {
                x: '2013',
                y: [4500, 6500]
                },
                {
                x: '2014',
                y: [4100, 5600]
                }
            ]
            }
        ],
            chart: {
            height: 350,
            type: 'rangeBar',
            zoom: {
            enabled: false
            }
        },
        plotOptions: {
            bar: {
            isDumbbell: true,
            columnWidth: 3,
            dumbbellColors: [['#008FFB', '#00E396']]
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'left',
            customLegendItems: ['Product A', 'Product B']
        },
        fill: {
            type: 'gradient',
            gradient: {
            type: 'vertical',
            gradientToColors: ['#00E396'],
            inverseColors: true,
            stops: [0, 100]
            }
        },
        grid: {
            xaxis: {
            lines: {
                show: true
            }
            },
        yaxis: {
        lines: {
            show: false
        }
        }
    },
    xaxis: {
        tickPlacement: 'on'
    }
    };

    var chart = new ApexCharts(document.querySelector("#project_chart"), options);
    chart.render();

    var options = {
            series: [{
            name: 'Cash Flow',
            data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
            5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
            48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
            ]
        }],
            chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
            colors: {
                ranges: [{
                from: -100,
                to: -46,
                color: '#F15B46'
                }, {
                from: -45,
                to: 0,
                color: '#FEB019'
                }]
            },
            columnWidth: '80%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            title: {
            text: 'Growth',
            },
            labels: {
            formatter: function (y) {
                return y.toFixed(0) + "%";
            }
            }
        },
        xaxis: {
            type: 'datetime',
            categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
            ],
            labels: {
            rotate: -90
            }
        }
        };

        var chart = new ApexCharts(document.querySelector("#profit_chart"), options);
        chart.render();