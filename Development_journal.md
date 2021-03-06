## Angular Webpack 설정

[Angular Webpack](https://angular.io/guide/webpack) 가이드 설정으로 프로젝트 설정을 한다. 한글 번역본은 [Angular Webpack 설정](https://infoscis.github.io/2017/06/15/angular-webpack-configuration/) 에서 확인

### ts2304 cannot find name 'process' 오류

```
npm start
```

가이드 문서대로 작성후, `npm start` 에서 오류 발생. 아래 문서 참조하여 오류 수정  
[why the types node,jasmine in tsconfig.spec.json?](https://github.com/angular/angular-cli/issues/5106)

* `tsconfig.app.json` 파일에서 다음과 같이 내용 추가함

```
"types": ["node"]
```


## bootstrap 적용

npm 을 통해 `ng-bootstrap` 설치  
```
npm install --save @ng-bootstrap/ng-bootstrap
```

`app.module.ts` 파일에서 import  
```
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgbModule.forRoot(), ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

`angular-cli.json` 파일에서 css 파일 경로 추가  
```
      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.css",
        ...
      ],
```

### 참고
 - [ng-bootstrap](https://ng-bootstrap.github.io/#/home)  
 - [Angular CLI에서 SASS와 Bootstrap 4 사용](https://comsiro.github.io/tech/2017/06/13/UsingSASSInAngular2WithBootstrap.html)


## global css 파일의 적용

`angular-cli.json` 파일에서 `styles` 에 css 파일 경로를 추가.
> `src` 경로를 기준으로 경로 설정 
  
```
      "styles": [
        "styles.css",
        "../node_modules/gentelella/build/css/custom.css"
      ],
```


## Can't bind to 'ngModel' since it isn't a known property of 'input'

`app.module.ts` 파일에서  `FormsModule` 모듈을 추가.


```
...
import { FormsModule } from '@angular/forms';
...

@NgModule({
  ...
  imports: [BrowserModule, FormsModule, ...],
  ...
})
...
```


## Angular 에서 Login 처리


### 참고
  - [User Authentication With Angular 4 and Flask](https://realpython.com/blog/python/user-authentication-with-angular-4-and-flask/)