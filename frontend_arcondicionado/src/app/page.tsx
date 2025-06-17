"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, Circle, CircleDashed, ThermometerSun } from "lucide-react";
import InfoCard from "@/components/infocard";
import { WaterLine } from "@/components/chart/WaterLine";
import WaterRegister from "@/components/water-register";

export default function WeatherCard() {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "9dfba69d7cef4d7b22f4b64ba60d710f";
        const city = "Sorocaba";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

        const res = await fetch(url);
        const data = await res.json();

        console.log("Resposta da API:", data);

        if (data.cod === 200 && data.main && data.weather?.length > 0) {
          setTemperature(Math.round(data.main.temp));
          setDescription(data.weather[0].description);
        } else {
          console.error("Erro: dados inválidos ou cidade não encontrada", data);
        }

      } catch (error) {
        console.error("Erro ao buscar a previsão do tempo:", error);
      }
    };

    fetchWeather();
  }, []);
  return (
    <div className="w-full h-full max-w-8xl mx-auto p-5">
      <header className="flex items-center gap-5 mb-5">
        <img className="h-[50px]" src="https://www.sp.senai.br/images/senai.svg" alt="SENAI" />
        <h1 className="text-2xl sm:text-4xl font-bold font">Monitoramento Aqua Air</h1>
      </header>

      <hr className="my-4" />

      <div className="grid grid-cols-9 h-full w-full gap-4 pb-5">

        <div className="col-span-6 h-full">
          <Card className="items-center rounded-xl shadow-xl bg-slate-50">
            <CardContent className="flex justify-center items-center gap-5">
              <ThermometerSun className="h-12 w-12" />
              <div className="flex flex-col items-center text-center">
                <span
                  className={`text-4xl font-semibold ${temperature === null ? "animate-pulse" : ""
                    }`}
                >
                  {temperature !== null ? `${temperature}°C` : "Carregando..."}
                </span>
                <h1 className="text-2xl">
                  Previsão para{" "}
                  <span
                    className={`font-bold ${!description ? "animate-pulse" : ""
                      }`}
                  >
                    {description || "Carregando..."}
                  </span>
                </h1>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-3 h-full">
          <Card className="rounded-xl shadow-xl bg-slate-50">
            <CardHeader>
              <CardTitle>Faculdade de Tecnologia <br /><a className="text-red-600" href="https://www.sp.senai.br">SENAI "Gaspar Ricardo Júnior"</a></CardTitle>
              <hr className="my-4 bg-slate-50" />
              <CardDescription>Projeto de Extensão: ADS / Mecatrônica</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="col-span-3 h-full">
          <InfoCard
            titulo="Capacidade Total"
            subtitulo="Capacidade total de armazenamento do reservatório"
            prop="Litros"
            icone={Circle}
          />
        </div>

        <div className="col-span-3 h-full">
          <InfoCard
            titulo="Capacidade Atual"
            subtitulo="Capacidade atual armazenado no reservatório."
            prop="Litros"
            icone={CircleDashed}
          />
        </div>

        <div className="col-span-3 h-full">
          <InfoCard
            titulo="Total de Coletas"
            subtitulo="Número de medições pelo sensor ultrassônico."
            prop="Coletas"
            icone={Beaker}
          />
        </div>

        <div className="col-span-6">
          <WaterLine />
        </div>

        <div className="col-span-3">
          <WaterRegister />
        </div>

      </div>
    </div>
  );
}
