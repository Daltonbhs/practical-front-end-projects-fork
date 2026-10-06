const efeitoBackground = document.querySelector('.background-effect');

function criarParticulas(x, y) {
  
  for (let i = 0; i < 15; i++) {
    const particula = document.createElement('div');
    particula.classList.add('particula');

    particula.style.left = x + '%';
    particula.style.top = y + '%';

    const direcaoX = (Math.random() - 0.5) * 150; 
    const direcaoY = (Math.random() - 0.5) * 150; 
    
    particula.style.setProperty('--x', direcaoX + 'px');
    particula.style.setProperty('--y', direcaoY + 'px');

    efeitoBackground.appendChild(particula);

    particula.addEventListener('animationend', () => {
      particula.remove(); 
    });
  }
}

function createQuadradinho() {

 const quadradinho = document.createElement('div');
  quadradinho.classList.add('quadradinhos');

 const xis_bolinha = document.createElement('div');
 xis_bolinha.textContent = xis_bolinha[Math.floor(Math.random() * xis_bolinha.length)];
 xis_bolinha.classList.add('xis_bolinhas');

const x = Math.random() * 100;
const y = Math.random() * 100;

quadradinho.style.left = x + '%'; 
quadradinho.style.top = y + '%';

xis_bolinha.style.left = x + '%'; 
xis_bolinha.style.top = y + '%';

efeitoBackground.appendChild(quadradinho);
efeitoBackground.appendChild(xis_bolinha);

quadradinho.addEventListener('animationend', () => {
  criarParticulas(x, y);

  quadradinho.remove();
  xis_bolinha.style.display = 'block';
 });

 xis_bolinha.addEventListener('animationend', () => {
  xis_bolinha.remove();
 });

}

setInterval(createQuadradinho, 500);