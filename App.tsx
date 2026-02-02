
import React from 'react';
import { MODULES, FLOW_ITEMS } from './constants';
import ModuleCard from './components/ModuleCard';
import FlowItemCard from './components/FlowItemCard';
import ScrollReveal from './components/ScrollReveal';

// Fix for TypeScript errors: declare global variables for external tracking scripts on the window object
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}

const App: React.FC = () => {
  // Link de destino unificado
  const CHECKOUT_URL = 'https://pay.kiwify.com.br/PpVYQja?afid=1lHccpqd';

  // Função para rastrear o clique no checkout e redirecionar
  const handlePurchaseClick = (value: string) => {
    // Facebook Pixel: Track InitiateCheckout
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'InitiateCheckout', {
        value: value,
        currency: 'BRL'
      });
    }
    
    // Google Ads: Track Conversion
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/LABEL',
        'value': parseFloat(value.replace(',', '.')),
        'currency': 'BRL'
      });
    }

    // Redirecionamento para o checkout real
    window.location.href = CHECKOUT_URL;
  };

  // Função para scroll suave até a oferta final
  const scrollToFinalOffer = () => {
    document.getElementById('final-offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-yellow-500 selection:text-black">
      {/* Hero Section */}
      <header className="relative pt-20 pb-10 px-4 flex flex-col items-center text-center">
        <ScrollReveal>
          <h1 className="text-white text-3xl md:text-6xl lg:text-7xl font-black max-w-5xl mb-12 tracking-tighter uppercase leading-[0.9]">
            Você está a poucos cliques do <br />
            <span className="text-yellow-500">maior</span> <span className="text-yellow-400">Banco de Vídeos</span> <br />
            <span className="text-yellow-500">Lifestyle Gringo!</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal className="w-full max-w-md mx-auto mb-10">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/anonymous/600/600" 
              alt="Anonymous Mask" 
              className="w-full h-auto object-contain mask-gradient"
            />
            {/* Main Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-full bg-black/60 backdrop-blur-md border-2 border-yellow-500 rounded-xl py-4 px-6 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
              <h1 className="text-3xl md:text-5xl font-black text-yellow-500 tracking-tighter">
                +15 MIL
              </h1>
              <p className="text-white font-bold text-lg md:text-xl leading-none flex items-center justify-center gap-2">
                Vídeos Lifestyle em 4K 🇺🇸
              </p>
              <p className="text-zinc-300 font-bold text-sm md:text-md uppercase tracking-widest mt-1">
                PREMIUM PACK 2026
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="mt-12 text-xl md:text-2xl font-bold max-w-2xl px-4">
            São <span className="text-yellow-400">17 módulos</span> com vídeos de todos <br className="hidden md:block" />
            os estilos que você imaginar!
          </h2>
        </ScrollReveal>
      </header>

      {/* Modules Grid */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {MODULES.map((module, index) => (
            <ScrollReveal key={module.id} className={`transition-delay-[${index * 100}ms]`}>
              <ModuleCard module={module} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 flex flex-col items-center text-center px-4 bg-zinc-950/50">
        <ScrollReveal>
          <p className="text-lg md:text-xl font-bold mb-10 max-w-lg">
            E de <span className="text-yellow-400 italic">bônus</span> você ainda ganha um pack cheio de <span className="text-yellow-400">vídeos prontos para postar!</span>
          </p>
        </ScrollReveal>
        <ScrollReveal className="w-full max-w-[280px] shadow-[0_0_40px_rgba(255,215,0,0.2)]">
          <ModuleCard 
            module={{ 
              id: 99, 
              title: 'VÍDEOS', 
              subtitle: 'PRONTOS', 
              imageUrl: 'https://picsum.photos/seed/bonus/400/600' 
            }} 
          />
        </ScrollReveal>
      </section>

      {/* Price & CTA 1 */}
      <section className="py-16 flex flex-col items-center text-center px-4">
        <ScrollReveal>
          <p className="text-zinc-400 text-sm uppercase tracking-widest mb-2">por apenas</p>
          <h3 className="text-5xl md:text-6xl font-black text-white mb-2">R$ 9,90!</h3>
          <p className="text-zinc-500 text-xs md:text-sm mb-8">Oferta por tempo limitado!</p>
          <button 
            onClick={() => handlePurchaseClick('9,90')}
            className="bg-gold-gradient text-black font-black text-xl md:text-2xl py-4 px-12 rounded-full shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter"
          >
            QUERO APROVEITAR!
          </button>
        </ScrollReveal>
      </section>

      {/* Transition Area */}
      <ScrollReveal className="py-10 flex justify-center">
         <span className="text-4xl md:text-6xl font-black text-yellow-500/50 italic tracking-tighter">OU...</span>
      </ScrollReveal>

      {/* Upsell / Flow Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-zinc-950">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-2xl font-bold leading-tight">
            Se além dos 15 Mil vídeos você ainda quiser aprender a fazer <span className="text-yellow-400">suas primeiras vendas sem aparecer</span>, e estruturar seu perfil para <span className="text-yellow-400">escalar seus primeiros R$ 10.000,00 :</span>
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <button 
              onClick={scrollToFinalOffer}
              className="bg-white text-black font-black text-xl md:text-2xl py-3 px-10 rounded-full hover:bg-yellow-400 transition-colors uppercase tracking-tight shadow-xl"
            >
              CLIQUE AQUI!
            </button>
            <button 
              onClick={() => handlePurchaseClick('9,90')}
              className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              QUERO SOMENTE OS 15 MIL VÍDEOS.
            </button>
          </div>
        </ScrollReveal>

        {/* Visual Flow Chart */}
        <ScrollReveal className="max-w-xl mx-auto relative h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Connector Lines */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
             <svg className="w-full h-full" viewBox="0 0 400 600">
                <path d="M200 100 L200 180" stroke="#FFD700" strokeWidth="2" fill="none" />
                <path d="M200 180 L100 250" stroke="#FFD700" strokeWidth="2" fill="none" />
                <path d="M200 180 L300 250" stroke="#FFD700" strokeWidth="2" fill="none" />
                <path d="M100 350 L100 450" stroke="#FFD700" strokeWidth="2" fill="none" />
                <path d="M300 350 L300 450" stroke="#FFD700" strokeWidth="2" fill="none" />
                <path d="M100 450 L300 450" stroke="#FFD700" strokeWidth="2" fill="none" />
             </svg>
          </div>

          <div className="absolute top-0 flex justify-center w-full">
            <FlowItemCard item={FLOW_ITEMS[0]} />
          </div>

          <div className="absolute top-[200px] md:top-[250px] left-0 md:left-[20px]">
            <FlowItemCard item={FLOW_ITEMS[1]} />
          </div>
          <div className="absolute top-[200px] md:top-[250px] right-0 md:right-[20px]">
            <FlowItemCard item={FLOW_ITEMS[2]} />
          </div>

          <div className="absolute top-[420px] md:top-[500px] left-0 md:left-[20px]">
            <FlowItemCard item={FLOW_ITEMS[3]} />
          </div>
          <div className="absolute top-[420px] md:top-[500px] right-0 md:right-[20px]">
            <FlowItemCard item={FLOW_ITEMS[4]} />
          </div>
        </ScrollReveal>
      </section>

      {/* Final Offer Card */}
      <section id="final-offer" className="max-w-md mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="bg-black border-2 border-yellow-500 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(255,215,0,0.3)] flex flex-col items-center">
            <h2 className="text-3xl font-black text-yellow-500 mb-6 italic">Arsenal Dark</h2>
            
            <ul className="w-full space-y-2 mb-10">
              {[
                'Funil de Vendas 100% Orgânico',
                'Estrutura de Perfil Completa',
                'Primeira Venda em Tempo Recorde',
                'Funil de Escala',
                'Aulas de Automação + Scripts',
                '15.000 Vídeos em 4K UHD',
                'Vídeos Virais Prontos',
                'Aulas de Edição Viral + Presets',
                'Vídeos Novos Todos os Dias',
                'Afiliação com 80% de Comissão',
                '8.000 Posts Virais Prontos',
                'Ferramentas IA',
                'Grupo VIP de Networking',
                'Bônus'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-zinc-300 text-sm font-medium">
                  <span className="text-yellow-500">✓</span> {feature}
                </li>
              ))}
            </ul>

            <div className="text-center w-full">
              <h3 className="text-4xl font-black text-white mb-1">R$ 19,90</h3>
              <p className="text-zinc-500 text-xs mb-6 uppercase tracking-wider">ou 4x de R$ 5,42</p>
              
              <button 
                onClick={() => handlePurchaseClick('19,90')}
                className="w-full bg-gold-gradient text-black font-black text-lg py-3 rounded-xl shadow-lg hover:brightness-110 transition-all uppercase mb-2"
              >
                QUERO APROVEITAR!
              </button>
              <p className="text-zinc-500 text-[10px] uppercase tracking-tighter">Oferta por tempo limitado!</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-zinc-700 text-[10px] uppercase tracking-[0.2em]">
        &copy; 2024 Arsenal Dark - Todos os direitos reservados
      </footer>
    </div>
  );
};

export default App;
