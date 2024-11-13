"use client"
import { WaterLine } from "@/components/chart/WaterLine";
import InfoCard from "@/components/infocard/index";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaterRegister from "@/components/water-register";
import { Droplets, Layers, ThermometerSun } from "lucide-react";
import React from "react";
import '@/styles/styles.css';
import LogInfoCard from "@/components/LogInfoCard";

export default function App() {
  return (
    <div className="w-full min-h-screen max-w-5xl mx-auto p-5">
      <header className="flex items-center gap-5 mb-5">
        <Avatar>
          <AvatarImage src="https://www.sp.senai.br/images/senai.svg" alt="@shadcn" />
          <AvatarFallback>Icone Monitoramento da Água</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold font">Monitoramento de Água</h1>
      </header>

      <hr className="my-4"/>

      <div className="grid grid-cols-8 h-full w-full gap-5">

        <div className="col-span-6">
          <Card className="items-center p-4 gap-5 rounded-xl shadow-lg bg-slate-50">
            <CardContent className="flex justify-center items-center gap-5 w-full">
              <ThermometerSun className="h-12 w-12" />
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl font-semibold">26°C</span>
                <h1 className="text-lg">
                  Previsão para <span className="font-bold">Dia Ensolarado</span>
                </h1>
              </div>
            </CardContent>

            <CardHeader className="text-gray-500 text-sm w-full text-center">
              Não esqueça de verificar o sistema de caixa da água regularmente
            </CardHeader>
          </Card>
        </div>

        <div className="col-span-2 flex">
          <Card className="rounded-xl shadow-lg bg-slate-50">
            <CardHeader>
              <CardTitle>Faculdade de Tecnologia <a className="text-red-600" href="https://www.sp.senai.br">SENAI Gaspar Ricardo Jr</a></CardTitle>
              <hr className="my-4 bg-slate-50"/>
              <CardDescription>Projeto Extracurricular Ads/Mecatrônica</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="col-span-2">
        <InfoCard 
        titulo="Capacidade Total (Litros)" 
        subtitulo="Capacidade total armazenado no reservatorio"
        prop="Litros"
        icone={Layers}
        />
        </div>

        <div className="col-span-2">
        <InfoCard 
        titulo="Capacidade atual (Litros)" 
        subtitulo="Capacidade total armazenado no reservatorio"
        prop="Litros"
        icone={Layers}
        />          
        </div>
        
        <div className="col-span-2">
        <InfoCard 
        titulo="Medições Totais" 
        subtitulo="Número de medições enviadas pelo sensor ultrassônico"
        prop="Envios"
        icone={Layers}
        />
        </div>

        <div className="col-span-2">
        <InfoCard 
        titulo="Capacidade atual (Litros)" 
        subtitulo="Capacidade total armazenado no reservatorio"
        prop="Litros"
        icone={Layers}
        />
        </div>

        {/* <div className="col-span-2">
          <LogInfoCard 
          titulo="Total gasto (Litros)" 
          subtitulo="Capacidade gasta do tanque hoje"
          prop="Litros"
          icone={Droplets}
          />
        </div> */}

        <div className="col-span-5">
          <WaterLine/>
        </div>

        <div className="col-span-3">
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
