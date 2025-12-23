class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(0, 51, 102, 0.95);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        :host(.scrolled) {
          background: rgba(0, 51, 102, 0.98);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
        }
        
        .nav-links li {
          margin-left: 2rem;
        }
        
        .nav-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
          color: white;
        }
        
        .cta-button {
          background: #ff6b6b;
          color: white;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background: #ff5252;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      
      <nav class="navbar-container">
        <a href="/" class="logo">STELAN SARKO</a>
        
        <ul class="nav-links">
          <li><a href="/">Beranda</a></li>
          <li><a href="#produk">Produk</a></li>
          <li><a href="#testimoni">Testimoni</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
        
        <button class="cta-button" onclick="scrollToElement('order-section')">Pesan Sekarang</button>
        
        <button class="mobile-menu-button">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
