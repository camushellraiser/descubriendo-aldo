'use strict';

// Descubriendo a Aldo · First interactive prototype
// All content is hand-written and local. No analytics, external APIs or logins.
const STORIES = [
  {id:'curioso', number:'01', symbol:'📖', title:'Siempre tengo un dato', teaser:'¿Por qué casi siempre tengo algo que contar?', label:'EL CURIOSO', intro:'Me encanta leer. Pero no necesariamente libros.', content:'Puedo pasar un buen rato leyendo sobre tecnología, noticias o cualquier tema que me despierte curiosidad. Me gusta entender cómo funcionan las cosas y saber un poquito de todo.', aside:'No es que lo sepa todo. Solo es que a veces sé cosas que ni yo entiendo por qué sé. 😅', category:'mente', featured:true},
  {id:'matematicas', number:'02', symbol:'∑', title:'Matemáticas por diversión', teaser:'Sí. Por diversión. Hay gente así.', label:'EL ANALÍTICO', intro:'Hay quienes abren TikTok para desconectarse. Y luego estoy yo.', content:'A veces me aparecen videos con problemas matemáticos y termino resolviéndolos mentalmente antes de que empiecen a explicar el resultado. No necesito papel: disfruto ir haciendo los cálculos en la cabeza.', aside:'Suena un poco maniático, pero de verdad me entretiene.', category:'mente'},
  {id:'sonador', number:'03', symbol:'☾', title:'Mi lado soñador', teaser:'Una mente. Dos maneras de imaginar.', label:'EL SOÑADOR', intro:'Mi mente puede viajar muy lejos, incluso sin que me mueva del lugar.', content:'Soy una persona que piensa muchísimo las cosas. Pero hay un lado que me gusta especialmente: imaginar escenarios bonitos, momentos felices y todo lo bueno que todavía podría pasar.', aside:'Soñar despierto es una de mis maneras favoritas de dejar volar la imaginación.', category:'personal'},
  {id:'comida', number:'04', symbol:'♨', title:'Aldo a la carta', teaser:'Spoiler: los cortes van en primer lugar.', label:'EL FOODIE', intro:'Me gusta casi toda la comida, pero tengo debilidades muy específicas.', content:'Si tuviera que elegir, los cortes de carne serían mi número uno.', aside:'Y sí: unas buenas enchiladas verdes también pueden ganarme el corazón.', category:'gustos'},
  {id:'vaquero', number:'05', symbol:'♞', title:'Mi lado vaquero', teaser:'No es una moda. Viene desde niño.', label:'EL ESTILO', intro:'Tengo varios estilos para vestir, según el ánimo. Pero hay uno al que siempre vuelvo.', content:'Me gusta vestir de negro y he tenido una etapa muy de tenis Nike y Jordan. Aun así, desde que era niño me encanta el estilo vaquero: botas, tejanas y todo ese universo.', aside:'Actualmente tengo cuatro tejanas y alrededor de seis pares de botas. Mis favoritas son las de avestruz y mantarraya.', category:'gustos'},
  {id:'creativo', number:'06', symbol:'✺', title:'Lógica × creatividad', teaser:'Mi cabeza no vive en un solo modo.', label:'EL CREADOR', intro:'Me gustan las explicaciones y los datos concretos. Pero también crear cosas que antes no existían.', content:'Estudié Ingeniería en Sistemas y tengo una maestría en Administración. Soy muy lógico, aunque también me encanta inventar aplicaciones, imágenes, videos e invitaciones.', aside:'Una parte de mí quiere entender cómo funciona todo. La otra quiere construir algo nuevo.', category:'mente', featured:true},
  {id:'musica', number:'07', symbol:'♫', title:'Mi banda sonora', teaser:'Mis favoritos no comparten precisamente género.', label:'EL MELÓMANO', intro:'Realmente disfruto música de casi todos los géneros.', content:'Entre mis artistas favoritos están Luis Miguel y Natanael Cano. Mi música puede cambiar mucho según el momento, y eso es precisamente lo que me gusta.', aside:'No me pidas que elija un solo género para siempre.', category:'gustos'},
  {id:'viajes', number:'08', symbol:'✈', title:'Siempre quiero viajar', teaser:'Una maleta nunca está de más.', label:'EL VIAJERO', intro:'Viajar es de esas cosas que siempre me ilusionan.', content:'Me gusta especialmente visitar Estados Unidos. Dos lugares que disfruto muchísimo son Disneyland y Universal Studios.', aside:'La emoción del viaje empieza mucho antes de llegar.', category:'gustos'},
  {id:'cine', number:'09', symbol:'▣', title:'Mi pequeña sala de cine', teaser:'Tres pistas de las películas que me gustan.', label:'EL CINÉFILO', intro:'Las películas también cuentan historias sobre las personas que las disfrutan.', content:'Entre mis favoritas están Volver al Futuro, Star Wars y Rápido y Furioso. Ciencia ficción, aventuras, autos y muchas ganas de divertirme.', aside:'Si hay tiempo para una película, probablemente tengo una sugerencia.', category:'gustos'},
  {id:'idiomas', number:'10', symbol:'🌍', title:'Un pequeño secreto', teaser:'No todos los idiomas que conozco son evidentes.', label:'EL CURIOSO', intro:'El inglés no es el único idioma del que sé algo.', content:'Hablo inglés y también conozco bastantes cosas del italiano, francés y rumano. No podría sostener conversaciones complejas en esos tres, pero me gusta lo que he aprendido.', aside:'El rumano suele ser el que más sorprende.', category:'mente'},
  {id:'lealtad', number:'11', symbol:'♡', title:'Mis círculos de confianza', teaser:'Conocerme no siempre significa conocerme a fondo.', label:'EL LEAL', intro:'Puedo conocer a muchísimas personas, pero llamarle amigo a alguien significa bastante para mí.', content:'Me considero una persona noble y leal, con convicciones firmes. Tengo diferentes niveles de confianza: no todo el mundo llega a conocer todas mis capas. A veces también soy bastante introvertido.', aside:'Prefiero pocas amistades profundas a muchísimas amistades de nombre.', category:'personal'},
  {id:'regalos', number:'12', symbol:'🎁', title:'Mi forma de consentir', teaser:'El detalle no termina al entregarlo.', label:'EL DETALLISTA', intro:'Cuando alguien me importa, disfruto mucho tener detalles con esa persona.', content:'Dar regalos es probablemente mi lenguaje del amor más fuerte, aunque intento expresar el cariño de distintas maneras. Me emociona pensar en qué podría gustarle a alguien y saber si realmente lo está disfrutando.', aside:'Para mí, el regalo es también la historia que viene después de entregarlo.', category:'personal'}
];

const TABS = {
 comida:[
  ['Cortes','🥩','Si hay que elegir un número uno, son los cortes. Me encanta el ribeye piquín de La Madalena.'],
  ['Casero','🍲','Enchiladas verdes, carne en su jugo y tacos de cochinita. Tres favoritas de mi lado más casero.'],
  ['Sushi','🍣','Me encantan el sushi y los nigiris, sobre todo los tradicionales y crudos. Los rollos demasiado cargados, no tanto.'],
  ['Para brindar','🥂','Vino tinto 3B de Casa Madero; tequila Dobel Diamante o Don Julio 70. Y, si hace calor, una michelada.'],
  ['Restaurantes','✦','Entre mis favoritos están La Madalena, Señora Tanaka y La Matera.']
 ],
 vaquero:[
  ['Vaquero','🤠','Este gusto viene desde mi infancia. Tengo cuatro tejanas: silver belly, negra, tabaco y paja. Y me encantan las botas vaqueras.'],
  ['De negro','◼','El negro es uno de mis colores favoritos para vestir. Mi estilo cambia bastante según mi estado de ánimo.'],
  ['Tenis','👟','Antes era muy fan de los tenis, especialmente Nike y Jordan. Hoy ya no tanto, pero fue una etapa importante.']
 ],
 creativo:[
  ['Lógica','∑','Me gusta que las cosas tengan sentido. Soy de pedir explicaciones, datos concretos y entender por qué pasa algo.'],
  ['Creatividad','✦','Me entretiene muchísimo diseñar apps, editar videos, crear imágenes e invitaciones. Disfruto convertir una idea en algo que se pueda ver y usar.']
 ],
 musica:[
  ['Luis Miguel','♫','Uno de mis artistas favoritos.'],
  ['Natanael Cano','♫','Otro de mis favoritos. Sí, mi playlist puede cambiar muchísimo de un momento a otro.'],
  ['De todo','♪','Puedo disfrutar prácticamente todos los géneros musicales. No me gusta quedarme en uno solo.']
 ],
 cine:[
  ['Volver al Futuro','⏳','Una de mis películas favoritas de todos los tiempos.'],
  ['Star Wars','✦','Uno de los universos cinematográficos que más me gustan.'],
  ['Rápido y Furioso','🏎','También está entre mis sagas favoritas.']
 ],
 idiomas:[
  ['English','EN','Hablo inglés.'],
  ['Italiano','IT','Sé varias cosas de italiano, aunque no afirmaría hablarlo fluidamente.'],
  ['Français','FR','Tengo conocimientos de francés y me gusta seguir aprendiendo.'],
  ['Română','RO','También conozco cosas del rumano. Este quizá sea el más inesperado.']
 ],
 lealtad:[
  ['Conocidos','○','Conozco a mucha gente. Pero no por eso llamo amigo a todo el mundo.'],
  ['Confianza','◉','No todas las personas entran a mi vida con el mismo nivel de cercanía. La confianza se construye.'],
  ['Amistad','♥','A mis verdaderos amigos los cuento entre pocos. Para mí la lealtad, el respeto y el cariño importan mucho.']
 ]
};

let visited = new Set();
try {const raw=JSON.parse(localStorage.getItem('descubriendo-aldo-visited-v1')||'[]');if(Array.isArray(raw))visited=new Set(raw.filter(id=>STORIES.some(s=>s.id===id)));}catch(_){/* ignore */}
let currentId = null;
let lastFocus = null;
let quizAnswered = false;
let giftOpened = false;
const $=id=>document.getElementById(id);
const grid=$('discoveryGrid');
const modalWrap=$('modalWrap');
const modalContent=$('modalContent');

function renderGrid(){
 grid.innerHTML=STORIES.map(s=>`<button type="button" class="discovery ${s.featured?'featured':''}" data-open="${s.id}" aria-label="Abrir: ${s.title}"><span class="discovery-top"><span>DESCUBRIMIENTO ${s.number}</span><span class="seen-dot" data-seen="${visited.has(s.id)}" aria-hidden="true">${visited.has(s.id)?'✓':'+'}</span></span><span class="discovery-symbol" aria-hidden="true">${s.symbol}</span><span class="discovery-title">${s.title}</span><span class="discovery-subtitle">${s.teaser}</span><span class="discovery-arrow" aria-hidden="true">↗</span></button>`).join('');
 updateProgress();
}
function updateProgress(){
 const n=visited.size;
 $('seenCount').textContent=n;$('totalCount').textContent=STORIES.length;
 $('progressFill').style.width=`${(n/STORIES.length)*100}%`;
}
function storyHtml(s){
 const interactive = s.id==='matematicas' ? `<div class="interactive-stage"><p class="stage-label">UN PEQUEÑO RETO MENTAL</p><div class="math-equation">48 × 25 = ?</div><p class="small-caption">¿Lo puedes calcular antes de ver la solución?</p><div class="choice-row"><button class="choice" data-quiz="1150" aria-pressed="false">1,150</button><button class="choice" data-quiz="1200" aria-pressed="false">1,200</button><button class="choice" data-quiz="1250" aria-pressed="false">1,250</button></div><div class="feedback" id="quizFeedback" aria-live="polite">Pruébalo sin sacar la calculadora.</div></div>` :
 s.id==='sonador' ? `<div class="interactive-stage"><p class="stage-label">MI IMAGINACIÓN TIENE DOS CAMINOS</p><div class="tab-group"><button class="tab-button" aria-pressed="true" data-dream="think">Pienso de más</button><button class="tab-button" aria-pressed="false" data-dream="dream">Sueño despierto</button></div><div class="tab-body" id="dreamBody"><h4>Mi cabeza no siempre se queda quieta.</h4><p>A veces puedo imaginar demasiados escenarios y hacerme preguntas de más.</p></div></div>` :
 s.id==='regalos' ? `<div class="interactive-stage"><p class="stage-label">TOCA PARA ABRIR</p><button class="gift-box" id="giftBox" type="button" aria-label="Abrir la caja de regalo">🎁</button><p class="gift-message" id="giftMessage">Hay algo que me encanta hacer cuando alguien me importa. Toca el regalo para descubrirlo.</p></div>` :
 s.id==='viajes' ? `<div class="interactive-stage"><p class="stage-label">MIS LUGARES FELICES</p><div class="stamp-stack"><span class="stamp-card">Disneyland<br>California</span><span class="stamp-card">Universal<br>Studios</span></div><p class="small-caption">Dos favoritos cuando viajo a Estados Unidos.</p></div>` :
 s.id==='curioso' ? `<div class="interactive-stage"><p class="stage-label">EL CARRUSEL DE MI CURIOSIDAD</p><div class="tab-group"><button class="tab-button" data-curious="0" aria-pressed="true">Tecnología</button><button class="tab-button" data-curious="1" aria-pressed="false">Noticias</button><button class="tab-button" data-curious="2" aria-pressed="false">Lo que sea</button></div><div class="tab-body" id="curiousBody"><h4>¿Cómo funciona esto?</h4><p>Si una tecnología nueva me llama la atención, probablemente voy a querer entenderla.</p></div></div>` :
 TABS[s.id] ? `<div class="interactive-stage"><p class="stage-label">${s.id==='idiomas'?'ABRE UN SELLO DE MI PASAPORTE':s.id==='lealtad'?'EXPLORA MIS CÍRCULOS':'ELIGE UN CAMINO'}</p><div class="tab-group">${TABS[s.id].map((tab,i)=>`<button class="tab-button" data-story-tab="${i}" aria-pressed="${i===0}">${tab[0]}</button>`).join('')}</div><div class="tab-body" id="storyTabBody"><h4>${TABS[s.id][0][1]} ${TABS[s.id][0][0]}</h4><p>${TABS[s.id][0][2]}</p></div></div>` : '';
 const quote = s.id==='matematicas' ? 'Hay gente que resuelve problemas porque debe. Yo a veces lo hago porque me gusta.' :
 s.id==='sonador' ? 'A veces pienso demasiado en lo que podría salir mal. Pero me encanta imaginar lo bonito que podría salir bien.' :
 s.id==='regalos' ? 'El detalle no termina cuando lo entrego.' :
 s.id==='lealtad' ? 'Conocerme es fácil. Conocerme de verdad lleva tiempo.' :
 s.id==='creativo' ? 'No tengo que elegir entre entender y crear. Me gusta hacer las dos cosas.' : '';
 return `<span class="modal-emoji" aria-hidden="true">${s.symbol}</span><h2 class="modal-title" id="modalTitle">${s.title}</h2><p class="modal-intro">${s.intro}</p><div class="story-panel"><span class="story-kicker">UN POCO MÁS SOBRE MÍ</span><p>${s.content}</p><p class="story-highlight">${s.aside}</p></div>${interactive}${quote?`<p class="quote-line">“${quote}”</p>`:''}`;
}
function openStory(id){
 const s=STORIES.find(x=>x.id===id); if(!s)return;
 if(modalWrap.hidden)lastFocus=document.activeElement;
 currentId=id;visited.add(id);try{localStorage.setItem('descubriendo-aldo-visited-v1',JSON.stringify([...visited]));}catch(_){/* browser storage disabled */}
 quizAnswered=false;giftOpened=false;
 $('modalIndex').textContent=`DESCUBRIMIENTO ${s.number} · ${s.label}`;
 modalContent.innerHTML=storyHtml(s);
 $('modalProgressLabel').textContent=`${visited.size} de ${STORIES.length} descubiertos`;
 modalWrap.hidden=false;document.body.classList.add('modal-open');
 renderGrid();
 const m=document.querySelector('.modal');m.scrollTop=0;m.focus({preventScroll:true});
}
function closeStory(){
 modalWrap.hidden=true;document.body.classList.remove('modal-open');currentId=null;
 if(lastFocus&&typeof lastFocus.focus==='function')lastFocus.focus({preventScroll:true});
}
function openRandom(){
 let choices=STORIES.filter(x=>!visited.has(x.id));
 if(!choices.length)choices=STORIES.filter(x=>x.id!==currentId);
 if(!choices.length)choices=STORIES;
 const chosen=choices[Math.floor(Math.random()*choices.length)];openStory(chosen.id);
}
function updateTabs(selector,active){
 document.querySelectorAll(selector).forEach((btn)=>btn.setAttribute('aria-pressed',String(btn===active)));
}

// Events delegated to allow content to be dynamically replaced in the story sheet.
document.addEventListener('click',event=>{
 const opener=event.target.closest('[data-open]'); if(opener){openStory(opener.dataset.open);return;}
 if(event.target.closest('#randomTop, #randomHero, #randomGrid, #randomLast, #nextDiscovery')){openRandom();return;}
 if(event.target.closest('#modalClose, #modalBackdrop')){closeStory();return;}
 const answer=event.target.closest('[data-quiz]');
 if(answer&&!quizAnswered){quizAnswered=true;updateTabs('[data-quiz]',answer);document.querySelectorAll('[data-quiz]').forEach(b=>b.disabled=true);$('quizFeedback').textContent=answer.dataset.quiz==='1200'?'¡Exacto! 48 × 100 ÷ 4 = 1,200. Ese es el tipo de juego mental que me entretiene.':'La respuesta es 1,200. Un truco rápido: multiplicar por 25 es multiplicar por 100 y dividir entre 4.';return;}
 const gift=event.target.closest('#giftBox');
 if(gift){giftOpened=!giftOpened;gift.textContent=giftOpened?'💝':'🎁';gift.setAttribute('aria-label',giftOpened?'Cerrar regalo':'Abrir regalo');$('giftMessage').textContent=giftOpened?'Me gusta consentir, elegir detalles y enterarme después de si realmente hicieron feliz a esa persona. Para mí, eso le da sentido al regalo.':'Hay algo que me encanta hacer cuando alguien me importa. Toca el regalo para descubrirlo.';return;}
 const dream=event.target.closest('[data-dream]');
 if(dream){updateTabs('[data-dream]',dream);$('dreamBody').innerHTML=dream.dataset.dream==='dream'?'<h4>¿Y si todo sale bonito?</h4><p>Me encanta imaginar situaciones lindas, momentos felices y esas posibilidades que todavía no existen, pero que ilusionan.</p>':'<h4>Mi cabeza no siempre se queda quieta.</h4><p>A veces puedo imaginar demasiados escenarios y hacerme preguntas de más.</p>';return;}
 const curious=event.target.closest('[data-curious]');
 if(curious){updateTabs('[data-curious]',curious);let data=[['¿Cómo funciona esto?','Si una tecnología nueva me llama la atención, probablemente voy a querer entenderla.'],['Quiero saber qué pasó','Me gusta mantenerme informado y leer noticias, incluso de temas muy diferentes entre sí.'],['Una cosa lleva a otra','Puedo empezar leyendo un artículo y terminar descubriendo diez cosas más que no estaba buscando.']][Number(curious.dataset.curious)];$('curiousBody').innerHTML=`<h4>${data[0]}</h4><p>${data[1]}</p>`;return;}
 const tab=event.target.closest('[data-story-tab]');
 if(tab&&TABS[currentId]){updateTabs('[data-story-tab]',tab);const data=TABS[currentId][Number(tab.dataset.storyTab)];$('storyTabBody').innerHTML=`<h4>${data[1]} ${data[0]}</h4><p>${data[2]}</p>`;return;}
});
document.addEventListener('keydown',event=>{
 if(modalWrap.hidden)return;
 if(event.key==='Escape'){event.preventDefault();closeStory();}
 if(event.key==='Tab'){
  const focusable=[...document.querySelectorAll('.modal button:not([disabled])')].filter(x=>x.getClientRects().length>0);
  if(!focusable.length)return;
  const first=focusable[0],last=focusable.at(-1);
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
 }
});
renderGrid();