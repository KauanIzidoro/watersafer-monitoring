# **Water Safer Monitoring**

## Overview:

```mermaid
graph LR
    subgraph "Water Safer Monitoring" 
        FE[Front-End]
        BE[Back-End]
        BD[(Banco de Dados)]
    end

    subgraph "Cenário físico"
        AC[Ar condicionado]
        TA[Tanque de água]
        SI[Sensores IOT]
    end

    AC --> TA
    TA --> SI

    SI --> BE
    BE --> BD

    BD --> BE

    BE --> FE
```

## Descrição:

`Projeto de Extensão - Ar condicionado` - Dashboard para análise e acompanhamento em tempo real do sistema integrando Front-End, Back-End e Banco de Dados