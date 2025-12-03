# Arquitectura del Proyecto

Este proyecto combina tres enfoques arquitectónicos:

## 🏗️ Screaming Architecture + Feature-based + Atomic Design

### Estructura General

```
src/
├── app/                    # Configuración de la aplicación
│   ├── App.jsx            # Componente raíz
│   └── App.css
│
├── features/               # Features organizadas por funcionalidad
│   └── [feature-name]/
│       ├── ui/            # Capa de presentación (Atomic Design)
│       │   ├── atoms/     # Componentes básicos
│       │   ├── molecules/ # Combinaciones de átomos
│       │   ├── organisms/ # Componentes complejos
│       │   ├── templates/ # Estructuras de página
│       │   └── pages/     # Páginas completas
│       ├── domain/        # Lógica de negocio
│       ├── application/   # Casos de uso y servicios
│       └── infrastructure/# Implementaciones técnicas
│
└── shared/                # Recursos compartidos
    ├── ui/                # Componentes UI compartidos (Atomic Design)
    │   ├── atoms/
    │   ├── molecules/
    │   └── organisms/
    ├── domain/            # Entidades y interfaces compartidas
    ├── application/       # Servicios compartidos
    └── infrastructure/    # Implementaciones técnicas compartidas
```

## 📐 Principios

### Screaming Architecture
- **Organización por capas**: `ui`, `domain`, `application`, `infrastructure`
- **Independencia de frameworks**: La lógica de negocio no depende de React
- **Dependencias hacia adentro**: Las capas externas dependen de las internas

### Feature-based
- **Organización por funcionalidad**: Cada feature es autocontenida
- **Escalabilidad**: Fácil agregar o remover features
- **Colocación**: Todo lo relacionado con una feature está junto

### Atomic Design
- **Atoms**: Componentes básicos e indivisibles (Button, Input, Icon)
- **Molecules**: Combinaciones de átomos (SearchBar, FormField)
- **Organisms**: Componentes complejos (Header, Navigation, Form)
- **Templates**: Estructuras de página sin contenido específico
- **Pages**: Páginas completas con contenido real

## 📁 Convenciones

### Features
- Cada feature debe ser autocontenida
- Puede usar componentes de `shared/` pero no de otras features
- Nombre de feature en kebab-case: `user-profile`, `product-catalog`

### Componentes
- Nombres en PascalCase: `Button.jsx`, `UserCard.jsx`
- Un componente por archivo
- Exportación por defecto para componentes principales

### Capas
- **ui/**: Solo componentes de presentación, sin lógica de negocio
- **domain/**: Entidades, value objects, interfaces (sin dependencias externas)
- **application/**: Casos de uso, servicios de aplicación
- **infrastructure/**: Implementaciones técnicas (API calls, storage, etc.)

## 🚀 Ejemplo de Uso

### Crear una nueva feature

1. Crear estructura:
```bash
src/features/my-feature/
  ├── ui/
  │   ├── atoms/
  │   ├── molecules/
  │   ├── organisms/
  │   ├── templates/
  │   └── pages/
  ├── domain/
  ├── application/
  └── infrastructure/
```

2. Crear un átomo en la feature:
```jsx
// src/features/my-feature/ui/atoms/FeatureButton.jsx
export default function FeatureButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}
```

3. Usar en una página:
```jsx
// src/features/my-feature/ui/pages/FeaturePage.jsx
import FeatureButton from '../atoms/FeatureButton'

export default function FeaturePage() {
  return (
    <div>
      <h1>Mi Feature</h1>
      <FeatureButton onClick={() => alert('Click!')}>
        Click me
      </FeatureButton>
    </div>
  )
}
```

## 📝 Notas

- Los componentes compartidos van en `shared/ui/`
- La lógica de negocio va en `domain/` y `application/`
- Las llamadas a APIs van en `infrastructure/`
- Cada feature es independiente y puede desarrollarse por separado

