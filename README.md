# React-pic-download

##Intention

In my project,we want to download images with our names.First,we use the '<a></a>' width it's download property.But,the download image's name and suffix is named by the url.How can we named it without rear-end.

##Installation

React-pic-download is available through npm:[example](https://www.joudee.com/downloadImage/index.html)

```sh
npm install react-pic-download
```

##React Pic Download Components

React-pic-download provide a react component to downlaod images that you can naming it by yourself.If you want use it for common HTMl.You can email me by 2068860045@qq.com. Then i will promote it for HTML.

You can use any name to use this component.Just like this:
```js
import DownLoadImages from 'react-pic-download'

<DownLoadImages config={config}></DownLoadImages>
```

The config is used to set url of the image that you want to download.And it also to set any style of the download button.
 ```js
let config = {
	href:'https://imgs.tusoapp.com/0c97b402-c63a-484b-aead-333e825171e3.jpg',		//image's url
	buttonStyle:{					//button's style
		width:'100px',
		height:'40px',
		background:'#0096ff'
	},
	btName:'下载',					//button's name
	fileName:'filename'				//the name of image that you save to the local
}
```