import axios from "axios"

interface ClimateData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
        borderColor: string;
        fill: boolean;
        tension: number;
    }[];
}

export const fetchClimateData = async (): Promise<ClimateData> => {
    try {
        const response = await axios.get(
            "https://api.open-meteo.com/v1/forecast?latitude=-23.4772271&longitude=-47.5492724&past_days=2&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
        );

        const { hourly } = response.data;

        return{

        labels: hourly.time.map((time: string) => new Date(time).toLocaleString()),
        datasets: [
        {
            label: 'Temperatura (ºC)',
            data: hourly.temperature_2m,
            backgroundColor: "#FABC3F",
            borderColor: "#821131",
            fill: true,
            tension: 0.4,
        },
        {
            label: 'Umidade do Ar Relativa (%)',
            data: hourly.relative_humidity_2m,
            backgroundColor: "#E85C0D",
            borderColor: "#821131",
            fill: true,
            tension: 0.4,
        },
        {
            label: 'Velocidade do Vento',
            data: hourly.wind_speed_10m,
            backgroundColor: "#C7253E",
            borderColor: "#821131",
            fill: true,
            tension: 0.4,
        },      
    ],
};
        } catch (error) {
            console.error("Erro ao buscar dados" ,error);
            throw error;
        }
};