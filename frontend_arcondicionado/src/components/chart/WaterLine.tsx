"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "Segunda", armazenado: 186, gasto: 80 },
  { month: "Terça", armazenado: 305, gasto: 200 },
  { month: "Quarta", armazenado: 237, gasto: 120 },
  { month: "Quinta", armazenado: 173, gasto: 190 },
  { month: "Sexta", armazenado: 209, gasto: 130 },
  { month: "Sábado", armazenado: 214, gasto: 210 },
]

const chartConfig = {
  armazenado: {
    label: "Armazenado",
    color: "hsl(var(--chart-1))",
  },
  gasto: {
    label: "Gasto",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function WaterLine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparação de Gasto/Capacidade Total</CardTitle>
        <CardDescription>
          Dados coletados do último mês
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-armazenado)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-armazenado)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gasto)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gasto)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="gasto"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-gasto)"
              stackId="a"
            />
            <Area
              dataKey="armazenado"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-armazenado)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
