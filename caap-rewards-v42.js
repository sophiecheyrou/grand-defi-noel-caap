/* Grand Défi de Noël CAAP — V42. Aucun nom n'est transmis au serveur. */
const CAAP_HEALTH_GIFTS=[
['Le cœur et les muscles','❤️','Ton cœur est un muscle extraordinaire !','Chaque fois que tu bouges, ton cœur apporte de l’oxygène à tes muscles. Avec une activité régulière, il devient plus efficace.','Marche d’un bon pas dès que tu en as l’occasion !'],
['Le cœur et les muscles','💪','Tes muscles aiment l’action !','Marcher, sauter, danser ou monter les escaliers fait travailler tes muscles. Les solliciter régulièrement aide à les renforcer.','Préfère les escaliers à l’ascenseur quand tu le peux !'],
['Le cœur et les muscles','🫁','Pourquoi respires-tu plus vite quand tu bouges ?','Pendant un effort, tes muscles ont besoin de davantage d’oxygène. Ta respiration s’accélère pour répondre à leurs besoins.','Observe comment ta respiration retrouve son calme après l’effort.'],
['Le cœur et les muscles','🦴','Bouger aide aussi tes os à grandir solides !','Pendant l’enfance et l’adolescence, courir, sauter et pratiquer des activités variées contribuent à renforcer les os.','Varie les activités pour faire travailler ton corps de différentes façons.'],
['Le cerveau et les apprentissages','🧠','Bouger, c’est aussi faire travailler ton cerveau !','L’activité physique favorise le bon fonctionnement du cerveau. Elle peut t’aider à être plus attentif et disponible pour apprendre.','Bouge quelques minutes avant de te remettre au travail.'],
['Le cerveau et les apprentissages','💡','Une pause active pour mieux se concentrer !','Après une longue période assise, quelques minutes de mouvement peuvent aider à retrouver de l’attention et de l’énergie.','Teste une pause active de deux minutes pendant tes devoirs.'],
['Le cerveau et les apprentissages','📚','Le mouvement, un allié de la mémoire !','Pratiquée régulièrement, l’activité physique peut contribuer à améliorer certaines capacités de mémoire et d’apprentissage.','Après une séance de révision, offre-toi une petite marche.'],
['Le cerveau et les apprentissages','✨','Et si les idées venaient en marchant ?','Marcher peut favoriser la réflexion et la créativité. Changer de position peut aider à trouver de nouvelles idées.','Essaie de réfléchir à une idée en marchant quelques minutes.'],
['La lutte contre la sédentarité','🪑','Ton corps n’est pas fait pour rester assis toute la journée !','Rester longtemps assis sans bouger n’est pas idéal pour la santé, même lorsqu’on pratique du sport.','Lève-toi et bouge régulièrement entre deux activités assises.'],
['La lutte contre la sédentarité','⏱️','Deux minutes peuvent faire la différence !','Interrompre une longue période assise par quelques minutes de mouvement permet de réduire le temps passé sans activité musculaire.','Marche, étire-toi ou danse pendant une petite pause.'],
['La lutte contre la sédentarité','📱','Et si tu mettais les écrans sur pause ?','Les écrans peuvent nous faire rester assis longtemps sans nous en rendre compte. Alterne les moments sur écran et les moments actifs.','Après un moment devant un écran, accorde-toi une pause en mouvement.'],
['La lutte contre la sédentarité','👟','Chaque occasion de bouger compte !','Aller à pied au collège, promener son chien ou participer aux tâches de la maison sont autant de façons d’être actif.','Trouve aujourd’hui une occasion de marcher un peu plus.'],
['Le sommeil et le bien-être','🌙','Bien bouger pour mieux dormir !','Une activité physique régulière favorise un sommeil de meilleure qualité. Bien dormir aide ton corps et ton cerveau à récupérer.','Essaie de garder des horaires de sommeil réguliers.'],
['Le sommeil et le bien-être','😊','Bouger peut donner le sourire !','L’activité physique peut améliorer l’humeur et procurer une sensation de bien-être. C’est aussi une façon de prendre soin de soi.','Choisis une activité que tu aimes vraiment faire.'],
['Le sommeil et le bien-être','🍃','Le mouvement aide à relâcher les tensions !','Marcher, danser ou pratiquer une activité douce peut aider à diminuer le stress et à se sentir plus détendu.','Après une journée chargée, essaie quelques minutes de marche tranquille.'],
['Le sommeil et le bien-être','🔋','Bouger et récupérer : les deux sont importants !','Ton corps progresse aussi lorsqu’il récupère. Alterner activité physique, repos et sommeil permet de respecter ses besoins.','Écoute ton corps et adapte l’intensité de tes efforts à ton état de forme.'],
['Le plaisir de bouger ensemble','🤝','Bouger ensemble, c’est partager !','Jouer, danser ou marcher avec d’autres permet de passer de bons moments et de renforcer les liens entre les personnes.','Propose une activité à un ami ou à un membre de ta famille.'],
['Le plaisir de bouger ensemble','🫶','Le meilleur défi, c’est celui où chacun participe !','Nous n’avons pas tous les mêmes capacités ni le même rythme. Adapter un mouvement permet à chacun de participer.','Encourage quelqu’un à participer à sa manière, sans comparaison.'],
['Le plaisir de bouger ensemble','🎶','S’amuser, c’est déjà bouger !','Un jeu de mime, une danse improvisée ou une partie de ballon peuvent être de véritables moments d’activité physique.','Invente un jeu actif avec tes amis ou ta famille.'],
['Le plaisir de bouger ensemble','👨‍👩‍👧','Le mouvement, ça se partage en famille !','Pratiquer une activité ensemble peut donner envie de recommencer et aider à installer des habitudes actives au quotidien.','Propose cinq minutes de danse ou de jeu en famille.'],
['Construire son capital santé','🌱','Ta santé de demain se construit aujourd’hui !','Les habitudes prises pendant l’enfance et l’adolescence peuvent t’aider à rester actif tout au long de ta vie.','Choisis une activité que tu aimerais pratiquer régulièrement.'],
['Construire son capital santé','📅','La régularité compte plus que les exploits !','Il n’est pas nécessaire de battre des records pour prendre soin de sa santé. Bouger souvent, à son rythme, est déjà une réussite.','Trouve un moment de la journée à consacrer au mouvement.'],
['Construire son capital santé','🏃','Sais-tu combien de temps il est recommandé de bouger ?','Pour les jeunes de 5 à 17 ans, l’OMS recommande en moyenne au moins 60 minutes par jour d’activité physique modérée à soutenue, sur la semaine.','Marche, joue, danse ou fais du vélo : les activités peuvent s’additionner !'],
['Construire son capital santé','🎄','Ton plus beau cadeau : l’envie de continuer à bouger !','Félicitations ! Chaque défi réalisé contribue à faire vivre le mouvement dans ton collège, ta famille et toute l’académie de Paris.','Continue à bouger avec plaisir et découvre ton attestation CAAP si tu as atteint 8 défis !']
];
function caapCount(){return Object.keys(state.done||{}).filter(k=>Number(k)>=1&&Number(k)<=24&&state.done[k]).length}
function caapLevel(n){return n>=24?['Défi accompli','DEFI ACCOMPLI']:n>=16?['Engagement','ENGAGEMENT']:n>=8?['Découverte','DECOUVERTE']:null}
function caapCertificateDate(){const now=new Date();return now>=new Date(2026,11,24,0,0,0)}
function caapRenderRewards(){
 const grid=document.getElementById('caap-gifts');if(!grid)return;const n=caapCount();grid.replaceChildren();
 CAAP_HEALTH_GIFTS.forEach((g,i)=>{const day=i+1,b=document.createElement('button');b.type='button';b.className='caap-gift'+(state.done[day]?' earned':'');b.disabled=!state.done[day];b.setAttribute('aria-label',state.done[day]?`Relire le cadeau santé du ${day} décembre`:`Cadeau du ${day} décembre, non débloqué`);b.innerHTML=(state.done[day]?g[1]:'🎁')+`<small>${day}</small>`;if(state.done[day])b.onclick=()=>caapShowGift(day,false);grid.append(b)});
 document.getElementById('caap-gift-progress').textContent=`${n} cadeau${n>1?'x':''} santé découvert${n>1?'s':''} sur 24`;
 document.getElementById('caap-attestation-bar').style.width=(n/24*100)+'%';
 [8,16,24].forEach((t,i)=>document.getElementById('caap-level-'+(i+1)).classList.toggle('active',n>=t));
 const level=caapLevel(n),status=document.getElementById('caap-attestation-status'),form=document.getElementById('caap-certificate-form'),locked=document.getElementById('caap-certificate-locked');
 if(!level){status.textContent=`${n} défi${n>1?'s':''} sur 24 · Encore ${8-n} pour décrocher l’attestation Découverte.`}
 else if(n<24){const next=n<16?16:24;status.textContent=`Bravo ! Niveau ${level[0]} atteint (${n}/24). Encore ${next-n} défi${next-n>1?'s':''} pour le niveau suivant.`}
 else status.textContent='🏆 Félicitations ! 24 défis accomplis : niveau Défi accompli !';
 const ready=caapCertificateDate()&&!!level;form.hidden=!ready;
 locked.hidden=ready;locked.textContent=!caapCertificateDate()?'🎄 Les attestations seront téléchargeables à partir du 24 décembre 2026.':!level?'🎄 Réalise au moins 8 défis pour obtenir ton attestation.':'';
}
function caapShowGift(day,celebrate){const g=CAAP_HEALTH_GIFTS[day-1];if(!g||!state.done[day])return;
 document.getElementById('caap-gift-icon').textContent=celebrate?'🎁':g[1];document.getElementById('caap-gift-theme').textContent=`Cadeau santé n°${day} · ${g[0]}`;document.getElementById('caap-gift-title').textContent=g[2];document.getElementById('caap-gift-message').textContent='Bravo ! '+g[3];document.getElementById('caap-gift-tip').textContent='🌟 Ton petit plus : '+g[4];
 const dialog=document.getElementById('caap-gift-dialog'),card=document.getElementById('caap-gift-card');card.querySelectorAll('.caap-confetti').forEach(el=>el.remove());dialog.showModal();
 if(celebrate){setTimeout(()=>{document.getElementById('caap-gift-icon').textContent=g[1]},500);if(!matchMedia('(prefers-reduced-motion: reduce)').matches){for(let i=0;i<24;i++){const s=document.createElement('span');s.className='caap-confetti';s.textContent=['❄','✦','⭐','✨','🎄'][i%5];s.style.setProperty('--x',(Math.random()*96)+'%');s.style.setProperty('--sz',(12+Math.random()*14)+'px');s.style.setProperty('--dur',(1.5+Math.random()*1.6)+'s');card.append(s);setTimeout(()=>s.remove(),3400)}}}
}
function caapAfterChallenge(day){caapRenderRewards();caapShowGift(day,true)}
// PDF autonome : format A4 paysage, images JPEG originales, aucun service externe.
function caapLatin(s){const map={'€':128,'‘':145,'’':146,'“':147,'”':148,'•':149,'–':150,'—':151,'œ':156,'Œ':140,'…':133};return Array.from(s).map(c=>map[c]??(c.charCodeAt(0)<256?c.charCodeAt(0):63))}
function caapPdfEscape(s){return String(s).replace(/[\\()]/g,m=>'\\'+m)}
async function caapMakePDF(name,count){
 const files=await Promise.all(['images/attestation-fond.jpg','images/attestation-logo-caap.jpg','images/attestation-logo-academie.jpg'].map(async url=>{let r=await fetch(url);if(!r.ok)throw Error('Image manquante : '+url);return new Uint8Array(await r.arrayBuffer())}));
 const dimensions=[[1500,600],[340,233],[220,220]]; // overwritten by actual JPEG dimensions below
 const jpegSize=b=>{let p=2;while(p<b.length){if(b[p]!==255){p++;continue}let m=b[p+1];if([0xC0,0xC1,0xC2,0xC3].includes(m))return [b[p+7]*256+b[p+8],b[p+5]*256+b[p+6]];if(m===0xD9||m===0xDA)break;let len=b[p+2]*256+b[p+3];p+=2+len}throw Error('Dimensions JPEG indisponibles')};
 const objects=[];const add=v=>(objects.push(v),objects.length);const content=[];
 const cmd=t=>content.push(t);const fill=(r,g,b)=>cmd(`${r} ${g} ${b} rg`);const text=(t,x,y,size,color=[.10,.29,.25],bold=false)=>{fill(...color);cmd(`BT /${bold?'F2':'F1'} ${size} Tf 1 0 0 1 ${x.toFixed(1)} ${y.toFixed(1)} Tm (${caapPdfEscape(t)}) Tj ET`)};
 const centered=(t,y,size,color,bold)=>{const factor=bold?.57:.51;const w=Array.from(t).length*size*factor;text(t,421-w/2,y,size,color,bold)};
 cmd('1 1 1 rg 0 0 842 595 re f');cmd('.76 .60 .32 RG 1.6 w 17 17 808 561 re S');
 cmd('q 752 0 0 288 45 226 cm /Im1 Do Q');
 cmd('q 112 0 0 77 42 478 cm /Im2 Do Q');
 cmd('q 78 0 0 78 720 477 cm /Im3 Do Q');
 centered('LE GRAND DÉFI DE NOËL CAAP',538,14,[.08,.32,.28],true);centered('24 JOURS POUR BOUGER  -  DÉCEMBRE 2026',518,10,[.76,.25,.29],true);
 const level=caapLevel(count);centered('ATTESTATION '+(level[1]==='DEFI ACCOMPLI'?'DÉFI ACCOMPLI':"D’"+level[1]),260,23,[.08,.32,.28],true);
 centered('Décernée à',235,12,[.38,.40,.37],false);
 const nameSize=name.length>35?23:name.length>25?29:35;centered(name,195,nameSize,[.09,.28,.24],true);
 fill(.90,.96,.91);cmd('245 125 352 48 re f');centered(count+' DÉFIS RÉALISÉS SUR 24',150,21,[.73,.21,.26],true);centered('NIVEAU '+level[1],133,10,[.08,.32,.28],true);
 centered('Pour sa participation au Grand Défi de Noël CAAP,',104,11,[.23,.32,.28],false);centered('son plaisir de bouger et son engagement pour la santé.',88,11,[.23,.32,.28],false);
 centered('BRAVO ! CONTINUONS À BOUGER ENSEMBLE !',56,12,[.76,.25,.29],true);
 text('Réseau CAAP - Académie de Paris',32,28,8,[.42,.46,.43]);text('24 décembre 2026',730,28,8,[.42,.46,.43]);
 const contentBytes=new Uint8Array(caapLatin(content.join('\n')+'\n'));
 const streamObj=(bytes,extra='')=>{const head=new TextEncoder().encode(`<< /Length ${bytes.length} ${extra} >>\nstream\n`),end=new TextEncoder().encode('\nendstream');const v=new Uint8Array(head.length+bytes.length+end.length);v.set(head);v.set(bytes,head.length);v.set(end,head.length+bytes.length);return v};
 add('<< /Type /Catalog /Pages 2 0 R >>');add('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');add('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> /XObject << /Im1 7 0 R /Im2 8 0 R /Im3 9 0 R >> >> /Contents 6 0 R >>');add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');add(streamObj(contentBytes));
 files.forEach(bytes=>{const [w,h]=jpegSize(bytes);add(streamObj(bytes,`/Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode`))});
 const enc=new TextEncoder(),parts=[enc.encode('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n')],offsets=[0];let pos=parts[0].length;
 objects.forEach((o,i)=>{offsets.push(pos);const h=enc.encode(`${i+1} 0 obj\n`),b=typeof o==='string'?enc.encode(o):o,e=enc.encode('\nendobj\n');parts.push(h,b,e);pos+=h.length+b.length+e.length});
 const xref=pos;let tail=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`;offsets.slice(1).forEach(x=>tail+=String(x).padStart(10,'0')+' 00000 n \n');tail+=`trailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;parts.push(enc.encode(tail));return new Blob(parts,{type:'application/pdf'});
}
async function caapDownloadCertificate(){const n=caapCount();if(!caapCertificateDate()||n<8)return;const input=document.getElementById('caap-certificate-name');const name=input.value.trim().replace(/\s+/g,' ');if(name.length<3){input.setCustomValidity('Indique ton prénom et ton nom.');input.reportValidity();return}input.setCustomValidity('');const button=document.getElementById('caap-download');button.disabled=true;button.textContent='⏳ Création de ton PDF…';try{const blob=await caapMakePDF(name,n);const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Attestation_CAAP_'+caapLevel(n)[0].normalize('NFD').replace(/[\u0300-\u036f]/g,'')+'_'+name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'_')+'.pdf';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000)}catch(e){alert('Impossible de créer le PDF : '+e.message)}finally{button.disabled=false;button.textContent='📄 Télécharger mon attestation PDF'}}
document.getElementById('caap-gift-close').onclick=()=>document.getElementById('caap-gift-dialog').close();document.getElementById('caap-gift-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});document.getElementById('caap-download').onclick=caapDownloadCertificate;document.getElementById('caap-certificate-name').addEventListener('input',e=>e.target.setCustomValidity(''));caapRenderRewards();
