# Site Manifest: huahkwang-sacred-sites

## 專案基本資訊

- 專案名稱：`huahkwang-sacred-sites`
- 網站名稱：華光寺｜印度佛教八大聖地介紹
- 網站型態：小型多頁靜態網站
- 語言版本：繁體中文
- 部署方式：GitHub Pages
- 專案位置：`/Users/walterli/Documents/Hua-Kwang Temple/HKT_Website/huahkwang-sacred-sites/`

## 網站目的

本網站為華光寺網站系統中的「印度佛教八大聖地介紹」分頁。

它的目的不是單純做旅遊景點介紹，而是透過佛陀一生重要聖地的介紹，讓讀者理解：

- 佛陀一生弘法歷程中的重要地點
- 八大聖地在佛教信仰與朝禮中的意義
- 華光寺所在的舍衛城、祇樹給孤獨園與佛陀聖地的關係
- 讀者如何從華光寺進一步走近印度佛教聖地

本分頁完成後，將再掛回華光寺主頁：

```text
https://walterintw.github.io/huahkwang-site/
```

## 既有網站連結

請使用以下網址作為導覽連結：

```text
華光寺首頁
https://walterintw.github.io/huahkwang-site/

歷史沿革
https://walterintw.github.io/huahkwang-history-site/

華光寺願景
https://walterintw.github.io/huahkwang-vision-page/
```

## 參考專案

本專案應參考同層既有專案的風格與結構：

```text
huahkwang-site/
huahkwang-history-site/
huahkwang-vision-page/
```

尤其參考：

```text
huahkwang-history-site/index.html
huahkwang-history-site/assets/css/style.css
huahkwang-history-site/assets/js/script.js
huahkwang-history-site/assets/icons/huakwang-logo.svg
```

但不可修改這些既有專案。需要使用的 logo、CSS、JS 或其他資源，請複製到本專案內。

## 原始內容來源

文章來源資料夾：

```text
網站內容_總論_八大聖地/article_the_8_Holy_Sites_Buddhism/
```

照片來源資料夾：

```text
網站內容_總論_八大聖地/photo_the_8_Holy_Sites_Buddhism/
```

原始中文檔名可以保留在來源資料夾中。
正式網站專案內，建議複製並改為英文安全檔名，以避免 GitHub Pages、HTML path、URL encoding 和日後維護問題。

## 文章對應規則

文章檔名第一個數字是內容對應規則：

| 編號 | 原始文章主題 | 輸出頁面 | 網頁標題 |
|---:|---|---|---|
| 0 | 總論：朝禮佛陀聖地的意義 | `index.html` | 朝禮佛陀聖地的意義 |
| 1 | 藍毘尼園：佛陀誕生 | `lumbini.html` | 藍毘尼園｜佛陀誕生 |
| 2 | 菩提伽耶：佛陀成道 | `bodhgaya.html` | 菩提伽耶｜佛陀成道 |
| 3 | 鹿野苑：初轉法輪 | `sarnath.html` | 鹿野苑｜初轉法輪 |
| 4 | 王舍城與靈鷲山：早期弘法、竹林精舍與僧團形成 | `rajgir.html` | 王舍城與靈鷲山｜早期弘法、竹林精舍與僧團形成 |
| 5 | 舍衛城與祇樹給孤獨園 | `shravasti.html` | 舍衛城與祇樹給孤獨園 |
| 6 | 僧伽施：佛陀自忉利天下降處 | `sankassa.html` | 僧伽施｜佛陀自忉利天下降處 |
| 7 | 吠舍離：宣告即將涅槃與僧團重要因緣 | `vaishali.html` | 吠舍離｜宣告即將涅槃與僧團重要因緣 |
| 8 | 拘尸那羅：佛陀涅槃 | `kushinagar.html` | 拘尸那羅｜佛陀涅槃 |

## 建議複製後的 docs 檔名

請將原始文章複製或整理到：

```text
docs/0_overview.md
docs/1_lumbini.md
docs/2_bodhgaya.md
docs/3_sarnath.md
docs/4_rajgir.md
docs/5_shravasti.md
docs/6_sankassa.md
docs/7_vaishali.md
docs/8_kushinagar.md
```

這些 `docs/` 檔案可作為本網站的本地內容來源與日後維護依據。

## 照片對應規則

照片檔名第一個數字對應聖地：

- `1_` → 藍毘尼園
- `2_` → 菩提伽耶
- `3_` → 鹿野苑
- `4_` → 王舍城與靈鷲山 / 竹林精舍
- `5_` → 舍衛城與祇樹給孤獨園
- `6_` → 僧伽施
- `7_` → 吠舍離
- `8_` → 拘尸那羅

沒有 `0_` 開頭的總論照片。
`index.html` 的 hero image 請由 Codex 從八大聖地照片中選一張最適合的代表圖，並在 `image_mapping.md` 記錄。

## 建議輸出圖片命名

正式網站中的圖片請複製到：

```text
assets/images/
```

並改成英文安全檔名，例如：

```text
overview-hero.jpeg
lumbini-hero.jpeg
lumbini-01.jpeg
lumbini-02.jpeg
bodhgaya-hero.jpeg
bodhgaya-01.jpeg
sarnath-hero.jpeg
rajgir-hero.jpeg
shravasti-hero.jpeg
sankassa-hero.jpeg
vaishali-hero.jpeg
kushinagar-hero.jpeg
```

實際檔案數量依來源資料夾中的照片而定。
所有原始檔名與輸出檔名的對應，請記錄在 `image_mapping.md`。

## 網站頁面結構

本專案共九頁：

```text
index.html
lumbini.html
bodhgaya.html
sarnath.html
rajgir.html
shravasti.html
sankassa.html
vaishali.html
kushinagar.html
```

共用資源：

```text
assets/css/style.css
assets/js/script.js
assets/icons/huakwang-logo.svg
assets/images/
```

## 首頁 `index.html` 內容定位

首頁不是只放八個連結，而是「八大聖地介紹」的小主頁。

首頁應包含：

1. Header / 導覽列
2. Hero 主視覺
3. 總論文章內容：朝禮佛陀聖地的意義
4. 八大聖地卡片入口
5. 華光寺與舍衛城 / 祇樹給孤獨園的連結提示
6. 回華光寺首頁與相關頁面的導覽
7. Footer

八大聖地卡片應包含：

- 編號
- 聖地名稱
- 一句簡短說明
- 代表照片
- 連到對應頁面的按鈕或文字連結

## 單一聖地頁內容定位

每一篇聖地文章就是一頁完整呈現，不再做「延伸閱讀」分層。

每一頁應包含：

1. Header / 導覽列
2. Hero 主視覺圖
3. 頁面標題與副標
4. 完整文章內容
5. 原文若有 Glossary，保留為文末名詞小註或附錄區
6. 同編號照片 gallery
7. 上一篇 / 下一篇導覽
8. 回八大聖地主頁
9. 回華光寺首頁
10. Footer

## 建議導覽順序

```text
華光寺首頁
歷史沿革
華光寺願景
八大聖地
```

在八大聖地網站內，也可提供聖地頁下拉或卡片式入口，但不要讓導覽列過度擁擠。

## 建議檔案結構

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
```

## 內容使用原則

- 以原始文章內容為準。
- 不自行增加未經來源支持的歷史、佛典、地理或宗教說法。
- 可以為首頁卡片撰寫短摘要，但摘要必須從文章題名與內容推導，不可誇大。
- 可以調整 markdown 格式，使它適合網頁閱讀。
- 不要把長文刪成短文。
- 若原文中有附 Glossary，應完整保留或整理為清楚的文末區塊。
- 全部中文使用繁體中文。

## 設計方向

沿用華光寺系列網站的整體氣質：

- 安定
- 莊重
- 清淨
- 有留白
- 適合佛教文化與寺院網站
- 文字可讀性高
- 圖片支援內容，但不喧賓奪主

可參考法鼓山網站視覺氣質，但不可直接複製外部網站：

```text
https://fagushan.ddm.org.tw/
```

## GitHub Pages 注意事項

- 使用相對路徑。
- 不使用 `/assets/...` 這種 root-absolute path。
- 所有 HTML 頁面都在 root，所以 CSS/JS/image path 可以一致。
- 避免使用需要 server routing 的功能。
- 不需要 backend。

## 完成標準

完成後應符合：

1. 九個 HTML 頁面都存在。
2. 首頁可連到八個聖地頁。
3. 八個聖地頁都能連回首頁。
4. 八個聖地頁都有上一頁 / 下一頁導覽。
5. Header 顯示華光寺 logo。
6. Header 有回華光寺首頁、歷史沿革、華光寺願景、八大聖地連結。
7. 全站圖片路徑正確。
8. 全站 CSS / JS 路徑正確。
9. 全站手機與桌機版都可閱讀。
10. `image_mapping.md` 已記錄圖片來源與輸出檔名。
11. 沒有修改其他三個既有網站資料夾。
12. 沒有在父層 `HKT_Website/` 進行 git 操作。
