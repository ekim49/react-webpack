# 😎 리액트로 웹앱 번들링하기
> 📑 GitHub Pages 배포 링크: https://ekim49.github.io/react-webpack/
<br/>

## Documents & References
<p>https://webpack.js.org/loaders/</p>
<p>https://webpack.js.org/plugins/css-minimizer-webpack-plugin/</p>
<p>https://webpack.js.org/plugins/mini-css-extract-plugin/</p>
<p>https://stackoverflow.com/questions/42148632/conflict-multiple-assets-emit-to-the-same-filename (동적인 output 생성)</p>
<br/>

## Bare Minimum Requirement
* [X] 리액트 웹 애플리케이션을 제작합니다.
* [X] `babel-loader`, `style-loader`, `css-loader`, `html-webpack-plugin` 등 필요한 로더나 플러그인을 스스로 학습하고 리액트 앱을 번들링합니다.
<br/>

## Advanced Challenge
공식문서와 구글링으로 아래 키워드에 대해서 스스로 학습하고, 적용해보세요.

### github page 배포
* [X] 번들을 github page로 배포합니다.
- (주의점: output이 dist가 아니고 docs로 해야하고, github page 옵션을 변경해야 합니다.)

### 작동 모드 설정
* [X] development mode와 production mode의 차이에 대해서 학습하고, config file을 나눠보세요.

### Output 관리
* [X] 번들링 할 때 마다 dist 디렉터리를 정리해보세요.
* [X] app.bundle.js 가 아니라, output이 늘 동적으로 변하도록 생성해보세요.

### Asset 관리
* [X] CSS에 minify를 적용해봅니다. (힌트: `mini-css-extract-plugin`, `css-minimizer-webpack-plugin`)

### 개발용 서버
* [X] 라이브 서버와 비슷한 기능을 하는 `webpack-dev-server`, `react-hot-reloader` 를 적용합니다. (참고 링크)

### eslint, prettier
* [X] 리액트에 적합한 eslint, prettier 설정을 학습하고, 적용한다.
* [X] `eslint-plugin-jsx-a11y` 를 추가하여, JSX에서 웹 접근성을 지키는데 도움이 되는 룰을 적용한다.

### webpack-bundle-analyzer
* [X] 웹팩 번들에 얼마나 많은 모듈이 포함되어 있는지 쉽게 분석할 수 있는 `webpack-bundle-analyzer`를 적용합니다.

### 그 외
* [ ] 본인이 필요하다고 생각하는 로더나 플러그인에 대해서 학습하고, 적용합니다.
