import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { PackagePlus } from 'lucide-react';

export default function LineChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [35, 39, 40, 41, 36, 35, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.5
                },
                {
                    label: 'Second Dataset',
                    data: [28, 38, 40, 19, 36, 27, 30],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.5
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.9,
            plugins: {
                legend: {
                    labels: {
                        color: 'gray',
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl">
                        Histórico de Produção
                    </CardTitle>
                    <PackagePlus className="ml-auto w-5 h-5"/>
                </div>
            </CardHeader>

            <CardContent className='w-full'>
                    <Chart type="line" data={chartData} options={chartOptions} />
            </CardContent>
        </Card>
    );
}