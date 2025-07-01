export default {
  name: "ScrollToBottom",
  author: "ChatGPT",
  version: "1.0.0",
  description: "Botón para bajar al último mensaje del chat",

  async onEnable() {
    // Evitar duplicados
    if (document.getElementById('scrollBottomBtn')) return;

    // Crear botón
    const btn = document.createElement('button');
    btn.id = 'scrollBottomBtn';
    btn.innerText = '⬇️';

    // Acción al tocar
    btn.addEventListener('click', () => {
      const chat =
        document.querySelector('.mes_wrap') ||
        document.querySelector('.chat-scroll') ||
        document.querySelector('#chat');
      if (chat) {
        chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    });

    // Agregar al DOM
    document.body.appendChild(btn);
  },

  async onDisable() {
    const btn = document.getElementById('scrollBottomBtn');
    if (btn) btn.remove();
  }
};
