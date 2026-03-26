

## Limpeza: Remover tudo relacionado ao curso de mágica

### O que será removido

**Página e rota:**
- `src/pages/MagicaCourse.tsx` - página inteira do curso de mágica
- Rota `/magica` no `src/App.tsx`

**Componentes exclusivos do curso de mágica (6 arquivos):**
- `src/components/MagicCTAButton.tsx`
- `src/components/MagicFeatureBox.tsx`
- `src/components/MagicValueStack.tsx`
- `src/components/MagicAlternatives.tsx`
- `src/components/MagicWhyOthersFail.tsx`
- `src/components/MagicMaterialPreview.tsx`
- `src/components/MagicAuthorSection.tsx`

**Componentes compartilhados usados apenas pela página de mágica (8 arquivos):**
- `src/components/CountdownTimer.tsx`
- `src/components/UrgencyBanner.tsx`
- `src/components/SocialProofBanner.tsx`
- `src/components/ComparisonBox.tsx`
- `src/components/FAQItem.tsx`
- `src/components/WhatsAppTestimonials.tsx`
- `src/components/WhatsAppMessage.tsx`
- `src/components/PrivacySection.tsx`
- `src/components/FeatureBox.tsx`
- `src/components/IntermediateCTA.tsx`
- `src/components/LiveSocialProof.tsx`
- `src/components/MaterialPreview.tsx`
- `src/components/NavLink.tsx`
- `src/components/ValueComparison.tsx`
- `src/components/WhyOthersFailSection.tsx`
- `src/components/TestimonialCard.tsx`

**Asset antigo:**
- `src/assets/author-photo.jpeg` (foto antiga, não usada em nenhum lugar)

### O que será mantido
- `src/pages/Index.tsx` - página principal do Sinais da Infidelidade
- `src/components/CTAButton.tsx` - botão CTA usado na página principal
- `src/components/TrustBadges.tsx` - selos de confiança usados na página principal
- `src/assets/author-photo-new.jpeg` - foto do autor usada na página principal
- `src/pages/NotFound.tsx`
- Todos os componentes UI (`src/components/ui/`)

### Alteração no App.tsx
- Remover import do `MagicaCourse`
- Remover a rota `/magica`

### Resumo
- **24 arquivos removidos** (1 página, 22 componentes, 1 asset)
- **1 arquivo editado** (App.tsx - remover rota)
- Projeto fica limpo, contendo apenas o Sinais da Infidelidade

