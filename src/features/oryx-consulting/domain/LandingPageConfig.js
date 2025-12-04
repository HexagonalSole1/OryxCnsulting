/**
 * Configuración y datos estáticos de la landing page de OryxCnsulting
 */

export const landingPageConfig = {
  hero: {
    title: "Deje de adivinar. Multiplique la Eficiencia Logística y Fintech con IA/Cloud: +20% de ROI Garantizado.",
    subtitle: "Arquitecturas de Microservicios (Spring Boot/Quarkus) y Cloud AWS con Certificación Architecting. Cada línea de código mapeada al estado de resultados. Resultados medibles, estrategias probadas.",
    ctaPrimary: "Solicitar Consulta Estratégica Gratuita",
    ctaSecondary: "Descargar Caso de Estudio"
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
      title: "Arquitecturas de Microservicios y Optimización con IA/ML",
      description: "Diseño e implementación de arquitecturas desacopladas con Spring Boot y Quarkus. Soluciones de Machine Learning que automatizan decisiones críticas y predicen tendencias empresariales, con mapeo directo al ROI financiero.",
      icon: "brain",
      features: [
        "Microservicios con Spring Boot (Java) y Quarkus",
        "Análisis predictivo avanzado con impacto financiero medible",
        "Arquitecturas desacopladas siguiendo principios SOLID y MVVM",
        "Reducción cuantificable de costos operativos"
      ]
    },
    {
      id: 2,
      title: "Diseño e Implementación de Arquitecturas Cloud con Certificación AWS Architecting",
      description: "Migración y modernización a arquitecturas cloud escalables diseñadas por profesionales certificados en AWS Architecting. Implementación de CI/CD, Docker y Kubernetes para despliegues automatizados y seguros.",
      icon: "cloud",
      features: [
        "Arquitecturas Cloud con Certificación AWS Architecting (doble certificación en el equipo)",
        "Seguridad avanzada: Network Support, OWASP ZAP, Metasploit",
        "CI/CD automatizado y despliegues con Docker/Kubernetes",
        "Escalabilidad automática y optimización de costos"
      ]
    },
    {
      id: 3,
      title: "Consultoría Estratégica: De Datos a Valor Financiero",
      description: "Análisis de infraestructura actual con enfoque en ROI. Integración de SAP Business One, Power BI y SQL para mapear cada solución tecnológica directamente al estado de resultados de su empresa.",
      icon: "chart",
      features: [
        "Auditoría tecnológica con análisis contable/financiero",
        "Roadmap estratégico con métricas de ROI garantizadas",
        "Integración SAP Business One y Power BI para visualización ejecutiva",
        "Cada decisión técnica validada por impacto financiero"
      ]
    }
  ],

  team: {
    title: "OryxCnsulting: El Motor de Tres Velocidades",
    subtitle: "Ingeniería de Precisión y Estrategia Cuantificable",
    members: [
      {
        id: 1,
        role: "Arquitecto de Software y Cloud",
        name: "Julián de Jesús Gutiérrez López",
        count: 2,
        image: "/assets/workers/julian.jpg",
        focus: "Construcción de sistemas desacoplados y escalables en la nube",
        description: "Nuestra ingeniería se especializa en arquitecturas de Microservicios con Spring Boot y despliegues automatizados (CI/CD en AWS). No construimos sistemas, construimos ecosistemas de software resilientes.",
        skills: ["Microservicios", "Spring Boot (Java)", "AWS Cloud Services", "CI/CD", "Docker", "React/Vite", "PWA"],
        certifications: [
          "AWS Academy Cloud Foundations",
          "AWS Academy Cloud Operations",
          "AWS Academy Cloud Architecting",
          "AWS Academy Graduate - AWS Academy Introduction to Cloud",
          "Network Support and Security",
          "Operating Systems Basics by Cisco",
          "Diseño de Experiencia del Usuario (UX) de Google"
        ]
      },
      {
        id: 2,
        role: "Arquitecta de Software y Cloud",
        name: "Roxana Flores Barragán",
        count: 2,
        image: "/assets/workers/roxana.jpeg",
        focus: "Arquitecturas de alto rendimiento con Quarkus y seguridad avanzada",
        description: "Especialista en desarrollo de microservicios con Quarkus y Spring Boot, con enfoque en seguridad (OWASP ZAP, Metasploit, Wireshark) y arquitecturas cloud escalables. Experiencia en redes y soporte técnico avanzado.",
        skills: ["Microservicios (Quarkus)", "Spring Boot (Java)", "AWS Cloud Architecting", "Seguridad (OWASP ZAP, Metasploit)", "Networking", "Docker", "Kubernetes"],
        certifications: [
          "AWS Academy Cloud Foundations",
          "AWS Academy Cloud Architecting",
          "AWS Essentials, AWS Academy Introduction to Cloud",
          "Network Support and Security",
          "Networking Basics, Network Addressing and Basic Troubleshooting",
          "TOEFL ITP (B2 Certified)"
        ]
      },
      {
        id: 3,
        role: "Analista de Estrategia y Datos",
        name: "Felipe Armando Prado Vera",
        count: 1,
        image: "/assets/workers/felipe.png",
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

  caseStudies: [
    {
      id: 1,
      company: "Probecare",
      location: "Cuernavaca, Morelos",
      industry: "Reparación de Equipos Médicos",
      description: "Empresa especializada en la reparación de sondas ultrasónicas. Ofrecemos soluciones integrales de mantenimiento y reparación, respaldadas por un equipo de expertos altamente capacitados y el uso de tecnología de vanguardia.",
      challenge: "Gestión manual de clientes, órdenes de servicio y seguimiento de reparaciones, generando pérdida de información y retrasos en la atención.",
      solution: "Desarrollo de CRM personalizado para gestión integral de clientes, órdenes de servicio, inventario y seguimiento de reparaciones.",
      results: [
        { metric: "40%", label: "Reducción en tiempo de gestión" },
        { metric: "60%", label: "Aumento en eficiencia operativa" },
        { metric: "100%", label: "Trazabilidad de órdenes de servicio" },
        { metric: "30%", label: "Mejora en satisfacción del cliente" }
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL", "AWS"],
      testimonial: {
        content: "El CRM desarrollado por OryxCnsulting transformó completamente nuestras operaciones. Ahora tenemos control total sobre cada orden de servicio y nuestros clientes reciben un seguimiento profesional en tiempo real.",
        author: "Equipo Probecare",
        position: "Gerencia General"
      }
    }
  ],

  testimonials: [],

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
      { label: "Política de Privacidad", href: "/privacy" },
      { label: "Términos de Servicio", href: "/terms" }
    ]
  }
}

