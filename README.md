# Lab 7 — Calculadora Web

Aplicación de calculadora construida con React y TypeScript como parte del laboratorio 7. La interfaz utiliza un diseño neumórfico oscuro.

## Tecnologías

- React 19 + TypeScript
- Vite (bundler y dev server)
- CSS Modules
- Vitest + Testing Library (pruebas unitarias)
- Storybook (documentación de componentes)

## Características

- Operaciones básicas: suma, resta, multiplicación, división
- Porcentaje (`%`)
- Cambio de signo (`±`)
- Borrar último dígito (`⌫`)
- Limpiar todo (`AC`)
- Manejo de errores (división entre cero, overflow)
- Diseño neumórfico oscuro responsive

## Estructura del proyecto

```text
Lab-7-Calculadora/
└── calcu/          # Aplicación React
    ├── src/
    │   ├── components/
    │   │   ├── Button/
    │   │   ├── Display/
    │   │   ├── Calculator/
    │   │   └── Keyboard/
    │   ├── hooks/
    │   │   └── useCalculator.ts
    │   ├── utils/
    │   │   ├── buttonConfig.ts
    │   │   ├── calculate.ts
    │   │   └── format.ts
    │   └── types/
    │       └── calculator.ts
    └── package.json
```

## Cómo correr el proyecto

```bash
cd calcu
bun install
bun run dev
```

Luego abrir [http://localhost:5173](http://localhost:5173) en el navegador.
