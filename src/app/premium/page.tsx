'use client';

import { PremiumCard } from '@/components/custom/premium-card';
import { PremiumButton } from '@/components/custom/premium-button';
import { Crown, Check, Zap, Target, TrendingUp, Award, Shield, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'BÁSICO',
    price: 'Grátis',
    period: 'Para sempre',
    description: 'Comece sua jornada fitness',
    features: [
      'Acesso a treinos básicos',
      'Registro de exercícios',
      'Estatísticas básicas',
      'Suporte por email',
    ],
    notIncluded: [
      'Planos personalizados AI',
      'Análises avançadas',
      'Suporte prioritário',
      'Conteúdo exclusivo',
    ],
    highlighted: false,
  },
  {
    name: 'ELITE',
    price: '€7,97',
    period: 'por mês',
    description: 'Para atletas sérios',
    features: [
      'Tudo do plano Básico',
      'Planos personalizados AI',
      'Análises avançadas',
      'Suporte prioritário 24/7',
      'Biblioteca completa (3000+ exercícios)',
      'Vídeos em alta qualidade',
      'Tracking de recordes pessoais',
      'Sem anúncios',
    ],
    notIncluded: [],
    highlighted: true,
  },
  {
    name: 'CHAMPION',
    price: '€84,97',
    period: 'por ano',
    description: 'Máximo desempenho',
    features: [
      'Tudo do plano Elite',
      'Economia de 33%',
      'Consultoria mensal personalizada',
      'Planos de nutrição exclusivos',
      'Acesso antecipado a novos recursos',
      'Badge exclusivo Champion',
      'Comunidade VIP',
      'Desafios mensais com prêmios',
    ],
    notIncluded: [],
    highlighted: false,
  },
];

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8 text-[#00FF00]" />
            <div>
              <h1 className="text-3xl font-bold text-white uppercase tracking-tight">
                Premium
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00FF00] via-[#0080FF] to-transparent mt-2" />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="mb-8">
            <div className="inline-block w-20 h-20 bg-gradient-to-br from-[#00FF00] via-[#0080FF] to-[#0040FF] mb-6 shadow-[0_0_30px_rgba(0,255,0,0.3)]" style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white uppercase mb-4">
            Desbloqueie Seu<br />
            <span className="bg-gradient-to-r from-[#00FF00] to-[#0080FF] bg-clip-text text-transparent">
              Potencial Máximo
            </span>
          </h2>
          <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto">
            Junte-se à elite do fitness. Acesse recursos exclusivos, análises avançadas e suporte personalizado.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'AI Personalizado', desc: 'Treinos adaptados ao seu nível', color: 'from-[#00FF00] to-[#00CC00]' },
              { icon: Target, title: 'Metas Inteligentes', desc: 'Acompanhamento automático', color: 'from-[#0080FF] to-[#0060FF]' },
              { icon: TrendingUp, title: 'Análises Pro', desc: 'Insights detalhados', color: 'from-[#00FF00] to-[#0080FF]' },
              { icon: Award, title: 'Suporte Elite', desc: 'Atendimento prioritário', color: 'from-[#0040FF] to-[#0080FF]' },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <PremiumCard key={index} className="p-6 text-center hover:border-[#00FF00] transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} mx-auto mb-4 flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.2)]`}>
                    <Icon className="w-6 h-6 text-[#0A0A0A]" />
                  </div>
                  <h3 className="text-white font-bold uppercase mb-2">{benefit.title}</h3>
                  <p className="text-[#8A8A8A] text-sm">{benefit.desc}</p>
                </PremiumCard>
              );
            })}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white uppercase text-center mb-12">
            Escolha Seu Plano
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PremiumCard 
                key={plan.name}
                className={`p-8 relative transition-all duration-300 ${
                  plan.highlighted ? 'border-[#00FF00] shadow-[0_0_40px_rgba(0,255,0,0.3)]' : 'hover:border-[#0080FF]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-[#00FF00] via-[#0080FF] to-[#0040FF] rounded-full shadow-[0_0_20px_rgba(0,255,0,0.4)]">
                      <span className="text-[#0A0A0A] font-bold text-sm uppercase flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Mais Popular
                      </span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white uppercase mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'bg-gradient-to-r from-[#00FF00] to-[#0080FF] bg-clip-text text-transparent' : 'text-[#D4AF37]'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-[#8A8A8A] text-sm">{plan.period}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${plan.highlighted ? 'text-[#00FF00]' : 'text-[#0080FF]'} flex-shrink-0 mt-0.5`} />
                      <span className="text-[#B0B0B0] text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 opacity-40">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <div className="w-full h-0.5 bg-[#8A8A8A] mt-2" />
                      </div>
                      <span className="text-[#8A8A8A] text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <PremiumButton 
                  className="w-full"
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                >
                  {plan.price === 'Grátis' ? 'Plano Atual' : 'Assinar Agora'}
                </PremiumButton>
              </PremiumCard>
            ))}
          </div>
        </section>

        {/* Guarantee */}
        <section>
          <PremiumCard className="p-12 text-center border-[#0080FF] hover:border-[#00FF00] transition-all duration-300">
            <Shield className="w-16 h-16 text-[#0080FF] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white uppercase mb-4">
              Garantia de 7 Dias
            </h3>
            <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto">
              Experimente sem riscos. Se não ficar satisfeito, devolvemos 100% do seu investimento.
            </p>
          </PremiumCard>
        </section>
      </main>
    </div>
  );
}
