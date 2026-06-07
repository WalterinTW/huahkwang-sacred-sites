# AGENTS.md

## Project identity
Project name: `huahkwang-sacred-sites`

This project is a small multi-page static website for the Huah Kwang Temple section:
「印度佛教八大聖地介紹」.

All public naming should use `Huah Kwang Temple` / `huahkwang`.
Do not introduce alternate spellings such as `huakuang`.
If copying the existing logo file named `huakwang-logo.svg`, keep the file name only because it is an existing asset name; do not use that spelling in visible text or new project/repo names.

## Playwright layout check rules
This is a Huah Kwang Temple static website project.

- After changing HTML, CSS, or JS, prioritize running the Playwright check with `npm run test:visual`.
- After each website change, check both desktop and mobile layout.
- Confirm there is no horizontal overflow.
- Confirm the browser console has no error.
- Confirm the main navigation links are still clickable.
- Preserve the plain, restrained, dignified website style.
- Do not substantially refactor the website architecture unless Walter explicitly asks.
- Do not delete existing content or images unless Walter explicitly asks.
- After finishing changes, list which files changed and how Walter can test them.

## Work scope and safety rule
The working directory may be the parent folder:

```text
/Users/walterli/Documents/Hua-Kwang Temple/HKT_Website/
```

This is intentional so that you can read these sibling projects as style/reference material:

```text
huahkwang-site/
huahkwang-history-site/
huahkwang-vision-page/
```

However, you must only create, modify, rename, or delete files inside:

```text
huahkwang-sacred-sites/
```

Do not modify:

```text
huahkwang-site/
huahkwang-history-site/
huahkwang-vision-page/
網站內容_總論_八大聖地/
```

The original article and photo folders are source materials only. Copy needed content/assets into `huahkwang-sacred-sites/` before using them in the site.

## Git safety rule
`huahkwang-sacred-sites/` is its own Git repository.
All git operations must be limited to this repo only.

Use either:

```bash
cd huahkwang-sacred-sites
git status
```

or:

```bash
git -C huahkwang-sacred-sites status
```

Do not run `git init`, `git add .`, `git commit`, or `git push` from the parent `HKT_Website/` directory.
Do not commit or push unless explicitly asked.

## Project goal
Build a clean, dignified, responsive multi-page static website in Traditional Chinese for Huah Kwang Temple’s 「印度佛教八大聖地介紹」 section.

This mini-site should include:

1. A main page for the overview essay and eight sacred-site entry cards.
2. Eight individual sacred-site pages, each showing one complete article.
3. Photo usage for each sacred site based on the article/photo number prefix.
4. Navigation back to the Huah Kwang Temple homepage.
5. Navigation to the existing history and vision pages.
6. A design style visually consistent with the existing Huah Kwang Temple site family.

## Existing site references
Use these sibling projects as references:

```text
huahkwang-site/
huahkwang-history-site/
huahkwang-vision-page/
```

Important reference files:

```text
huahkwang-history-site/index.html
huahkwang-history-site/assets/css/style.css
huahkwang-history-site/assets/js/script.js
huahkwang-history-site/assets/icons/huakwang-logo.svg
huahkwang-vision-page/index.html
huahkwang-vision-page/assets/css/style.css
huahkwang-vision-page/assets/js/script.js
```

Reuse the general style of:

- left-top Huah Kwang Temple logo
- calm header/navigation
- mobile menu behavior
- hero section rhythm
- footer rhythm
- restrained Buddhist cultural atmosphere

But do not directly depend on assets outside this project. Copy necessary reusable assets into `huahkwang-sacred-sites/assets/`.

## Official site links
Use these URLs as the source of truth:

```text
Huah Kwang Temple homepage:
https://walterintw.github.io/huahkwang-site/

History page:
https://walterintw.github.io/huahkwang-history-site/

Vision page:
https://walterintw.github.io/huahkwang-vision-page/
```

The old URL spelling `huakwang-site` is not the correct URL for this task.

## Source materials
Original article folder:

```text
網站內容_總論_八大聖地/article_the_8_Holy_Sites_Buddhism/
```

Original photo folder:

```text
網站內容_總論_八大聖地/photo_the_8_Holy_Sites_Buddhism/
```

The file name prefix number is the matching rule:

- `0_` article = overview essay for `index.html`
- `1_` article/photos = Lumbini page
- `2_` article/photos = Bodhgaya page
- `3_` article/photos = Sarnath page
- `4_` article/photos = Rajgir / Vulture Peak / Bamboo Grove page
- `5_` article/photos = Shravasti / Jetavana page
- `6_` article/photos = Sankassa page
- `7_` article/photos = Vaishali page
- `8_` article/photos = Kushinagar page

There is no `0_` overview photo. For the homepage hero image, inspect the available sacred-site photos and choose one dignified, representative image. Record the choice and reason in `image_mapping.md`.

## Recommended site structure
Create or maintain this structure:

```text
huahkwang-sacred-sites/
├─ AGENTS.md
├─ content_manifest.md
├─ image_mapping.md
├─ index.html
├─ lumbini.html
├─ bodhgaya.html
├─ sarnath.html
├─ rajgir.html
├─ shravasti.html
├─ sankassa.html
├─ vaishali.html
├─ kushinagar.html
├─ docs/
│  ├─ 0_overview.md
│  ├─ 1_lumbini.md
│  ├─ 2_bodhgaya.md
│  ├─ 3_sarnath.md
│  ├─ 4_rajgir.md
│  ├─ 5_shravasti.md
│  ├─ 6_sankassa.md
│  ├─ 7_vaishali.md
│  └─ 8_kushinagar.md
└─ assets/
   ├─ css/
   │  └─ style.css
   ├─ js/
   │  └─ script.js
   ├─ icons/
   │  └─ huakwang-logo.svg
   └─ images/
      ├─ overview-hero.*
      ├─ lumbini-hero.*
      ├─ lumbini-01.*
      ├─ bodhgaya-hero.*
      └─ ...
```

Use English ASCII filenames for output website files and copied image files.
The original Chinese article/photo filenames may remain in the source folders, but website asset paths should be English and GitHub Pages safe.

## Page roles

### `index.html`
This is the homepage of the sacred-sites mini-site.
It should include:

- header with Huah Kwang Temple logo
- navigation links:
  - 華光寺首頁
  - 歷史沿革
  - 華光寺願景
  - 八大聖地
- hero section
- overview essay content from `0_` article
- eight sacred-site cards
- each card should include:
  - site number
  - site title
  - short subtitle or brief description derived from the article title/content
  - representative image
  - link to the full page
- closing section linking the sacred sites back to Huah Kwang Temple’s location and significance when appropriate and supported by source text
- footer with return link to Huah Kwang Temple homepage

### Individual sacred-site pages
Create one page per site:

```text
lumbini.html
bodhgaya.html
sarnath.html
rajgir.html
shravasti.html
sankassa.html
vaishali.html
kushinagar.html
```

Each page should include:

- header with Huah Kwang Temple logo
- top navigation
- hero image from the same site number photo set
- title and subtitle
- the full corresponding article content
- glossary section if the original article contains glossary content
- image gallery using remaining same-number photos
- previous / next sacred site navigation
- link back to `index.html`
- link back to Huah Kwang Temple homepage
- footer

Do not split one sacred-site article into separate “extended reading” pages. Each sacred-site article should be presented fully on its own page.

## Page mapping
Use these output page slugs:

| Number | Page | Main title |
|---:|---|---|
| 0 | `index.html` | 朝禮佛陀聖地的意義 |
| 1 | `lumbini.html` | 藍毘尼園｜佛陀誕生 |
| 2 | `bodhgaya.html` | 菩提伽耶｜佛陀成道 |
| 3 | `sarnath.html` | 鹿野苑｜初轉法輪 |
| 4 | `rajgir.html` | 王舍城與靈鷲山｜早期弘法、竹林精舍與僧團形成 |
| 5 | `shravasti.html` | 舍衛城與祇樹給孤獨園 |
| 6 | `sankassa.html` | 僧伽施｜佛陀自忉利天下降處 |
| 7 | `vaishali.html` | 吠舍離｜宣告即將涅槃與僧團重要因緣 |
| 8 | `kushinagar.html` | 拘尸那羅｜佛陀涅槃 |

## Content source of truth
The markdown files in the original article folder are the content source of truth.

Rules:

- Do not invent historical facts, doctrinal claims, names, years, places, or scriptural references.
- Preserve the meaning, tone, and structure of the original articles.
- Minor formatting cleanup is allowed for web readability.
- If a glossary exists in the article, preserve it as a glossary / 名詞小註 / 附錄 section.
- If article markdown formatting is unusual, normalize it carefully without deleting content.
- Use Traditional Chinese for all visible Chinese text.
- Do not convert the full article into simplified summaries.

## Design reference
Use the existing Huah Kwang Temple pages and this site as visual inspiration only:

```text
https://fagushan.ddm.org.tw/
```

Do not copy external site source code or duplicate the layout exactly.

Capture these qualities:

- calm Buddhist cultural atmosphere
- dignified and restrained presentation
- clear section hierarchy
- elegant whitespace
- readable Traditional Chinese typography
- stable visual rhythm
- image-supported layout without overpowering the article text
- respectful tone suitable for sacred places

## Design direction
Keywords:

- dignified
- serene
- restrained
- readable
- pilgrimage-like
- historical and spiritual atmosphere
- warm and grounded

Preferred color feeling:

- off-white
- beige
- light stone
- warm gray
- muted earth tones
- restrained gold-brown accents if needed

Avoid:

- flashy animations
- commercial travel-advertising feeling
- overly bright color blocks
- cluttered layouts
- decorative fonts that reduce readability
- aggressive image cropping
- unsupported historical or religious assertions

## Typography and layout

- Prioritize readability in Traditional Chinese.
- Use semantic HTML.
- Maintain clear heading hierarchy.
- Keep generous spacing between sections.
- Support desktop and mobile well.
- Keep code beginner-friendly and easy to maintain.
- Long articles should have comfortable line length.
- Consider using a sticky or clear local navigation only if it improves readability without clutter.

## Image handling
Use images copied into `huahkwang-sacred-sites/assets/images/`.

Rules:

- Use only photos whose prefix number matches the page number, except the homepage hero image.
- For each site page, choose one same-number image as hero.
- Use remaining same-number images as gallery/supporting images.
- Do not crop inscriptions, statues, pillars, or sacred architecture aggressively.
- Captions may be derived from original filenames, but do not invent extra historical claims.
- If an image is visually weak for hero use, use it in the gallery instead.
- Record all original-to-new image filename mappings in `image_mapping.md`.

The preset gallery rows for each sacred site in `image_mapping.md` are only templates and do not need to be fully filled. Please increase or decrease the number of images according to the actual photo quality and layout needs.



## Path rules

This site will be deployed on GitHub Pages.

Therefore:

- use relative paths for local assets
- do not use root-absolute paths like `/assets/...`
- CSS path from root pages: `assets/css/style.css`
- JS path from root pages: `assets/js/script.js`
- icon path from root pages: `assets/icons/huakwang-logo.svg`
- image paths from root pages: `assets/images/...`

All pages are in the project root, so the same relative asset paths should work for all HTML pages.

## Implementation constraints

- static site only
- plain HTML/CSS/JS preferred
- no framework required
- no backend
- no build system unless absolutely necessary
- no external CDN dependency required
- keep structure simple
- do not over-engineer

## Accessibility and quality

- Add meaningful `alt` text for images.
- Keep contrast readable.
- Keep mobile navigation usable.
- Preserve skip link behavior if inherited from reference pages.
- Use `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` appropriately.
- Ensure each page has unique `<title>` and meta description.

## What done means
The task is complete only if:

1. all nine pages exist and render correctly
2. homepage links to all eight sacred-site pages
3. each sacred-site page shows its full article
4. each sacred-site page links back to `index.html`
5. each sacred-site page has previous / next navigation
6. the Huah Kwang Temple logo appears in the header
7. navigation links use the official URLs listed above
8. all CSS/JS/image/icon paths work with GitHub Pages
9. copied images have English safe filenames
10. `image_mapping.md` records source-to-output image mapping
11. layout is responsive
12. Traditional Chinese content is readable and well-spaced
13. the site is ready for GitHub Pages deployment

## Before finishing
Please verify:

- no broken links
- no broken image paths
- no root-absolute local asset paths
- no accidental edits outside `huahkwang-sacred-sites/`
- no public URL using the old incorrect `huakwang-site` repo spelling
- no unsupported historical or doctrinal content was invented
- all visible Chinese text uses Traditional Chinese
- `git -C huahkwang-sacred-sites status` only shows intended changes inside this repo
