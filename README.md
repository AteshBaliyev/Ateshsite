# Atəş Balıyev | AI Developer & Prime Media Group Platforması

Bu layihə **Atəş Balıyev** üçün xüsusi olaraq hazırlanmış, ultra-sürətli, tünd mövzuda (Dark Mode & Luxury Gold) işləyən fərdi portfolio, bloq və media idarəetmə platformasıdır.

---

## 🌟 Əsas Xüsusiyyətlər və Funksionallıq

### 1. Qlobal SEO və Süni İntellekt İndekslənməsi (AI SEO / GEO)
- **JSON-LD Schema Markup**: `Person`, `WebSite`, `BlogPosting`, `SoftwareApplication` və `BreadcrumbList` sxemləri ilə tam təchiz olunub.
- **Süni İntellekt Mühərrikləri üçün Xüsusi Standart**:
  - `/llms.txt`: Perplexity, ChatGPT Search, Claude və digər LLM agentlərinin birbaşa oxuması üçün strukturlaşdırılmış bilik bazası.
  - `/sitemap.xml`: Dinamik səhifələr, məqalələr və layihələri əhatə edən xəritə.
  - `/robots.txt`: GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot və Googlebot üçün icazə qaydaları.
- **Semantik HTML Tag-ləri**: `<article>`, `<section>`, `<aside>`, `<figure>`, `<figcaption>`, `<header>`, `<footer>` iyerarxiyası.
- Bütün şəkillər üçün avtomatik və optimallaşdırılmış `alt` atributları.

### 2. Şəxsi Təqdimat & 'Mənim Haqqımda'
- **Atəş Balıyev**: İKT tələbəsi, Prime Media Group rəhbəri və süni intellekt alətləri ilə sistemlər quran bir AI Developer.
- **YouTube İnteqrasiyası**:
  - **AzMoney** və **The Systemic Mind** YouTube kanallarından videoları dinamik göstərən grid/qalereya.
  - İnteraktiv video pleyer modalı (`iframe` embed) və birbaşa abunə linkləri.

### 3. Layihələr və Hakaton Qələbələri
- **Bondify**: Ağıllı şəbəkələşmə və maliyyə idarəetmə ekosistemi.
- **Fermerim.az**: Aqrar sahə üçün ağıllı rəqəmsal ekosistem və fermer idarəetməsi.
- **AiXəbər**: Süni intellekt dəstəkli avtomatlaşdırılmış xəbər aqreqatoru.
- **Baliyews Studio Mobil Oyunları**: Mobil platformalar üçün hazırlanmış oyunlar (ColorMerge, Laser Grid Runner və s.).
- **Hakaton Qələbələri**:
  - 🏆 **TransportTech Hakatonu Qalibiyyəti** (1-ci Yer)
  - 🏆 **SAF 2025 (STEAM Azerbaijan Festival)** Qalibi / Mükafatçısı
- *Qeyd: Saytda heç bir e-ticarət ödəmə termini istifadə edilməmişdir.*

### 4. Əlaqə və İnteqrasiya
- **WhatsApp Düyməsi**: [https://wa.me/994556422545](https://wa.me/994556422545)
- **Telegram Düyməsi**: [https://t.me/Baliyews](https://t.me/Baliyews)
- İnteraktiv Əlaqə Formu (mesajları bazaya yazır və bildiriş çıxarır).
- Ekranın aşağı sağ küncündə üzən (floating) reaktiv əlaqə butonları.

### 5. Təhlükəsiz Admin Panel (`/admin`)
- Məlumatların (Postlar, Layihələr, YouTube Videoları) əlavə edilməsi, redaktəsi və silinməsi üçün sadə interfeys.
- **Təhlükəsizlik Zəmanəti**: Admin giriş məlumatları kod daxilində (hardcoded) yazılmayıb. Məlumatlar yalnız `.env` faylından oxunur:
  ```env
  ADMIN_USERNAME=Atesh
  ADMIN_PASSWORD=atesh2008
  ```
- Kriptoqrafik JWT sessiya tokeni və `httpOnly` təhlükəsiz cookie mexanizmi.

### 6. n8n və Avtomatlaşdırma Dəstəyi
- Webhook endpoint: `POST /api/webhook/n8n`
- `x-n8n-api-key` başlığı ilə avtomatik məqalə, video və ya layihə əlavə etmək imkanı.

### 7. Verilənlər Bazası (Database)
- Standart olaraq sıfır konfiqurasiya ilə işləyən yerli davamlı baza (`data/database.json`).
- Bulud verilənlər bazası (Supabase / PostgreSQL) istifadə etmək üçün layihə kökündə `schema.sql` faylı təqdim olunur və `.env` faylında `DATABASE_URL` parametri dəstəklənir.

---

## 🚀 Quraşdırma və İşə Salma

### 1. Asılılıqları Quraşdırın:
```bash
npm install
```

### 2. Ətraf Mühit Dəyişənləri (`.env`):
Layihə kökündə `.env` faylı artıq hazırdır:
```env
ADMIN_USERNAME=Atesh
ADMIN_PASSWORD=atesh2008
JWT_SECRET=atesh_baliyev_super_secure_jwt_token_key_2026
N8N_API_KEY=n8n_atesh_automation_key_2026
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. İnkişaf Rejimində Başladın:
```bash
npm run dev
```
Sayt [http://localhost:3000](http://localhost:3000) ünvanında açılacaq.

### 4. İstehsalat (Production) Quraşdırması:
```bash
npm run build
npm run start
```
