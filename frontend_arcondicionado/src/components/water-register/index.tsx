import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"; // Certifique-se de importar o ScrollArea
import { Droplet } from "lucide-react";

export default function WaterRegister() {
  // Dados fictícios de exemplo
  const registros = [
    { volume: "250 ml", horario: "8:00 am" },
    { volume: "200 ml", horario: "9:30 am" },
    { volume: "500 ml", horario: "11:00 am" },
    { volume: "200 ml", horario: "1:00 pm" },
    { volume: "250 ml", horario: "3:00 pm" },
    { volume: "250 ml", horario: "8:00 am" },
    { volume: "200 ml", horario: "9:30 am" },
    { volume: "500 ml", horario: "11:00 am" },
    { volume: "200 ml", horario: "1:00 pm" },
    { volume: "250 ml", horario: "3:00 pm" },
  ];

  return (
    <Card className="h-full rounded-xl shadow-lg bg-slate-50">
      <CardHeader>
        <CardTitle className="text-center text-lg font-semibold">
          Registros de Coleta
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[350px] px-4 py-2">
          <div className="space-y-2">
            {registros.map((registro, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <Droplet className="text-blue-500 h-5 w-5" />
                  <span className="font-medium text-gray-700">{registro.volume}</span>
                </div>
                <span className="text-gray-500 text-sm">{registro.horario}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}