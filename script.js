// Injeção Automática de Efeito Ripple (Onda de clique) em todos os botões Sentry
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Ignora se o botão já estiver desativado
        if(this.classList.contains('disabled')) return;

        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        
        let ripple = document.createElement('span');
        ripple.classList.add('sentry-ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => { ripple.remove(); }, 600);
    });
});

// Ação: Login Principal
function handleLogin(element) {
    const originalText = element.innerHTML;
    element.style.pointerEvents = 'none';
    element.innerHTML = `<span class="btn-text">CONECTANDO AO PROTOCÓLO...</span>`;
    element.style.opacity = '0.8';
    
    setTimeout(() => {
        element.innerHTML = `<span class="btn-text">ACESSO AUTORIZADO</span>`;
        element.style.borderColor = '#00FF66';
        element.style.backgroundColor = '#00FF66';
        element.style.boxShadow = '0 0 25px rgba(0, 255, 102, 0.4)';
    }, 1500);
}

// Ação: Provedores Sociais
function handleSocialLogin(element) {
    const provider = element.getAttribute('data-provider');
    console.log(`Iniciando handshake seguro com: ${provider}`);
    element.style.borderColor = 'var(--neon-blue)';
}

// Ação: Alternância de Abas (Menu/Dashboard)
function switchTab(element) {
    const container = element.parentElement;
    container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    
    const targetTab = element.getAttribute('data-tab');
    console.log(`Renderizando Viewport: ${targetTab}`);
}

// Ação: Seleção de Cards de Emoção
function selectEmotion(element) {
    const isSelected = element.classList.contains('selected');
    
    // Remove seleção dos irmãos se necessário (comportamento de Radio)
    document.querySelectorAll('.emotion-card').forEach(card => card.classList.remove('selected'));
    
    if(!isSelected) {
        element.classList.add('selected');
        console.log(`Estado mental alterado para: ${element.getAttribute('data-emotion')}`);
    }
}