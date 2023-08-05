"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function makeCarousel(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r){function n(e){_classCallCheck(this,n);var t=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={current:0,next:1,backwards:!1,swap:!1,appear:!1},t.turn=0,t.stop=!1,t.handleReveal=t.handleReveal.bind(t),t.handleSwipe=t.handleSwipe.bind(t),t.target=t.target.bind(t),t}return _inherits(n,r),_createClass(n,null,[{key:"propTypes",get:function(){return{children:_propTypes.node.isRequired,defaultWait:_propTypes.number,maxTurns:_propTypes.number,swipe:_propTypes.bool}}},{key:"defaultProps",get:function(){return{defaultWait:t.defaultWait||5e3,maxTurns:t.maxTurns||5,swipe:t.swipe||!0}}}]),_createClass(n,[{key:"target",value:function(e){var t=e.currentTarget;this.move(+t.getAttribute("data-position"))}},{key:"handleReveal",value:function(){this.turn>=this.props.maxTurns||this.move(this.state.current+1)}},{key:"componentWillUnmount",value:function(){this.turn=-1}},{key:"move",value:function(e){if(!(this.turn<0||e===this.state.current)){var t=e,r=_react2.default.Children.count(this.props.children);e>=r?(this.turn++,t=0):e<0&&(t=r-1),this.setState({current:t,next:this.state.current,backwards:e<this.state.current,swap:!this.state.swap,appear:!0})}}},{key:"handleSwipe",value:function(e){this.props.swipe&&("left"===e?this.move(this.state.current+1):"right"===e&&this.move(this.state.current-1))}},{key:"componentDidMount",value:function(){this.beforeNode&&this.afterNode&&((0,_swipedetect2.default)(this.beforeNode,this.handleSwipe),(0,_swipedetect2.default)(this.afterNode,this.handleSwipe))}},{key:"render",value:function(){var t=this,r=this.props.children,n=_react2.default.Children.toArray(r),a=n.length,o=this.state,i=o.swap,s=o.next,u=o.current,l=o.backwards;u%=a,s%=a;var p=void 0,c=void 0;switch(a){case 0:p=_react2.default.createElement("div",null),c=_react2.default.createElement("div",null);case 1:p=n[0],c=n[0];default:p=n[i?s:u],c=n[i?u:s]}return"object"!==(void 0===p?"undefined":_typeof(p))&&(p=_react2.default.createElement("div",null,p)),"object"!==(void 0===c?"undefined":_typeof(c))&&(c=_react2.default.createElement("div",null,c)),_react2.default.createElement(e,_extends({},this.props,{position:u,handleClick:this.target,total:a,children:[_react2.default.createElement("div",{ref:function(e){return t.beforeNode=e},key:1,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:i?1:2}},_react2.default.createElement(p.type,_extends({mountOnEnter:!0,unmountOnExit:!0,appear:this.state.appear,wait:this.props.defaultWait},p.props,{opposite:!0,when:!i,mirror:l,onReveal:i?void 0:this.handleReveal}))),_react2.default.createElement("div",{key:2,ref:function(e){return t.afterNode=e},style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:i?2:1}},_react2.default.createElement(c.type,_extends({mountOnEnter:!0,unmountOnExit:!0,appear:this.state.appear,wait:this.props.defaultWait},c.props,{opposite:!0,when:i,mirror:l,onReveal:i?this.handleReveal:void 0})))]}))}}]),n}(_react2.default.Component)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_swipedetect=require("./swipedetect"),_swipedetect2=_interopRequireDefault(_swipedetect);exports.default=makeCarousel,module.exports=exports.default;