import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/Reveal'
import { Card, CardContent } from '@/components/ui/card'
import { PRACTICE_AREAS } from '@/data/content'

export default function Index() {
  return (
    <>
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.usecurling.com/p/1920/1080?q=law%20office&color=black"
            alt="Law Office"
            className="w-full h-full object-cover scale-105 animate-[float_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Reveal direction="up" delay={100} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white text-sm font-medium tracking-wide">
                Atendimento especializado em todo o Brasil
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
              Excelência Jurídica e<br />
              <span className="text-accent">Compromisso com Seus Direitos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              Soluções jurídicas sofisticadas e personalizadas para pessoas e corporações.
              Defendemos seus interesses com foco absoluto em resultados sólidos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-white hover:text-primary text-white font-semibold h-14 px-8 text-lg transition-colors border-0"
              >
                <Link to="/areas-de-atuacao">Conhecer Áreas de Atuação</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-primary hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm h-14 px-8 text-lg transition-colors"
              >
                <Link to="/contato">Fale com um Especialista</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
                  Especialidades
                </h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                  Como podemos ajudar?
                </h3>
              </div>
              <Button
                asChild
                variant="ghost"
                className="text-primary hover:text-accent font-semibold group self-start md:self-auto"
              >
                <Link to="/areas-de-atuacao">
                  Ver todas as áreas{' '}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area, idx) => (
              <Reveal key={area.id} delay={idx * 100}>
                <Card className="group h-full hover:shadow-elevation transition-all duration-500 border-border/60 hover:border-accent/30 overflow-hidden relative bg-card">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150" />
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="bg-primary/5 p-4 rounded-xl w-fit mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <area.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-4 text-foreground">
                      {area.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{area.desc}</p>
                    <Link
                      to="/areas-de-atuacao"
                      className="inline-flex items-center text-sm font-bold tracking-wide text-primary group-hover:text-accent transition-colors mt-auto uppercase"
                    >
                      Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-white/10">
            {[
              { num: '15+', label: 'Anos de Experiência' },
              { num: '5K+', label: 'Casos Resolvidos' },
              { num: '20+', label: 'Especialistas' },
              { num: '98%', label: 'Taxa de Sucesso' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-accent text-5xl md:text-6xl font-serif font-bold mb-3">
                  {stat.num}
                </div>
                <div className="text-white/80 font-medium text-lg tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Reveal>
            <div className="bg-white p-12 md:p-16 rounded-3xl shadow-elevation border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Precisa de orientação jurídica imediata?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Nossa equipe está pronta para analisar seu caso e oferecer a melhor estratégia
                legal. Agende uma consulta inicial sem compromisso.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-10 text-lg shadow-elevation transition-transform hover:-translate-y-1"
              >
                <Link to="/contato">Falar com Nossa Equipe</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
