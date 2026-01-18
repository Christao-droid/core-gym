// CORE GYM - Constantes de Design Premium

export const COLORS = {
  // Preto profundo
  background: '#0A0A0A',
  cardBg: '#141414',
  cardBorder: '#1F1F1F',
  
  // Dourado metálico premium
  gold: '#D4AF37',
  goldLight: '#E5C158',
  goldDark: '#B8941F',
  goldGlow: 'rgba(212, 175, 55, 0.3)',
  
  // Neutros
  white: '#FFFFFF',
  gray: '#8A8A8A',
  grayLight: '#B0B0B0',
} as const;

export const GRADIENTS = {
  gold: 'linear-gradient(135deg, #E5C158 0%, #D4AF37 50%, #B8941F 100%)',
  goldSubtle: 'linear-gradient(135deg, rgba(229, 193, 88, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
} as const;

// Forma hexagonal via clip-path
export const HEXAGON_CLIP = 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)';
