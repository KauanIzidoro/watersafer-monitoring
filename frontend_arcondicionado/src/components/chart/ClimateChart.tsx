import { Chart } from "primereact/chart";


interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    fill: boolean;
    tension: number;
}

interface ClimateDataProps {
    labels: string[];
    datasets: Dataset[];
    xlabel: string;
    ylabel: string;
}

const ClimateChart: React.FC<ClimateDataProps> = ({ labels, datasets, xlabel, ylabel }) => {
    const data = { labels, datasets }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: xlabel,
                },
            },
            y: {
                title: {
                    display: true,
                    text: ylabel,
                },
            },
        }
    }
    return (
        <Chart type="line" data={data} options={options} />
    );
}

export default ClimateChart;