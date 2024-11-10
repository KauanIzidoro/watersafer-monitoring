import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';

interface CardInformations {
  titulo: string;
  subtitulo: string;
  icone?: React.FC<React.SVGProps<SVGSVGElement>>;
  prop?: string;
}

interface TankData {
  waterVolumeCurrently: number;
}

export default function LogInfoCard({ titulo, subtitulo, icone: Icone, prop }: CardInformations) {
  const [data, setData] = useState<TankData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const urlMaximo = "http://127.0.0.1:5249/api/WaterLogs/WaterVolume/"; // URL para volume máximo (por exemplo)

  const fetchData = useCallback(async () => {
    try {
      // Escolhe a URL com base no título do card
      const response = await axios.get(urlMaximo, {
        headers: { 'Accept': 'application/json' }
      });
  
      // Verifica se a resposta é um objeto e tem a propriedade esperada
      if (response.data && 'waterVolumeCurrently' in response.data) {
        setData(response.data);
      } else {
        setData(null);
        setError("Nenhum dado encontrado.");
      }
    } catch (error: any) {
      setError(error.response?.data || "Erro ao carregar dados");
      setData(null);
    }
  }, [titulo]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]); // Reexecuta quando `fetchData` mudar
  

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
            {data.waterVolumeCurrently} {prop}
          </p>
        ) : (
          <p>Carregando...</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </CardContent>
    </Card>
  );
}
