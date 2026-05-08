const baseQuestions = [
  { 
    q: "Como se classificam as mídias quanto à sua natureza temporal?", 
    o: ["Analógicas e Digitais", "Estáticas e Dinâmicas", "Lineares e Não-lineares", "Capturadas e Sintetizadas"], 
    a: 1, hint: "Mídias estáticas vs dinâmicas.",
    r: "Estáticas (não variam no tempo: texto/imagem) e Dinâmicas (variam no tempo: áudio/vídeo)."
  },
  { 
    q: "Qual destas é uma característica exclusiva de mídias dinâmicas?", 
    o: ["Podem ser digitalizadas", "Dependência cronológica para interpretação", "Ocupam pouco espaço", "São vetoriais"], 
    a: 1, hint: "O tempo é essencial?",
    r: "Mídias dinâmicas exigem uma reprodução contínua no tempo para manter o significado."
  },
  { 
    q: "Imagens vetoriais e bitmaps são exemplos de qual tipo de mídia?", 
    o: ["Dinâmica", "Sintetizada", "Estática (ou Discreta)", "Áudio"], 
    a: 2, hint: "A imagem muda sozinha com o tempo?",
    r: "São estáticas pois a informação é independente do tempo de visualização."
  },
  { 
    q: "O que define uma mídia como 'Sintetizada'?", 
    o: ["Capturada do mundo real", "Mídia comprimida", "Gerada por computador via algoritmos", "Texto impresso"], 
    a: 2, hint: "CGI ou Foto?",
    r: "Mídias sintetizadas são criadas pelo sistema (ex: animações 3D ou MIDI)."
  },
  { 
    q: "No contexto de áudio digital, a Amostragem (Sampling) consiste em:", 
    o: ["Aumentar o volume", "Remover ruído", "Recolher valores em intervalos de tempo discretos", "Converter áudio em JPG"], 
    a: 2, hint: "Discretização do tempo.",
    r: "É o processo de capturar fatias do sinal analógico em intervalos regulares."
  },
  { 
    q: "O que caracteriza a multimédia não-linear?", 
    o: ["Vídeo sem som", "O utilizador controla o fluxo (interatividade)", "Sequência fixa", "Texto em papel"], 
    a: 1, hint: "Navegação vs Cinema.",
    r: "Permite que o utilizador escolha o seu caminho, como num website (hipermédia)."
  },
  { 
    q: "A Profundidade de Cor (Bit Depth) caracteriza:", 
    o: ["Tamanho físico", "Número de cores representáveis por píxel", "Velocidade de rede", "Brilho"], 
    a: 1, hint: "Bits por píxel.",
    r: "Define a precisão cromática: quanto mais bits, mais tons de cores disponíveis."
  },
  { 
    q: "Qual o principal objetivo da Compressão de dados?", 
    o: ["Melhorar qualidade", "Aumentar brilho", "Reduzir armazenamento e largura de banda", "Aumentar o tempo"], 
    a: 2, hint: "Espaço em disco.",
    r: "Reduzir a redundância para facilitar a transmissão e armazenamento de ficheiros."
  },
  { 
    q: "O termo 'Hipermédia' refere-se a:", 
    o: ["Texto rápido", "Integração de mídias através de links interativos", "Redes locais", "Apenas vídeo"], 
    a: 1, hint: "Links em imagens e vídeos.",
    r: "É a extensão do hipertexto para todos os tipos de mídia."
  },
  { 
    q: "Um sinal digital é caracterizado por ser:", 
    o: ["Contínuo", "Discreto no tempo e amplitude", "Apenas som", "Infinito"], 
    a: 1, hint: "Valores binários.",
    r: "Ao contrário do analógico, o digital trabalha com valores finitos e isolados."
  },
  { 
    q: "Gráficos Vetoriais são ideais para:", 
    o: ["Fotos complexas", "Logótipos (permitem zoom sem perda)", "Captura de vídeo", "Gravação sonora"], 
    a: 1, hint: "Escalabilidade.",
    r: "Por usarem fórmulas matemáticas, não pixelizam ao serem ampliados."
  },
  { 
    q: "A Quantização é o processo de:", 
    o: ["Cortar tempo", "Converter amplitude em níveis digitais", "Mudar formato", "Capturar luz"], 
    a: 1, hint: "Eixo vertical da onda.",
    r: "Atribui valores binários finitos à amplitude de cada amostra recolhida."
  },
  { 
    q: "Mídias do tipo 'Texto' são:", 
    o: ["Dinâmicas", "Estáticas e Capturadas", "Estáticas e Sintetizadas", "Analógicas"], 
    a: 2, hint: "Letras no ecrã.",
    r: "O texto é estático (natureza temporal) e sintetizado (gerado por códigos como ASCII)."
  },
  { 
    q: "O vídeo digital é uma sucessão de:", 
    o: ["Ondas sonoras", "Frames (imagens estáticas) rápidas", "Ficheiros TXT", "Sinais analógicos"], 
    a: 1, hint: "FPS - Frames Per Second.",
    r: "A ilusão de movimento é criada pela exibição rápida de quadros estáticos sequenciais."
  },
  { 
    q: "O formato PNG é conhecido por compressão:", 
    o: ["Lossy", "Analógica", "Lossless (Sem perdas)", "Temporal"], 
    a: 2, hint: "Qualidade perfeita.",
    r: "PNG mantém 100% da informação original, sendo ideal para gráficos e transparências."
  }
];

let quiz = [], questionIndex = 0, score = 0;

// TROCA DE ABAS
function switchTab(tabId) {
  document.getElementById('quiz-tab').classList.add('d-none');
  document.getElementById('learn-tab').classList.add('d-none');
  document.getElementById(tabId).classList.remove('d-none');
  
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(tabId === 'quiz-tab' ? 'btn-quiz' : 'btn-learn').classList.add('active');
}

function goHome(){
  document.getElementById("quizContainer").classList.add("d-none");
  document.getElementById("resultContainer").classList.add("d-none");
  document.getElementById("setupContainer").classList.remove("d-none");

  questionIndex = 0;
  score = 0;

  switchTab('quiz-tab');
}



function startQuiz(amount) {
  score = 0; questionIndex = 0;
  const max = Math.min(amount, baseQuestions.length);
  quiz = [...baseQuestions].sort(() => Math.random() - 0.5).slice(0, max);

  document.getElementById("setupContainer").classList.add("d-none");
  document.getElementById("resultContainer").classList.add("d-none");
  document.getElementById("quizContainer").classList.remove("d-none");
  loadQuestion();
  document.getElementById("quizContainer").classList.add("swipe-in");

setTimeout(()=>{
  document.getElementById("quizContainer").classList.remove("swipe-in");
},300);
}

function loadQuestion() {
  const q = quiz[questionIndex];
  const opts = document.getElementById("options");
  document.getElementById("nextAction").classList.add("d-none");
  const oldF = document.getElementById("feedbackArea"); if(oldF) oldF.remove();

  document.getElementById("questionText").innerText = q.q;
  document.getElementById("questionCounter").innerText = `Questão ${questionIndex + 1}/${quiz.length}`;
  document.getElementById("progressBar").style.width = `${(questionIndex / quiz.length) * 100}%`;
  
  opts.innerHTML = "";
  q.o.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn yellow btn-outline-dark';
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i, btn);
    opts.appendChild(btn);
  });

  document.getElementById("quizContainer").classList.remove("question-enter");
void document.getElementById("quizContainer").offsetWidth; // força reflow
document.getElementById("quizContainer").classList.add("question-enter");
}



function checkAnswer(i, btn) {
  btn.classList.add("option-pop");
  const q = quiz[questionIndex];
  const buttons = document.getElementById("options").getElementsByTagName('button');
  for (let b of buttons) b.disabled = true;

  if (i === q.a) {
    // btn.classList.remove('yellow');
    score++; btn.classList.add('correct');
    document.getElementById('correctSound').play().catch(()=>{});
  } else {
    // btn.classList.remove('yellow');
    btn.classList.add('wrong');
    buttons[q.a].classList.add('correct');
    document.getElementById('wrongSound').play().catch(()=>{});
  }

  const f = document.createElement('div');
  f.id = "feedbackArea";
  f.className = `mt-3 p-3 rounded alert ${i === q.a ? 'alert-success' : 'alert-danger'} animate-fade`;
  f.innerHTML = `<strong>${i === q.a ? 'Correto!' : 'Incorreto.'}</strong><br><small>${q.r}</small>`;
  document.getElementById("quizContainer").appendChild(f);
  document.getElementById("nextAction").classList.remove("d-none");
}

function nextQuestion() {
  const container = document.getElementById("quizContainer");

  // anima saída
  container.classList.add("swipe-out");

  setTimeout(() => {
    questionIndex++;

    if (questionIndex >= quiz.length) {
      container.classList.remove("swipe-out");

      document.getElementById("quizContainer").classList.add("d-none");
      document.getElementById("resultContainer").classList.remove("d-none");

      const p = Math.round((score / quiz.length) * 100);
      const d = document.getElementById("scoreDisplay");

      d.innerText = `${p}%`;
      d.className = `display-1 fw-bold mb-3 ${
        p >= 70 ? 'text-success' : p >= 50 ? 'text-warning' : 'text-danger'
      }`;

      document.getElementById("scoreText").innerText =
        `Acertou ${score} de ${quiz.length} questões.`;

      return;
    }

    loadQuestion();

    // reset + entrada
    container.classList.remove("swipe-out");
    container.classList.add("swipe-in");

    setTimeout(()=>{
      container.classList.remove("swipe-in");
    },300);

  }, 250);
}

function showHint() { alert("Dica: " + quiz[questionIndex].hint); }