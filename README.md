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

## 維護注意事項
- `_source/` 是原始內容與照片來源資料夾，不要移動或刪除。
- `docs/` 內的 Markdown 是各頁內容維護來源；Glossary 區塊請統一使用 `## Glossary`。
- 圖片新增或替換時，請同步檢查 HTML 路徑與 `image_mapping.md`。
- 不要提交 `.DS_Store` 等作業系統暫存檔。
