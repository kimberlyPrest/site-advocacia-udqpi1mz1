import { Link } from 'react-router-dom'
import { Scale, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
  { name: 'Sobre Nós', path: '/sobre-nos' },
  { name: 'Contato', path: '/contato' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="bg-accent p-2 rounded-lg group-hover:bg-white transition-colors">
                <Scale className="h-6 w-6 text-white group-hover:text-primary transition-colors" />
              </div>
              <span className="font-serif font-bold text-2xl text-white">Novaes</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 pr-4">
              Excelência jurídica e compromisso com seus direitos. Soluções personalizadas para
              pessoas e empresas com foco em resultados sólidos e duradouros.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-white">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contato@novaesadv.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-white">Acompanhe</h4>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-accent hover:-translate-y-1 transition-all text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-accent hover:-translate-y-1 transition-all text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Inscrito na OAB/SP sob o nº 12.345. O conteúdo deste site possui caráter meramente
              informativo e não constitui aconselhamento jurídico.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Novaes & Associados. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
