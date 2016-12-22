import React from 'react'
require('./index.css')

export default class MyComponent extends React.Component{
    constructor(props) {
        super(props)
    }
    handleClick(e){
    	let Images = this.cacheExternalImage(this.props.config.href),
            canvas = this.refs.canvas;
        
        this.refs.download.href = canvas.toDataURL("image/jpeg", 1.0);
        this.refs.download.download = this.props.config.fileName+".png";
    }
    cacheExternalImage(url){
        var img = new Image,
        src = url,
        cvs = document.createElement('canvas'),
        ctx = cvs.getContext('2d');
        img.crossOrigin = "Anonymous";
        img.src = src;
        return img;
    }
    drawCanvas(){
        let Images = new Image(),
        img = this.cacheExternalImage(this.props.config.href),
        that = this,
        canvas = this.refs.canvas,
        ctx=canvas.getContext('2d');
        Images.src = this.props.config.href;
        Images.onload = function(){
            canvas.style.height = img.height+'px';
            canvas.style.width = img.width+'px';
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img,0,0,img.width,img.height);
        }
    }
    componentDidMount(){
        this.drawCanvas();
    }
    render() {
        return (
            <a className='react-pic-download' onClick={this.handleClick.bind(this)} ref='download' style={this.props.config.buttonStyle?this.props.config.buttonStyle:{}}>
                {this.props.config.btName}
            	<canvas ref='canvas' style={{display:'none'}}></canvas>
            </a>
        )
    }
}