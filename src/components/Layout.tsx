import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, Scale, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Footer } from './Footer'

const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
  { name: 'Sobre Nós', path: '/sobre-nos' },
  { name: 'Contato', path: '/contato' },
]

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setSheetOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-accent/30">
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent',
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-border shadow-sm py-4'
            : cn('py-6 bg-transparent', !isHome && 'bg-primary'),
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-accent p-2 rounded-lg group-hover:bg-primary transition-colors">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <span
              className={cn(
                'font-serif font-bold text-2xl tracking-tight transition-colors',
                isScrolled ? 'text-primary' : 'text-white',
              )}
            >
              Novaes
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-semibold tracking-wide transition-colors hover:text-accent relative group',
                  location.pathname === link.path
                    ? 'text-accent'
                    : isScrolled
                      ? 'text-foreground'
                      : 'text-white/90 hover:text-white',
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform scale-x-0 transition-transform origin-left group-hover:scale-x-100',
                    location.pathname === link.path && 'scale-x-100',
                  )}
                />
              </Link>
            ))}
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white font-semibold tracking-wide border-0 shadow-elevation transition-transform hover:-translate-y-0.5 ml-2"
            >
              <Link to="/contato">Agendar Consulta</Link>
            </Button>
          </nav>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'hover:bg-transparent',
                  isScrolled ? 'text-primary' : 'text-white hover:text-accent',
                )}
              >
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] flex flex-col bg-background border-l-border"
            >
              <SheetTitle className="text-left font-serif text-2xl border-b border-border pb-4 mt-4 text-primary">
                Navegação
              </SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'text-xl font-serif transition-colors hover:text-accent',
                      location.pathname === link.path ? 'text-accent font-bold' : 'text-foreground',
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <Button
                  asChild
                  className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white shadow-elevation"
                >
                  <Link to="/contato">Falar com Advogado</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-elevation hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="absolute right-full mr-4 bg-white text-primary text-sm font-semibold py-2 px-4 rounded-lg shadow-elevation opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
          Tirar dúvida agora
        </span>
      </a>

      <Footer />
    </div>
  )
}
