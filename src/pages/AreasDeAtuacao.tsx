import { Reveal } from '@/components/Reveal'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { PRACTICE_AREAS, FAQS } from '@/data/content'

export default function AreasDeAtuacao() {
  return (
    <div className="bg-background min-h-screen">
      <section className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/600?q=abstract%20architecture&color=black')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
                Áreas de Atuação
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Compreensão profunda da lei aliada a uma visão estratégica de negócios. Descubra
                como podemos proteger seus interesses nas mais diversas esferas do direito.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {PRACTICE_AREAS.map((area, idx) => (
              <Reveal key={area.id} delay={idx * 50} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <Card className="overflow-hidden border-border/60 shadow-subtle hover:shadow-elevation transition-all">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-secondary/50 p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border">
                      <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 text-accent">
                        <area.icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-primary">{area.title}</h3>
                    </div>
                    <div className="md:w-2/3 p-10 flex flex-col justify-center">
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {area.longDesc}
                      </p>
                      <div className="mt-auto">
                        <Button
                          asChild
                          variant="outline"
                          className="text-primary border-primary hover:bg-primary hover:text-white group"
                        >
                          <Link to={`/contato?area=${area.id}`}>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Tirar dúvida sobre {area.title}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Dúvidas Frequentes
              </h2>
              <p className="text-muted-foreground text-lg">
                Informações essenciais para quem busca assessoria jurídica de qualidade.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b-border py-2">
                    <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-primary hover:text-accent font-semibold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Ainda tem dúvidas ou precisa de um atendimento específico?
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold">
                <Link to="/contato">
                  Fale com um Advogado <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
