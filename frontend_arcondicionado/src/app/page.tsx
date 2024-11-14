"use client"
import { WaterLine } from "@/components/chart/WaterLine";
import InfoCard from "@/components/infocard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaterRegister from "@/components/water-register";
import { Circle, CircleDashed, Beaker, Layers, ThermometerSun } from "lucide-react";
import React from "react";
import '@/styles/styles.css';

export default function App() {
  return (
      <div className="w-full h-full max-w-7xl mx-auto p-5">
        <header className="flex items-center gap-5 mb-5">
          <img className="h-[40px]" src="https://www.sp.senai.br/images/senai.svg" alt="SENAI" />
          <h1 className="text-4xl font-bold font">AcquaAir - Dashboard</h1>
        </header>

        <hr className="my-4" />

        <div className="grid grid-cols-9 h-full w-full gap-4 pb-5">

          <div className="col-span-6 h-full">
            <Card className="items-center rounded-xl shadow-lg bg-slate-50">
              <CardContent className="flex justify-center items-center gap-5">
                <ThermometerSun className="h-12 w-12" />
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl font-semibold">26°C</span>
                  <h1 className="text-lg">
                    Previsão para <span className="font-bold">Dia Ensolarado</span>
                  </h1>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-3 h-full">
            <Card className="rounded-xl shadow-lg bg-slate-50">
              <CardHeader>
                <CardTitle>Faculdade de Tecnologia <br /><a className="text-red-600" href="https://www.sp.senai.br">SENAI Gaspar Ricardo Jr.</a></CardTitle>
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
