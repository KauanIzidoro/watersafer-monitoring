"use client"
import { WaterLine } from "@/components/chart/WaterLine";
import InfoCard from "@/components/infocard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaterRegister from "@/components/water-register";
import { Droplets, Layers, Target, ThermometerSun } from "lucide-react";
import React from "react";

export default function App() {
  return (
    <div className="w-full max-w-5xl mx-auto p-5">
      <header className="flex items-center gap-5 mb-5">
        <Avatar>
          <AvatarImage src="https://www.sp.senai.br/images/senai.svg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Monitoramento de Água</h1>
      </header>

      <hr className="my-4"/>

      <div className="grid grid-cols-6 h-full w-full gap-5">

        <div className="col-span-4">
          <Card className="flex items-center p-4 gap-5">
            <CardContent className="flex justify-center items-center gap-5 w-full">
              <ThermometerSun className="h-10 w-10" />
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl font-semibold">26°C</span>
                <h1 className="text-lg">
                  Previsão para <span className="font-bold">Dia Ensolarado</span>
                </h1>
              </div>
            </CardContent>

            <CardHeader className="text-gray-500 text-sm w-full text-center">
              Não esqueça de verificar o sistema de caixa da água
            </CardHeader>
          </Card>
        </div>

        <div className="col-span-2 flex">
          <Card>
            <CardHeader>
              <CardTitle>Faculdade de Tecnologia <a className="text-red-400" href="https://www.sp.senai.br">SENAI Gaspar Ricardo Junior</a></CardTitle>
              <CardDescription>Turma ADS/MECA</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="col-span-3">
        <InfoCard 
        titulo="Capacidade atual (Litros)" 
        subtitulo="Capacidade total armazenado no reservatorio"
        value={8000}
        prop="Litros"
        icone={Layers}
        />
        </div>

        <div className="col-span-3">
          <InfoCard 
          titulo="Total gasto (Litros)" 
          subtitulo="Capacidade gasta do tanque hoje"
          value={2000}
          prop="Litros"
          icone={Droplets}
          />
        </div>

        <div className="col-span-4">
          <WaterLine/>
        </div>

        <div className="col-span-2">
          <WaterRegister/>
        </div>

      </div>

      <footer className="mt-8">
        <p>Todos os direitos reservados, 2024.</p>
        <p>Faculdade e Escola de tecnologia SENAI Gaspar Ricardo Jr.</p>
      </footer>
    </div>
  );
}
