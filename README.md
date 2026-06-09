# KAREN AI

Assistente de IA pessoal em HTML puro — chat, memórias, geração de imagens e WhatsApp.

## Funcionalidades

- Chat com IA via [Puter.js](https://puter.com) (GPT-5.4 Nano e outros modelos)
- Memória local no navegador
- Geração de imagens automática (`gere uma imagem de...`)
- Envio de respostas por WhatsApp (CallMeBot)
- Voz (TTS do navegador)
- Dashboard e histórico de conversas

## Uso local

```bash
npx serve .
```

Abra `http://localhost:3000` no navegador.

## Ativação (1 vez)

1. Acesse [puter.com/dashboard#account](https://puter.com/dashboard#account)
2. Copie o **Auth Token**
3. Cole em **Configurações** na KAREN

## GitHub Pages

1. Neste repositório: **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / pasta **/ (root)**
4. Salve — o site ficará em `https://abarakus11.github.io/karenia/`

## WhatsApp (opcional)

Em **Configurações**, configure telefone e API Key do [CallMeBot](https://www.callmebot.com/blog/free-api-whatsapp-messages/).

## Estrutura

```
karenia/
├── index.html          # App completo
├── assets/
│   └── karen-avatar.png
└── README.md
```

## Deploy automático

Alterações em `karen-ai.html` (raiz do workspace) são sincronizadas e enviadas ao GitHub automaticamente via:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/sync-and-deploy-karenia.ps1
```

Hooks do Cursor (`stop` e `afterFileEdit`) disparam o deploy após cada edição.

## Licença

Uso pessoal — projeto open source.
