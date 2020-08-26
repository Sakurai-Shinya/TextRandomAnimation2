# TextRandomAnimation2.js

created by Shinya Sakurai (Twitter:@sakurai_sinya)

## 概要

これはHTMLで書いた文字列をランダムな文字列を表示しながら徐々に表示していくアニメーションを簡単に実装できるJavaScriptです。

これはTextRandomAnimation.jsのコピーを元に作られています。

## 使い方

### 1.JavaScriptの各種設定

jsファイルを開き、ランダムな文字列に使われる文字、アニメーションの速度を指定します。

ほとんどの場合デフォルトの状態で大丈夫でしょう。

### 2.HTML側でJavaScriptファイルを読み込む

HTMLの&lt;head&gt;ブロック内に以下のようにasyncを付けてjsファイルを読み込むよう記載します。

```
<script src="text-random-animation2.js" async></script>
```

もし&lt;body&gt;ブロックの一番下でも大丈夫な場合、asyncは付ける必要は無いでしょう。

### 3.アニメーションを行う文字列を指定する

class=&quot;animation-text&quot;をアニメーションで表示したい要素に指定していきます。

### 4.class=&quot;animation-text&quot;を設定した要素にidを設定する。

idはHTML内で固有のものでなければなりません。

### 5.イベントハンドラを設定

onclickやonchange、onloadなど、どのタイミングで文字を表示するかを設定します。

そしてanimationStart()メソッドを実行します。
animationStart()メソッドの引数として4で設定したidの文字列を指定します。

```
//4でid="animation-text1"とした場合
onclick="animationStart('animation-text1');"
```

### 5.イベントを発火します。

Let's enjoy!!

## おまけ

このJavaScriptにはanimationStartが行われる前の状態に戻す、「animationReset()」関数を用意しました。

使い方はanimationStart()関数と同じで、animationReset([ID名])を実行するだけです。

ぜひ、有効活用してみてください。

## 履歴

2020-08-26 (JST) version 1.0 初期バージョン公開。