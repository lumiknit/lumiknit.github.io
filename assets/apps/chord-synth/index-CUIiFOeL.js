import"../../core-DGw8KjpY.js";import{t as e}from"../../fore-ChilvDXH.js";/* empty css                   */import{t}from"../../i18n-CoUmNFbL.js";import{t as n}from"../../preload-helper-BZ1Pz5am.js";var r=class{osc=null;gain=null;attack=.01;decay=.1;sustain=.5;release=.1;maxGain=.2;ctx;constructor(e){this.ctx=e}getFreq(e){return 440*2**((e-69)/12)}start(e){let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.setValueAtTime(this.getFreq(e),this.ctx.currentTime),t.type=this.type,this.setupNodes(t,n);let r=this.ctx.currentTime;n.gain.setValueAtTime(0,r),n.gain.linearRampToValueAtTime(this.maxGain,r+this.attack),n.gain.exponentialRampToValueAtTime(this.maxGain*this.sustain+.001,r+this.attack+this.decay),t.start(r),this.osc=t,this.gain=n}setupNodes(e,t){e.connect(t),t.connect(this.ctx.destination)}update(e){this.osc instanceof OscillatorNode&&this.osc.frequency.setTargetAtTime(this.getFreq(e),this.ctx.currentTime,.05)}stop(){if(!this.osc||!this.gain)return;let e=this.ctx.currentTime;this.gain.gain.cancelScheduledValues(e),this.gain.gain.setValueAtTime(this.gain.gain.value,e),this.gain.gain.exponentialRampToValueAtTime(.001,e+this.release),this.osc.stop(e+this.release+.05),this.osc=null,this.gain=null}},i=class extends r{type=`sine`},a=class extends r{type=`square`},o=class extends r{type=`sawtooth`;filter=null;setupNodes(e,t){let n=this.ctx.createBiquadFilter();n.type=`bandpass`,n.Q.value=5,e.connect(n),n.connect(t),t.connect(this.ctx.destination),this.filter=n}start(e){super.start(e),this.filter&&this.filter.frequency.setValueAtTime(this.getFreq(e)*2,this.ctx.currentTime)}update(e){if(super.update(e),this.filter){let t=this.getFreq(e);this.filter.frequency.setTargetAtTime(t*3,this.ctx.currentTime,.07)}}},s=class extends r{type=`triangle`;subOsc=null;filter=null;attack=.002;decay=.15;sustain=.3;release=.15;maxGain=.6;makeDistortionCurve(e){let t=e,n=44100,r=new Float32Array(n);for(let e=0;e<n;++e){let i=e*2/n-1;r[e]=(3+t)*i*20*(Math.PI/180)/(Math.PI+t*Math.abs(i))}return r}start(e){let t=this.ctx.currentTime,n=this.getFreq(e),r=this.ctx.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(n,t);let i=this.ctx.createGain();i.gain.value=.7;let a=this.ctx.createOscillator();a.type=`triangle`,a.frequency.setValueAtTime(n,t),a.frequency.exponentialRampToValueAtTime(n*1.05,t+.01),a.frequency.exponentialRampToValueAtTime(n,t+.04);let o=this.ctx.createGain();o.gain.value=.4;let s=this.ctx.createBiquadFilter();s.type=`lowpass`,s.Q.value=.8,s.frequency.setValueAtTime(1e3,t),s.frequency.exponentialRampToValueAtTime(250,t+.12);let c=this.ctx.createWaveShaper();c.curve=this.makeDistortionCurve(30);let l=this.ctx.createGain();r.connect(i),i.connect(s),a.connect(o),o.connect(s),s.connect(c),c.connect(l),l.connect(this.ctx.destination),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(this.maxGain,t+this.attack),l.gain.exponentialRampToValueAtTime(this.maxGain*this.sustain+.001,t+this.attack+this.decay),r.start(t),a.start(t),this.osc=a,this.subOsc=r,this.gain=l,this.filter=s}update(e){if(this.osc instanceof OscillatorNode&&this.subOsc&&this.filter){let t=this.getFreq(e),n=this.ctx.currentTime;this.osc.frequency.setTargetAtTime(t,n,.05),this.subOsc.frequency.setTargetAtTime(t,n,.05),this.filter.frequency.setTargetAtTime(t*1.5,n,.05)}}stop(){if(!this.osc||!this.subOsc||!this.gain)return;let e=this.ctx.currentTime;this.gain.gain.cancelScheduledValues(e),this.gain.gain.setValueAtTime(this.gain.gain.value,e),this.gain.gain.exponentialRampToValueAtTime(.001,e+this.release),this.osc.stop(e+this.release+.05),this.subOsc.stop(e+this.release+.05),this.osc=null,this.subOsc=null,this.gain=null}},c=null,l=new URL(`/assets/bassA034-D_1tD3js.mp3`,``+import.meta.url).href;async function u(e){if(c)return;let t=await(await fetch(l)).arrayBuffer(),n=await e.decodeAudioData(t),r=Math.floor(.1*n.sampleRate);for(let e=0;e<n.numberOfChannels;e++){let t=n.getChannelData(e),i=t.length;for(let e=0;e<r;e++){let n=i-e-1;n>=0&&(t[n]*=e/r)}}c=n}var d=class extends r{update(e){if(this.osc instanceof AudioBufferSourceNode){let t=2**((e-this.baseMidiNote)/12);this.osc.playbackRate.setTargetAtTime(t,this.ctx.currentTime,.05)}}start(e){if(!this.buffer)return;let t=this.ctx.createBufferSource();t.buffer=this.buffer;let n=2**((e-this.baseMidiNote)/12);t.playbackRate.setValueAtTime(n,this.ctx.currentTime);let r=this.ctx.createGain();this.setupNodes(t,r);let i=this.ctx.currentTime;r.gain.setValueAtTime(1,i),t.start(i),this.osc=t,this.gain=r}},f=class extends d{type=`sine`;buffer=c;baseMidiNote=42;release=.3},p=`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">\r
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
`,m=e(`keys-circle`),h=e(`microtonal-mode`),g=e(`instrument-select`),_=e(`octave-down`),v=e(`octave-up`),y=e(`octave-display`),b=e(`chord-grid`),x=e(`root-note-select`);m.innerHTML=p;var S=[{label:`1`,intervals:[0]},{label:`5`,intervals:[0,7]},{label:`Maj`,intervals:[0,4,7]},{label:`Min`,intervals:[0,3,7]},{label:`Maj7`,intervals:[0,4,7,11]},{label:`Min7`,intervals:[0,3,7,10]},{label:`7`,intervals:[0,4,7,10]},{label:`Dim`,intervals:[0,3,6]},{label:`Aug`,intervals:[0,4,8]},{label:`Sus4`,intervals:[0,5,7]},{label:`Sus2`,intervals:[0,2,7]},{label:`m7b5`,intervals:[0,3,6,10]}],C=0;S.forEach((e,t)=>{let n=document.createElement(`button`);n.className=t===C?`btn`:`btn outline`,n.textContent=e.label,n.style.padding=`0.5rem`,n.addEventListener(`pointerdown`,e=>{e.preventDefault(),C=t,Array.from(b.children).forEach((e,n)=>{e.className=n===t?`btn`:`btn outline`})}),b.appendChild(n)});var w=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],T=4,E=0;function D(){y.textContent=T.toString()}function O(){m.querySelectorAll(`text`).forEach((e,t)=>{e.textContent=w[(t+E)%12]})}var k=null,A=new Map;function j(){return k||=new(window.AudioContext||window.webkitAudioContext),k.state===`suspended`&&k.resume(),k}function M(){let e=j(),t=g.value;return t===`sine`?new i(e):t===`otamaton`?new o(e):t===`bass`?new s(e):t===`electric-bass`?new f(e):new a(e)}function N(e){let t=m.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,i=n-t.width/2,a=r-t.height/2,o=(Math.atan2(a,i)*180/Math.PI+90+360)%360,s=(T+1)*12+E;return h.checked?s+(o-15)/30:s+Math.floor(o/30)}m.addEventListener(`pointerdown`,e=>{e.preventDefault(),m.setPointerCapture(e.pointerId);let t=N(e),n=S[C].intervals,r=[];n.forEach(e=>{let n=M();n.start(t+e),r.push(n)}),A.set(e.pointerId,r)}),m.addEventListener(`pointermove`,e=>{let t=A.get(e.pointerId);if(t){let n=N(e),r=S[C].intervals;t.forEach((e,t)=>{e.update(n+(r[t]||0))})}}),m.addEventListener(`pointerup`,e=>{let t=A.get(e.pointerId);t&&(t.forEach(e=>e.stop()),A.delete(e.pointerId))}),m.addEventListener(`pointercancel`,e=>{let t=A.get(e.pointerId);t&&(t.forEach(e=>e.stop()),A.delete(e.pointerId))}),_.addEventListener(`pointerdown`,e=>{e.preventDefault(),T=Math.max(0,T-1),D()}),v.addEventListener(`pointerdown`,e=>{e.preventDefault(),T=Math.min(8,T+1),D()}),x.addEventListener(`change`,()=>{E=parseInt(x.value),O()}),g.addEventListener(`change`,()=>{g.value===`electric-bass`&&u(j())});async function P(){await t(Object.assign({"./lang/en.json":()=>n(()=>import(`../../en-2qr23vk0.js`).then(e=>e.default),[]),"./lang/ko.json":()=>n(()=>import(`../../ko-CWYVb0L9.js`).then(e=>e.default),[])})),g.value===`electric-bass`&&u(j())}P(),document.addEventListener(`touchstart`,e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});var F=0;document.addEventListener(`touchend`,e=>{let t=new Date().getTime();t-F<=300&&e.preventDefault(),F=t},!1);