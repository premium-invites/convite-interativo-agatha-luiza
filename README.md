# Convite interativo — Ágatha Luiza (15 anos)

Versão adaptada do convite premium para **22/05/2027 às 21h**, em Morada do Sol Country House (Franca/SP).

## Nome do repositório e conteúdo

Use o nome **`convite-interativo-agatha-luiza`** no GitHub. Suba o CONTEÚDO desta pasta na raiz do repositório (não coloque uma pasta adicional em volta).

```text
convite-interativo-agatha-luiza/
├── index.html
├── config.js
├── README.md
└── assets/
    ├── opening.webp          # imagem inicial: primeiro quadro da animação
    ├── video.mp4             # vídeo opening, cerca de 10 s, H.264 (ampla compatibilidade)
    ├── principal.webp        # página principal: 4 botões + Pix
    ├── manual.webp           # manual do convidado
    ├── dresscode.webp        # dress code
    ├── preview-whatsapp.jpg  # prévia para WhatsApp 1200×630
    └── musica.mp3            # MESMA música do ZIP original
```

O novo vídeo já está **incluído e ativo** (`telas.video: true` no `config.js`). A imagem estática da primeira tela foi substituída por um quadro do próprio vídeo. Ao tocar, o vídeo abre, termina em aproximadamente 10 segundos e passa para a página principal. É possível pular a animação pelo botão **Pular vídeo**.

A música é a do convite anterior, mantida sem alterações em `assets/musica.mp3`. O áudio embutido no MP4 foi preservado no arquivo, mas o player **o reproduz em mudo** para evitar conflito com a música original, que toca continuamente.

## Botões e Pix

Na página principal existem **apenas 4 botões de navegação** (Confirmar presença, Localização, Manual do Convidado e Dress Code), mais a área clicável de **COPIAR CHAVE PIX** dentro do card de recepção por adesão. Não existe tela de presentes. A cópia do Pix está desacoplada de `presentes` e funciona na tela principal.

- WhatsApp de presença: `5516993897098` (abre mensagem preenchida; o convidado precisa enviá-la).
- Pix (celular): `16994387467`, titular Josiana Alves Cabral. **Copia a chave de telefone**, não um código BR Code/Pix copia e cola.
- Mapa: link do Google Maps da Morada do Sol Country House, em Franca/SP, configurado em `config.js`.

## Ajustar visualmente as áreas clicáveis

1. Abra `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/?editor=1`.
2. Escolha uma área no menu: `WhatsApp`, `Localização`, `Manual do Convidado`, `Dress Code`, `PIX (copiar chave)`, `Voltar — Dress Code`, ou `Voltar — Manual do Convidado`.
3. Arraste a área e redimensione pelo ponto no canto. Valores são porcentagens da arte.
4. Clique em **Salvar neste navegador** para testar no dispositivo. Isso **não publica** a posição.
5. Clique em **Copiar código**; no `config.js`, substitua os blocos `hotspots`, `pix` e `botoesVoltar` pelo código exportado (sem duplicar essas propriedades). Envie o `config.js` ao GitHub.

As posições iniciais foram estimadas visualmente a partir das quatro artes enviadas; teste os cliques no celular antes de compartilhar.

## GitHub Pages e prévia no WhatsApp — obrigatório conferir

A hipótese de URL usada nas tags de prévia do `index.html` é:

`https://convitepremium.github.io/convite-interativo-agatha-luiza/`

**Confirme se seu usuário GitHub é `convitepremium`.** O repositório definido é `convite-interativo-agatha-luiza`. Se a URL definitiva for diferente, atualize *as 4 tags*: `og:url`, `og:image`, `og:image:secure_url` e `twitter:image` no `<head>` do `index.html`. A imagem está em `assets/preview-whatsapp.jpg` e tem 1200x630. Um URL errado pode impedir o WhatsApp de exibir a capa. A publicação em GitHub Pages precisa usar a raiz do projeto e habilitar a publicação da branch apropriada.

## Checklist final

- [x] Artes principais renomeadas e otimizadas para WebP; JPG do WhatsApp preservado
- [x] Nome, data, WhatsApp, Maps e chave Pix configurados
- [x] Botão Pix na página principal com opção no editor
- [x] Apenas 4 botões de navegação, sem presentes
- [x] Vídeo novo incluído, convertido a H.264 e ativado; vídeo antigo removido
- [ ] Confirmar URL pública definitiva para as meta tags
- [ ] Testar áreas de clique e Pix no celular e conferir destinatário antes do pagamento
- [x] Música original mantida sem alterações

**Observação:** a arte mostra confirmação e pagamento até 30/03/2027. Essa informação está gravada na própria imagem, não no código.
