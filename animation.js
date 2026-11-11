const efeitoBackground = document.querySelector('.background-effect');

// Função para criar partículas
function criarParticulas(x, y) {
  
  // Criar 8 partículas
  for (let i = 0; i < 15; i++) {
    // Criar elemento de partícula
    const particula = document.createElement('div');
    particula.classList.add('particula');

    // Definir posição aleatória em torno do quadradinho
    particula.style.left = x + '%';
    particula.style.top = y + '%';

    // Definir direção aleatória para a animação
    const direcaoX = (Math.random() - 0.5) * 150; // Direção aleatória no eixo X
    const direcaoY = (Math.random() - 0.5) * 150; // Direção aleatória no eixo Y
    
    // Definir propriedades CSS para animação
    particula.style.setProperty('--x', direcaoX + 'px');
    particula.style.setProperty('--y', direcaoY + 'px');

    // Adicionar animação de movimento aleatório
    efeitoBackground.appendChild(particula);

    particula.addEventListener('animationend', () => {
      particula.remove(); // Remover partícula após a animação
    });
  }
}

// Função para criar quadradinhos e vovós
function createQuadradinho() {

// Criar quadradinho
 const quadradinho = document.createElement('div');
  quadradinho.classList.add('quadradinhos');

// Criar vovó
 const vovo = document.createElement('div');
 const vovos = ["👵", "👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿"];
  vovo.textContent = vovos[Math.floor(Math.random() * vovos.length)];
   vovo.classList.add('vovo');

// Definir posição aleatória
const x = Math.random() * 100;
const y = Math.random() * 100;

quadradinho.style.left = x + '%'; 
quadradinho.style.top = y + '%';

vovo.style.left = x + '%'; 
vovo.style.top = y + '%';

// Adicionar quadradinho e vovó ao efeito background
efeitoBackground.appendChild(quadradinho);
efeitoBackground.appendChild(vovo);

// Remover quadradinho após a animação e mostrar vovó
quadradinho.addEventListener('animationend', () => {
  criarParticulas(x, y); // Criar partículas na posição do quadradinho

  quadradinho.remove();
  vovo.style.display = 'block'; // Mostrar vovó após a animação do quadradinho
 });

 // Remover vovó após a animação
 vovo.addEventListener('animationend', () => {
  vovo.remove();
 });

}

setInterval(createQuadradinho, 500);