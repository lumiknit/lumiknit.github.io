import"../../core-3oLTTkQG.js";import{t as e}from"../../fore-aFTbydFz.js";/* empty css                   */import{n as t,t as n}from"../../i18n-BPn1Z1hl.js";import{t as r}from"../../preload-helper-zJ_50EbN.js";var i=class{osc=null;gain=null;attack=.01;decay=.1;sustain=.5;release=.1;maxGain=.2;ctx;constructor(e){this.ctx=e}getFreq(e){return 440*2**((e-69)/12)}start(e){let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.setValueAtTime(this.getFreq(e),this.ctx.currentTime),t.type=this.type,this.setupNodes(t,n);let r=this.ctx.currentTime;n.gain.setValueAtTime(0,r),n.gain.linearRampToValueAtTime(this.maxGain,r+this.attack),n.gain.exponentialRampToValueAtTime(this.maxGain*this.sustain+.001,r+this.attack+this.decay),t.start(r),this.osc=t,this.gain=n}setupNodes(e,t){e.connect(t),t.connect(this.ctx.destination)}update(e){this.osc instanceof OscillatorNode&&this.osc.frequency.setTargetAtTime(this.getFreq(e),this.ctx.currentTime,.05)}stop(){if(!this.osc||!this.gain)return;let e=this.ctx.currentTime;this.gain.gain.cancelScheduledValues(e),this.gain.gain.setValueAtTime(this.gain.gain.value,e),this.gain.gain.exponentialRampToValueAtTime(.001,e+this.release),this.osc.stop(e+this.release+.05),this.osc=null,this.gain=null}},a=class extends i{type=`sine`},o=class extends i{type=`square`},s=class extends i{type=`sawtooth`;filter=null;setupNodes(e,t){let n=this.ctx.createBiquadFilter();n.type=`bandpass`,n.Q.value=5,e.connect(n),n.connect(t),t.connect(this.ctx.destination),this.filter=n}start(e){super.start(e),this.filter&&this.filter.frequency.setValueAtTime(this.getFreq(e)*2,this.ctx.currentTime)}update(e){if(super.update(e),this.filter){let t=this.getFreq(e);this.filter.frequency.setTargetAtTime(t*3,this.ctx.currentTime,.07)}}},c=class extends i{type=`triangle`;subOsc=null;filter=null;attack=.002;decay=.15;sustain=.3;release=.15;maxGain=.6;makeDistortionCurve(e){let t=e,n=44100,r=new Float32Array(n);for(let e=0;e<n;++e){let i=e*2/n-1;r[e]=(3+t)*i*20*(Math.PI/180)/(Math.PI+t*Math.abs(i))}return r}start(e){let t=this.ctx.currentTime,n=this.getFreq(e),r=this.ctx.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(n,t);let i=this.ctx.createGain();i.gain.value=.7;let a=this.ctx.createOscillator();a.type=`triangle`,a.frequency.setValueAtTime(n,t),a.frequency.exponentialRampToValueAtTime(n*1.05,t+.01),a.frequency.exponentialRampToValueAtTime(n,t+.04);let o=this.ctx.createGain();o.gain.value=.4;let s=this.ctx.createBiquadFilter();s.type=`lowpass`,s.Q.value=.8,s.frequency.setValueAtTime(1e3,t),s.frequency.exponentialRampToValueAtTime(250,t+.12);let c=this.ctx.createWaveShaper();c.curve=this.makeDistortionCurve(30);let l=this.ctx.createGain();r.connect(i),i.connect(s),a.connect(o),o.connect(s),s.connect(c),c.connect(l),l.connect(this.ctx.destination),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(this.maxGain,t+this.attack),l.gain.exponentialRampToValueAtTime(this.maxGain*this.sustain+.001,t+this.attack+this.decay),r.start(t),a.start(t),this.osc=a,this.subOsc=r,this.gain=l,this.filter=s}update(e){if(this.osc instanceof OscillatorNode&&this.subOsc&&this.filter){let t=this.getFreq(e),n=this.ctx.currentTime;this.osc.frequency.setTargetAtTime(t,n,.05),this.subOsc.frequency.setTargetAtTime(t,n,.05),this.filter.frequency.setTargetAtTime(t*1.5,n,.05)}}stop(){if(!this.osc||!this.subOsc||!this.gain)return;let e=this.ctx.currentTime;this.gain.gain.cancelScheduledValues(e),this.gain.gain.setValueAtTime(this.gain.gain.value,e),this.gain.gain.exponentialRampToValueAtTime(.001,e+this.release),this.osc.stop(e+this.release+.05),this.subOsc.stop(e+this.release+.05),this.osc=null,this.subOsc=null,this.gain=null}},l=null,u=new URL(`/assets/bassA034-D_1tD3js.mp3`,``+import.meta.url).href;async function d(e){if(l)return;let t=await(await fetch(u)).arrayBuffer(),n=await e.decodeAudioData(t),r=Math.floor(.1*n.sampleRate);for(let e=0;e<n.numberOfChannels;e++){let t=n.getChannelData(e),i=t.length;for(let e=0;e<r;e++){let n=i-e-1;n>=0&&(t[n]*=e/r)}}l=n}var f=class extends i{update(e){if(this.osc instanceof AudioBufferSourceNode){let t=2**((e-this.baseMidiNote)/12);this.osc.playbackRate.setTargetAtTime(t,this.ctx.currentTime,.05)}}start(e){if(!this.buffer)return;let t=this.ctx.createBufferSource();t.buffer=this.buffer;let n=2**((e-this.baseMidiNote)/12);t.playbackRate.setValueAtTime(n,this.ctx.currentTime);let r=this.ctx.createGain();this.setupNodes(t,r);let i=this.ctx.currentTime;r.gain.setValueAtTime(1,i),t.start(i),this.osc=t,this.gain=r}},p=class extends f{type=`sine`;buffer=l;baseMidiNote=42;release=.3},m=`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">\r
	<style>\r
		.label {\r
			font - family: sans-serif;\r
		font-weight: bold;\r
		font-size: 8px;\r
		text-anchor: middle;\r
		dominant-baseline: middle;\r
					}\r
		.white-key-text {\r
			fill: #000;\r
					}\r
		.black-key-text {\r
			fill: #fff;\r
					}\r
	</style>\r
\r
	<g transform="translate(100, 100)">\r
		<path\r
			d="M 0 -80 A 80 80 0 0 1 40 -69.28 L 25 -43.3 A 50 50 0 0 0 0 -50 Z"\r
			fill="#fff"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="16.8" y="-62.8" class="label white-key-text">\r
			C\r
		</text>\r
\r
		<path\r
			d="M 40 -69.28 A 80 80 0 0 1 69.28 -40 L 43.3 -25 A 50 50 0 0 0 25 -43.3 Z"\r
			fill="#000"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="46.0" y="-46.0" class="label black-key-text">\r
			C#\r
		</text>\r
\r
		<path\r
			d="M 69.28 -40 A 80 80 0 0 1 80 0 L 50 0 A 50 50 0 0 0 43.3 -25 Z"\r
			fill="#fff"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="62.8" y="-16.8" class="label white-key-text">\r
			D\r
		</text>\r
\r
		<path\r
			d="M 80 0 A 80 80 0 0 1 69.28 40 L 43.3 25 A 50 50 0 0 0 50 0 Z"\r
			fill="#000"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="62.8" y="16.8" class="label black-key-text">\r
			D#\r
		</text>\r
\r
		<path\r
			d="M 69.28 40 A 80 80 0 0 1 40 69.28 L 25 43.3 A 50 50 0 0 0 43.3 25 Z"\r
			fill="#fff"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="46.0" y="46.0" class="label white-key-text">\r
			E\r
		</text>\r
\r
		<path\r
			d="M 40 69.28 A 80 80 0 0 1 0 80 L 0 50 A 50 50 0 0 0 25 43.3 Z"\r
			fill="#fff"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="16.8" y="62.8" class="label white-key-text">\r
			F\r
		</text>\r
\r
		<path\r
			d="M 0 80 A 80 80 0 0 1 -40 69.28 L -25 43.3 A 50 50 0 0 0 0 50 Z"\r
			fill="#000"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="-16.8" y="62.8" class="label black-key-text">\r
			F#\r
		</text>\r
\r
		<path\r
			d="M -40 69.28 A 80 80 0 0 1 -69.28 40 L -43.3 25 A 50 50 0 0 0 -25 43.3 Z"\r
			fill="#fff"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="-46.0" y="46.0" class="label white-key-text">\r
			G\r
		</text>\r
\r
		<path\r
			d="M -69.28 40 A 80 80 0 0 1 -80 0 L -50 0 A 50 50 0 0 0 -43.3 25 Z"\r
			fill="#000"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="-62.8" y="16.8" class="label black-key-text">\r
			G#\r
		</text>\r
\r
		<path\r
			d="M -80 0 A 80 80 0 0 1 -69.28 -40 L -43.3 -25 A 50 50 0 0 0 -50 0 Z"\r
			fill="#fff"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="-62.8" y="-16.8" class="label white-key-text">\r
			A\r
		</text>\r
\r
		<path\r
			d="M -69.28 -40 A 80 80 0 0 1 -40 -69.28 L -25 -43.3 A 50 50 0 0 0 -43.3 -25 Z"\r
			fill="#000"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="-46.0" y="-46.0" class="label black-key-text">\r
			A#\r
		</text>\r
\r
		<path\r
			d="M -40 -69.28 A 80 80 0 0 1 0 -80 L 0 -50 A 50 50 0 0 0 -25 -43.3 Z"\r
			fill="#fff"\r
			stroke="#888"\r
			stroke-width="1"\r
		/>\r
		<text x="-16.8" y="-62.8" class="label white-key-text">\r
			B\r
		</text>\r
	</g>\r
</svg>\r
`,h=e(`keys-circle`),g=e(`microtonal-mode`),_=e(`instrument-select`),v=e(`octave-down`),y=e(`octave-up`),b=e(`octave-display`),x=e(`chord-grid`),S=e(`root-note-select`);h.innerHTML=m;var C=[{label:`1`,intervals:[0]},{label:`5`,intervals:[0,7]},{label:`Maj`,intervals:[0,4,7]},{label:`Min`,intervals:[0,3,7]},{label:`Maj7`,intervals:[0,4,7,11]},{label:`Min7`,intervals:[0,3,7,10]},{label:`7`,intervals:[0,4,7,10]},{label:`Dim`,intervals:[0,3,6]},{label:`Aug`,intervals:[0,4,8]},{label:`Sus4`,intervals:[0,5,7]},{label:`Sus2`,intervals:[0,2,7]},{label:`m7b5`,intervals:[0,3,6,10]}],w=0;C.forEach((e,t)=>{let n=document.createElement(`button`);n.className=t===w?`btn`:`btn outline`,n.textContent=e.label,n.style.padding=`0.5rem`,n.addEventListener(`pointerdown`,e=>{e.preventDefault(),w=t,Array.from(x.children).forEach((e,n)=>{e.className=n===t?`btn`:`btn outline`})}),x.appendChild(n)});var T=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],E=4,D=0;function O(){b.textContent=E.toString()}function k(){h.querySelectorAll(`text`).forEach((e,t)=>{e.textContent=T[(t+D)%12]})}var A=null,j=new Map;function M(){return A||=new(window.AudioContext||window.webkitAudioContext),A.state===`suspended`&&A.resume(),A}function N(){let e=M(),t=_.value;return t===`sine`?new a(e):t===`otamaton`?new s(e):t===`bass`?new c(e):t===`electric-bass`?new p(e):new o(e)}function P(e){let t=h.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,i=n-t.width/2,a=r-t.height/2,o=(Math.atan2(a,i)*180/Math.PI+90+360)%360,s=(E+1)*12+D;return g.checked?s+(o-15)/30:s+Math.floor(o/30)}h.addEventListener(`pointerdown`,e=>{e.preventDefault(),h.setPointerCapture(e.pointerId);let t=P(e),n=C[w].intervals,r=[];n.forEach(e=>{let n=N();n.start(t+e),r.push(n)}),j.set(e.pointerId,r)}),h.addEventListener(`pointermove`,e=>{let t=j.get(e.pointerId);if(t){let n=P(e),r=C[w].intervals;t.forEach((e,t)=>{e.update(n+(r[t]||0))})}}),h.addEventListener(`pointerup`,e=>{let t=j.get(e.pointerId);t&&(t.forEach(e=>e.stop()),j.delete(e.pointerId))}),h.addEventListener(`pointercancel`,e=>{let t=j.get(e.pointerId);t&&(t.forEach(e=>e.stop()),j.delete(e.pointerId))}),v.addEventListener(`pointerdown`,e=>{e.preventDefault(),E=Math.max(0,E-1),O()}),y.addEventListener(`pointerdown`,e=>{e.preventDefault(),E=Math.min(8,E+1),O()}),S.addEventListener(`change`,()=>{D=parseInt(S.value),k()}),_.addEventListener(`change`,()=>{_.value===`electric-bass`&&d(M())});async function F(){await t(n(Object.assign({"./lang/en.json":()=>r(()=>import(`../../en-2qr23vk0.js`).then(e=>e.default),[]),"./lang/ko.json":()=>r(()=>import(`../../ko-CWYVb0L9.js`).then(e=>e.default),[])}),`./lang/`)),_.value===`electric-bass`&&d(M())}F(),document.addEventListener(`touchstart`,e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});var I=0;document.addEventListener(`touchend`,e=>{let t=new Date().getTime();t-I<=300&&e.preventDefault(),I=t},!1);