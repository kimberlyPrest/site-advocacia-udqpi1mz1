import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { Scale } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-lg mx-auto bg-white p-12 rounded-3xl shadow-elevation border border-border">
          <div className="bg-primary/5 p-4 rounded-full w-fit mx-auto mb-6 text-accent">
            <Scale className="h-12 w-12" />
          </div>
          <h1 className="text-7xl font-serif font-bold text-primary mb-2">404</h1>
          <p className="text-2xl font-serif text-foreground mb-6 font-bold">
            Página não encontrada
          </p>
          <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
            A página que você está procurando parece ter sido movida, excluída ou talvez nunca tenha
            existido.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-elevation w-full h-14"
          >
            <Link to="/">Voltar para o Início</Link>
          </Button>
        </Reveal>
      </div>
    </div>
  )
}

export default NotFound
