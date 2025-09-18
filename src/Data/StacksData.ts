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
