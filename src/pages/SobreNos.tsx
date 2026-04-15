import { Reveal } from '@/components/Reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Linkedin, Mail, ShieldCheck, Target, Award } from 'lucide-react'
import { TEAM } from '@/data/content'

export default function SobreNos() {
  return (
    <div className="bg-background min-h-screen">
      <section className="pt-40 pb-20 bg-primary text-white relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
                Nossa História
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Tradição, ética e inovação jurídica caminhando juntas para defender seu patrimônio,
                liberdade e futuro.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <Reveal direction="right" className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <img
                  src="https://img.usecurling.com/p/800/1000?q=modern%20office&color=gray"
                  alt="Escritório Novaes"
                  className="rounded-2xl shadow-elevation relative z-10 w-full object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-elevation z-20 border border-border hidden md:block">
                  <div className="text-accent text-4xl font-serif font-bold mb-1">15+</div>
                  <div className="text-primary font-bold text-sm">
                    Anos de atuação
                    <br />
                    impecável
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200} className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  Compromisso com a Excelência
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Fundado em 2011, o escritório Novaes & Associados nasceu com o propósito de
                  oferecer uma advocacia que transcende o óbvio. Rompemos com o modelo tradicional
                  para entregar um serviço dinâmico, moderno e estritamente focado em resultados
                  reais para nossos clientes.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Acreditamos que cada caso é único. Por isso, nossa atuação é artesanal: combinamos
                  profundo rigor técnico com uma compreensão holística do cenário de cada cliente,
                  seja uma grande corporação ou uma pessoa física buscando justiça.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                  <Target className="h-8 w-8 text-accent mb-4" />
                  <h4 className="font-serif font-bold text-xl mb-2 text-primary">Missão</h4>
                  <p className="text-sm text-muted-foreground">
                    Prover soluções jurídicas seguras e inovadoras, assegurando a tranquilidade e o
                    crescimento sustentável de nossos parceiros.
                  </p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                  <ShieldCheck className="h-8 w-8 text-accent mb-4" />
                  <h4 className="font-serif font-bold text-xl mb-2 text-primary">Valores</h4>
                  <p className="text-sm text-muted-foreground">
                    Ética inegociável, transparência absoluta, lealdade ao cliente e aprimoramento
                    técnico contínuo.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Award className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                Nossa Equipe
              </h2>
              <p className="text-muted-foreground text-lg">
                Conheça os especialistas por trás das nossas vitórias. Um time coeso, experiente e
                apaixonado pelo Direito.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <Reveal key={member.id} delay={i * 100}>
                <Card className="group overflow-hidden border-border/50 shadow-subtle hover:shadow-elevation transition-all bg-card h-full flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-white text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {member.bio}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="bg-white/20 hover:bg-accent p-2 rounded-full transition-colors text-white"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href="#"
                          className="bg-white/20 hover:bg-accent p-2 rounded-full transition-colors text-white"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center flex-1 flex flex-col justify-center bg-white relative z-10">
                    <h3 className="font-serif font-bold text-xl mb-1 text-primary">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-xs font-mono">{member.oab}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-20 text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-elevation px-10"
              >
                <Link to="/contato">Deseja fazer parte do time?</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
