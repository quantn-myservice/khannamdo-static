
const cart=[]; const drawer=document.querySelector('#cartDrawer'), overlay=document.querySelector('#overlay');
function renderCart(){document.querySelector('#cartCount').textContent=cart.length;document.querySelector('#cartItems').innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-item">${i+1}. ${x}</div>`).join(''):'<p>Chưa có sản phẩm.</p>'}
document.querySelectorAll('.add-btn').forEach(b=>b.addEventListener('click',()=>{cart.push(b.dataset.name);renderCart();drawer.classList.add('open');overlay.classList.add('show')}));
document.querySelector('.cart-btn').onclick=()=>{drawer.classList.add('open');overlay.classList.add('show')};
function close(){drawer.classList.remove('open');overlay.classList.remove('show')} document.querySelector('#closeCart').onclick=close;overlay.onclick=close;
document.querySelectorAll('.filter').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.product-card').forEach(c=>c.style.display=(f==='all'||c.dataset.category===f)?'block':'none')});
document.querySelector('.menu-btn').onclick=()=>document.querySelector('#products').scrollIntoView({behavior:'smooth'});
