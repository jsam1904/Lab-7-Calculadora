# calcu

Calculadora web desarrollada con React 19, TypeScript y Vite. Incluye pruebas unitarias con Vitest y documentación de componentes con Storybook.

## Stack

| Herramienta | Versión | Uso |
| --- | --- | --- |
| React | 19 | UI |
| TypeScript | 6 | Tipado estático |
| Vite | 8 | Dev server y bundler |
| Vitest | 4 | Pruebas unitarias |
| Testing Library | 16 | Pruebas de componentes |
| Storybook | 8 | Documentación visual |

## Instalación

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev           # Inicia el servidor de desarrollo en localhost:5173
npm run build         # Compila TypeScript y genera el build de producción
npm run preview       # Sirve el build de producción localmente
npm run lint          # Corre ESLint sobre todo el proyecto
npm run test          # Corre las pruebas una vez
npm run test:watch    # Corre las pruebas en modo watch
npm run test:coverage # Genera reporte de cobertura
npm run storybook     # Inicia Storybook en localhost:6006
```

## Arquitectura

La lógica de la calculadora vive en `useCalculator` (un `useReducer`) y está completamente separada de la UI.

```text
src/
├── components/
│   ├── Button/         # Botón individual con variantes: number | operator | action | equals
│   ├── Display/        # Panel que muestra el valor actual
│   ├── Calculator/     # Composición de Display + Keyboard
│   └── Keyboard/       # Grid de botones generado desde buttonConfig
├── hooks/
│   └── useCalculator.ts  # Reducer con toda la lógica de cálculo
├── utils/
│   ├── buttonConfig.ts   # Definición declarativa de los botones
│   ├── calculate.ts      # Función pura de cálculo aritmético
│   └── format.ts         # Formateo y límite de entrada
└── types/
    └── calculator.ts     # Tipos compartidos (ButtonAction, ButtonVariant, etc.)
```

## Funcionalidades

- Suma, resta, multiplicación, división
- Porcentaje (`%`)
- Cambio de signo (`±`)
- Borrar último dígito (`⌫`)
- Limpiar todo (`AC`)
- Manejo de errores: división entre cero y desbordamiento muestran `ERROR`

## Pruebas

Las pruebas cubren las tres capas de lógica pura:

- `calculate.test.ts` — función aritmética
- `format.test.ts` — formateo de resultados
- `useCalculator.test.tsx` — comportamiento del reducer vía hook
