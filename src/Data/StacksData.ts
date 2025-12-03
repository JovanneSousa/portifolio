export interface Stack {
  name: string
  value: number
}

export const frontendStacks: Stack[] = [
  { name: 'React', value: 75 },
  { name: 'TypeScript', value: 80 },
  { name: 'JavaScript', value: 83 },
  { name: 'Bootstrap', value: 70 },
  { name: 'HTML/CSS', value: 90 }
]

export const backendStacks: Stack[] = [
  { name: 'Java', value: 80 },
  { name: 'Spring Boot', value: 75 },
  { name: 'APIs REST', value: 70 },
  { name: 'Microsserviços', value: 80 },
  { name: 'Maven', value: 72 }
]

export const toolsStacks: Stack[] = [
  { name: 'PostgreSQL', value: 85 },
  { name: 'MySQL', value: 70 },
  { name: 'Docker', value: 60 },
  { name: 'Git', value: 90 },
  { name: 'Linux', value: 75 }
]

type Curso = {
  id: number
  titulo: string
  plataforma: string
  horas: number
  tecnologias: string[]
  ano: string
  certificado: string
}

type Experiencia = {
  id: number
  titulo: string
  empresa: string
  descricao: string
  ferramentas: string[]
  inicio: string
  fim: string
}

export const experiencia: Experiencia[] = [
  {
    id: 1,
    titulo: 'Estágio em Desenvolvimento',
    empresa: 'Redeflex',
    descricao:
      'Atuo na construção de novas funcionalidades usando a PowerPlataform, estruturo querys no SqlServer visando integridade dos dados sob supervisão, aprendizado contínuo na área de desenvolvimento',
    ferramentas: ['PowerApps', 'PowerAutomate', 'SqlServer'],
    inicio: '10/2025',
    fim: 'Atualmente'
  },
  {
    id: 2,
    titulo: 'Analista de Suporte',
    empresa: 'Infrawise',
    descricao:
      'Atendimento usuários, Administração servidores Windows e redes, documentação de processos e garantia estabilidade dos sistemas.',
    ferramentas: ['Linux Server', 'Windows Server', 'Redes'],
    inicio: '02/2025',
    fim: '09/2025'
  },
  {
    id: 3,
    titulo: 'Assistente de Informática',
    empresa: 'Atacadão',
    descricao:
      'Liderança na área de TI, tomava decisões técnicas e estratégicas e aplicava melhorias contínuas nos processos.',
    ferramentas: ['Liderança', 'Comunicação', 'Tomada de decisão'],
    inicio: '04/2024',
    fim: '02/2025'
  },
  {
    id: 4,
    titulo: 'Auxiliar de Informática',
    empresa: 'Atacadão',
    descricao:
      'Atendimento de demandas técnicas diárias, resolução de problemas, organização de tarefas e documentação de processos, sempre com comunicação clara e trabalho em equipe.',
    ferramentas: ['Linux Server', 'Windows Server', 'ShellScript', 'Hardware'],
    inicio: '03/2024',
    fim: '06/2022'
  }
]

export const cursos: Curso[] = [
  {
    id: 1,
    titulo: 'Formação ASP.NET Core Expert',
    plataforma: 'Desenvolvedor.io',
    horas: 88,
    ano: '2025',
    tecnologias: ['ASP.NET Core', 'ASP.NET Mvc', 'Razor'],
    certificado: ''
  },
  {
    id: 2,
    titulo: 'Formação .NET Developer',
    plataforma: 'Dio',
    horas: 93,
    ano: '2025',
    tecnologias: ['C#', '.NET', 'Azure'],
    certificado: 'https://hermes.dio.me/certificates/KRRAMPYP.pdf'
  },
  {
    id: 3,
    titulo: 'Desenvolvedor Fullstack JAVA',
    plataforma: 'EBAC',
    horas: 89,
    ano: '2025',
    tecnologias: ['React', 'Java', 'SpringBoot', 'BootStrap', 'JQuery'],
    certificado:
      'https://static.lms.ebaconline.com.br/certs/course/b715045e-7a55-45f9-8dd6-84171739ba7c/original.pdf?1758200013528'
  },
  {
    id: 4,
    titulo: 'Formação Docker Fundamentals',
    plataforma: 'Dio',
    horas: 15,
    ano: '2025',
    tecnologias: ['Docker', '.NET', 'Azure', 'Linux'],
    certificado: 'https://hermes.dio.me/certificates/PCTRVRYS.pdf'
  },
  {
    id: 5,
    titulo: 'Formação CI/CD com Gitlab',
    plataforma: 'Dio',
    horas: 13,
    ano: '2025',
    tecnologias: ['Docker', 'Gitlab', 'CI/CD'],
    certificado: 'https://hermes.dio.me/certificates/42Z5YOXO.pdf'
  }
]

type Project = {
  id: number
  img: string
  title: string
  desc: string
  tech: string[]
}

export const projetos: Project[] = [
  {
    id: 1,
    img: 'https://placehold.co/300x200',
    title: 'Sistema de exemplo 1',
    desc: 'Lorem ipsum dolor sit amet...',
    tech: ['Java', 'Bootstrap', 'PostgreSQL']
  },
  {
    id: 2,
    img: 'https://placehold.co/300x200',
    title: 'Sistema de exemplo 2',
    desc: 'Lorem ipsum dolor sit amet...',
    tech: ['React', 'Styled Components', 'Node.js']
  },
  {
    id: 3,
    img: 'https://placehold.co/300x200',
    title: 'Sistema de exemplo 3',
    desc: 'Lorem ipsum dolor sit amet...',
    tech: ['Python', 'Django', 'MySQL']
  },
  {
    id: 4,
    img: 'https://placehold.co/300x200',
    title: 'Sistema de exemplo 2',
    desc: 'Lorem ipsum dolor sit amet...',
    tech: ['React', 'Styled Components', 'Node.js']
  },
  {
    id: 5,
    img: 'https://placehold.co/300x200',
    title: 'Sistema de exemplo 2',
    desc: 'Lorem ipsum dolor sit amet...',
    tech: ['React', 'Styled Components', 'Node.js']
  }
]
