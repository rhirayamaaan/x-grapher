# Covit-19 Community Mobillity Reports の利用について

このプロダクトは Google が公開している、[Covit-19 Community Mobillity Reports](https://www.google.com/covid19/mobility/) の CSV データを使用しています。

提供されている CSV データは全世界のデータとなっているため、日本のデータだけを抽出し、React で扱いやすいように JSON データに変換した上でプロダクトを作成しています。

抽出と変換のロジックの概要は以下のとおりです。

- 日本の各都道府県ごとのデータを抽出
  - 日本全体のデータは除く
- データを各都道府県ごとにグルーピング化
- `Residential` カテゴリの除外
  - Google 曰く、測定単位が他のカテゴリとは異なるため、比較をしないほうがよいと記載があるため除外しています。詳しくは [こちら](https://support.google.com/covid19-mobility/answer/9825414)。

より詳しいロジックをご覧になりたい方は、[こちら](./csvToJson.ts) をご覧ください。

また、CSV ファイルはコミットしていません。
