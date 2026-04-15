import { BookOpen, Briefcase, Shield, Users, Landmark, Building } from 'lucide-react'

export const PRACTICE_AREAS = [
  {
    id: 'civil',
    title: 'Direito Civil',
    desc: 'Resolução de conflitos, contratos, responsabilidade civil e direitos de propriedade.',
    icon: BookOpen,
    longDesc:
      'Nossa equipe de Direito Civil atua na prevenção e resolução de conflitos envolvendo pessoas físicas e jurídicas. Elaboramos contratos seguros, assessoramos em questões de responsabilidade civil, direitos reais e propriedade, sempre buscando a melhor estratégia para proteger os interesses de nossos clientes com agilidade e eficiência.',
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    desc: 'Assessoria completa em relações de trabalho para empresas e empregados.',
    icon: Briefcase,
    longDesc:
      'Atuamos tanto na consultoria preventiva para adequação de empresas à legislação trabalhista, mitigando riscos de passivos, quanto na defesa contenciosa em reclamações trabalhistas. Nosso foco é garantir o cumprimento das leis do trabalho de forma equilibrada e justa.',
  },
  {
    id: 'penal',
    title: 'Direito Penal',
    desc: 'Defesa criminal estratégica, focada na proteção de garantias fundamentais.',
    icon: Shield,
    longDesc:
      'Com atuação de destaque em Direito Penal Econômico e Empresarial (crimes do colarinho branco, lavagem de dinheiro, crimes tributários), oferecemos defesa técnica e diligente desde a fase de inquérito policial até as instâncias superiores, zelando irrestritamente pelas garantias constitucionais.',
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    desc: 'Atuação sensível e técnica em divórcios, pensão, guarda e sucessões.',
    icon: Users,
    longDesc:
      'Reconhecemos a delicadeza que envolve as demandas de família e sucessões. Atuamos de forma humanizada e sigilosa em processos de divórcio, partilha de bens, fixação de alimentos, guarda de menores e elaboração de planejamentos sucessórios e inventários.',
  },
  {
    id: 'tributario',
    title: 'Direito Tributário',
    desc: 'Planejamento e contencioso tributário para otimização fiscal de negócios.',
    icon: Landmark,
    longDesc:
      'Auxiliamos empresas na complexa teia tributária brasileira. Realizamos consultoria para planejamento fiscal eficiente, recuperação de créditos e defesa vigorosa em processos administrativos e judiciais contra autuações fiscais das esferas municipal, estadual e federal.',
  },
  {
    id: 'empresarial',
    title: 'Direito Empresarial',
    desc: 'Estruturação societária, fusões, aquisições e governança corporativa.',
    icon: Building,
    longDesc:
      'Apoiamos o crescimento sustentável de negócios através de sólida assessoria em constituição de sociedades, fusões e aquisições (M&A), elaboração de acordos de acionistas, implementação de governança corporativa e compliance, protegendo a empresa e seus sócios.',
  },
]

export const TEAM = [
  {
    id: 1,
    name: 'Dr. Augusto Novaes',
    role: 'Sócio Fundador - Civil',
    oab: 'OAB/SP 123.456',
    img: 'https://img.usecurling.com/ppl/medium?gender=male&seed=1',
    bio: 'Especialista em contratos complexos e litígios civis com mais de 20 anos de experiência nos tribunais superiores.',
  },
  {
    id: 2,
    name: 'Dra. Beatriz Lima',
    role: 'Sócia - Trabalhista',
    oab: 'OAB/SP 234.567',
    img: 'https://img.usecurling.com/ppl/medium?gender=female&seed=2',
    bio: 'Atuação focada na defesa corporativa em reclamações trabalhistas e implementação de programas de compliance laboral.',
  },
  {
    id: 3,
    name: 'Dr. Carlos Mendes',
    role: 'Associado - Penal Empresarial',
    oab: 'OAB/SP 345.678',
    img: 'https://img.usecurling.com/ppl/medium?gender=male&seed=3',
    bio: 'Destaque na defesa estratégica de crimes do colarinho branco, investigações corporativas e acordos de leniência.',
  },
  {
    id: 4,
    name: 'Dra. Daniela Costa',
    role: 'Associada - Família e Sucessões',
    oab: 'OAB/SP 456.789',
    img: 'https://img.usecurling.com/ppl/medium?gender=female&seed=4',
    bio: 'Mediadora certificada, com foco em resoluções pacíficas, blindagem patrimonial e planejamento sucessório familiar.',
  },
]

export const FAQS = [
  {
    q: 'Como agendar uma consulta inicial?',
    a: 'Você pode agendar entrando em contato pelo nosso botão de WhatsApp, disponível no canto inferior da tela, ou preenchendo o formulário na nossa página de Contato. Nossa equipe retornará em até 2 horas úteis.',
  },
  {
    q: 'Quais são os honorários cobrados pelo escritório?',
    a: 'Nossos honorários seguem os parâmetros éticos e a tabela da OAB, variando conforme a complexidade e tempo estimado de cada caso. Oferecemos transparência total, com contratos claros e detalhados antes do início de qualquer trabalho jurídico.',
  },
  {
    q: 'Vocês atendem clientes e empresas de outros estados?',
    a: 'Sim. Com a digitalização dos processos (PJe, e-SAJ) e as ferramentas de videoconferência, representamos clientes em todo o território nacional com a mesma proximidade e eficiência.',
  },
  {
    q: 'Como serei informado sobre o andamento do meu processo?',
    a: "Zelamos pela comunicação clara. Temos um sistema interno robusto e enviamos relatórios proativos mensais por e-mail ou WhatsApp, traduzindo o 'juridiquês' para que você sempre entenda a real situação da sua demanda.",
  },
]
