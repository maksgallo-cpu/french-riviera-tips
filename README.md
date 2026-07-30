# Site Maître d'Œuvre — Jonathan Evain (Deploy5)

Version à jour du site vitrine one-page. Dossier autonome, aucun build requis.

## Structure

```
index.html       Page principale
assets/          Logos, croquis, photos de la galerie (01.jpg → 15.jpg)
robots.txt       Directives d'indexation
sitemap.xml      Plan du site
```

## Publier la mise à jour

### Option A — Netlify (glisser-déposer)
1. app.netlify.com → ton site (moe-jonathanevain.fr) → onglet **Deploys**.
2. Glisse-dépose **tout ce dossier** (pas seulement `index.html`) dans la zone de dépôt.

### Option B — GitHub (déploiement automatique)
Si ton site Netlify est relié à un dépôt GitHub :
1. Remplace les fichiers du dépôt par ceux de ce dossier (`index.html`, `assets/`, `robots.txt`, `sitemap.xml`).
2. Commit + push sur la branche de production (souvent `main`).
3. Netlify redéploie automatiquement à chaque push.

Commandes typiques :
```
git add .
git commit -m "Mise à jour du site"
git push origin main
```
