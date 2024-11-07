import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import React, { useState, useEffect } from "react";
import axios from 'axios';

interface CardInformations {
  titulo: string;
  subtitulo: string;
  icone?: React.FC<React.SVGProps<SVGSVGElement>>;
  prop?: string;
  volume?: number
}

interface TankData {
  id: number;
  volume: number;
}

export default function InfoCard({ titulo, volume, subtitulo, icone: Icone, prop }: CardInformations) {
  const [data, setData] = useState<TankData | null>(null); // Inicialize como null
  const [error, setError] = useState<string | null>(null);

  const url = "http://127.0.0.1:5249/api/WaterTanks/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'Accept': 'application/json'
          }
        });
        setData(response.data[0]);
      } catch (error: any) {
        setError(error.response?.data || "Erro ao carregar dados");
      }
    };
    fetchData();
  }, []); // Adicione um array vazio para evitar que o useEffect rode em loop

  return (
    <Card>
      <CardHeader>
        <div className="flex">
          <CardTitle className="text-lg sm:text-xl select-none">
            {titulo}
          </CardTitle>
          {Icone && <Icone className="ml-auto w-5 h-5" />}
        </div>

        <CardDescription>
          {subtitulo}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {data ? ( // Verifique se data existe antes de acessar `volume`
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
