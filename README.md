# lazada — Lazada Open Platform API skill

Skill mandiri ala pola `@tts-open-toolkit`/`tts-openapi-*` dari TikTok Shop, tapi
untuk Lazada Open Platform. Struktur identik dengan skill toolkit:

```
lazada/
├── SKILL.md          # name + description, workflow, output shape, references
├── agents/
│   └── openai.yaml   # interface config (display_name, short_description, default_prompt)
└── references/
    └── api/          # 33 kategori (dengan konten), 372 API doc (clean Markdown)
        ├── Product API/
        ├── Order API/
        ├── Membership API/
        ├── FBL API/
        └── ...
```

## Cara pakai (untuk agent/LLM)

Salin ke direktori skills coding-agent (mis. `.codex/skills/` atau
`.claude/skills/`), atau set langsung sebagai skill. Saat ada pertanyaan API
Lazada, skill `lazada-openapi-guide` memandu inspect `references/api/**` lalu
cross-check ke dok resmi bila perlu.

## Common auth (semua API Lazada)

Setiap API memakai parameter umum yang sama: `app_key`, `timestamp`,
`access_token`, `sign_method`, `sign` (lihat bagian `## Common Parameters` di
setiap doc). Endpoint per negara bervariasi (mis. `.co.id` untuk Indonesia);
detail di bagian `## Endpoints (by region)`.

## Update / regenerasi

Konten `references/api/` adalah **snapshot statis**. Untuk memperbarui API
Lazada, jalankan toolchain di repo `updskills`
(`tools/bulk_render_lazada.py`) — sumber data JSON resmi:
- manifest kategori: `https://isvconsole.lazada.com/handler/share/apidoc/getApiCategoryMixed.json`
- detail per API: `https://isvconsole.lazada.com/handler/share/apidoc/getApi.json?path=<path>`

Renderer membangun Markdown langsung dari JSON (tanpa render SPA), lalu
mendistribusikan ke `references/api/`. Tidak perlu mengedit manual satu-satu.
