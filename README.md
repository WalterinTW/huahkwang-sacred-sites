# huahkwang-sacred-sites

## 專案名稱
華光寺｜印度佛教八大聖地介紹

## 網站用途
本專案是華光寺網站系統中的「印度佛教八大聖地介紹」多頁靜態網站，用於介紹佛陀一生重要聖地與華光寺所在地的佛教脈絡。

## 主要檔案結構

```text
huahkwang-sacred-sites/
├─ index.html
├─ lumbini.html
├─ bodhgaya.html
├─ sarnath.html
├─ rajgir.html
├─ shravasti.html
├─ sankassa.html
├─ vaishali.html
├─ kushinagar.html
├─ assets/
│  ├─ css/style.css
│  ├─ js/script.js
│  ├─ icons/
│  └─ images/
├─ docs/
├─ _source/
└─ content_manifest.md
```

## 本地預覽方式
可直接在瀏覽器開啟 `index.html`，或在本專案目錄執行：

```bash
python3 -m http.server
```

再到瀏覽器開啟 `http://localhost:8000/`。

## Playwright 網頁檢查

本專案使用 Playwright 做基本視覺與功能檢查。測試會自動啟動本機 server，請不要用 `file://` 方式執行檢查。

第一次使用請先安裝 Node.js 相依套件與 Playwright 瀏覽器：

```bash
npm install
npx playwright install
```

執行 desktop 與 mobile 檢查：

```bash
npm run test:visual
```

用有畫面的瀏覽器執行，方便觀察互動狀態：

```bash
npm run test:visual:headed
```

查看 Playwright HTML report：

```bash
npm run show-report
```

測試會檢查首頁載入、1440x900 desktop viewport、390x844 mobile viewport、水平 overflow、主要導覽連結、圖片載入狀態與 console error，並在 `test-results/` 中產生 desktop 與 mobile screenshot 供人工比對。

## 維護注意事項
- `_source/` 是原始內容與照片來源資料夾，不要移動或刪除。
- `docs/` 內的 Markdown 是各頁內容維護來源；Glossary 區塊請統一使用 `## Glossary`。
- 圖片新增或替換時，請同步檢查 HTML 路徑與 `image_mapping.md`。
- 修改 HTML / CSS / JS 後，請優先執行 `npm run test:visual` 檢查 desktop 與 mobile layout。
- 不要提交 `.DS_Store` 等作業系統暫存檔。
