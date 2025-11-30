const images = [
  "https://abrosshoes.com/cdn/shop/files/WhiteMintArizona_0000_000A8391.jpg?v=1756296615&width=2048",
  "https://images-cdn.ubuy.co.in/63453fd2cf98dd02a0685562-lannsyne-vintage-genuine-leather.jpg",
  "https://m.media-amazon.com/images/I/61pIzNaNRWL._UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61m5H1fYccL._UF1000,1000_QL80_.jpg",
  "https://images-cdn.ubuy.co.in/67dbf026d34fdd1ebf6c1bd5-canon-eos-80d-dslr-camera-with-18-55mm.jpg",
  "https://m.media-amazon.com/images/I/61+NdX1qIdS._UF1000,1000_QL80_.jpg",
  "https://idee-eyewear.com/cdn/shop/files/IDS3155C1PSG_3.jpg?v=1729164793",
  "https://bergnerhome.in/cdn/shop/files/BGIN-6565-1.jpg?v=1736093998&width=2048",
  "https://m.media-amazon.com/images/I/61QPRxJk3dL.jpg",
  "https://m.media-amazon.com/images/I/51FNnHjzhQL._UF1000,1000_QL80_.jpg"
];

const products = [
  { id: 1, name: 'Running Shoes', price: 44, category: 'Footwear', desc: 'Quality shoes for your next run.', img: images[0], popular: 8 },
  { id: 2, name: 'Smart Watch', price: 68, category: 'Electronics', desc: 'Track your activities in style.', img: images[2], popular: 9 },
  { id: 3, name: 'Notebook', price: 6, category: 'Stationery', desc: 'Eco-friendly notes companion.', img: images[3], popular: 4 },
  { id: 4, name: 'Action Toy', price: 15, category: 'Toys', desc: 'Fun toy for all ages.', img: images[5], popular: 3 },
  { id: 5, name: 'Sport Goggles', price: 19, category: 'Accessories', desc: 'Protective and stylish.', img: images[6], popular: 5 },
  { id: 6, name: 'Steel Water Bottle', price: 12, category: 'Home', desc: 'Stay hydrated always.', img: images[7], popular: 6 },
  { id: 7, name: 'LED Desk Lamp', price: 22, category: 'Home', desc: 'Elegant lighting for work.', img: images[8], popular: 5 },
  { id: 8, name: 'Wireless Headphones', price: 53, category: 'Electronics', desc: 'Immersive sound quality.', img: images[9], popular: 8 },

  { id: 9, name: 'Gaming Keyboard', price: 47, category: 'Electronics', desc: 'RGB-backlit keyboard designed for gamers.', img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg', popular: 9 },

  { id: 10, name: 'Men’s Casual Jacket', price: 39, category: 'Fashion', desc: 'Stylish and comfortable all-weather jacket.', img: 'https://m.media-amazon.com/images/I/81PF4YKldaL._AC_UY1100_.jpg', popular: 6 },

  { id: 11, name: 'Bluetooth Speaker', price: 28, category: 'Electronics', desc: 'Portable speaker with deep bass and long battery life.', img: 'https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1_b3503890-50f6-4cd1-9138-0bd90874391e_1300x.png?v=1709717442', popular: 7 },

  { id: 12, name: 'Ceramic Mug Set', price: 18, category: 'Home', desc: 'Premium ceramic mugs for coffee or tea.', img: 'https://nestasia.in/cdn/shop/files/CupSet_9.jpg?v=1698756821', popular: 4 },

  { id: 13, name: 'Office Chair', price: 129, category: 'Home', desc: 'Ergonomic chair for long working hours.', img: 'https://m.media-amazon.com/images/I/61G1yLSO32L.AC_SX500.jpg', popular: 8 },

  { id: 14, name: 'Women’s Sling Bag', price: 29, category: 'Bags', desc: 'Compact and fashionable sling bag.', img: 'https://rukminim2.flixcart.com/image/480/640/xif0q/sling-bag/8/i/w/women-sling-bag-trendy-designer-sling-bag-for-women-1-5-woman-original-imahff5hetxdrutz.jpeg?q=90', popular: 5 },

  { id: 15, name: 'Sports Water Jug', price: 16, category: 'Home', desc: 'Large capacity water jug for workouts.', img: 'https://m.media-amazon.com/images/I/61LqdydGb+L._AC_UF1000,1000_QL80_.jpg', popular: 4 },

  { id: 16, name: 'Kids Story Book', price: 9, category: 'Stationery', desc: 'Illustrated storybook for children.', img: 'https://www.maplepress.co.in/cdn/shop/files/secondreader_700x700.jpg?v=1693828289', popular: 3 },

  { id: 17, name: 'Sunglasses', price: 25, category: 'Accessories', desc: 'UV-protective stylish sunglasses.', img: 'https://m.media-amazon.com/images/I/51cX00GHjXL._AC_UY1100_.jpg', popular: 7 },

  { id: 18, name: 'Cotton Hoodie', price: 34, category: 'Fashion', desc: 'Soft, breathable cotton hoodie for daily wear.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqp5mEI6yl4O9NlOCm_3ca2dZlyyqTtJKvA&s', popular: 8 }
];


function saveCart(cart){ localStorage.setItem('shop_cart', JSON.stringify(cart)); updateCartCount();}
function getCart(){ return JSON.parse(localStorage.getItem('shop_cart')) || []; }
function addToCart(id){ let cart=getCart(); const prod = products.find(p=>p.id===id); if(!prod) return; let item=cart.find(i=>i.id===id); if(item) item.qty++; else cart.push({...prod, qty:1}); saveCart(cart); toast('Added to cart'); renderCartList(); }
function removeFromCart(id){ let cart=getCart(); cart = cart.filter(p=>p.id!==id); saveCart(cart); renderCartList(); }
function updateQty(id, n){ let cart=getCart(); let item=cart.find(i=>i.id===id); if(!item) return; item.qty = Math.max(1, item.qty + n); saveCart(cart); renderCartList(); }

function updateCartCount(){
  const count = getCart().reduce((s,i)=>s+i.qty,0);
  const el = document.getElementById('cart-count');
  if(el) el.textContent = count;
  const mini = document.getElementById('cart-count-mini');
  if(mini) mini.textContent = count;
}

/* RENDER PRODUCTS */
function renderProductsList(listElId='products-list', data=products){
  const list = document.getElementById(listElId);
  if(!list) return;
  list.innerHTML = data.map(p=>`
    <div class="product-card" data-id="${p.id}">
      <img loading="lazy" src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">$${p.price}</div>
      <div class="card-row">
        <a class="btn" href="product.html?id=${p.id}">Details</a>
        <button class="btn ghost" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

/* QUERY HELPERS */
function getQuery(name){ return new URL(location.href).searchParams.get(name); }

/* PRODUCT DETAILS */
function renderProductDetail(){
  const container = document.getElementById('product-detail'); if(!container) return;
  const id = Number(getQuery('id')); const p = products.find(x=>x.id===id);
  if(!p){ container.innerHTML = '<p>Product not found.</p>'; return; }
  container.innerHTML = `
    <div class="product-details" style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start">
      <img src="${p.img}" alt="${p.name}" style="width:320px;height:320px;object-fit:cover;border-radius:12px">
      <div style="flex:1;min-width:220px">
        <h2>${p.name}</h2>
        <p style="color:#666">${p.desc}</p>
        <p><strong>Category:</strong> ${p.category}</p>
        <h3 style="margin-top:12px">$${p.price}</h3>
        <div style="margin-top:16px">
          <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

/* CART LIST */
function renderCartList(){
  const list = document.getElementById('cart-list'); if(!list) return;
  const cart = getCart();
  if(cart.length===0){ list.innerHTML = '<p>Your cart is empty.</p>'; updateCartCount(); return; }
  let total = 0;
  const itemsHtml = cart.map(item=>{
    total += item.price * item.qty;
    return `<li>
      <img src="${item.img}" alt="${item.name}">
      <div style="flex:1">
        <div><strong>${item.name}</strong></div>
        <div style="color:#666">$${item.price} x ${item.qty} = $${(item.price*item.qty).toFixed(2)}</div>
        <div style="margin-top:8px">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
          <span style="margin:0 10px">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
          <button class="btn btn-remove" style="margin-left:12px" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    </li>`;
  }).join('');
  list.innerHTML = `<ul>${itemsHtml}</ul><h3 style="text-align:right;margin-top:14px">Total: $${total.toFixed(2)}</h3>
    <div style="text-align:right;margin-top:8px"><a class="btn" href="checkout.html">Proceed to Checkout</a></div>`;
  updateCartCount();
}

/* SEARCH + FILTERS */
function initFilters() {
    const search = document.getElementById('search-input');
    const cat = document.getElementById('category-select');
    const price = document.getElementById('price-range');
    const sort = document.getElementById('sort-select');
    const activeFilters = document.getElementById('active-filters');
    const clearBtn = document.getElementById('clear-filters');

    function applyFilters() {
        let q = search ? search.value.trim().toLowerCase() : '';
        let c = cat ? cat.value : 'all';
        let maxp = price ? Number(price.value) : Number.MAX_SAFE_INTEGER;
        let s = sort ? sort.value : 'none';

        let filtered = products.filter(p => {
            const matchesQ = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
            const matchesC = c === 'all' || p.category === c;
            const matchesP = p.price <= maxp;
            return matchesQ && matchesC && matchesP;
        });

        // Sort
        if (s === 'low') filtered.sort((a,b) => a.price - b.price);
        if (s === 'high') filtered.sort((a,b) => b.price - a.price);
        if (s === 'popular') filtered.sort((a,b) => b.popular - a.popular);

        renderProductsList('products-list', filtered);
        
        // Update active filters display
        let filterText = [];
        if (q) filterText.push(`"${q}"`);
        if (c !== 'all') filterText.push(c);
        if (maxp < 200) filterText.push(`≤ ₹${maxp}`);
        if (s !== 'none') filterText.push(s === 'low' ? 'Price: Low-High' : s === 'high' ? 'Price: High-Low' : 'Popularity');
        
        if (filterText.length > 0) {
            activeFilters.innerHTML = `Showing ${filtered.length} products ${filterText.join(', ')}`;
            activeFilters.style.display = 'block';
            clearBtn.style.display = 'block';
        } else {
            activeFilters.style.display = 'none';
            clearBtn.style.display = 'none';
        }
    }

    // Event listeners
    if (search) search.addEventListener('input', applyFilters);
    if (cat) cat.addEventListener('change', applyFilters);
    if (price) {
        price.addEventListener('input', function() {
            document.getElementById('price-val').textContent = this.value;
            applyFilters();
        });
    }
    if (sort) sort.addEventListener('change', applyFilters);

    // Clear filters
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (search) search.value = '';
            if (cat) cat.value = 'all';
            if (price) { price.value = '200'; document.getElementById('price-val').textContent = '200'; }
            if (sort) sort.value = 'none';
            applyFilters();
        });
    }
}

/* AUTH (simple localStorage) */
function initAuth(){
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const contactForm = document.getElementById('contact-form');

  if(signupForm){
    signupForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = signupForm.querySelector('[name=name]').value.trim();
      const email = signupForm.querySelector('[name=email]').value.trim().toLowerCase();
      const pw = signupForm.querySelector('[name=password]').value;
      const pw2 = signupForm.querySelector('[name=password2]').value;
      if(pw.length < 6){ toast('Password must be at least 6 characters'); return; }
      if(pw !== pw2){ toast('Passwords do not match'); return; }
      const users = JSON.parse(localStorage.getItem('shop_users')||'[]');
      if(users.find(u=>u.email===email)){ toast('Account already exists'); return; }
      users.push({name,email,password:pw});
      localStorage.setItem('shop_users', JSON.stringify(users));
      localStorage.setItem('shop_user', JSON.stringify({name,email}));
      toast('Account created — signed in');
      updateAuthUI();
      setTimeout(()=>location.href='index.html',700);
    });
  }

  if(loginForm){
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = loginForm.querySelector('[name=email]').value.trim().toLowerCase();
      const pw = loginForm.querySelector('[name=password]').value;
      const users = JSON.parse(localStorage.getItem('shop_users')||'[]');
      const u = users.find(x=>x.email===email && x.password===pw);
      if(!u){ toast('Invalid credentials'); return; }
      localStorage.setItem('shop_user', JSON.stringify({name:u.name,email:u.email}));
      toast('Signed in');
      updateAuthUI();
      setTimeout(()=>location.href='index.html',700);
    });
  }

  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      toast('Message sent — we will reach out soon!');
      contactForm.reset();
    });
  }

  updateAuthUI();
}

function updateAuthUI(){
  const user = JSON.parse(localStorage.getItem('shop_user')||'null');
  const profileName = document.getElementById('profile-name');
  const authButtons = document.getElementById('auth-buttons');
  const profileWrap = document.getElementById('profile-wrap');
  if(user){
    if(profileName) profileName.textContent = user.name.split(' ')[0];
    if(authButtons) authButtons.style.display = 'none';
    if(profileWrap) profileWrap.style.display = 'flex';
  } else {
    if(authButtons) authButtons.style.display = 'flex';
    if(profileWrap) profileWrap.style.display = 'none';
  }
}

/* SMALL UI HELPERS */
function toast(msg){
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.position='fixed';el.style.right='18px';el.style.bottom='18px';el.style.background='#222';el.style.color='#fff';
  el.style.padding='10px 14px';el.style.borderRadius='8px';el.style.zIndex=9999;el.style.opacity=0;el.style.transition='opacity .25s';
  document.body.appendChild(el);
  requestAnimationFrame(()=>el.style.opacity=1);
  setTimeout(()=>{ el.style.opacity=0; setTimeout(()=>el.remove(),300); },1600);
}

/* NAV HANDLING */
function initNav(){
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if(ham) ham.addEventListener('click', ()=>links.classList.toggle('show'));
}

/* INIT on DOM ready */
document.addEventListener('DOMContentLoaded', function(){
  // Homepage greeting
  const user = JSON.parse(localStorage.getItem('shop_user'));
  const greetingEl = document.getElementById('welcome-greeting');
  const subtitleEl = document.getElementById('welcome-subtitle');
  if (user && greetingEl && subtitleEl) {
    greetingEl.textContent = `Welcome back, ${user.name.split(' ')[0]}!`;
    subtitleEl.textContent = 'Ready to discover something new today?';
  }

  renderProductsList();
  renderProductDetail();
  renderCartList();
  initFilters();
  initAuth();
  initNav();
  updateCartCount();

  // Checkout form
  const checkoutForm = document.getElementById('checkout-form');
  const confirm = document.getElementById('checkout-confirm');
  if(checkoutForm && confirm){
    checkoutForm.addEventListener('submit', function(e){
      e.preventDefault();
      // simple validation
      const name = checkoutForm.querySelector('[name=name]').value.trim();
      const email = checkoutForm.querySelector('[name=email]').value.trim();
      if(!name || !email){ toast('Please fill name and email'); return; }
      localStorage.removeItem('shop_cart');
      renderCartList();
      toast('Order received — confirmation sent to email');
      confirm.innerHTML = '<strong>Thanks for your order!</strong> A confirmation email will be sent.';
    });
  }
});
const ham = document.querySelector(".hamburger");
const mobileLinks = document.querySelector(".mobile-nav-links");

if (ham) {
  ham.addEventListener("click", () => {
    mobileLinks.classList.toggle("show");
  });
}
// Enhanced Profile Functions
function showProfile() {
    toast('Profile page coming soon!');
}

function showOrders() {
    toast('Order history demo - All orders delivered!');
}

function logout() {
    localStorage.removeItem('shop_user');
    updateAuthUI();
    toast('Logged out successfully');
}

// Enhanced updateAuthUI with greeting support
function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('shop_user')) || null;
    const profileName = document.getElementById('profile-name');
    const authButtons = document.getElementById('auth-buttons');
    const profileWrap = document.getElementById('profile-wrap');
    
    if (user) {
        if (profileName) {
            profileName.innerHTML = `Hi, ${user.name.split(' ')[0]} ▼`;
            profileName.style.background = 'linear-gradient(135deg, #ff8800, #ff7700)';
            profileName.style.color = 'white';
        }
        if (authButtons) authButtons.style.display = 'none';
        if (profileWrap) profileWrap.style.display = 'flex';
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (profileWrap) profileWrap.style.display = 'none';
        if (profileName) profileName.innerHTML = 'Hi, Guest ▼';
    }
}

// Profile dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    const profileName = document.getElementById('profile-name');
    if (profileName) {
        profileName.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = this.parentElement.querySelector('.pdrop');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        const dropdowns = document.querySelectorAll('.pdrop');
        dropdowns.forEach(dd => dd.style.display = 'none');
    });
});
