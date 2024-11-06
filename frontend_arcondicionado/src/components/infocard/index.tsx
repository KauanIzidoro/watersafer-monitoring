import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import React, {ReactNode} from "react"

interface CardInformations {
  titulo: string;
  subtitulo: string;
  value?: number;
  icone?: React.FC<React.SVGProps<SVGSVGElement>>;
  prop?: string;
}

export default function InfoCard({titulo, subtitulo, value, icone:Icone, prop}:CardInformations) {
    return (
        <Card className="rounded-xl shadow-lg bg-slate-50">
          <CardHeader>
            <div className="flex">
              <CardTitle className="text-lg sm:text-xl select-none">
                {titulo}
              </CardTitle>
              {Icone && <Icone className="h-6 w-6 ml-auto text-slate-500" />}
              </div>

            <CardDescription>
              {subtitulo}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">{value} {prop}</p>
          </CardContent>
        </Card>
    );
}