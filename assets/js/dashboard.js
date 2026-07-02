document.addEventListener('DOMContentLoaded', () => {
  // 1. Detect environment and determine paths
  const pathname = window.location.pathname;
  const isSubDir = pathname.includes('/html/') || pathname.endsWith('catalogo.html') || pathname.endsWith('vende.html') || pathname.endsWith('producto.html');
  
  // Determine relative links dynamically
  const homeLink = isSubDir ? '../index.html' : 'index.html';
  const catalogoLink = isSubDir ? 'catalogo.html' : 'html/catalogo.html';
  const vendeLink = isSubDir ? 'vende.html' : 'html/vende.html';
  const logoLink = isSubDir ? '../assets/image/logo.jpg' : 'assets/image/logo.jpg';
  const ubicacionLink = isSubDir ? '../index.html#ubicacion' : '#ubicacion';

  // 2. Identify active tab
  let activeTab = '';
  if (pathname.includes('catalogo.html') || pathname.includes('producto.html')) {
    activeTab = 'catalogo';
  } else if (pathname.includes('vende.html')) {
    activeTab = 'vende';
  } else if (pathname.endsWith('index.html') || pathname.endsWith('/') || !pathname.includes('.html')) {
    activeTab = 'inicio';
  }

  // 3. Create elements for insertion
  const dashboardContainer = document.createElement('div');
  dashboardContainer.id = 'mobile-nav-dashboard-container';
  
  const navHtml = `
    <!-- Mobile Bottom Navigation Bar -->
    <div class="mobile-bottom-nav">
      <a href="${homeLink}" class="bottom-nav-item ${activeTab === 'inicio' ? 'bottom-nav-item--active' : ''}">
        <svg class="bottom-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="bottom-nav-label">Inicio</span>
      </a>
      
      <a href="${catalogoLink}" class="bottom-nav-item ${activeTab === 'catalogo' ? 'bottom-nav-item--active' : ''}">
        <svg class="bottom-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <span class="bottom-nav-label">Catálogo</span>
      </a>
      
      <a href="${vendeLink}" class="bottom-nav-item ${activeTab === 'vende' ? 'bottom-nav-item--active' : ''}">
        <svg class="bottom-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>
        <span class="bottom-nav-label">Vender</span>
      </a>
    </div>

    <!-- Mobile Slide-up Dashboard Panel -->
    <div class="mobile-dashboard" id="mobile-dashboard">
      <div class="mobile-dashboard-overlay" id="mobile-dashboard-overlay"></div>
      <div class="mobile-dashboard-content">
        <div class="mobile-dashboard-header">
          <div class="logo" style="display: flex; align-items: center; gap: 8px;">
            <img src="${logoLink}" alt="Motos con Jhonny Logo"
              style="height: 32px; width: 32px; border-radius: 50%; object-fit: cover; border: 1px solid var(--accent);">
            <span style="font-family: var(--display); font-size: 1.1rem; letter-spacing: 0.04em;">DASHBOARD</span>
          </div>
          <button type="button" class="mobile-dashboard-close" id="mobile-dashboard-close" aria-label="Cerrar menú">&times;</button>
        </div>
        
        <div class="mobile-dashboard-body">
          <!-- Search Bar -->
          <div class="dashboard-search-box">
            <form action="${catalogoLink}" method="GET" class="dashboard-search-form">
              <input type="text" name="q" placeholder="Buscar marca, modelo..." class="dashboard-search-input" required>
              <button type="submit" class="dashboard-search-btn" aria-label="Buscar">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
          </div>

          <!-- Shortcuts Tiles -->
          <div class="dashboard-grid">
            <a href="${homeLink}" class="dashboard-tile">
              <span class="dashboard-tile-icon">🏠</span>
              <span class="dashboard-tile-label">Inicio</span>
            </a>
            <a href="${catalogoLink}" class="dashboard-tile">
              <span class="dashboard-tile-icon">🏍️</span>
              <span class="dashboard-tile-label">Ver Catálogo</span>
            </a>
            <a href="${vendeLink}" class="dashboard-tile">
              <span class="dashboard-tile-icon">💰</span>
              <span class="dashboard-tile-label">Vender Moto</span>
            </a>
            <a href="${ubicacionLink}" class="dashboard-tile" id="dashboard-tile-ubicacion">
              <span class="dashboard-tile-icon">📍</span>
              <span class="dashboard-tile-label">Tienda Física</span>
            </a>
          </div>

          <!-- Quick Contacts Section -->
          <div class="dashboard-contacts">
            <h4 class="dashboard-section-title">Contacto Rápido con Jhonny</h4>
            <a href="https://wa.me/573238017635?text=Hola!%20Estoy%20interesado(a)%20en%20los%20servicios%20de%20Motos%20con%20Jhonny." 
              target="_blank" rel="noopener" class="dashboard-contact-btn dashboard-contact-btn--whatsapp">
              <svg viewBox="0 0 32 32" class="btn-icon-svg" style="width: 20px; height: 20px;">
                <path d="M16.04 3.2A12.7 12.7 0 0 0 5.1 22.35L3.5 28.8l6.62-1.55A12.7 12.7 0 1 0 16.04 3.2Zm0 2.55a10.15 10.15 0 0 1 8.62 15.52 10.15 10.15 0 0 1-13.74 3.48l-.47-.27-3.28.77.8-3.19-.3-.5a10.15 10.15 0 0 1 8.37-15.81Z" fill="currentColor"/>
              </svg>
              Chat de WhatsApp
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Transversal%2035%20%2322-76%20Sur%2C%20Bogot%C3%A1%2C%20Colombia" 
              target="_blank" rel="noopener" class="dashboard-contact-btn dashboard-contact-btn--maps">
              <svg viewBox="0 0 24 24" class="btn-icon-svg" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                <path d="M12 21s7-7.2 7-11a7 7 0 1 0-14 0c0 3.8 7 11 7 11z"/><circle cx="12" cy="10" r="3"/></svg>
              Abrir Mapa de Google
            </a>
            <a href="tel:+573238017635" class="dashboard-contact-btn dashboard-contact-btn--phone">
              <svg viewBox="0 0 24 24" class="btn-icon-svg" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Llamada Telefónica
            </a>
          </div>

          <!-- Business Info -->
          <div class="dashboard-info">
            <h4 class="dashboard-section-title">Nuestra Tienda</h4>
            <p><strong>Dirección:</strong> Transversal 35 # 22-76 Sur, Bogotá</p>
            <p><strong>Horarios:</strong> Lun - Sáb: 9:00 AM - 6:00 PM</p>
            <p>Domingos y Festivos: Con cita previa</p>
          </div>

          <!-- Social Networks Section -->
          <div class="dashboard-socials">
            <p class="dashboard-socials-title">Síguenos en Redes</p>
            <div class="dashboard-socials-links">
              <a href="https://www.tiktok.com/@jonatancerquera" target="_blank" rel="noopener" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="22" height="22"><path d="M16.6 3c.35 2.2 1.55 3.57 3.4 4.18v3.02a7.14 7.14 0 0 1-3.36-.88v5.94c0 3.32-2.2 5.74-5.56 5.74-3.08 0-5.08-1.9-5.08-4.72 0-2.96 2.22-5.04 5.32-5.04.34 0 .66.03.98.1v3.08a3.13 3.13 0 0 0-.98-.15c-1.38 0-2.28.78-2.28 1.98 0 1.1.8 1.84 1.98 1.84 1.42 0 2.24-.88 2.24-2.46V3h3.34Z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.facebook.com/Motos.con.Jhonny" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="22" height="22"><path d="M14.1 8.6V6.9c0-.82.4-1.28 1.36-1.28h1.5V3.1A20.13 20.13 0 0 0 14.78 3c-2.18 0-3.68 1.33-3.68 3.78V8.6H8.62v2.82h2.48V21h3v-9.58h2.52l.4-2.82H14.1Z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.instagram.com/motos_con_jhonny/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2.8A2.2 2.2 0 0 0 5.8 8v8A2.2 2.2 0 0 0 8 18.2h8a2.2 2.2 0 0 0 2.2-2.2V8A2.2 2.2 0 0 0 16 5.8H8Zm4 3.1A3.1 3.1 0 1 1 8.9 12 3.1 3.1 0 0 1 12 8.9Zm0 2.1a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm3.8-2.55a.75.75 0 1 1 .75.75.75.75 0 0 1-.75-.75Z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  dashboardContainer.innerHTML = navHtml;
  document.body.appendChild(dashboardContainer);

  // 4. Toggle Dashboard functionality
  const dashboard = document.getElementById('mobile-dashboard');
  const closeBtn = document.getElementById('mobile-dashboard-close');
  const overlay = document.getElementById('mobile-dashboard-overlay');
  const body = document.body;

  function openDashboard() {
    dashboard.classList.add('mobile-dashboard--open');
    body.classList.add('mobile-dashboard-active-body');
  }

  function closeDashboard() {
    dashboard.classList.remove('mobile-dashboard--open');
    body.classList.remove('mobile-dashboard-active-body');
  }

  // Inject header hamburger button toggle
  const topbarInner = document.querySelector('.topbar__inner');
  if (topbarInner) {
    const headerToggle = document.createElement('button');
    headerToggle.type = 'button';
    headerToggle.id = 'mobile-dashboard-toggle-header';
    headerToggle.className = 'topbar-menu-toggle';
    headerToggle.setAttribute('aria-label', 'Abrir Menú Dashboard');
    headerToggle.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
    topbarInner.appendChild(headerToggle);
    headerToggle.addEventListener('click', openDashboard);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDashboard);
  if (overlay) overlay.addEventListener('click', closeDashboard);

  // Special handling for the shop location shortcut link
  const shopLocationTile = document.getElementById('dashboard-tile-ubicacion');
  if (shopLocationTile) {
    shopLocationTile.addEventListener('click', (e) => {
      // If we are on index.html, we close dashboard and scroll smoothly to #ubicacion
      if (!isSubDir) {
        closeDashboard();
      }
    });
  }
});
