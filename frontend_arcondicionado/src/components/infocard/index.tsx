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
  id?: number;
  capacity?: number;
  waterVolume?: number;
  totalLogs?: number;
}

export default function InfoCard({ titulo, subtitulo, icone: Icone, prop }: CardInformations) {
  const [data, setData] = useState<TankData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const urlTotal = "http://127.0.0.1:5249/api/WaterTanks/"; // endpoint para capacidade total
  const urlVolumeAtual = "http://127.0.0.1:5249/api/WaterLogs/WaterVolume/"; // endpoint para volume atual
  const urlLogs = "http://127.0.0.1:5249/api/WaterLogs/TotalLogs/" // endpoint para total de medições feitas pelo sensor 

  const fetchData = useCallback(async () => {
    try {
      // Altera a URL com base no título do card
      var urlTarget = "";
      if (titulo === "Capacidade Total") {
        urlTarget = urlTotal;
      } else if (titulo === "Capacidade Atual") {
        urlTarget = urlVolumeAtual;
      } else if (titulo == "Total de Coletas") {
        urlTarget = urlLogs;
      } else {
        setError("Título não encontrado");
      }

      const response = await axios.get(urlTarget, {
        headers: { 'Accept': 'application/json' }
      });

      // Verifica e ajusta o estado de acordo com a resposta de cada endpoint
      if (titulo === "Capacidade Total" && response.data.length > 0) {
        setData({ capacity: response.data[0].capacity });
      } else if (titulo === "Capacidade Atual" && response.data) {
        setData({ waterVolume: response.data.waterVolume });
      } else if (titulo === "Total de Coletas") {
        setData({ totalLogs: response.data.totalLogs })
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
  }, [fetchData]);

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
            {titulo === "Capacidade Total" && `${data.capacity} ${prop}`}
            {titulo === "Capacidade Atual" && `${data.waterVolume} ${prop}`}
            {titulo === "Total de Coletas" && `${data.totalLogs} ${prop}`}
          </p>
        ) : (
          <p>Carregando...</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </CardContent>
    </Card>
  );
}
