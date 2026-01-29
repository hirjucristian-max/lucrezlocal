
# LucrezLocal Next.js – Home Page (identic)

Acest proiect include **pagina HOME** recreată în Next.js, cu **stil, fonturi, culori, iconițe și layout identice**.

## Pași PowerShell (Windows)

```powershell
# 1) Mergi în folderul de lucru
Set-Location "C:\Users\hirju\OneDrive\Documents\Business\Lucrezlocal.ro\Pagina Internet"

# 2) Copiază arhiva aici și dezarhivează
Expand-Archive -Path ".\lucrezlocal-next-home.zip" -DestinationPath ".\lucrezlocal-next-home" -Force

# 3) Intra în proiect
Set-Location ".\lucrezlocal-next-home"

# 4) Instalează dependențele
npm install

# 5) Pornește serverul de dezvoltare
npm run dev
# -> http://localhost:3000
```

## Notă tehnică

- HTML-ul original din `<body>` este salvat în `public/assets/home.html` și este injectat în `app/page.tsx` pentru fidelitate 1:1.
- `assets/styles.css` și `assets/scripts.js` sunt cele originale.
- `assets/taxonomy.json` este folosit de script pentru secțiunile dinamice.
- Ulterior putem refactoriza în componente React și migra treptat logica în `app`.
