(function(){
  const cfg = window.APEX_CONFIG || {};
  const configured = cfg.supabaseUrl && !cfg.supabaseUrl.includes('YOUR_') && cfg.supabaseAnonKey && !cfg.supabaseAnonKey.includes('YOUR_');
  if(!configured || !window.supabase) return;
  const db = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);

  const esc = (s='') => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  async function loadProjects(){
    const target = document.getElementById('dynamic-projects');
    if(!target) return;
    const {data, error} = await db.from('projects').select('id,title,category,location,description,cover_url,video_url,created_at').eq('published', true).order('created_at',{ascending:false}).limit(12);
    if(error || !data?.length) return;
    target.innerHTML = data.map((p,i)=>`<article class="project ${i===0?'featured':''}">
      ${p.video_url ? `<video controls preload="metadata" poster="${esc(p.cover_url||'')}"><source src="${esc(p.video_url)}"></video>` : `<img src="${esc(p.cover_url||'') }" alt="${esc(p.title)} project by Apex Audio & Video Systems" loading="lazy">`}
      <div class="project-label"><strong>${esc(p.title)}</strong><span>${esc([p.category,p.location].filter(Boolean).join(' • '))}</span></div>
    </article>`).join('');
  }

  async function loadReviews(){
    const target = document.getElementById('reviews-list');
    if(!target) return;
    const {data, error} = await db.from('reviews').select('customer_name,review_text,rating,created_at').eq('published',true).order('created_at',{ascending:false}).limit(6);
    if(error || !data?.length) return;
    target.innerHTML = data.map(r=>`<blockquote class="review-card"><div class="stars">${'★'.repeat(Math.max(1,Math.min(5,r.rating||5)))}</div><p>“${esc(r.review_text)}”</p><strong>${esc(r.customer_name)}</strong></blockquote>`).join('');
  }

  loadProjects(); loadReviews();
})();
