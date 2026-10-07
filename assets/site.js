'use strict';
const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('#primary-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.querySelector('span').textContent='+';}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.querySelector('span').textContent=open?'−':'+';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
nav.addEventListener('focusout',()=>setTimeout(()=>{if(!document.activeElement.closest('.site-header'))closeMenu();},0));
window.matchMedia('(min-width:761px)').addEventListener('change',closeMenu);
document.querySelectorAll('[data-team]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-team]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('.team-grid').forEach(grid=>grid.hidden=grid.id!=='team-'+button.dataset.team);}));
const search=document.querySelector('#search');let filter='all';
function filterInsights(){if(!search)return;let count=0;const query=search.value.trim().toLowerCase();document.querySelectorAll('.article-card').forEach(card=>{const visible=(filter==='all'||card.dataset.category===filter)&&card.dataset.title.includes(query);card.hidden=!visible;if(visible)count++;});document.querySelector('#result-count').textContent=count+' insight'+(count===1?'':'s');document.querySelector('#empty-state').hidden=count>0;}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filterInsights();}));
search?.addEventListener('input',filterInsights);
document.querySelector('#reset-search')?.addEventListener('click',()=>{search.value='';document.querySelector('[data-filter="all"]').click();search.focus();});
const articles={'earnings':{category:'Wealth perspectives',title:'Earnings are king in 2026',meta:'24 September 2026 · Ankit Kapoor, CFA, FRM · Deputy Chief Investment Officer'},'block-deals':{category:'Press & media',title:'India’s Geojit Financials sees record busiest session on block deals',meta:'24 June 2026'}};
const dialog=document.querySelector('#article-dialog');
document.querySelectorAll('[data-article]').forEach(button=>button.addEventListener('click',()=>{const article=articles[button.dataset.article];document.querySelector('#article-title').textContent=article.title;document.querySelector('#article-category').textContent=article.category;document.querySelector('#article-meta').textContent=article.meta;document.querySelector('#request-article').href='mailto:corporate@geojitdifc.com?subject='+encodeURIComponent('Article request: '+article.title);dialog.showModal();}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
const form=document.querySelector('#enquiry-form');let draft='';
if(form){const topic=new URLSearchParams(location.search).get('interest');if([...form.elements.interest.options].some(o=>o.value===topic))form.elements.interest.value=topic;
form.addEventListener('input',()=>{document.querySelector('#email-draft').hidden=true;});
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const fields=new FormData(form),topic=form.elements.interest.selectedOptions[0].textContent;draft='Hello Geojit Private Wealth DIFC,\n\nI would like to discuss '+topic.toLowerCase()+'.\n\nName: '+fields.get('name').trim()+'\nEmail: '+fields.get('email').trim()+'\nPhone: '+(fields.get('phone').trim()||'Not provided')+'\n\n'+fields.get('message').trim()+'\n\nI agree to be contacted about this enquiry.';document.querySelector('#email-link').href='mailto:corporate@geojitdifc.com?subject='+encodeURIComponent('Website enquiry: '+topic)+'&body='+encodeURIComponent(draft);const panel=document.querySelector('#email-draft');panel.hidden=false;panel.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});document.querySelector('#email-link').focus();});
document.querySelector('#copy-enquiry').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(draft);document.querySelector('#copy-status').textContent='Enquiry copied. Paste it into your email app.';}catch{document.querySelector('#copy-status').textContent='Copy is unavailable here. Please use Open email draft.';}});}
// Selectable heritage timeline: keyboard tabs, explicit step controls, no autoplay.
const yearTabs=[...document.querySelectorAll('.year-tab')];
if(yearTabs.length){
 let milestoneIndex=0;
 const previous=document.querySelector('#timeline-prev'),next=document.querySelector('#timeline-next');
 function selectMilestone(index,focusTab=false){
  milestoneIndex=Math.max(0,Math.min(yearTabs.length-1,index));
  yearTabs.forEach((tab,i)=>{const selected=i===milestoneIndex;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=!selected;});
  previous.disabled=milestoneIndex===0;next.disabled=milestoneIndex===yearTabs.length-1;
  const tab=yearTabs[milestoneIndex];
  document.querySelector('#timeline-position').textContent=tab.textContent+' · '+(milestoneIndex+1)+' of '+yearTabs.length;
  if(focusTab)tab.focus({preventScroll:true});
  const track=tab.parentElement;
  const edge=tab.offsetLeft-track.offsetLeft;
  if(edge<track.scrollLeft||edge+tab.offsetWidth>track.scrollLeft+track.clientWidth)track.scrollTo({left:edge-track.clientWidth/2+tab.offsetWidth/2,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});
 }
 yearTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectMilestone(index));
  tab.addEventListener('keydown',event=>{let target=index;if(event.key==='ArrowRight')target=(index+1)%yearTabs.length;else if(event.key==='ArrowLeft')target=(index-1+yearTabs.length)%yearTabs.length;else if(event.key==='Home')target=0;else if(event.key==='End')target=yearTabs.length-1;else return;event.preventDefault();selectMilestone(target,true);});
 });
 previous.addEventListener('click',()=>{selectMilestone(milestoneIndex-1);if(previous.disabled)next.focus();});
 next.addEventListener('click',()=>{selectMilestone(milestoneIndex+1);if(next.disabled)previous.focus();});
}
