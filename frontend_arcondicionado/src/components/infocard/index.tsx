import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import React, { useState, useEffect } from "react";
import axios from 'axios';

interface CardInformations {
  titulo: string;
  subtitulo: string;
  icone?: React.FC<React.SVGProps<SVGSVGElement>>;
  prop?: string;
}

interface TankData {
  id: number;
  volume: number;
}

export default function InfoCard({ titulo, subtitulo, icone: Icone, prop }: CardInformations) {
  const [data, setData] = useState<TankData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const urlAtual = "http://127.0.0.1:5249/api/WaterTanks/"; // URL para volume atual
  const urlMaximo = "http://127.0.0.1:5249/api/WaterTanksMax/"; // URL para volume máximo (por exemplo)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Escolhe a URL com base no título do card
        const selectedUrl = titulo === "Capacidade atual (Litros)" ? urlAtual : urlMaximo;
        const response = await axios.get(selectedUrl, {
          headers: { 'Accept': 'application/json' }
        });
        
        // Se precisar de dados específicos, por exemplo, o primeiro item do array
        setData(response.data[0]);
      } catch (error: any) {
        setError(error.response?.data || "Erro ao carregar dados");
      }
    };
    fetchData();
  }, [titulo]); // Reexecuta se o título mudar

  return (
    <Card>
      <CardHeader>
        <div className="flex">
          <CardTitle className="text-lg sm:text-xl select-none">
            {titulo}
          </CardTitle>
          {Icone && <Icone className="ml-auto w-5 h-5" />}
        </div>
        <CardDescription>{subtitulo}</CardDescription>
      </CardHeader>

      <CardContent>
        {data ? (
          <p className="text-base sm:text-lg font-bold">
            {data.volume} {prop}
          </p>
        ) : (
          <p>Carregando...</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </CardContent>
    </Card>
  );
}
