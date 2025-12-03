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
    certificado: 'https://static.lms.ebaconline.com.br/certs/course/b715045e-7a55-45f9-8dd6-84171739ba7c/original.pdf?1758200013528'
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
