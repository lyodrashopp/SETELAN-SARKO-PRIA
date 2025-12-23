class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #003366;
          color: white;
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .footer-column h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .footer-column h3:after {
          content: '';
          display: block;
          width: 40px;
          height: 3px;
          background: #ff6b6b;
          margin-top: 0.5rem;
        }
        
        .footer-column ul {
          list-style: none;
        }
        
        .footer-column li {
          margin-bottom: 0.75rem;
        }
        
        .footer-column a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-column a:hover {
          color: white;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background: #ff6b6b;
          transform: translateY(-3px);
        }
        
        .copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
      </style>
      
      <footer class="footer-container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3>STELAN SARKO</h3>
            <p>Solusi lengkap untuk penampilan elegan dan berwibawa dalam setiap momen ibadah.</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <i data-feather="facebook"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="twitter"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-column">
            <h3>Produk</h3>
            <ul>
              <li><a href="#">Setelan Koko Lengan Panjang</a></li>
              <li><a href="#">Setelan Koko Lengan Pendek</a></li>
              <li><a href="#">Sarung Premium</a></li>
              <li><a href="#">Aksesoris Hijab</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Layanan</h3>
            <ul>
              <li><a href="#">Cara Pemesanan</a></li>
              <li><a href="#">Pengiriman</a></li>
              <li><a href="#">Pengembalian</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Hubungi Kami</h3>
            <ul>
              <li>+62 812 3456 7890</li>
              <li>info@setelansarko.com</li>
              <li>Jl. Fashion No. 123, Jakarta</li>
            </ul>
          </div>
        </div>
        
        <div class="copyright">
          &copy; 2023 STELAN SARKO. All rights reserved.
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
