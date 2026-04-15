import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Reveal } from '@/components/Reveal'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório e deve ter no mínimo 2 caracteres'),
  email: z.string().email('Por favor, insira um e-mail válido'),
  phone: z.string().min(10, 'Telefone inválido, inclua o DDD'),
  area: z.string().min(1, 'Por favor, selecione uma área de interesse'),
  message: z
    .string()
    .min(10, 'Sua mensagem deve ter pelo menos 10 caracteres para podermos entender o caso'),
})

export default function Contato() {
  const { toast } = useToast()
  const location = useLocation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', area: '', message: '' },
  })

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const areaParam = params.get('area')
    if (areaParam) {
      form.setValue('area', areaParam)
    }
  }, [location, form])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    toast({
      title: 'Mensagem enviada com sucesso!',
      description: 'Nossa equipe de triagem entrará em contato em até 2 horas úteis.',
    })
    form.reset()
  }

  return (
    <div className="bg-background min-h-screen">
      <section className="pt-40 pb-20 bg-primary text-white relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">Contato</h1>
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Estamos prontos para ouvir o seu caso. Entre em contato conosco e agende uma
                consulta sigilosa e assertiva com nossos especialistas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal direction="right">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  Envie uma mensagem
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-elevation border border-border">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Nome Completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: João da Silva" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">E-mail</FormLabel>
                              <FormControl>
                                <Input placeholder="seu@email.com" className="h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Telefone / WhatsApp</FormLabel>
                              <FormControl>
                                <Input placeholder="(11) 99999-9999" className="h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="area"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Área de Interesse</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12">
                                  <SelectValue placeholder="Selecione sobre o que deseja falar" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="civil">Direito Civil</SelectItem>
                                <SelectItem value="trabalhista">Direito Trabalhista</SelectItem>
                                <SelectItem value="penal">Direito Penal</SelectItem>
                                <SelectItem value="familia">Direito de Família</SelectItem>
                                <SelectItem value="tributario">Direito Tributário</SelectItem>
                                <SelectItem value="empresarial">Direito Empresarial</SelectItem>
                                <SelectItem value="outro">Outro assunto</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">
                              Mensagem (Breve relato)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Descreva brevemente sua situação..."
                                className="min-h-[120px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full h-14 text-lg bg-accent hover:bg-accent/90 text-white font-semibold"
                      >
                        <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        Suas informações são tratadas com absoluto sigilo, de acordo com as normas
                        da LGPD.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200} className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                  Informações de Contato
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border">
                    <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Nosso Endereço</h4>
                      <p className="text-muted-foreground">
                        Av. Paulista, 1000 - Conjunto 50
                        <br />
                        Bela Vista, São Paulo - SP
                        <br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border">
                    <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Telefones</h4>
                      <p className="text-muted-foreground">
                        Fixo: (11) 3000-0000
                        <br />
                        WhatsApp: (11) 99999-9999
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border">
                    <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">E-mail</h4>
                      <p className="text-muted-foreground">
                        contato@novaesadv.com.br
                        <br />
                        juridico@novaesadv.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border">
                    <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">
                        Horário de Atendimento
                      </h4>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 09h às 18h
                        <br />
                        Plantão criminal: 24 horas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-2xl overflow-hidden shadow-elevation border border-border h-[300px] relative">
                  <img
                    src="https://img.usecurling.com/p/800/600?q=sao%20paulo%20map&color=gray"
                    alt="Mapa de Localização"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-accent text-white p-3 rounded-full shadow-lg animate-bounce">
                      <MapPin className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
