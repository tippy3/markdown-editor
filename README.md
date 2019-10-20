## 検索からお越しの方へ（必ずお読みください）

本アプリのユーザー登録がいつの間にか増えていてビビりました。なぜか検索上位に来るみたいです。

プログラミング初心者が背伸びして作ったアプリですので、粗い部分がたくさんあります。メモの内容も暗号化されておりません。FirebaseのDBやAuthの仕様により、見ようと思えば、開発者は登録者のメールアドレスやメモの内容を閲覧できます。（もちろん実際には見ませんし、悪用もしませんのでご安心ください）

お試しいただく際は

	- メモに個人情報は書かない
	- 気になる方は捨てアドで登録する

等でお願いいたします。（以上、2019/10追記）

---

# README


公開中→https://markdown-editor-by-tippy.firebaseapp.com/

Vue.jsとFirebaseによって作られたマークダウンエディターです。

- Googleアカウントによるユーザー認証
- データはFirebase Realtime DBに保存
- 複数個のメモを作成可能
- リアルタイムプレビュー


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
