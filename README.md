<div align="center">

<img src="https://img.shields.io/badge/version-0.1.0-6366F1?style=for-the-badge" />
<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Chakra_UI-3-319795?style=for-the-badge" />
<img src="https://img.shields.io/badge/Storybook-10-FF4785?style=for-the-badge&logo=storybook&logoColor=white" />

<br />
<br />

```
███████╗ █████╗ ██████╗ ██╗███╗   ██╗    ██████╗ ███████╗
██╔════╝██╔══██╗██╔══██╗██║████╗  ██║    ██╔══██╗██╔════╝
███████╗███████║██████╔╝██║██╔██╗ ██║    ██║  ██║███████╗
╚════██║██╔══██║██╔══██╗██║██║╚██╗██║    ██║  ██║╚════██║
███████║██║  ██║██║  ██║██║██║ ╚████║    ██████╔╝███████║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚══════╝
```

### `@sarin-ds/ui`

**Um Design System dark-first construído do zero em React + TypeScript**  
*Extraído de um projeto real. Construído para reutilização.*

[📖 Storybook](#) · [📦 NPM](#) · [🐛 Issues](#) · [⚡ Início rápido](#-início-rápido)

</div>

---

## ✦ Por que este projeto existe

Todo desenvolvedor tem aquele repositório onde os componentes ficaram bons de verdade. Este DS foi extraído exatamente de um desses projetos — um sistema de gestão social real, com componentes testados em produção, refatorados e organizados para máxima reutilização.

Nada aqui foi criado por conveniência. Cada componente passou por:

- ✅ Uso real em produção
- ✅ Refatoração para remover lógica de negócio
- ✅ Tokenização completa de cores e estilos
- ✅ Documentação no Storybook
- ✅ TypeScript strict sem `any`

---

## 📦 Instalação

```bash
npm install @sarin-ds/ui
# ou
pnpm add @sarin-ds/ui
```

**Dependências peer necessárias:**

```bash
pnpm add react react-dom @chakra-ui/react
```

**Setup do provider no seu app:**

```tsx
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <YourApp />
    </ChakraProvider>
  )
}
```

---

## ⚡ Início rápido

```tsx
import { Button, Card, Loader, Tabs } from '@sarin-ds/ui'

export const MyPage = () => {
  return (
    <Card header="Minha seção">
      <Tabs
        items={[
          { label: 'Dados',     value: 'dados',     content: <p>...</p> },
          { label: 'Histórico', value: 'historico', content: <p>...</p> },
        ]}
      />
      <Button aria-label="salvar" onClick={() => {}}>
        Salvar
      </Button>
    </Card>
  )
}
```

---

## 🧩 Componentes

### Primitivos

| Componente | Descrição | Status |
|---|---|---|
| `Button` | Botão base com variantes e estados | ✅ |
| `Loader` | Spinner centralizado com suporte a fullscreen | ✅ |

### Layout

| Componente | Descrição | Status |
|---|---|---|
| `Card` | Container com header e footer opcionais | ✅ |
| `List` | Lista com divider entre itens | ✅ |
| `ListItem` | Compound component: Content, Icon, Subtext | ✅ |
| `Grid` | Sistema de grid responsivo 12 colunas | 🔜 |
| `Section` | Container de seção com variantes solid/transparent | 🔜 |

### Navegação

| Componente | Descrição | Status |
|---|---|---|
| `Tabs` | Abas com lazy mount e indicador animado | ✅ |
| `Header` | Compound component: Avatar, Title, ButtonIcon, Wrapper | 🔜 |

### Feedback

| Componente | Descrição | Status |
|---|---|---|
| `Empty` | Estado vazio com imagem e ação | ✅ |
| `Result` | Estado de erro/sucesso com ação de retry | ✅ |
| `Descriptions` | Grid de label + valor para exibição de dados | ✅ |

### Overlays

| Componente | Descrição | Status |
|---|---|---|
| `Modal` | Modal com trigger como render prop | 🔜 |
| `ModalConfirm` | Modal de confirmação/exclusão | 🔜 |
| `Drawer` | Drawer lateral XL | 🔜 |
| `ImagePreview` | Popover com preview de imagem | 🔜 |

### Utilitários

| Componente | Descrição | Status |
|---|---|---|
| `RenderWithFallbacks` | Gerencia estados: loading, error, empty, data | 🔜 |
| `Switch / Case / Default` | Pattern switch/case em JSX | 🔜 |

### Formulários

| Componente | Descrição | Status |
|---|---|---|
| `Form` | Wrapper com react-hook-form + loading state | 🔜 |
| `InputText` | Input de texto controlado | 🔜 |
| `InputNumber` | Input numérico | 🔜 |
| `InputCurrency` | Input monetário com máscara | 🔜 |
| `InputPhone` | Input com máscara de telefone | 🔜 |
| `InputTextArea` | Textarea controlada | 🔜 |
| `InputFile` | Upload de arquivos e imagens | 🔜 |
| `SelectForm` | Select controlado | 🔜 |
| `SelectAutocomplete` | Select com busca assíncrona | 🔜 |
| `MultiStepForm` | Formulário em etapas com validação por step | 🔜 |

### Data Display

| Componente | Descrição | Status |
|---|---|---|
| `DataTable` | Tabela com sort, filter, paginação e seleção | 🔜 |

---

## 🎨 Design Tokens

O DS usa um sistema de tokens dark-first extraído diretamente de um projeto em produção:

```ts
import { colors, spacing, radii, typography } from '@sarin-ds/ui/tokens'

// Superfícies
colors.surface.base     // #2e2e2e — cards, tabelas
colors.surface.overlay  // #242424 — modais, drawers
colors.surface.input    // #474747 — inputs, selects

// Bordas
colors.border.default   // #e2e8f070 — bordas principais
colors.border.muted     // #3e3d3f80 — dividers

// Texto
colors.text.primary     // #ffffff
colors.text.secondary   // #c7c7c7

// Brand
colors.brand.primary    // #3b82f6
colors.brand.danger     // #e53e3e
```

---

## 🏗️ Arquitetura

```
packages/ui/
├── src/
│   ├── components/       # Componentes React
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── tokens/           # Design tokens tipados
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── radii.ts
│   │   └── index.ts
│   └── index.ts          # Entry point do pacote
├── dist/                 # Build gerado (ESM + CJS + DTS)
└── .storybook/           # Configuração do Storybook
```

**Build outputs:**

| Arquivo | Formato | Para quem |
|---|---|---|
| `dist/index.mjs` | ESM | Bundlers modernos (Vite, Next.js) |
| `dist/index.js` | CJS | Node.js, Jest |
| `dist/index.d.ts` | TypeScript | Type checking |

---

## 🛠️ Desenvolvimento local

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/sarin-ds
cd sarin-ds

# Instalar dependências
pnpm install
pnpm approve-builds

# Rodar o Storybook
pnpm --filter @sarin-ds/ui storybook

# Build do pacote
pnpm --filter @sarin-ds/ui build
```

---

## 📐 Padrões do projeto

**Componentes seguem 4 regras:**

1. **Zero lógica de negócio** — props genéricas, sem contexto de app
2. **Zero valores hardcoded** — tudo via tokens
3. **TypeScript strict** — interfaces exportadas, sem `any`
4. **Acessibilidade** — `aria-label`, `role` e navegação por teclado

**Padrão de exportação:**

```ts
// Sempre exportar componente + tipos separadamente
export { Button } from './Button'
export type { ButtonProps } from './Button'
```

---

## 🗺️ Roadmap

- [x] Setup do monorepo (pnpm workspaces + tsup)
- [x] Design tokens dark-first
- [x] Componentes primitivos (Button, Loader, Card, Tabs, List)
- [x] Componentes de feedback (Empty, Result, Descriptions)
- [ ] Overlays (Modal, Drawer, ImagePreview)
- [ ] Utilitários (RenderWithFallbacks, Switch)
- [ ] Sistema de formulários completo
- [ ] DataTable
- [ ] Changesets + publicação no NPM
- [ ] Testes com Vitest

---

## 🧠 Stack técnica

| Tecnologia | Versão | Função |
|---|---|---|
| React | 18 | UI |
| TypeScript | 5 | Tipagem |
| Chakra UI | 3 | Base de componentes |
| Tailwind CSS | 3 | Utilitários |
| tsup | 8 | Build (ESM + CJS + DTS) |
| Storybook | 10 | Documentação |
| pnpm workspaces | — | Monorepo |
| Changesets | — | Versionamento (em breve) |

---

## 📄 Licença

MIT © [Vitor Ramos](https://github.com/seu-usuario)

---

<div align="center">

Feito com 🖤 por quem cansou de reescrever os mesmos componentes

**[⬆ voltar ao topo](#)**

</div>
