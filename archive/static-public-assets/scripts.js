
async function loadJSON(path){ const r = await fetch(path); return await r.json(); }

async function renderCategories(targetSel, limit=0){
  const data = await loadJSON('/assets/taxonomy.json');
  const root = document.querySelector(targetSel);
  if(!root) return;
  const items = (limit>0) ? data.categories.slice(0, limit) : data.categories;
  root.innerHTML = items.map(cat => `
    <a class="card" href="/categorii/${cat.slug}.html" data-cat="${cat.slug}">
      <div class="ico">${cat.icon||'📦'}</div>
      <strong>${cat.name}</strong>
      <div class="small" style="color:#6b7280">${(cat.subcategories||[]).slice(0,2).map(s=>s.name).join(' • ')}</div>
    </a>
  `).join('');
}

async function renderCategoryPage(){
  const wrap = document.querySelector('[data-category-page]'); if(!wrap) return;
  const slug = document.body.dataset.slug;
  const data = await loadJSON('/assets/taxonomy.json');
  const cat = data.categories.find(c=>c.slug===slug);
  if(!cat){ wrap.innerHTML = '<p>Categoria nu a fost găsită.</p>'; return; }
  document.querySelector('[data-cat-name]').textContent = cat.name;
  document.title = cat.name + ' – LucrezLocal.ro';
  wrap.innerHTML = `
    <div class="note"><strong>Subcategorii</strong></div>
    <div class="grid" style="margin-top:12px">
      ${cat.subcategories.map(s=>`
        <a class="card" href="/categorii/${cat.slug}/${s.slug}.html">
          <strong>${s.name}</strong>
        </a>
      `).join('')}
    </div>`;
}
