'use client';

import { PremiumCard } from '@/components/custom/premium-card';
import { PremiumButton } from '@/components/custom/premium-button';
import { User, Mail, Phone, Calendar, Target, TrendingUp, Settings, LogOut } from 'lucide-react';

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white uppercase tracking-tight">
            Perfil
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mt-2" />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <section className="mb-12">
          <PremiumCard className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-[#0A0A0A]" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center border-4 border-[#0A0A0A]">
                  <span className="text-[#0A0A0A] font-bold text-lg">42</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white uppercase mb-2">
                  Atleta Elite
                </h2>
                <p className="text-[#D4AF37] font-bold uppercase tracking-wider mb-4">
                  Membro Premium
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="px-4 py-2 bg-[#1F1F1F] rounded-lg">
                    <div className="text-[#D4AF37] font-bold text-xl">156</div>
                    <div className="text-xs text-[#8A8A8A] uppercase">Treinos</div>
                  </div>
                  <div className="px-4 py-2 bg-[#1F1F1F] rounded-lg">
                    <div className="text-[#D4AF37] font-bold text-xl">42</div>
                    <div className="text-xs text-[#8A8A8A] uppercase">Dias</div>
                  </div>
                  <div className="px-4 py-2 bg-[#1F1F1F] rounded-lg">
                    <div className="text-[#D4AF37] font-bold text-xl">12</div>
                    <div className="text-xs text-[#8A8A8A] uppercase">Conquistas</div>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <div>
                <PremiumButton variant="secondary" className="text-sm py-3 px-6">
                  Editar Perfil
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </section>

        {/* Personal Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6">
            Informações Pessoais
          </h2>
          <PremiumCard className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <div className="text-xs text-[#8A8A8A] uppercase mb-1">Email</div>
                  <div className="text-white font-medium">atleta@coregym.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <div className="text-xs text-[#8A8A8A] uppercase mb-1">Telefone</div>
                  <div className="text-white font-medium">+55 (11) 99999-9999</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <div className="text-xs text-[#8A8A8A] uppercase mb-1">Membro desde</div>
                  <div className="text-white font-medium">Janeiro 2024</div>
                </div>
              </div>
            </div>
          </PremiumCard>
        </section>

        {/* Goals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6">
            Objetivos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PremiumCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#B8941F] flex items-center justify-center rounded-xl">
                  <Target className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold uppercase mb-2">
                    Objetivo Principal
                  </h3>
                  <p className="text-[#8A8A8A] text-sm mb-3">
                    Ganhar massa muscular
                  </p>
                  <div className="h-2 bg-[#1F1F1F] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#B8941F] w-3/4" />
                  </div>
                  <p className="text-xs text-[#D4AF37] mt-2">75% completo</p>
                </div>
              </div>
            </PremiumCard>

            <PremiumCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#B8941F] flex items-center justify-center rounded-xl">
                  <TrendingUp className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold uppercase mb-2">
                    Meta Semanal
                  </h3>
                  <p className="text-[#8A8A8A] text-sm mb-3">
                    5 treinos por semana
                  </p>
                  <div className="h-2 bg-[#1F1F1F] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#B8941F] w-4/5" />
                  </div>
                  <p className="text-xs text-[#D4AF37] mt-2">4/5 completo</p>
                </div>
              </div>
            </PremiumCard>
          </div>
        </section>

        {/* Settings */}
        <section>
          <h2 className="text-2xl font-bold text-white uppercase mb-6">
            Configurações
          </h2>
          <PremiumCard className="p-6">
            <div className="space-y-3">
              <button className="w-full flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl hover:border-[#D4AF37] transition-colors">
                <Settings className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white font-medium">Preferências</span>
              </button>
              <button className="w-full flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl hover:border-[#D4AF37] transition-colors">
                <User className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white font-medium">Dados Corporais</span>
              </button>
              <button className="w-full flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl hover:border-red-500 transition-colors">
                <LogOut className="w-5 h-5 text-red-500" />
                <span className="text-red-500 font-medium">Sair</span>
              </button>
            </div>
          </PremiumCard>
        </section>
      </main>
    </div>
  );
}
