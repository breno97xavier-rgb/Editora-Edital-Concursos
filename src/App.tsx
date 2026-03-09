/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  Headphones, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  LayoutDashboard, 
  ShieldCheck,
  ExternalLink,
  Clock,
  AlertTriangle
} from "lucide-react";

const CONCURSOS = [
  {
    id: "prf",
    name: "PRF",
    cargo: "AGENTE ADMINISTRATIVO",
    fullName: "Polícia Rodoviária Federal",
    title: "Polícia Rodoviária Federal - PRF",
    description: "Conteúdo organizado, questões e estudo guiado para PRF. O material que separa os aprovados dos curiosos.",
    image: "https://i.ibb.co/Fb2jywxw/C-pia-de-Capa-de-Livro-Infantil-Ilustrado-Vibrante-PCD-Inclusivo-1.png",
    bgImage: "https://i.ibb.co/rfNMTKNr/prf-jpg.webp",
    link: "https://editoraeditalconcursos-apostilaprf.vercel.app",
    status: "active",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: "petrobras",
    name: "Petrobras",
    cargo: "TÉCNICO DE OPERAÇÃO",
    fullName: "Petrobras",
    title: "Petrobras - Petrobras",
    description: "Materiais para cargos de nível médio e técnico. Entre na maior empresa do Brasil com preparação de elite.",
    image: "https://i.ibb.co/M5cTtxWG/C-pia-de-Capa-de-Livro-Infantil-Ilustrado-Vibrante-PCD-Inclusivo.png",
    bgImage: "https://i.ibb.co/39WTKyp4/br4-1-857x482.jpg",
    link: "https://editoraeditalconcursos-petrobras.vercel.app",
    status: "active",
    icon: <LayoutDashboard className="w-6 h-6" />
  },
  {
    id: "inss",
    name: "INSS",
    cargo: "TÉCNICO DO SEGURO SOCIAL",
    fullName: "Instituto Nacional do Seguro Social",
    title: "Instituto Nacional do Seguro Social - INSS",
    description: "Material completo para técnico do seguro social e revisões. Não espere o edital sair para começar a vencer.",
    image: "https://i.ibb.co/3y2XsRqf/Capa-de-Livro-Infantil-Ilustrado-Vibrante-PCD-Inclusivo-1.png",
    bgImage: "https://i.ibb.co/cXycwrsG/foto-inss.jpg",
    link: "https://editoraeditalconcursos-inss.vercel.app",
    status: "active",
    icon: <LayoutDashboard className="w-6 h-6" />
  },
  {
    id: "gcm",
    name: "GCM",
    cargo: "GUARDA CIVIL MUNICIPAL",
    fullName: "Guarda Civil Municipal",
    title: "Guarda Civil Municipal - GCM",
    description: "Preparação completa para Guardas Municipais. O material essencial para quem busca a farda azul marinho.",
    image: "https://i.ibb.co/vCpnKgQ4/C-pia-de-Capa-de-Livro-Infantil-Ilustrado-Vibrante-PCD-Inclusivo.png",
    bgImage: "https://i.ibb.co/twkZpXNs/concurso-gcm-sp.jpg",
    link: "https://editoraeditalconcursos-gcm.vercel.app",
    status: "active",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: "bb",
    name: "Banco do Brasil (BB)",
    cargo: "ESCRITURÁRIO",
    fullName: "Banco do Brasil",
    title: "Banco do Brasil - BB",
    description: "Base bancária, conhecimentos específicos e prática por questões. A sua carreira bancária começa aqui.",
    image: "https://i.ibb.co/hRK2nKxg/Capa-Apostila-Banco-do-Brasil.png",
    bgImage: "https://i.ibb.co/Tx71qnj6/banco-do-brasil-mcamgo-abr-280620211818-9.jpg",
    status: "soon",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    id: "bacen",
    name: "Bacen",
    cargo: "ANALISTA / TÉCNICO",
    fullName: "Banco Central do Brasil",
    title: "Banco Central do Brasil - Bacen",
    description: "Base sólida para concursos do Banco Central. O topo da carreira pública exige o melhor material.",
    image: "https://i.ibb.co/YFNtktxg/BACEN.png",
    bgImage: "https://i.ibb.co/9kH9NBJp/shutterstock-1486752722.jpg",
    status: "soon",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export default function App() {
  const WHATSAPP_LINK = "https://w.app/editoraeditalconcursos";

  return (
    <div className="min-h-screen flex flex-col bg-[#050810] text-slate-200">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#050810]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/30 bg-white p-0.5">
              <img 
                src="https://i.ibb.co/675bygRL/1000112350.webp" 
                alt="Logo Editora Edital Concursos" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-black text-xl tracking-tighter text-white hidden sm:block">EDITORA EDITAL</span>
          </div>
          
          <nav className="flex items-center gap-4 sm:gap-8">
            <a 
              href="#materiais" 
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Materiais
            </a>
            <a 
              href="#suporte" 
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Suporte
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-40 overflow-hidden flex items-center justify-center text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase">
                A oportunidade de mudar de <span className="text-indigo-500">vida é agora</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                Materiais definitivos para quem não aceita nada menos que a aprovação. Conteúdo cirúrgico, direto na ferida do edital. <span className="text-white font-bold">Garanta sua vaga hoje ou lamente amanhã.</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="#materiais" 
                  className="w-full sm:w-auto px-12 py-6 bg-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl shadow-indigo-500/20 hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all text-lg"
                >
                  QUERO MINHA APROVAÇÃO AGORA
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>

        {/* Cards Section - Vertical List */}
        <section id="materiais" className="py-32 bg-[#080b14]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Concursos em Destaque</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Selecione seu alvo e comece a destruir o edital</p>
            </div>

            <div className="flex flex-col gap-12">
              {CONCURSOS.map((concurso, index) => (
                <motion.div
                  key={concurso.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/50 hover:border-indigo-500/30 transition-all duration-500"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={concurso.bgImage} 
                      alt="" 
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
                  </div>

                  <div className="relative z-10 p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center">
                    {/* Left: Cover Image */}
                    <div className="w-full md:w-48 lg:w-56 shrink-0 shadow-2xl shadow-black/50 rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={concurso.image} 
                        alt={concurso.title} 
                        className="w-full h-auto object-cover aspect-[3/4]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Right: Content */}
                    <div className="flex-grow flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                            {concurso.icon}
                          </div>
                          <span className="text-indigo-400 font-black uppercase tracking-widest text-xs">{concurso.name}</span>
                        </div>
                        <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                          {concurso.cargo}
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                        {concurso.title}
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl leading-relaxed">
                        {concurso.description}
                      </p>
                      
                      <div className="mt-auto">
                        {concurso.status === "active" ? (
                          <a 
                            href={concurso.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white text-sm font-black uppercase tracking-widest rounded-xl hover:bg-indigo-500 transition-all group/btn"
                          >
                            Quero minha vaga
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </a>
                        ) : (
                          <div className="inline-flex flex-col gap-1">
                            <button 
                              disabled
                              className="px-8 py-4 bg-white/5 text-white/20 text-sm font-black uppercase tracking-widest rounded-xl cursor-not-allowed border border-white/5"
                            >
                              Em breve
                            </button>
                            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-indigo-500/50 text-center">Em desenvolvimento</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-32 bg-[#050810] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
              <div className="group">
                <div className="w-20 h-20 bg-indigo-500/10 text-indigo-500 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Conteúdo Cirúrgico</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Foco total no que realmente cai na prova. Sem enrolação, sem perda de tempo. Direto ao ponto.
                </p>
              </div>
              
              <div className="group">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <LayoutDashboard className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Blindagem Mental</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Cronogramas e materiais estruturados para que você não precise pensar em nada, apenas em estudar.
                </p>
              </div>
              
              <div className="group">
                <div className="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Headphones className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Suporte de Elite</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Canal direto para tirar dúvidas. Você nunca estará sozinho nessa guerra pela aprovação.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </section>
      </main>

      {/* Footer */}
      <footer id="suporte" className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500/30 bg-white p-0.5">
                  <img 
                    src="https://i.ibb.co/675bygRL/1000112350.webp" 
                    alt="Logo Editora Edital Concursos" 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-2xl font-black text-white tracking-tighter uppercase">Editora Edital</span>
              </div>
              <p className="text-slate-500 text-sm max-w-md mb-10 font-medium leading-relaxed">
                Materiais autorais focados em aprovação real. Não somos órgão público. Marcas citadas pertencem a seus titulares. A guerra é sua, a munição é nossa.
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-sm hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold">(41) 98842-0201</span>
                </a>
                <a 
                  href="mailto:editoraeditalconcursos@gmail.com" 
                  className="flex items-center gap-4 text-sm hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-bold">editoraeditalconcursos@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navegação</h4>
              <ul className="space-y-6">
                <li><a href="#materiais" className="text-sm font-bold hover:text-indigo-400 transition-colors uppercase tracking-widest">Materiais</a></li>
                <li><a href="#suporte" className="text-sm font-bold hover:text-indigo-400 transition-colors uppercase tracking-widest">Suporte</a></li>
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-indigo-400 transition-colors uppercase tracking-widest">WhatsApp</a></li>
              </ul>
            </div>

            {/* Support CTA */}
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Suporte</h4>
              <p className="text-sm text-slate-500 mb-8 font-medium">Não deixe sua dúvida virar um obstáculo. Fale conosco agora.</p>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-indigo-500 hover:text-white transition-all"
              >
                SUPORTE IMEDIATO
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">
              © 2026 Editora Edital Concursos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-8">
              <span className="text-[10px] text-indigo-500/50 uppercase tracking-[0.4em] font-black flex items-center gap-3">
                <Clock className="w-4 h-4" />
                VENCER OU VENCER
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
