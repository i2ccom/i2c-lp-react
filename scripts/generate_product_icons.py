import os
import shutil

output_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\icons"
os.makedirs(output_dir, exist_ok=True)

# Copy MinhAI if exists
minh_src = r"g:\i2c\PROJECTS\i2c_Docs\components\MinhAI_Logo.svg"
if os.path.exists(minh_src):
    shutil.copy(minh_src, os.path.join(output_dir, "minhai.svg"))

# Dictionary of unique SVGs for each product
svg_templates = {
    "unibi": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_unibi)"/>
  <path d="M32 40h16v40H32zm20-14h16v54H52zm20 22h16v32H72zm20-12h16v44H92z" fill="#ffffff" fill-opacity="0.95"/>
  <circle cx="80" cy="36" r="6" fill="#38bdf8"/>
  <defs>
    <linearGradient id="bg_unibi" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
</svg>''',

    "ierp": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_ierp)"/>
  <path d="M60 26l32 18v36L60 98 28 80V44l32-18z" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <path d="M60 26v72M28 44l64 36M92 44L28 80" stroke="#94a3b8" stroke-width="3"/>
  <circle cx="60" cy="62" r="10" fill="#0284c7" stroke="#ffffff" stroke-width="3"/>
  <defs>
    <linearGradient id="bg_ierp" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0369a1"/><stop offset="1" stop-color="#082f49"/>
    </linearGradient>
  </defs>
</svg>''',

    "ireport": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_ireport)"/>
  <path d="M34 84l18-24 16 12 24-34" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="92" cy="38" r="6" fill="#38bdf8"/>
  <circle cx="68" cy="72" r="5" fill="#ffffff"/>
  <circle cx="52" cy="60" r="5" fill="#ffffff"/>
  <circle cx="34" cy="84" r="5" fill="#ffffff"/>
  <defs>
    <linearGradient id="bg_ireport" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "uniqi": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_uniqi)"/>
  <path d="M60 28L28 44l32 16 32-16-32-16z" fill="#38bdf8"/>
  <path d="M36 56v20c0 12 24 18 24 18s24-6 24-18V56" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <path d="M92 48v24" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
  <defs>
    <linearGradient id="bg_uniqi" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#0c4a6e"/>
    </linearGradient>
  </defs>
</svg>''',

    "unifi": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_unifi)"/>
  <circle cx="60" cy="60" r="32" stroke="#38bdf8" stroke-width="4"/>
  <path d="M60 38v44M48 48h24c8 0 8 12 0 12H48h24c8 0 8 14 0 14H46" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <defs>
    <linearGradient id="bg_unifi" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0f766e"/><stop offset="1" stop-color="#042f2e"/>
    </linearGradient>
  </defs>
</svg>''',

    "webbuilder": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_web)"/>
  <rect x="28" y="32" width="64" height="56" rx="8" stroke="#ffffff" stroke-width="4"/>
  <path d="M28 46h64" stroke="#ffffff" stroke-width="3"/>
  <circle cx="38" cy="39" r="3" fill="#ef4444"/>
  <circle cx="48" cy="39" r="3" fill="#f59e0b"/>
  <circle cx="58" cy="39" r="3" fill="#10b981"/>
  <path d="M42 66l8-8-8-8M58 72h18" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="bg_web" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563eb"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "tion": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_tion)"/>
  <path d="M60 28c-18 0-32 14-32 32s32 34 32 34 32-20 32-34-14-32-32-32z" fill="url(#pin_tion)"/>
  <circle cx="60" cy="56" r="10" fill="#ffffff"/>
  <defs>
    <linearGradient id="bg_tion" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#f97316"/><stop offset="1" stop-color="#7c2d12"/>
    </linearGradient>
    <linearGradient id="pin_tion" x1="28" y1="28" x2="92" y2="94" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fed7aa"/><stop offset="1" stop-color="#ea580c"/>
    </linearGradient>
  </defs>
</svg>''',

    "osee": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_osee)"/>
  <path d="M28 60s12-22 32-22 32 22 32 22-12 22-32 22-32-22-32-22z" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <circle cx="60" cy="60" r="12" fill="#38bdf8"/>
  <circle cx="60" cy="60" r="5" fill="#ffffff"/>
  <defs>
    <linearGradient id="bg_osee" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6366f1"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "automotiveeco": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_auto)"/>
  <path d="M32 72l8-22h40l8 22H32z" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <circle cx="44" cy="78" r="8" fill="#ffffff"/>
  <circle cx="76" cy="78" r="8" fill="#ffffff"/>
  <path d="M50 36l-8 14h16l-6 12 18-16h-14l6-10H50z" fill="#facc15"/>
  <defs>
    <linearGradient id="bg_auto" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
</svg>''',

    "logop": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_logop)"/>
  <rect x="28" y="44" width="42" height="30" rx="4" fill="#ffffff"/>
  <path d="M70 52l14 8v14H70V52z" fill="#38bdf8"/>
  <circle cx="42" cy="78" r="7" fill="#0f172a" stroke="#ffffff" stroke-width="3"/>
  <circle cx="76" cy="78" r="7" fill="#0f172a" stroke="#ffffff" stroke-width="3"/>
  <defs>
    <linearGradient id="bg_logop" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#0c4a6e"/>
    </linearGradient>
  </defs>
</svg>''',

    "cyop": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_cyop)"/>
  <path d="M60 28L32 40v22c0 18 28 30 28 30s28-12 28-30V40L60 28z" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <path d="M52 58l6 6 12-14" stroke="#4ade80" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="bg_cyop" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
</svg>''',

    "defikit": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_defi)"/>
  <path d="M60 30l24 14v28L60 86 36 72V44l24-14z" stroke="#a855f7" stroke-width="4" fill="none"/>
  <path d="M60 42l14 8v16L60 74 46 66V50l14-8z" fill="#38bdf8"/>
  <defs>
    <linearGradient id="bg_defi" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#581c87"/><stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
</svg>''',

    "myestate": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_estate)"/>
  <path d="M34 54L60 32l26 22v38H34V54z" stroke="#ffffff" stroke-width="4" fill="none"/>
  <rect x="52" y="62" width="16" height="28" fill="#38bdf8"/>
  <defs>
    <linearGradient id="bg_estate" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#059669"/><stop offset="1" stop-color="#064e3b"/>
    </linearGradient>
  </defs>
</svg>''',

    "i2chomenet": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_homenet)"/>
  <circle cx="60" cy="60" r="30" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4 4"/>
  <path d="M42 56L60 40l18 16v24H42V56z" fill="#ffffff"/>
  <circle cx="60" cy="62" r="5" fill="#0284c7"/>
  <defs>
    <linearGradient id="bg_homenet" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0369a1"/><stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
</svg>''',

    "miniplatform": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_mini)"/>
  <rect x="32" y="32" width="24" height="24" rx="4" fill="#38bdf8"/>
  <rect x="64" y="32" width="24" height="24" rx="4" fill="#ffffff"/>
  <rect x="32" y="64" width="24" height="24" rx="4" fill="#ffffff"/>
  <rect x="64" y="64" width="24" height="24" rx="4" fill="#38bdf8"/>
  <defs>
    <linearGradient id="bg_mini" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0f172a"/><stop offset="1" stop-color="#334155"/>
    </linearGradient>
  </defs>
</svg>''',

    "kitchen": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_kitchen)"/>
  <path d="M34 50h52c0 20-12 34-26 34S34 70 34 50z" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <path d="M44 42c0-8 6-8 6-16M60 42c0-8 6-8 6-16M76 42c0-8 6-8 6-16" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <defs>
    <linearGradient id="bg_kitchen" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#d97706"/><stop offset="1" stop-color="#451a03"/>
    </linearGradient>
  </defs>
</svg>''',

    "fractaldb": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_fractal)"/>
  <path d="M60 26L30 78h60L60 26z" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <path d="M60 52l15 26H45l15-26z" fill="#38bdf8" fill-opacity="0.6"/>
  <defs>
    <linearGradient id="bg_fractal" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#082f49"/>
    </linearGradient>
  </defs>
</svg>''',

    "hypergraph": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_hg)"/>
  <circle cx="36" cy="40" r="8" fill="#38bdf8"/>
  <circle cx="84" cy="40" r="8" fill="#38bdf8"/>
  <circle cx="60" cy="84" r="8" fill="#38bdf8"/>
  <circle cx="60" cy="52" r="6" fill="#ffffff"/>
  <path d="M36 40l48 0M36 40l24 44M84 40L60 84" stroke="#ffffff" stroke-width="3"/>
  <path d="M36 40L60 52 84 40M60 52v32" stroke="#a855f7" stroke-width="3"/>
  <defs>
    <linearGradient id="bg_hg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4f46e5"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "fluid": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_fluid)"/>
  <path d="M30 46c10-8 20 8 30 0s20 8 30 0" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
  <path d="M30 62c10-8 20 8 30 0s20 8 30 0" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
  <path d="M30 78c10-8 20 8 30 0s20 8 30 0" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
  <defs>
    <linearGradient id="bg_fluid" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#0c4a6e"/>
    </linearGradient>
  </defs>
</svg>''',

    "hyperai": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_hyperai)"/>
  <path d="M60 30L34 76h52L60 30z" stroke="#c084fc" stroke-width="4" fill="none"/>
  <circle cx="60" cy="58" r="10" fill="#38bdf8"/>
  <path d="M30 60h60M60 30v60" stroke="#ffffff" stroke-width="2" stroke-dasharray="3 3"/>
  <defs>
    <linearGradient id="bg_hyperai" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6b21a8"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "viai": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_viai)"/>
  <circle cx="60" cy="50" r="18" stroke="#38bdf8" stroke-width="4"/>
  <path d="M38 78c0-12 10-18 22-18s22 6 22 18" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <path d="M28 50h8M84 50h8M60 22v8" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
  <defs>
    <linearGradient id="bg_viai" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
</svg>''',

    "garden": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_garden)"/>
  <path d="M60 88V50M60 50c-14 0-24-10-24-24 14 0 24 10 24 24zm0 0c14 0 24-10 24-24-14 0-24 10-24 24z" fill="#4ade80"/>
  <defs>
    <linearGradient id="bg_garden" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#047857"/><stop offset="1" stop-color="#064e3b"/>
    </linearGradient>
  </defs>
</svg>''',

    "transformerhub": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_thub)"/>
  <circle cx="60" cy="60" r="28" stroke="#38bdf8" stroke-width="4"/>
  <path d="M60 32v12M60 76v12M32 60h12M76 60h12" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <circle cx="60" cy="60" r="8" fill="#f59e0b"/>
  <defs>
    <linearGradient id="bg_thub" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "long": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_long)"/>
  <path d="M34 40h52v40H34z" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <path d="M46 54l14 14 26-26" stroke="#4ade80" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="bg_long" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1e293b"/><stop offset="1" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
</svg>''',

    "rsts": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_rsts)"/>
  <path d="M32 44h22c8 0 8 10 0 10H42l14 22H44L32 58v18h-8V44h8z" fill="#ffffff"/>
  <path d="M68 52h26v8H82v16h-8V60H68v-8z" fill="#38bdf8"/>
  <defs>
    <linearGradient id="bg_rsts" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#b91c1c"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "fly": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_fly)"/>
  <path d="M30 84L88 34l-24 50-12-14-22 14z" fill="#38bdf8"/>
  <path d="M52 70l12-14" stroke="#ffffff" stroke-width="3"/>
  <defs>
    <linearGradient id="bg_fly" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#0369a1"/>
    </linearGradient>
  </defs>
</svg>''',

    "uploop": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_uploop)"/>
  <path d="M60 32v56M40 52l20-20 20 20" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="60" cy="88" r="6" fill="#ffffff"/>
  <defs>
    <linearGradient id="bg_uploop" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ec4899"/><stop offset="1" stop-color="#831843"/>
    </linearGradient>
  </defs>
</svg>''',

    "lac": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_lac)"/>
  <rect x="28" y="32" width="64" height="46" rx="6" stroke="#ffffff" stroke-width="4" fill="none"/>
  <path d="M48 88h24M60 78v10" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <circle cx="60" cy="55" r="10" fill="#38bdf8"/>
  <defs>
    <linearGradient id="bg_lac" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "jigsaw": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_jigsaw)"/>
  <path d="M38 38h16c0 6 8 6 8 0h16v16c6 0 6 8 0 8v16H62c0-6-8-6-8 0H38V62c-6 0-6-8 0-8V38z" fill="#38bdf8" stroke="#ffffff" stroke-width="3"/>
  <defs>
    <linearGradient id="bg_jigsaw" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#e11d48"/><stop offset="1" stop-color="#4c0519"/>
    </linearGradient>
  </defs>
</svg>''',

    "rings": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_rings)"/>
  <circle cx="48" cy="60" r="22" stroke="#38bdf8" stroke-width="5" fill="none"/>
  <circle cx="72" cy="60" r="22" stroke="#ffffff" stroke-width="5" fill="none"/>
  <defs>
    <linearGradient id="bg_rings" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
</svg>''',

    "i2c-forge": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_forge)"/>
  <path d="M34 76l22-22 10 10-22 22H34v-10z" fill="#ffffff"/>
  <path d="M62 48l14-14c4-4 10-4 14 0s4 10 0 14L76 62 62 48z" fill="#f59e0b"/>
  <defs>
    <linearGradient id="bg_forge" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ea580c"/><stop offset="1" stop-color="#431407"/>
    </linearGradient>
  </defs>
</svg>''',

    "quang": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_quang)"/>
  <path d="M60 28l28 16v32L60 92 32 76V44l28-16z" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <circle cx="60" cy="60" r="14" fill="#ffffff"/>
  <circle cx="60" cy="60" r="6" fill="#0284c7"/>
  <defs>
    <linearGradient id="bg_quang" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563eb"/><stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
</svg>''',

    "shai": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_shai)"/>
  <path d="M38 46l16 14-16 14M58 74h24" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="bg_shai" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
</svg>''',

    "i2collab": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_collab)"/>
  <circle cx="46" cy="48" r="12" fill="#ffffff"/>
  <circle cx="74" cy="48" r="12" fill="#38bdf8"/>
  <path d="M30 84c0-10 10-16 20-16M90 84c0-10-10-16-20-16M42 84c0-8 8-14 18-14s18 6 18 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <defs>
    <linearGradient id="bg_collab" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>
</svg>''',

    "devplatform": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <rect width="120" height="120" rx="24" fill="url(#bg_devp)"/>
  <rect x="28" y="30" width="64" height="60" rx="8" stroke="#38bdf8" stroke-width="4" fill="none"/>
  <path d="M42 48l10 12-10 12M58 72h20" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="bg_devp" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0284c7"/><stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
</svg>'''
}

for name, svg in svg_templates.items():
    filepath = os.path.join(output_dir, f"{name}.svg")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"Generated {filepath}")

print("All 36 unique product SVG icons created successfully!")
