# Webpack5 loader for art-template v3.1.3

> [art-template](https://github.com/visamz/art-template) 是新一代 javascript 模板引擎

### 模板语法

```
{{if admin}}
    {{include 'admin_content'}}

    {{each list}}
        <div>{{$index}}. {{$value.user}}</div>
    {{/each}}
{{/if}}
```

[查看语法与演示](https://github.com/visamz/art-template/wiki/%E7%AE%80%E6%B4%81%E8%AF%AD%E6%B3%95%E7%89%88)

## Installation

```sh
# npm
npm install art-template-webpack5-loader

# pnpm
pnpm add art-template-webpack5-loader
```

## Usage

### Webpack config

```
rules: [
    {
        test: /\.(art|tpl)$/,
        loader: 'art-template-webpack5-loader'
    }
]
```

You can customize the extension name.

### coding...

```
import InstallmentTpl from '../art/installment.art'


let creditPayInfoList = {
    list: [1, 3, 3]
}
let html = InstallmentTpl({creditPayInfoList})

```

#### Use art template helper

```
// js

var art = require('art-template/dist/template')

art.helper('dateFormat', function (timestamp, format) {
    var date = new Date(timestamp * 1000);
    var map = {
        'M': date.getMonth() + 1, //月份
        'd': date.getDate(), //日
        'h': date.getHours(), //小时
        'm': date.getMinutes(), //分
        's': date.getSeconds(), //秒
        'q': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds() //毫秒
    };

    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length-2)
            }
            return v
        } else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length)
        }
        return all
    });
    return format
})


// template

<p class="card_valid_date">有效期至 {{card.ExpireTime | dateFormat:'yyyy.MM.dd hh:mm'}}</p>
```
