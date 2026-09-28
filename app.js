
const cart=[]; const drawer=document.querySelector('#cartDrawer'), overlay=document.querySelector('#overlay');
const floatingSocialLinks=document.querySelector('.floating-social-links'), socialToggle=document.querySelector('.social-toggle');
if(floatingSocialLinks&&socialToggle){let socialCloseTimer;socialToggle.onclick=()=>{const isExpanded=socialToggle.getAttribute('aria-expanded')==='true';clearTimeout(socialCloseTimer);socialToggle.setAttribute('aria-expanded',String(!isExpanded));socialToggle.setAttribute('aria-label',isExpanded?'Mở thông tin liên hệ':'Đóng thông tin liên hệ');socialToggle.querySelector('span').textContent=isExpanded?'+':'×';if(isExpanded){floatingSocialLinks.classList.add('is-closing');socialCloseTimer=setTimeout(()=>{floatingSocialLinks.hidden=true;floatingSocialLinks.classList.remove('is-closing')},matchMedia('(prefers-reduced-motion: reduce)').matches?0:320)}else{floatingSocialLinks.hidden=false;floatingSocialLinks.classList.remove('is-closing')}}}
function renderCart(){document.querySelector('#cartCount').textContent=cart.length;document.querySelector('#cartItems').innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-item">${i+1}. ${x}</div>`).join(''):'<p>Chưa có sản phẩm.</p>'}
document.querySelectorAll('.add-btn').forEach(b=>b.addEventListener('click',()=>{cart.push(b.dataset.name);renderCart();drawer.classList.add('open');overlay.classList.add('show')}));
document.querySelector('.cart-btn').onclick=()=>{drawer.classList.add('open');overlay.classList.add('show')};
function close(){drawer.classList.remove('open');overlay.classList.remove('show')} document.querySelector('#closeCart').onclick=close;overlay.onclick=close;
document.querySelectorAll('.filter').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.product-card').forEach(c=>c.style.display=(f==='all'||c.dataset.category===f)?'block':'none')});
document.querySelector('.menu-btn').onclick=()=>{
  const target=document.querySelector('#products');
  if (target) target.scrollIntoView({behavior:'smooth'});
  else window.location.href='products.html';
};

document.querySelectorAll('.product-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.product-tab').forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    const targetId = tab.dataset.target;
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
