/* Convite Ágatha Luiza — edição de textos, links e áreas clicáveis.
   Após ajustar pelo ?editor=1, use "Copiar código" e atualize os campos
   hotspots, pix.posicao e botoesVoltar deste arquivo para publicar a posição. */
window.CONFIG = {
  nome: "Ágatha Luiza",

  whatsapp: {
    numero: "5516993897098",
    mensagem: "Olá! Gostaria de confirmar minha presença nos 15 anos da Ágatha Luiza, no dia 22/05/2027."
  },

  mapa: "https://www.google.com/maps/place/Morada+do+Sol+Country+House+Franca+SP/@-20.5372104,-47.4715663,17z/data=!3m1!4b1!4m6!3m5!1s0x94ba0849d46b775f:0xca3425e9b7d01a34!8m2!3d-20.5372104!4d-47.4689914!16s%2Fg%2F11g697pqyb?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D",

  // Abertura animada em MP4/H.264. O áudio do vídeo fica mudo para tocar somente a trilha musica.mp3.
  telas: {
    video: true,
    whatsapp: true,
    localizacao: true,
    presentes: false,
    dresscode: true,
    manual: true,
    contagem: false
  },

  // Chave Pix por celular (somente dígitos, DDD 16; NÃO é código QR/Pix copia e cola).
  // A área do botão fica sobre "COPIAR CHAVE PIX" NA PÁGINA PRINCIPAL.
  pix: {
    ativo: true,
    chave: "16994387467",
    titular: "Josiana Alves Cabral", // referência administrativa (texto já está na arte)
    posicao: { left:25.0, top:77.0, width:50.0, height:4.3 }
  },

  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  tema: {
    cor: "#071635",
    corBotaoVoltar: "transparent",
    corTextoBotaoVoltar: "transparent"
  },

  // Os próprios botões de VOLTAR estão desenhados nas imagens.
  // mostrarTexto:false mantém apenas o clique invisível sobre a arte.
  botoesVoltar: {
    dresscode: { mostrarTexto:false, posicao:{left:18.5,top:85.5,width:63.0,height:8.0} },
    manual: { mostrarTexto:false, posicao:{left:18.5,top:85.5,width:63.0,height:8.0} }
  },

  // Áreas em % da arte de 941x1672 px, preliminarmente alinhadas com as imagens.
  // Ajustáveis no navegador por ?editor=1 e exportáveis para este arquivo.
  hotspots: {
    confirm: { left:22.5, top:33.4, width:24.0, height:11.6 },
    map:     { left:53.0, top:33.4, width:24.0, height:11.6 },
    manual:  { left:22.5, top:46.0, width:24.0, height:11.8 },
    dress:   { left:53.0, top:46.0, width:24.0, height:11.8 }
  },

  contagem: {
    dataEvento: "2027-05-22T21:00:00",
    textoFinal: "A festa começou!",
    corNumero: "#f9d897",
    corLegenda: "#ffffff",
    posicao: { left:22, top:51, width:56, height:6 }
  },

  // Música ORIGINAL, exatamente o arquivo musica.mp3 do ZIP de Maria Helena.
  musica: { volume:0.30 }
};
