/**
 * Configuración y datos estáticos de la landing page de OryxCnsulting
 */

export const landingPageConfig = {
  hero: {
    title: "Deje de adivinar. Multiplique la Eficiencia Logística con IA: +20% de ROI Garantizado.",
    subtitle: "Transformamos procesos empresariales complejos mediante inteligencia artificial y arquitectura cloud de vanguardia. Resultados medibles, estrategias probadas.",
    ctaPrimary: "Solicitar Consulta Estratégica Gratuita",
    ctaSecondary: "Descargar Caso de Estudio",
    credibilityLogos: [
      { name: "AWS Certified", icon: "aws" },
      { name: "Azure Partner", icon: "azure" },
      { name: "Google Cloud", icon: "gcp" }
    ]
  },

  problems: [
    {
      id: 1,
      title: "Sistemas Heredados Obsoletos",
      description: "Infraestructura tecnológica que limita el crecimiento y aumenta costos operativos."
    },
    {
      id: 2,
      title: "Falta de Insights Predictivos",
      description: "Decisiones basadas en datos históricos en lugar de análisis predictivo en tiempo real."
    },
    {
      id: 3,
      title: "Ineficiencia Operativa",
      description: "Procesos manuales que consumen tiempo y recursos valiosos de su equipo."
    },
    {
      id: 4,
      title: "Escalabilidad Limitada",
      description: "Arquitecturas que no pueden crecer con su negocio, generando cuellos de botella."
    }
  ],

  services: [
    {
      id: 1,
      title: "Optimización de Procesos con IA/ML",
      description: "Implementamos soluciones de Machine Learning que automatizan decisiones críticas y predicen tendencias empresariales.",
      icon: "brain",
      features: [
        "Análisis predictivo avanzado",
        "Automatización inteligente",
        "Reducción de costos operativos"
      ]
    },
    {
      id: 2,
      title: "Migración y Modernización Cloud",
      description: "Migramos sus sistemas a arquitecturas cloud escalables, seguras y optimizadas para el rendimiento.",
      icon: "cloud",
      features: [
        "Arquitectura cloud nativa",
        "Seguridad de nivel empresarial",
        "Escalabilidad automática"
      ]
    },
    {
      id: 3,
      title: "Consultoría Estratégica Tecnológica",
      description: "Analizamos su infraestructura actual y diseñamos la hoja de ruta tecnológica para alcanzar sus objetivos.",
      icon: "chart",
      features: [
        "Auditoría tecnológica completa",
        "Roadmap estratégico",
        "ROI garantizado"
      ]
    }
  ],

  team: {
    title: "El Motor Concentrado: Arquitectos de la Optimización Cuántica",
    subtitle: "Nuestro núcleo estratégico de 5X impulsa la innovación y la excelencia",
    members: [
      {
        id: 1,
        role: "Arquitecto de Software y Cloud",
        name: "Julián de Jesús Gutiérrez López",
        count: 2,
        focus: "Construcción de sistemas desacoplados y escalables en la nube",
        description: "Nuestra ingeniería se especializa en arquitecturas de Microservicios con Spring Boot y despliegues automatizados (CI/CD en AWS). No construimos sistemas, construimos ecosistemas de software resilientes.",
        skills: ["Microservicios", "Spring Boot (Java)", "AWS Cloud Services", "CI/CD", "Docker", "React/Vite", "PWA"],
        certifications: ["AWS Cloud Foundations"]
      },
      {
        id: 2,
        role: "Analista de Estrategia y Datos",
        name: "Felipe Armando Prado Vera",
        count: 1,
        focus: "Traducción de desafíos de negocio en modelos de datos accionables",
        description: "Nuestro análisis trasciende los datos. Con una base sólida en Contabilidad y Finanzas, utilizamos Power BI y SQL para mapear cada solución tecnológica directamente al estado de resultados de su empresa, asegurando un ROI claro y medible.",
        skills: ["Análisis Contable/Financiero", "SQL", "Power BI", "SAP Business One"],
        certifications: ["Excel Total", "SAP Business One"]
      }
    ],
    engineeringPromise: {
      title: "Nuestra Promesa de Ingeniería: Código de Calidad",
      description: "Desarrollo basado en principios SOLID y patrón MVVM para una arquitectura escalable y mantenible",
      principles: ["SOLID", "MVVM", "Arquitectura Escalable", "Código Mantenible"]
    }
  },

  process: {
    title: "Nuestra Metodología: El Ciclo Predictivo",
    subtitle: "Un proceso probado que garantiza resultados medibles",
    steps: [
      {
        id: 1,
        number: "01",
        title: "Análisis y Diagnóstico",
        description: "Evaluamos su infraestructura actual, identificamos oportunidades y cuantificamos el potencial de mejora."
      },
      {
        id: 2,
        number: "02",
        title: "Diseño Estratégico",
        description: "Creamos un roadmap personalizado con soluciones específicas para sus desafíos únicos."
      },
      {
        id: 3,
        number: "03",
        title: "Implementación Ágil",
        description: "Ejecutamos con metodologías ágiles, entregando valor incremental y minimizando riesgos."
      },
      {
        id: 4,
        number: "04",
        title: "Optimización Continua",
        description: "Monitoreamos, medimos y optimizamos continuamente para garantizar resultados sostenibles."
      }
    ]
  },

  testimonials: [
    {
      id: 1,
      name: "Carlos Mendoza",
      position: "CTO, Fintech Solutions",
      company: "Fintech Solutions",
      content: "OryxCnsulting transformó nuestra infraestructura legacy. Redujimos costos operativos en un 35% y mejoramos la velocidad de despliegue en un 200%.",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Rodríguez",
      position: "Directora de Innovación",
      company: "LogiTech Global",
      content: "La implementación de IA predictiva nos permitió anticipar demandas y optimizar inventarios. ROI del 28% en el primer trimestre.",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Silva",
      position: "CEO",
      company: "SupplyChain Pro",
      content: "El equipo de OryxCnsulting no solo entregó tecnología, sino una estrategia completa que cambió cómo operamos. Altamente recomendado.",
      rating: 5
    }
  ],

  contact: {
    title: "Solicite Su Consulta Estratégica Gratuita",
    subtitle: "Descubra cómo podemos transformar su infraestructura tecnológica",
    formFields: [
      {
        id: "name",
        label: "Nombre Completo",
        type: "text",
        required: true,
        placeholder: "Ingrese su nombre"
      },
      {
        id: "email",
        label: "Correo Electrónico",
        type: "email",
        required: true,
        placeholder: "su@email.com"
      },
      {
        id: "company",
        label: "Empresa",
        type: "text",
        required: false,
        placeholder: "Nombre de su empresa"
      },
      {
        id: "phone",
        label: "Teléfono",
        type: "tel",
        required: false,
        placeholder: "+1 (555) 000-0000"
      },
      {
        id: "message",
        label: "Cuéntenos sobre su proyecto",
        type: "textarea",
        required: false,
        placeholder: "Describa brevemente sus desafíos o necesidades..."
      }
    ]
  },

  footer: {
    companyName: "OryxCnsulting",
    tagline: "Transformación Tecnológica con Resultados Medibles",
    contact: {
      email: "deskrun@gmail.com",
      phone: "+525591392919",
      phoneFormatted: "+52 55 9139 2919"
    },
    links: [
      { label: "Servicios", href: "#services" },
      { label: "Metodología", href: "#process" },
      { label: "Equipo", href: "#team" },
      { label: "Casos de Estudio", href: "#testimonials" }
    ],
    legal: [
      { label: "Política de Privacidad", href: "#privacy" },
      { label: "Términos de Servicio", href: "#terms" }
    ]
  }
}

