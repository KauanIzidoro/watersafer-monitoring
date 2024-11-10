import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { Console } from "console";

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

  const fetchData = useCallback(async () => {
    try {
      // Escolhe a URL com base no título do card
      const response = await axios.get(urlAtual, {
        headers: { 'Accept': 'application/json' }
      });
      
      // Verifica se há dados e atualiza o estado
      if (Array.isArray(response.data) && response.data.length > 0) {
        setData(response.data[0]);
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
