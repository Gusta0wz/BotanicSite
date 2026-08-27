// flores.js - Jardim Encantado & Aba Exclusiva de Particularidades Botânicas
// Suporte a Rosas em 8 cores, Girassóis, Orquídeas e Lírios-aranha
// Animações orgânicas, física de partículas, pétalas flutuantes, Web Audio e Navegação de Abas Independentes.

(() => {
  'use strict';

  // =========================================================================
  // PALETAS DE CORES BOTÂNICAS BASEADAS EM CULTIVARES REAIS E MÍSTICAS
  // =========================================================================

  const ROSE_PALETTES = [
    {
      name: 'Rosa Vermelha Aveludada (Ruby Velvet)',
      base: '#4a000b', mid: '#9b0c26', bright: '#d91b42', tip: '#ff4d6d',
      highlight: '#ff9ebb', sepal: '#2d5a27', leaf: '#1e4620',
      dew: true
    },
    {
      name: 'Rosa Suave Cor-de-Rosa (Sakura Princess)',
      base: '#731c3f', mid: '#b83b6e', bright: '#ea638c', tip: '#fbb1bd',
      highlight: '#ffffff', sepal: '#345e2a', leaf: '#234a1c',
      dew: true
    },
    {
      name: 'Rosa Amarela Solar (Golden Sunset)',
      base: '#874d00', mid: '#d97706', bright: '#f59e0b', tip: '#fde68a',
      highlight: '#fffbeb', sepal: '#386326', leaf: '#274e1b',
      dew: true
    },
    {
      name: 'Rosa Branca Marfim (Ivory Elegance)',
      base: '#8c9184', mid: '#c7cdbe', bright: '#e9ece4', tip: '#ffffff',
      highlight: '#ffffff', sepal: '#3d6132', leaf: '#2a4b22',
      dew: true
    },
    {
      name: 'Rosa Roxa Imperial (Purple Velvet)',
      base: '#240046', mid: '#5a189a', bright: '#9d4edd', tip: '#e0aaff',
      highlight: '#f3e8ff', sepal: '#31572c', leaf: '#1e3f20',
      dew: true
    },
    {
      name: 'Rosa Azul Meia-Noite (Mystic Blue)',
      base: '#03045e', mid: '#0077b6', bright: '#00b4d8', tip: '#caf0f8',
      highlight: '#ffffff', sepal: '#1f4e38', leaf: '#133927',
      dew: true
    },
    {
      name: 'Rosa Pêssego Tropical (Coral Sunset)',
      base: '#7f2612', mid: '#c84b31', bright: '#f26a4f', tip: '#ffb3a7',
      highlight: '#fff0ed', sepal: '#376228', leaf: '#254a1a',
      dew: true
    },
    {
      name: 'Rosa Negra Baccara (Black Velvet)',
      base: '#0d0004', mid: '#2c040d', bright: '#5c061a', tip: '#8f142b',
      highlight: '#bf2a45', sepal: '#1b3b18', leaf: '#11290e',
      dew: true
    }
  ];

  const SUNFLOWER_PALETTES = [
    {
      name: 'Girassol Dourado Solar (Mammoth Gold)',
      base: '#b45309', mid: '#d97706', bright: '#fbbf24', tip: '#fef08a',
      diskCenter: '#1c1007', diskInner: '#451a03', diskOuter: '#78350f', diskPollen: '#f59e0b',
      leaf: '#28581e', stem: '#3e7529'
    },
    {
      name: 'Girassol Rubi Terroso (Prado Red)',
      base: '#450a0a', mid: '#7f1d1d', bright: '#b91c1c', tip: '#ea580c',
      diskCenter: '#140505', diskInner: '#2f0808', diskOuter: '#551111', diskPollen: '#f97316',
      leaf: '#264e1c', stem: '#3b6927'
    },
    {
      name: 'Girassol Bicolor Outono (Autumn Sunburst)',
      base: '#78350f', mid: '#991b1b', bright: '#d97706', tip: '#fde047',
      diskCenter: '#190d05', diskInner: '#3b1807', diskOuter: '#682909', diskPollen: '#fbbf24',
      leaf: '#28551f', stem: '#3c6e2a'
    },
    {
      name: 'Girassol Limão Suave (Lemon Queen)',
      base: '#854d0e', mid: '#ca8a04', bright: '#facc15', tip: '#fef9c3',
      diskCenter: '#1b1206', diskInner: '#3e2508', diskOuter: '#713f12', diskPollen: '#fde047',
      leaf: '#2b5a20', stem: '#41772c'
    },
    {
      name: 'Girassol Branco Baunilha (Italian White)',
      base: '#713f12', mid: '#a16207', bright: '#fef08a', tip: '#fffdf0',
      diskCenter: '#1a1106', diskInner: '#38200b', diskOuter: '#633511', diskPollen: '#fde68a',
      leaf: '#27521c', stem: '#3b6e27'
    }
  ];

  const ORCHID_PALETTES = [
    {
      name: 'Orquídea Branca Nupcial (Phalaenopsis Amabilis)',
      petal: '#ffffff', petalBase: '#e2e8f0', lipCenter: '#f59e0b', lipEdge: '#dc2626',
      speckles: '#991b1b', throat: '#fef08a'
    },
    {
      name: 'Orquídea Rosa Fúcsia (Phalaenopsis Schilleriana)',
      petal: '#f472b6', petalBase: '#be185d', lipCenter: '#fbbf24', lipEdge: '#831843',
      speckles: '#500724', throat: '#fde68a'
    },
    {
      name: 'Orquídea Amarela Tigrada (Golden Sunset)',
      petal: '#fef08a', petalBase: '#eab308', lipCenter: '#ea580c', lipEdge: '#b91c1c',
      speckles: '#78350f', throat: '#fffbeb'
    },
    {
      name: 'Orquídea Lilás Crepúsculo (Pastel Lavender)',
      petal: '#e9d5ff', petalBase: '#a855f7', lipCenter: '#f59e0b', lipEdge: '#6b21a8',
      speckles: '#581c87', throat: '#faf5ff'
    },
    {
      name: 'Orquídea Azul Cascata (Sapphire Cascades)',
      petal: '#7dd3fc', petalBase: '#0284c7', lipCenter: '#fbbf24', lipEdge: '#0369a1',
      speckles: '#0c4a6e', throat: '#e0f2fe'
    }
  ];

  const SPIDER_LILY_PALETTES = [
    {
      name: 'Lírio-Aranha Vermelho (Lycoris Radiata)',
      color: '#dc2626', light: '#f87171', dark: '#7f1d1d', stamenColor: '#ef4444', anther: '#fbbf24'
    },
    {
      name: 'Lírio-Aranha Branco Fantasma (Lycoris Alba)',
      color: '#f8fafc', light: '#ffffff', dark: '#94a3b8', stamenColor: '#e2e8f0', anther: '#fde047'
    },
    {
      name: 'Lírio-Aranha Dourado (Lycoris Aurea)',
      color: '#f59e0b', light: '#fde68a', dark: '#92400e', stamenColor: '#fbbf24', anther: '#b45309'
    },
    {
      name: 'Lírio-Aranha Rosa Choque (Lycoris Sprengeri)',
      color: '#ec4899', light: '#fbcfe8', dark: '#9d174d', stamenColor: '#f472b6', anther: '#67e8f9'
    },
    {
      name: 'Lírio-Aranha Azul Meia-Noite (Mystic Indigo)',
      color: '#3b82f6', light: '#93c5fd', dark: '#1e3a8a', stamenColor: '#60a5fa', anther: '#c084fc'
    }
  ];

  // Limites e tempos
  const MAX_FLOWERS = 45;
  const LIFESPAN_MS = 6200;
  const FADE_MS = 1800;

  let activeFlowers = [];
  let currentFilter = 'all';
  let currentActiveView = 'view-garden';
  let isAutoMode = false;
  let autoTimer = null;
  let soundEnabled = true;
  let audioCtx = null;

  const randRange = (min, max) => Math.random() * (max - min) + min;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const uid = () => 'f' + Math.random().toString(36).substring(2, 9);

  function shade(hex, percent) {
    let color = hex.replace('#', '');
    if (color.length === 3) color = color.split('').map(c => c + c).join('');
    const num = parseInt(color, 16);
    const clamp = (v) => Math.max(0, Math.min(255, v));
    const r = clamp((num >> 16) + Math.round(255 * percent));
    const g = clamp(((num >> 8) & 0xff) + Math.round(255 * percent));
    const b = clamp((num & 0xff) + Math.round(255 * percent));
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  // =========================================================================
  // SISTEMA DE ÁUDIO SINTETIZADO (Web Audio API)
  // =========================================================================
  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playBloomSound(frequencyMultiplier = 1) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const pentatonicScale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
      const baseFreq = pick(pentatonicScale) * frequencyMultiplier;
      const now = audioCtx.currentTime;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.05, now + 0.35);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.075, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

      const overtone = audioCtx.createOscillator();
      const overGain = audioCtx.createGain();
      overtone.type = 'triangle';
      overtone.frequency.setValueAtTime(baseFreq * 2, now);
      overGain.gain.setValueAtTime(0.001, now);
      overGain.gain.linearRampToValueAtTime(0.025, now + 0.03);
      overGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.connect(gain);
      overtone.connect(overGain);
      gain.connect(audioCtx.destination);
      overGain.connect(audioCtx.destination);

      osc.start(now);
      overtone.start(now);
      osc.stop(now + 0.75);
      overtone.stop(now + 0.5);
    } catch (e) {
      // Silencioso se bloqueado pelo navegador
    }
  }

  // =========================================================================
  // GERADORES DE PATHS SVG BOTÂNICOS
  // =========================================================================

  function petalOrganicPath({ length, width, taper = 0.5, curl = 0, jitter = 0 }) {
    const j = () => randRange(-jitter, jitter);
    const w = width;
    const l = length;
    const tipX = curl + j();
    return (
      `M0,0 ` +
      `C${(-w * 0.45 + j()).toFixed(1)},${(-l * 0.2).toFixed(1)} ` +
      `${(-w * taper + j()).toFixed(1)},${(-l * 0.5).toFixed(1)} ` +
      `${(-w * 0.7 + j()).toFixed(1)},${(-l * 0.75).toFixed(1)} ` +
      `C${(-w * 0.5 + j()).toFixed(1)},${(-l * 0.9).toFixed(1)} ` +
      `${(-w * 0.2 + j()).toFixed(1)},${(-l * 0.98).toFixed(1)} ` +
      `${tipX.toFixed(1)},${(-l).toFixed(1)} ` +
      `C${(w * 0.2 + j()).toFixed(1)},${(-l * 0.98).toFixed(1)} ` +
      `${(w * 0.5 + j()).toFixed(1)},${(-l * 0.9).toFixed(1)} ` +
      `${(w * 0.7 + j()).toFixed(1)},${(-l * 0.75).toFixed(1)} ` +
      `C${(w * taper + j()).toFixed(1)},${(-l * 0.5).toFixed(1)} ` +
      `${(w * 0.45 + j()).toFixed(1)},${(-l * 0.2).toFixed(1)} ` +
      `0,0 Z`
    );
  }

  function buildLeafMarkup(x, y, angle, scale = 1, leafColor = '#2d5a27') {
    const l = 68 * scale;
    const w = 32 * scale;
    const veinPath = `M0,0 Q${randRange(-3, 3).toFixed(1)},${(-l * 0.5).toFixed(1)} 0,${(-l * 0.95).toFixed(1)}`;
    const sideVeins = [-0.25, -0.45, -0.65, -0.8].map((prog) => {
      const vy = -l * Math.abs(prog);
      const span = w * (1 - Math.abs(prog + 0.4) * 0.85);
      return `
        <path d="M0,${vy.toFixed(1)} Q${(-span * 0.5).toFixed(1)},${(vy - 6).toFixed(1)} ${(-span).toFixed(1)},${(vy - 12).toFixed(1)}" class="leaf-vein"/>
        <path d="M0,${vy.toFixed(1)} Q${(span * 0.5).toFixed(1)},${(vy - 6).toFixed(1)} ${(span).toFixed(1)},${(vy - 12).toFixed(1)}" class="leaf-vein"/>
      `;
    }).join('');

    return `
      <g transform="translate(${x},${y}) rotate(${angle})">
        <path class="flower-leaf" fill="${leafColor}" stroke="${shade(leafColor, -0.2)}" stroke-width="0.8"
          d="M0,0 C${(-w * 0.6).toFixed(1)},${(-l * 0.25).toFixed(1)} ${(-w).toFixed(1)},${(-l * 0.6).toFixed(1)} 0,${(-l).toFixed(1)} C${(w).toFixed(1)},${(-l * 0.6).toFixed(1)} ${(w * 0.6).toFixed(1)},${(-l * 0.25).toFixed(1)} 0,0 Z"/>
        <path d="${veinPath}" class="leaf-vein" stroke-width="1.2"/>
        ${sideVeins}
      </g>
    `;
  }

  function stemPath(length, bend = 0) {
    const midX = randRange(-8, 8) + bend;
    const endX = randRange(-5, 5) + bend * 1.5;
    return `M0,4 Q${midX.toFixed(1)},${(length * 0.52).toFixed(1)} ${endX.toFixed(1)},${length.toFixed(1)}`;
  }

  function stemMarkup(id, length, color = '#3a6e2d', withThorns = false, bend = 0) {
    const d = stemPath(length, bend);
    let thornsMarkup = '';
    if (withThorns) {
      const thornY1 = length * 0.35;
      const thornY2 = length * 0.68;
      thornsMarkup = `
        <path d="M-2,${thornY1.toFixed(1)} Q-7,${(thornY1 + 4).toFixed(1)} -12,${(thornY1 + 10).toFixed(1)} Q-5,${(thornY1 + 8).toFixed(1)} -1,${(thornY1 + 12).toFixed(1)} Z" fill="${shade(color, -0.25)}"/>
        <path d="M2,${thornY2.toFixed(1)} Q7,${(thornY2 + 3).toFixed(1)} 11,${(thornY2 + 9).toFixed(1)} Q5,${(thornY2 + 7).toFixed(1)} 1,${(thornY2 + 11).toFixed(1)} Z" fill="${shade(color, -0.25)}"/>
      `;
    }
    return `
      <defs>
        <linearGradient id="stemGrad-${id}" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${shade(color, -0.25)}"/>
          <stop offset="45%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${shade(color, 0.25)}"/>
        </linearGradient>
      </defs>
      <path d="${d}" stroke="url(#stemGrad-${id})" stroke-width="6.5" fill="none" stroke-linecap="round"/>
      <path d="${d}" transform="translate(-1.6,-0.5)" stroke="#c2f08a" stroke-opacity="0.32" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      ${thornsMarkup}
    `;
  }

  function dewDropMarkup(cx, cy, r = 2.5) {
    return `
      <g transform="translate(${cx.toFixed(1)},${cy.toFixed(1)})">
        <ellipse cx="0" cy="0" rx="${r.toFixed(1)}" ry="${(r * 0.85).toFixed(1)}" fill="rgba(255,255,255,0.75)" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.5))"/>
        <ellipse cx="${(-r * 0.35).toFixed(1)}" cy="${(-r * 0.3).toFixed(1)}" rx="${(r * 0.35).toFixed(1)}" ry="${(r * 0.25).toFixed(1)}" fill="#ffffff"/>
      </g>
    `;
  }

  // =========================================================================
  // 1. GERADOR REALISTA: ROSA (Rose)
  // =========================================================================
  function buildRoseSVG() {
    const palette = pick(ROSE_PALETTES);
    const id = uid();

    let sepals = '';
    const sepalCount = 5;
    for (let i = 0; i < sepalCount; i++) {
      const ang = (360 / sepalCount) * i + randRange(-6, 6);
      const sLen = randRange(48, 62);
      const sWid = randRange(10, 14);
      sepals += `
        <g transform="rotate(${ang})">
          <path d="M0,0 C${(-sWid * 0.5).toFixed(1)},${(-sLen * 0.3).toFixed(1)} ${(-sWid).toFixed(1)},${(-sLen * 0.7).toFixed(1)} 0,${(-sLen).toFixed(1)} C${(sWid).toFixed(1)},${(-sLen * 0.7).toFixed(1)} ${(sWid * 0.5).toFixed(1)},${(-sLen * 0.3).toFixed(1)} 0,0 Z"
            fill="${palette.sepal}" stroke="${shade(palette.sepal, -0.2)}" stroke-width="0.8"/>
        </g>
      `;
    }

    let petalLayers = '';

    const outerCount = 7;
    for (let i = 0; i < outerCount; i++) {
      const rot = (360 / outerCount) * i + randRange(-7, 7);
      const len = randRange(62, 74);
      const wid = randRange(48, 56);
      petalLayers += `
        <g transform="rotate(${rot.toFixed(1)})" class="rose-petal-layer">
          <path class="petal" fill="url(#roseOuterGrad-${id})" stroke="${shade(palette.mid, -0.3)}"
            d="${petalOrganicPath({ length: len, width: wid, taper: 0.85, curl: randRange(-4, 4), jitter: 2 })}"/>
          <path class="petal-vein" d="M0,-5 Q${randRange(-3, 3).toFixed(1)},${(-len * 0.5).toFixed(1)} 0,${(-len * 0.88).toFixed(1)}"/>
        </g>`;
    }

    const midCount = 6;
    for (let i = 0; i < midCount; i++) {
      const rot = (360 / midCount) * i + 25 + randRange(-6, 6);
      const len = randRange(48, 58);
      const wid = randRange(38, 46);
      petalLayers += `
        <g transform="rotate(${rot.toFixed(1)})" class="rose-petal-layer">
          <path class="petal" fill="url(#roseMidGrad-${id})" stroke="${shade(palette.base, -0.2)}"
            d="${petalOrganicPath({ length: len, width: wid, taper: 0.75, curl: randRange(-3, 3), jitter: 1.5 })}"/>
        </g>`;
    }

    const innerCount = 5;
    for (let i = 0; i < innerCount; i++) {
      const rot = (360 / innerCount) * i + 50 + randRange(-5, 5);
      const len = randRange(34, 42);
      const wid = randRange(26, 32);
      petalLayers += `
        <g transform="rotate(${rot.toFixed(1)})" class="rose-petal-layer">
          <path class="petal" fill="url(#roseInnerGrad-${id})" stroke="${shade(palette.base, -0.3)}"
            d="${petalOrganicPath({ length: len, width: wid, taper: 0.65, curl: randRange(-2, 2), jitter: 1 })}"/>
        </g>`;
    }

    const spiralCore = `
      <g transform="scale(0.85)">
        <ellipse cx="0" cy="-2" rx="14" ry="11" fill="${palette.base}"/>
        <path d="M-8,-4 C-6,-14 6,-14 9,-4 C11,4 -2,9 -7,4 C-10,0 2,-4 5,-1" fill="none" stroke="${palette.bright}" stroke-width="2.6" stroke-linecap="round"/>
        <circle cx="0" cy="-2" r="3.5" fill="${palette.tip}"/>
      </g>
    `;

    const dew1 = dewDropMarkup(randRange(-28, 28), randRange(-45, -15), randRange(2.2, 3.4));
    const dew2 = dewDropMarkup(randRange(-35, 35), randRange(5, 35), randRange(1.8, 2.8));

    const leafLeft = buildLeafMarkup(-24, 75, -55, randRange(0.85, 1.05), palette.leaf);
    const leafRight = buildLeafMarkup(22, 105, 50, randRange(0.75, 0.95), palette.leaf);

    const svg = `
      <svg viewBox="-115 -115 230 260" class="flower-svg rose-svg">
        <defs>
          <radialGradient id="roseOuterGrad-${id}" cx="50%" cy="80%" r="75%">
            <stop offset="0%" stop-color="${palette.base}"/>
            <stop offset="45%" stop-color="${palette.mid}"/>
            <stop offset="85%" stop-color="${palette.bright}"/>
            <stop offset="100%" stop-color="${palette.tip}"/>
          </radialGradient>
          <radialGradient id="roseMidGrad-${id}" cx="50%" cy="70%" r="80%">
            <stop offset="0%" stop-color="${palette.base}"/>
            <stop offset="55%" stop-color="${palette.mid}"/>
            <stop offset="100%" stop-color="${palette.bright}"/>
          </radialGradient>
          <radialGradient id="roseInnerGrad-${id}" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stop-color="${shade(palette.base, -0.15)}"/>
            <stop offset="65%" stop-color="${palette.base}"/>
            <stop offset="100%" stop-color="${palette.mid}"/>
          </radialGradient>
        </defs>
        ${stemMarkup(id, randRange(100, 125), palette.sepal, true)}
        ${leafLeft}
        ${leafRight}
        <g class="sepals">${sepals}</g>
        <g class="petals-group">${petalLayers}</g>
        ${spiralCore}
        ${dew1}
        ${dew2}
      </svg>
    `;

    return { svg, speciesName: `🌹 ${palette.name}` };
  }

  // =========================================================================
  // 2. GERADOR REALISTA: GIRASSOL (Sunflower)
  // =========================================================================
  function buildSunflowerSVG() {
    const palette = pick(SUNFLOWER_PALETTES);
    const id = uid();

    let petals = '';

    const outerCount = 22;
    for (let i = 0; i < outerCount; i++) {
      const rot = (360 / outerCount) * i + randRange(-3, 3);
      const len = randRange(85, 98);
      const wid = randRange(20, 25);
      petals += `
        <g transform="rotate(${rot.toFixed(1)})">
          <path class="petal" fill="url(#sunOuterGrad-${id})" stroke="${shade(palette.mid, -0.25)}"
            d="${petalOrganicPath({ length: len, width: wid, taper: 0.6, curl: randRange(-3, 3), jitter: 1.5 })}"/>
          <path class="petal-vein" stroke="#ffffff" stroke-opacity="0.3" d="M0,-8 Q${randRange(-2, 2).toFixed(1)},${(-len * 0.5).toFixed(1)} 0,${(-len * 0.94).toFixed(1)}"/>
        </g>`;
    }

    const innerCount = 20;
    for (let i = 0; i < innerCount; i++) {
      const rot = (360 / innerCount) * i + (180 / innerCount) + randRange(-3, 3);
      const len = randRange(72, 82);
      const wid = randRange(18, 23);
      petals += `
        <g transform="rotate(${rot.toFixed(1)})">
          <path class="petal" fill="url(#sunInnerGrad-${id})" stroke="${shade(palette.base, -0.2)}"
            d="${petalOrganicPath({ length: len, width: wid, taper: 0.55, curl: randRange(-2, 2), jitter: 1.2 })}"/>
        </g>`;
    }

    const diskRadius = 40;
    const seedDots = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const totalSeeds = 72;

    for (let i = 1; i <= totalSeeds; i++) {
      const r = Math.sqrt(i / totalSeeds) * (diskRadius - 4);
      const theta = i * 2 * Math.PI * goldenRatio;
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      const dotR = randRange(0.9, 1.6);
      const isPollenEdge = r > diskRadius * 0.65;
      const dotColor = isPollenEdge ? palette.diskPollen : shade(palette.diskInner, randRange(0, 0.4));
      seedDots.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${dotR.toFixed(1)}" fill="${dotColor}" opacity="${randRange(0.6, 0.95).toFixed(2)}"/>`);
    }

    const leafLeft = buildLeafMarkup(-30, 85, -60, randRange(1.1, 1.35), palette.leaf);
    const leafRight = buildLeafMarkup(28, 115, 55, randRange(0.95, 1.2), palette.leaf);

    const svg = `
      <svg viewBox="-135 -135 270 295" class="flower-svg sunflower-svg">
        <defs>
          <radialGradient id="sunOuterGrad-${id}" cx="50%" cy="92%" r="90%">
            <stop offset="0%" stop-color="${palette.base}"/>
            <stop offset="40%" stop-color="${palette.mid}"/>
            <stop offset="80%" stop-color="${palette.bright}"/>
            <stop offset="100%" stop-color="${palette.tip}"/>
          </radialGradient>
          <radialGradient id="sunInnerGrad-${id}" cx="50%" cy="85%" r="85%">
            <stop offset="0%" stop-color="${palette.base}"/>
            <stop offset="50%" stop-color="${palette.bright}"/>
            <stop offset="100%" stop-color="${palette.tip}"/>
          </radialGradient>
          <radialGradient id="diskGrad-${id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${palette.diskCenter}"/>
            <stop offset="60%" stop-color="${palette.diskInner}"/>
            <stop offset="85%" stop-color="${palette.diskOuter}"/>
            <stop offset="100%" stop-color="${palette.diskPollen}"/>
          </radialGradient>
        </defs>
        ${stemMarkup(id, randRange(110, 135), palette.stem, false)}
        ${leafLeft}
        ${leafRight}
        <g class="petals-all">${petals}</g>
        <g class="sunflower-disk">
          <circle cx="0" cy="0" r="${diskRadius}" fill="url(#diskGrad-${id})" stroke="${palette.diskOuter}" stroke-width="1.8"/>
          <circle cx="0" cy="0" r="${(diskRadius * 0.95).toFixed(1)}" fill="none" stroke="${palette.diskPollen}" stroke-dasharray="2 3" stroke-width="1.2" opacity="0.8"/>
          ${seedDots.join('')}
        </g>
        ${dewDropMarkup(randRange(-45, 45), randRange(-75, -50), randRange(2, 3))}
      </svg>
    `;

    return { svg, speciesName: `🌻 ${palette.name}` };
  }

  // =========================================================================
  // 3. GERADOR REALISTA: ORQUÍDEA (Orchid)
  // =========================================================================
  function buildOrchidSVG() {
    const palette = pick(ORCHID_PALETTES);
    const id = uid();

    const segments = [
      { angle: -130, isWide: false },
      { angle: -65, isWide: true },
      { angle: 0, isWide: false },
      { angle: 65, isWide: true },
      { angle: 130, isWide: false },
    ];

    const petalStroke = shade(palette.petalBase, -0.2);
    const petals = segments.map(({ angle, isWide }) => {
      const a = angle + randRange(-3, 3);
      const width = isWide ? randRange(48, 56) : randRange(32, 40);
      const length = isWide ? randRange(66, 75) : randRange(72, 82);
      return `
        <g transform="rotate(${a.toFixed(1)})">
          <path class="petal" stroke="${petalStroke}" fill="url(#orchidPetalGrad-${id})"
            d="${petalOrganicPath({ length, width, taper: isWide ? 0.9 : 0.65, curl: 0, jitter: 1.2 })}"/>
          <path class="petal-vein" stroke="${shade(palette.petalBase, -0.15)}" stroke-opacity="0.35"
            d="M0,-4 Q${randRange(-2, 2).toFixed(1)},${(-length * 0.5).toFixed(1)} 0,${(-length * 0.92).toFixed(1)}"/>
        </g>`;
    }).join('');

    const speckles = Array.from({ length: 9 }, () => {
      const x = randRange(-8, 8);
      const y = randRange(-20, -2);
      const r = randRange(0.6, 1.3);
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${palette.speckles}" opacity="0.8"/>`;
    }).join('');

    const leaf = buildLeafMarkup(-22, 70, -50, 0.9, '#22541f');

    const svg = `
      <svg viewBox="-95 -95 190 225" class="flower-svg orchid-svg">
        <defs>
          <radialGradient id="orchidPetalGrad-${id}" cx="50%" cy="75%" r="80%">
            <stop offset="0%" stop-color="${palette.petalBase}"/>
            <stop offset="45%" stop-color="${palette.petal}"/>
            <stop offset="100%" stop-color="${palette.petal}"/>
          </radialGradient>
          <radialGradient id="orchidLipGrad-${id}" cx="50%" cy="15%" r="90%">
            <stop offset="0%" stop-color="${palette.throat}"/>
            <stop offset="50%" stop-color="${palette.lipCenter}"/>
            <stop offset="100%" stop-color="${palette.lipEdge}"/>
          </radialGradient>
        </defs>
        ${stemMarkup(id, randRange(95, 115), '#326628', false)}
        ${leaf}
        <g class="petals-group">${petals}</g>
        <g class="orchid-lip" transform="translate(0, 10)" fill="url(#orchidLipGrad-${id})">
          <path transform="rotate(180)" d="${petalOrganicPath({ length: 32, width: 26, taper: 0.8, jitter: 1 })}"/>
          <ellipse cx="-10" cy="-6" rx="5.5" ry="9" transform="rotate(28)"/>
          <ellipse cx="10" cy="-6" rx="5.5" ry="9" transform="rotate(-28)"/>
          ${speckles}
          <ellipse cx="0" cy="-1" rx="4.5" ry="3.5" fill="#fffdec" stroke="${palette.lipEdge}" stroke-width="0.8"/>
        </g>
        ${dewDropMarkup(randRange(-25, 25), randRange(-45, -20), randRange(1.8, 2.5))}
      </svg>
    `;

    return { svg, speciesName: `🌸 ${palette.name}` };
  }

  // =========================================================================
  // 4. GERADOR REALISTA: LÍRIO DA ARANHA (Spider Lily)
  // =========================================================================
  function buildSpiderLilySVG() {
    const palette = pick(SPIDER_LILY_PALETTES);
    const id = uid();

    function buildUmbelHead(color, light, stamenCol, antherCol, scale) {
      const petalCount = 6;
      const stamenCount = 7;
      const petalArc = 230;
      const stamenArc = 250;
      let petals = '';
      let stamens = '';

      for (let i = 0; i < petalCount; i++) {
        const angle = -petalArc / 2 + (petalArc / (petalCount - 1)) * i + randRange(-5, 5);
        const length = randRange(80, 96) * scale;
        const width = randRange(13, 18) * scale;
        petals += `
          <g transform="rotate(${angle.toFixed(1)})">
            <path class="petal" stroke="${shade(color, -0.3)}" d="${petalOrganicPath({ length, width, taper: 0.5, curl: randRange(-6, 6), jitter: 2 })}"/>
            <path class="petal-vein" stroke="${light}" stroke-opacity="0.4" d="M0,-4 Q${randRange(-3, 3).toFixed(1)},${(-length * 0.5).toFixed(1)} 0,${(-length * 0.95).toFixed(1)}"/>
          </g>`;
      }

      for (let i = 0; i < stamenCount; i++) {
        const angle = -stamenArc / 2 + (stamenArc / (stamenCount - 1)) * i + randRange(-6, 6);
        const bend = randRange(-18, 18);
        const length = randRange(120, 148) * scale;
        const tipX = (bend * 1.35).toFixed(1);
        const tipY = (-length).toFixed(1);
        stamens += `
          <g transform="rotate(${angle.toFixed(1)})">
            <path class="stamen" d="M0,0 Q${bend.toFixed(1)},${(-length * 0.55).toFixed(1)} ${tipX},${tipY}" stroke="${stamenCol}"/>
            <circle class="anther" cx="${tipX}" cy="${tipY}" r="${(3.2 * scale).toFixed(1)}" fill="${antherCol}"/>
          </g>`;
      }

      return `<g class="umbel-head">${stamens}${petals}</g>`;
    }

    const heads = [
      { x: 0, y: -10, scale: 1, rot: 0 },
      { x: -36, y: 15, scale: 0.65, rot: -14 },
      { x: 35, y: 18, scale: 0.62, rot: 12 },
    ];

    const headsMarkup = heads
      .map((h) => `<g transform="translate(${h.x},${h.y}) rotate(${h.rot}) scale(${h.scale})">${buildUmbelHead(palette.color, palette.light, palette.stamenColor, palette.anther, 1)}</g>`)
      .join('');

    const svg = `
      <svg viewBox="-200 -185 400 350" class="flower-svg spider-svg">
        <defs>
          <radialGradient id="spiderPetalGrad-${id}" cx="50%" cy="92%" r="90%">
            <stop offset="0%" stop-color="${palette.light}" stop-opacity="0.9"/>
            <stop offset="35%" stop-color="${palette.color}"/>
            <stop offset="100%" stop-color="${palette.dark}"/>
          </radialGradient>
        </defs>
        ${stemMarkup(id, randRange(105, 128), '#305c24', false)}
        <g fill="url(#spiderPetalGrad-${id})">${headsMarkup}</g>
        ${dewDropMarkup(randRange(-20, 20), randRange(-25, 0), randRange(2.2, 3.2))}
      </svg>
    `;

    return { svg, speciesName: `🌺 ${palette.name}` };
  }

  // =========================================================================
  // SISTEMA DE PARTÍCULAS E BRILHOS AO CLICAR
  // =========================================================================
  function createBloomBurst(x, y) {
    const particleCount = 14 + Math.floor(Math.random() * 8);
    const colors = ['#ffd166', '#ff9ebb', '#fde047', '#ffffff', '#c084fc', '#67e8f9'];

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.className = 'sparkle-particle';

      const angle = Math.random() * Math.PI * 2;
      const distance = randRange(35, 120);
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const size = randRange(3, 7);

      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.backgroundColor = pick(colors);
      p.style.boxShadow = `0 0 ${size * 2}px ${p.style.backgroundColor}`;
      p.style.setProperty('--tx', `${tx}px`);
      p.style.setProperty('--ty', `${ty}px`);

      document.body.appendChild(p);
      setTimeout(() => p.remove(), 950);
    }
  }

  // =========================================================================
  // ORQUESTRAÇÃO DE PLANTIO DAS FLORES (NO JARDIM INTERATIVO)
  // =========================================================================
  const toastEl = document.getElementById('species-toast');
  let toastTimer = null;

  function showSpeciesToast(name) {
    if (!toastEl) return;
    toastEl.textContent = name;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2200);
  }

  function plantFlower(x, y, forceType = null) {
    const gardenView = document.getElementById('view-garden');
    if (!gardenView) return;

    if (activeFlowers.length >= MAX_FLOWERS) {
      const oldest = activeFlowers.shift();
      clearTimeout(oldest.timer);
      oldest.el.remove();
    }

    let flowerData;
    let chosenType = forceType || currentFilter;
    if (chosenType === 'all') {
      chosenType = pick(['rose', 'sunflower', 'orchid', 'spider']);
    }

    switch (chosenType) {
      case 'rose':
        flowerData = buildRoseSVG();
        break;
      case 'sunflower':
        flowerData = buildSunflowerSVG();
        break;
      case 'orchid':
        flowerData = buildOrchidSVG();
        break;
      case 'spider':
      default:
        flowerData = buildSpiderLilySVG();
        break;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'flower-wrapper';
    wrapper.style.left = `${x}px`;
    wrapper.style.top = `${y}px`;

    const isMobile = window.innerWidth <= 768;
    const minScale = isMobile ? 0.75 : 0.84;
    const maxScale = isMobile ? 1.02 : 1.20;

    const bloom = document.createElement('div');
    bloom.className = 'flower-bloom';
    bloom.style.setProperty('--final-scale', randRange(minScale, maxScale).toFixed(2));
    bloom.style.setProperty('--initial-rot', `${randRange(-18, 18).toFixed(1)}deg`);

    const sway = document.createElement('div');
    sway.className = 'flower-sway';
    sway.style.setProperty('--sway-deg', `${randRange(2.2, 4.2).toFixed(1)}deg`);
    sway.style.animationDelay = `-${randRange(0, 5).toFixed(2)}s`;
    sway.style.animationDuration = `${randRange(3.8, 6.2).toFixed(2)}s`;
    sway.innerHTML = flowerData.svg;

    bloom.appendChild(sway);
    wrapper.appendChild(bloom);
    gardenView.appendChild(wrapper);

    createBloomBurst(x, y);
    playBloomSound();
    showSpeciesToast(flowerData.speciesName);

    const timer = setTimeout(() => {
      wrapper.classList.add('fading');
      setTimeout(() => {
        wrapper.remove();
        const idx = activeFlowers.findIndex((f) => f.el === wrapper);
        if (idx !== -1) activeFlowers.splice(idx, 1);
      }, FADE_MS);
    }, LIFESPAN_MS);

    activeFlowers.push({ el: wrapper, timer });
  }

  function clearAllFlowers() {
    activeFlowers.forEach((f) => {
      clearTimeout(f.timer);
      f.el.classList.add('fading');
      setTimeout(() => f.el.remove(), 600);
    });
    activeFlowers = [];
  }

  // =========================================================================
  // CANVAS AMBIENTAL: VAGA-LUMES, PÓLEN E PÉTALAS FLUTUANTES
  // =========================================================================
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: randRange(1, 2.6),
      vx: randRange(-0.35, 0.35),
      vy: randRange(-0.55, -0.15),
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: randRange(0.02, 0.05),
      color: pick(['255, 209, 102', '247, 143, 179', '162, 155, 254', '129, 236, 236', '255, 255, 255'])
    }));

    const petals = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: randRange(6, 14),
      speedY: randRange(0.4, 1.2),
      speedX: randRange(-0.4, 0.8),
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: randRange(-0.02, 0.02),
      color: pick(['rgba(255, 117, 160, 0.35)', 'rgba(254, 240, 138, 0.3)', 'rgba(235, 80, 165, 0.3)', 'rgba(240, 160, 180, 0.25)'])
    }));

    function renderAmbient() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.pulseSpeed;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const alpha = 0.25 + 0.55 * Math.sin(p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, alpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
      });

      petals.forEach((pt) => {
        pt.y += pt.speedY;
        pt.x += pt.speedX + Math.sin(pt.y * 0.01) * 0.4;
        pt.rotation += pt.rotSpeed;

        if (pt.y > height + 20) {
          pt.y = -20;
          pt.x = Math.random() * width;
        }
        if (pt.x > width + 20) pt.x = -20;
        if (pt.x < -20) pt.x = width + 20;

        ctx.save();
        ctx.translate(pt.x, pt.y);
        ctx.rotate(pt.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, pt.size, pt.size * 0.55, Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = pt.color;
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(renderAmbient);
    }

    renderAmbient();
  }

  // =========================================================================
  // CONTROLE DE NAVEGAÇÃO ENTRE ABAS PRINCIPAIS E EVENTOS DO JARDIM
  // =========================================================================
  function initNavigationAndControls() {
    const mainTabBtns = document.querySelectorAll('.main-tab-btn');
    const viewSections = document.querySelectorAll('.view-section');

    function switchView(targetViewId) {
      currentActiveView = targetViewId;

      mainTabBtns.forEach((btn) => {
        if (btn.dataset.view === targetViewId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      viewSections.forEach((sec) => {
        if (sec.id === targetViewId) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
    }

    mainTabBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        switchView(btn.dataset.view);
      });
    });

    // Filtros de flores no jardim
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.type;
      });
    });

    // Toggle do card explicativo no jardim (Mobile & Desktop)
    const btnToggleIntro = document.getElementById('btn-toggle-intro');
    const gardenIntroCard = document.getElementById('garden-intro-card');
    if (btnToggleIntro && gardenIntroCard) {
      btnToggleIntro.addEventListener('click', (e) => {
        e.stopPropagation();
        gardenIntroCard.classList.toggle('collapsed');
        const isCollapsed = gardenIntroCard.classList.contains('collapsed');
        const label = btnToggleIntro.querySelector('.intro-toggle-label');
        if (label) label.textContent = isCollapsed ? 'Mensagem' : 'Ocultar';
      });
    }

    // Pílulas de navegação rápida na aba de Particularidades
    const quickNavPills = document.querySelectorAll('.quick-nav-pill');
    quickNavPills.forEach((pill) => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        quickNavPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        const targetId = pill.dataset.jump;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Ações do jardim
    const btnAuto = document.getElementById('btn-auto');
    if (btnAuto) {
      btnAuto.addEventListener('click', (e) => {
        e.stopPropagation();
        isAutoMode = !isAutoMode;
        btnAuto.classList.toggle('active-state', isAutoMode);
        btnAuto.querySelector('.btn-label').textContent = isAutoMode ? 'Parar' : 'Auto';

        if (isAutoMode) {
          autoTimer = setInterval(() => {
            if (currentActiveView !== 'view-garden') return;
            const isMobile = window.innerWidth <= 768;
            const margin = isMobile ? 35 : 75;
            const rx = randRange(margin, window.innerWidth - margin);
            const ry = randRange(margin + 55, window.innerHeight - margin - 45);
            plantFlower(rx, ry);
          }, 850);
        } else {
          clearInterval(autoTimer);
        }
      });
    }

    const btnSound = document.getElementById('btn-sound');
    if (btnSound) {
      btnSound.addEventListener('click', (e) => {
        e.stopPropagation();
        soundEnabled = !soundEnabled;
        btnSound.querySelector('.btn-label').textContent = soundEnabled ? 'Som: Ligado' : 'Som: Mudo';
        btnSound.querySelector('.btn-icon').textContent = soundEnabled ? '🔔' : '🔕';
      });
    }

    const btnClear = document.getElementById('btn-clear');
    if (btnClear) {
      btnClear.addEventListener('click', (e) => {
        e.stopPropagation();
        clearAllFlowers();
      });
    }

    const gardenView = document.getElementById('view-garden');
    const instrucao = document.querySelector('.instrucao');

    let isPointerDown = false;
    let lastPlantTime = 0;

    const handlePointerAction = (e) => {
      // Plantar somente se estiver na aba do Jardim e fora dos controles
      if (currentActiveView !== 'view-garden') return;
      if (e.target.closest('.main-tabs-nav') || e.target.closest('.garden-controls') || e.target.closest('.garden-intro-card')) return;

      const now = Date.now();
      if (now - lastPlantTime < 130) return;
      lastPlantTime = now;

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      if (clientX && clientY) {
        plantFlower(clientX, clientY);
        if (instrucao) instrucao.classList.add('hide');
      }
    };

    document.addEventListener('pointerdown', (e) => {
      if (currentActiveView !== 'view-garden') return;
      if (e.target.closest('.main-tabs-nav') || e.target.closest('.garden-controls') || e.target.closest('.garden-intro-card')) return;
      isPointerDown = true;
      handlePointerAction(e);
    });

    document.addEventListener('pointermove', (e) => {
      if (isPointerDown) {
        handlePointerAction(e);
      }
    });

    document.addEventListener('pointerup', () => {
      isPointerDown = false;
    });

    document.addEventListener('pointercancel', () => {
      isPointerDown = false;
    });
  }

  // =========================================================================
  // INICIALIZAÇÃO DO SISTEMA
  // =========================================================================
  initAmbientCanvas();
  initNavigationAndControls();

  // Flor inicial de boas-vindas no centro do jardim
  setTimeout(() => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    plantFlower(cx, cy);
  }, 350);

})();
