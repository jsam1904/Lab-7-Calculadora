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
| Bun | 1.3 | Package manager y runtime |

## Instalación

```bash
bun install
```

## Scripts disponibles

```bash
bun run dev           # Inicia el servidor de desarrollo en localhost:5173
bun run build         # Compila TypeScript y genera el build de producción
bun run preview       # Sirve el build de producción localmente
bun run lint          # Corre ESLint sobre todo el proyecto
bun run test          # Corre las pruebas una vez
bun run test:watch    # Corre las pruebas en modo watch
bun run test:coverage # Genera reporte de cobertura
bun run storybook     # Inicia Storybook en localhost:6006
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

44 pruebas cubren las tres capas de lógica pura:

- `calculate.test.ts` — función aritmética (12 tests)
- `format.test.ts` — formateo de resultados (10 tests)
- `useCalculator.test.tsx` — comportamiento del reducer vía hook (22 tests)
