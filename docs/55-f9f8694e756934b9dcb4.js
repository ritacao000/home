"use strict";(self.webpackChunkwebsite_cyt=self.webpackChunkwebsite_cyt||[]).push([[55],{5192:function(t,e,n){n.d(e,{d:function(){return y}});var i=n(7267),r=n(5560);function s(t){return t.innerRadius}function a(t){return t.outerRadius}function o(t){return t.startAngle}function c(t){return t.endAngle}function l(t){return t&&t.padAngle}function h(t,e,n,i,s,a,o,c){var l=n-t,h=i-e,u=o-s,y=c-a,p=y*l-u*h;if(!(p*p<r.T))return[t+(p=(u*(e-a)-y*(t-s))/p)*l,e+p*h]}function u(t,e,n,i,s,a,o){var c=t-n,l=e-i,h=(o?a:-a)/(0,r.V)(c*c+l*l),u=h*l,y=-h*c,p=t+u,d=e+y,f=n+u,g=i+y,x=(p+f)/2,m=(d+g)/2,k=f-p,_=g-d,v=k*k+_*_,b=s-a,$=p*g-f*d,w=(_<0?-1:1)*(0,r.V)((0,r.$)(0,b*b*v-$*$)),T=($*_-k*w)/v,M=(-$*k-_*w)/v,A=($*_+k*w)/v,P=(-$*k+_*w)/v,S=T-x,E=M-m,I=A-x,C=P-m;return S*S+E*E>I*I+C*C&&(T=A,M=P),{cx:T,cy:M,x01:-u,y01:-y,x11:T*(s/b-1),y11:M*(s/b-1)}}function y(){var t=s,e=a,n=(0,i.c)(0),y=null,p=o,d=c,f=l,g=null;function x(){var s,a,o=+t.apply(this,arguments),c=+e.apply(this,arguments),l=p.apply(this,arguments)-r.R,x=d.apply(this,arguments)-r.R,m=(0,r.X)(x-l),k=x>l;if(g||(g=s=(0,i.p)()),c<o&&(a=c,c=o,o=a),c>r.T)if(m>r.K-r.T)g.moveTo(c*(0,r.P)(l),c*(0,r.Q)(l)),g.arc(0,0,c,l,x,!k),o>r.T&&(g.moveTo(o*(0,r.P)(x),o*(0,r.Q)(x)),g.arc(0,0,o,x,l,k));else{var _,v,b=l,$=x,w=l,T=x,M=m,A=m,P=f.apply(this,arguments)/2,S=P>r.T&&(y?+y.apply(this,arguments):(0,r.V)(o*o+c*c)),E=(0,r.W)((0,r.X)(c-o)/2,+n.apply(this,arguments)),I=E,C=E;if(S>r.T){var j=(0,r.Z)(S/o*(0,r.Q)(P)),D=(0,r.Z)(S/c*(0,r.Q)(P));(M-=2*j)>r.T?(w+=j*=k?1:-1,T-=j):(M=0,w=T=(l+x)/2),(A-=2*D)>r.T?(b+=D*=k?1:-1,$-=D):(A=0,b=$=(l+x)/2)}var V=c*(0,r.P)(b),Y=c*(0,r.Q)(b),O=o*(0,r.P)(T),R=o*(0,r.Q)(T);if(E>r.T){var L,N=c*(0,r.P)($),F=c*(0,r.Q)($),Q=o*(0,r.P)(w),z=o*(0,r.Q)(w);if(m<r.O&&(L=h(V,Y,Q,z,N,F,O,R))){var B=V-L[0],W=Y-L[1],X=N-L[0],q=F-L[1],Z=1/(0,r.Q)((0,r._)((B*X+W*q)/((0,r.V)(B*B+W*W)*(0,r.V)(X*X+q*q)))/2),U=(0,r.V)(L[0]*L[0]+L[1]*L[1]);I=(0,r.W)(E,(o-U)/(Z-1)),C=(0,r.W)(E,(c-U)/(Z+1))}}A>r.T?C>r.T?(_=u(Q,z,V,Y,c,C,k),v=u(N,F,O,R,c,C,k),g.moveTo(_.cx+_.x01,_.cy+_.y01),C<E?g.arc(_.cx,_.cy,C,(0,r.Y)(_.y01,_.x01),(0,r.Y)(v.y01,v.x01),!k):(g.arc(_.cx,_.cy,C,(0,r.Y)(_.y01,_.x01),(0,r.Y)(_.y11,_.x11),!k),g.arc(0,0,c,(0,r.Y)(_.cy+_.y11,_.cx+_.x11),(0,r.Y)(v.cy+v.y11,v.cx+v.x11),!k),g.arc(v.cx,v.cy,C,(0,r.Y)(v.y11,v.x11),(0,r.Y)(v.y01,v.x01),!k))):(g.moveTo(V,Y),g.arc(0,0,c,b,$,!k)):g.moveTo(V,Y),o>r.T&&M>r.T?I>r.T?(_=u(O,R,N,F,o,-I,k),v=u(V,Y,Q,z,o,-I,k),g.lineTo(_.cx+_.x01,_.cy+_.y01),I<E?g.arc(_.cx,_.cy,I,(0,r.Y)(_.y01,_.x01),(0,r.Y)(v.y01,v.x01),!k):(g.arc(_.cx,_.cy,I,(0,r.Y)(_.y01,_.x01),(0,r.Y)(_.y11,_.x11),!k),g.arc(0,0,o,(0,r.Y)(_.cy+_.y11,_.cx+_.x11),(0,r.Y)(v.cy+v.y11,v.cx+v.x11),k),g.arc(v.cx,v.cy,I,(0,r.Y)(v.y11,v.x11),(0,r.Y)(v.y01,v.x01),!k))):g.arc(0,0,o,T,w,k):g.lineTo(O,R)}else g.moveTo(0,0);if(g.closePath(),s)return g=null,s+""||null}return x.centroid=function(){var n=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,i=(+p.apply(this,arguments)+ +d.apply(this,arguments))/2-r.O/2;return[(0,r.P)(i)*n,(0,r.Q)(i)*n]},x.innerRadius=function(e){return arguments.length?(t="function"==typeof e?e:(0,i.c)(+e),x):t},x.outerRadius=function(t){return arguments.length?(e="function"==typeof t?t:(0,i.c)(+t),x):e},x.cornerRadius=function(t){return arguments.length?(n="function"==typeof t?t:(0,i.c)(+t),x):n},x.padRadius=function(t){return arguments.length?(y=null==t?null:"function"==typeof t?t:(0,i.c)(+t),x):y},x.startAngle=function(t){return arguments.length?(p="function"==typeof t?t:(0,i.c)(+t),x):p},x.endAngle=function(t){return arguments.length?(d="function"==typeof t?t:(0,i.c)(+t),x):d},x.padAngle=function(t){return arguments.length?(f="function"==typeof t?t:(0,i.c)(+t),x):f},x.context=function(t){return arguments.length?(g=t??null,x):g},x}},2055:function(t,e,n){n.r(e),n.d(e,{diagram:function(){return V}});var i=n(6560),r=n(9726),s=n(5192),a=n(5560),o=function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,2],n=[1,5],i=[6,9,11,17,18,20,22,23,24,26],r=[1,15],s=[1,16],a=[1,17],o=[1,18],c=[1,19],l=[1,20],h=[1,24],u=[4,6,9,11,17,18,20,22,23,24,26],y={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,n,i,r,s,a){var o=s.length-1;switch(r){case 1:return s[o-1];case 3:case 7:case 8:this.$=[];break;case 4:s[o-1].push(s[o]),this.$=s[o-1];break;case 5:case 6:this.$=s[o];break;case 11:i.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 12:this.$=s[o].trim(),i.setAccTitle(this.$);break;case 13:case 14:this.$=s[o].trim(),i.setAccDescription(this.$);break;case 15:i.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 16:i.addTask(s[o-1],s[o]),this.$="task";break;case 18:i.parseDirective("%%{","open_directive");break;case 19:i.parseDirective(s[o],"type_directive");break;case 20:s[o]=s[o].trim().replace(/'/g,'"'),i.parseDirective(s[o],"arg_directive");break;case 21:i.parseDirective("}%%","close_directive","journey")}},table:[{3:1,4:e,7:3,12:4,26:n},{1:[3]},t(i,[2,3],{5:6}),{3:7,4:e,7:3,12:4,26:n},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:r,18:s,20:a,22:o,23:c,24:l,26:n},{1:[2,2]},{14:22,15:[1,23],29:h},t([15,29],[2,19]),t(i,[2,8],{1:[2,1]}),t(i,[2,4]),{7:21,10:25,12:4,17:r,18:s,20:a,22:o,23:c,24:l,26:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,11]),{19:[1,26]},{21:[1,27]},t(i,[2,14]),t(i,[2,15]),{25:[1,28]},t(i,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},t(i,[2,5]),t(i,[2,12]),t(i,[2,13]),t(i,[2,16]),t(u,[2,9]),{14:32,29:h},{29:[2,20]},{11:[1,33]},t(u,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],r=[null],s=[],a=this.table,o="",c=0,l=0,h=2,u=1,y=s.slice.call(arguments,1),p=Object.create(this.lexer),d={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(d.yy[f]=this.yy[f]);p.setInput(t,d.yy),d.yy.lexer=p,d.yy.parser=this,typeof p.yylloc>"u"&&(p.yylloc={});var g=p.yylloc;s.push(g);var x=p.options&&p.options.ranges;function m(){var t;return"number"!=typeof(t=i.pop()||p.lex()||u)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var k,_,v,b,$,w,T,M,A={};;){if(_=n[n.length-1],this.defaultActions[_]?v=this.defaultActions[_]:((null===k||typeof k>"u")&&(k=m()),v=a[_]&&a[_][k]),typeof v>"u"||!v.length||!v[0]){var P="";for($ in M=[],a[_])this.terminals_[$]&&$>h&&M.push("'"+this.terminals_[$]+"'");P=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+M.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(c+1)+": Unexpected "+(k==u?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(P,{text:p.match,token:this.terminals_[k]||k,line:p.yylineno,loc:g,expected:M})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+k);switch(v[0]){case 1:n.push(k),r.push(p.yytext),s.push(p.yylloc),n.push(v[1]),k=null,l=p.yyleng,o=p.yytext,c=p.yylineno,g=p.yylloc;break;case 2:if(w=this.productions_[v[1]][1],A.$=r[r.length-w],A._$={first_line:s[s.length-(w||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(w||1)].first_column,last_column:s[s.length-1].last_column},x&&(A._$.range=[s[s.length-(w||1)].range[0],s[s.length-1].range[1]]),typeof(b=this.performAction.apply(A,[o,l,c,d.yy,v[1],r,s].concat(y)))<"u")return b;w&&(n=n.slice(0,-1*w*2),r=r.slice(0,-1*w),s=s.slice(0,-1*w)),n.push(this.productions_[v[1]][0]),r.push(A.$),s.push(A._$),T=a[n[n.length-2]][n[n.length-1]],n.push(T);break;case 3:return!0}}return!0}},p={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((n=this._input.match(this.rules[r[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}};function d(){this.yy={}}return y.lexer=p,d.prototype=y,y.Parser=d,new d}();o.parser=o;const c=o;let l="";const h=[],u=[],y=[],p=function(){const t=function(t){return y[t].processed};let e=!0;for(const[n,i]of y.entries())t(n),e=e&&i.processed;return e},d={parseDirective:function(t,e,n){i.m.parseDirective(this,t,e,n)},getConfig:()=>(0,r.g)().journey,clear:function(){h.length=0,u.length=0,l="",y.length=0,(0,r.A)()},setDiagramTitle:r.y,getDiagramTitle:r.z,setAccTitle:r.q,getAccTitle:r.v,setAccDescription:r.x,getAccDescription:r.w,addSection:function(t){l=t,h.push(t)},getSections:function(){return h},getTasks:function(){let t=p();let e=0;for(;!t&&e<100;)t=p(),e++;return u.push(...y),u},addTask:function(t,e){const n=e.substr(1).split(":");let i=0,r=[];1===n.length?(i=Number(n[0]),r=[]):(i=Number(n[0]),r=n[1].split(","));const s=r.map((t=>t.trim())),a={section:l,type:l,people:s,task:t,score:i};y.push(a)},addTaskOrg:function(t){const e={section:l,type:l,description:t,task:t,classes:[]};u.push(e)},getActors:function(){return function(){const t=[];return u.forEach((e=>{e.people&&t.push(...e.people)})),[...new Set(t)].sort()}()}},f=t=>`.label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ${t.textColor};\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${t.textColor}\n  }\n\n  .legend {\n    fill: ${t.textColor};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${t.textColor}\n  }\n\n  .face {\n    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${t.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${t.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${t.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${t.titleColor};\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${t.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${t.fillType0?`fill: ${t.fillType0}`:""};\n  }\n  .task-type-1, .section-type-1  {\n    ${t.fillType0?`fill: ${t.fillType1}`:""};\n  }\n  .task-type-2, .section-type-2  {\n    ${t.fillType0?`fill: ${t.fillType2}`:""};\n  }\n  .task-type-3, .section-type-3  {\n    ${t.fillType0?`fill: ${t.fillType3}`:""};\n  }\n  .task-type-4, .section-type-4  {\n    ${t.fillType0?`fill: ${t.fillType4}`:""};\n  }\n  .task-type-5, .section-type-5  {\n    ${t.fillType0?`fill: ${t.fillType5}`:""};\n  }\n  .task-type-6, .section-type-6  {\n    ${t.fillType0?`fill: ${t.fillType6}`:""};\n  }\n  .task-type-7, .section-type-7  {\n    ${t.fillType0?`fill: ${t.fillType7}`:""};\n  }\n\n  .actor-0 {\n    ${t.actor0?`fill: ${t.actor0}`:""};\n  }\n  .actor-1 {\n    ${t.actor1?`fill: ${t.actor1}`:""};\n  }\n  .actor-2 {\n    ${t.actor2?`fill: ${t.actor2}`:""};\n  }\n  .actor-3 {\n    ${t.actor3?`fill: ${t.actor3}`:""};\n  }\n  .actor-4 {\n    ${t.actor4?`fill: ${t.actor4}`:""};\n  }\n  .actor-5 {\n    ${t.actor5?`fill: ${t.actor5}`:""};\n  }\n`,g=function(t,e){const n=t.append("rect");return n.attr("x",e.x),n.attr("y",e.y),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("width",e.width),n.attr("height",e.height),n.attr("rx",e.rx),n.attr("ry",e.ry),void 0!==e.class&&n.attr("class",e.class),n},x=function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n},m=function(t,e){const n=e.text.replace(/<br\s*\/?>/gi," "),i=t.append("text");i.attr("x",e.x),i.attr("y",e.y),i.attr("class","legend"),i.style("text-anchor",e.anchor),void 0!==e.class&&i.attr("class",e.class);const r=i.append("tspan");return r.attr("x",e.x+2*e.textMargin),r.text(n),i};let k=-1;const _=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},v=function(){function t(t,e,n,r,s,a,o,c){i(e.append("text").attr("x",n+s/2).attr("y",r+a/2+5).style("font-color",c).style("text-anchor","middle").text(t),o)}function e(t,e,n,r,s,a,o,c,l){const{taskFontSize:h,taskFontFamily:u}=c,y=t.split(/<br\s*\/?>/gi);for(let p=0;p<y.length;p++){const t=p*h-h*(y.length-1)/2,c=e.append("text").attr("x",n+s/2).attr("y",r).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",u);c.append("tspan").attr("x",n+s/2).attr("dy",t).text(y[p]),c.attr("y",r+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(c,o)}}function n(t,n,r,s,a,o,c,l){const h=n.append("switch"),u=h.append("foreignObject").attr("x",r).attr("y",s).attr("width",a).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,r,s,a,o,c,l),i(u,c)}function i(t,e){for(const n in e)n in e&&t.attr(n,e[n])}return function(i){return"fo"===i.textPlacement?n:"old"===i.textPlacement?t:e}}(),b=x,$=function(t,e,n){const i=t.append("g"),r=_();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=n.width*e.taskCount+n.diagramMarginX*(e.taskCount-1),r.height=n.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,g(i,r),v(n)(e.text,i,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},n,e.colour)},w=m,T=function(t,e,n){const i=e.x+n.width/2,r=t.append("g");k++;r.append("line").attr("id","task"+k).attr("x1",i).attr("y1",e.y).attr("x2",i).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),function(t,e){const n=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=t.append("g");i.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){const n=(0,s.d)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(6.8181818181818175);t.append("path").attr("class","mouth").attr("d",n).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(i):e.score<3?function(t){const n=(0,s.d)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(6.8181818181818175);t.append("path").attr("class","mouth").attr("d",n).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(i):i.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(r,{cx:i,cy:300+30*(5-e.score),score:e.score});const a=_();a.x=e.x,a.y=e.y,a.fill=e.fill,a.width=n.width,a.height=n.height,a.class="task task-type-"+e.num,a.rx=3,a.ry=3,g(r,a);let o=e.x+14;e.people.forEach((t=>{const n=e.actors[t].color,i={cx:o,cy:e.y,r:7,fill:n,stroke:"#000",title:t,pos:e.actors[t].position};x(r,i),o+=10})),v(n)(e.task,r,a.x,a.y,a.width,a.height,{class:"task"},n,e.colour)},M=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},A={};const P=(0,r.g)().journey,S=P.leftMargin,E={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,n,i){void 0===t[e]?t[e]=n:t[e]=i(n,t[e])},updateBounds:function(t,e,n,i){const s=(0,r.g)().journey,a=this;let o=0;var c;this.sequenceItems.forEach((function(r){o++;const l=a.sequenceItems.length-o+1;a.updateVal(r,"starty",e-l*s.boxMargin,Math.min),a.updateVal(r,"stopy",i+l*s.boxMargin,Math.max),a.updateVal(E.data,"startx",t-l*s.boxMargin,Math.min),a.updateVal(E.data,"stopx",n+l*s.boxMargin,Math.max),"activation"!==c&&(a.updateVal(r,"startx",t-l*s.boxMargin,Math.min),a.updateVal(r,"stopx",n+l*s.boxMargin,Math.max),a.updateVal(E.data,"starty",e-l*s.boxMargin,Math.min),a.updateVal(E.data,"stopy",i+l*s.boxMargin,Math.max))}))},insert:function(t,e,n,i){const r=Math.min(t,n),s=Math.max(t,n),a=Math.min(e,i),o=Math.max(e,i);this.updateVal(E.data,"startx",r,Math.min),this.updateVal(E.data,"starty",a,Math.min),this.updateVal(E.data,"stopx",s,Math.max),this.updateVal(E.data,"stopy",o,Math.max),this.updateBounds(r,a,s,o)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},I=P.sectionFills,C=P.sectionColours,j=function(t,e,n){const i=(0,r.g)().journey;let s="";const a=n+(2*i.height+i.diagramMarginY);let o=0,c="#CCC",l="black",h=0;for(const[r,u]of e.entries()){if(s!==u.section){c=I[o%I.length],h=o%I.length,l=C[o%C.length];let n=0;const a=u.section;for(let t=r;t<e.length&&e[t].section==a;t++)n+=1;const y={x:r*i.taskMargin+r*i.width+S,y:50,text:u.section,fill:c,num:h,colour:l,taskCount:n};$(t,y,i),s=u.section,o++}const n=u.people.reduce(((t,e)=>(A[e]&&(t[e]=A[e]),t)),{});u.x=r*i.taskMargin+r*i.width+S,u.y=a,u.width=i.diagramMarginX,u.height=i.diagramMarginY,u.colour=l,u.fill=c,u.num=h,u.actors=n,T(t,u,i),E.insert(u.x,u.y,u.x+u.width+i.taskMargin,450)}},D={setConf:function(t){Object.keys(t).forEach((function(e){P[e]=t[e]}))},draw:function(t,e,n,i){const s=(0,r.g)().journey;i.db.clear(),i.parser.parse(t+"\n");const o=(0,r.g)().securityLevel;let c;"sandbox"===o&&(c=(0,r.h)("#i"+e));const l="sandbox"===o?(0,r.h)(c.nodes()[0].contentDocument.body):(0,r.h)("body");E.init();const h=l.select("#"+e);M(h);const u=i.db.getTasks(),y=i.db.getDiagramTitle(),p=i.db.getActors();for(const r in A)delete A[r];let d=0;p.forEach((t=>{A[t]={color:s.actorColours[d%s.actorColours.length],position:d},d++})),function(t){const e=(0,r.g)().journey;let n=60;Object.keys(A).forEach((i=>{const r=A[i].color,s={cx:20,cy:n,r:7,fill:r,stroke:"#000",pos:A[i].position};b(t,s);const a={x:40,y:n+7,fill:"#666",text:i,textMargin:5|e.boxTextMargin};w(t,a),n+=20}))}(h),E.insert(0,0,S,50*Object.keys(A).length),j(h,u,0);const f=E.getBounds();y&&h.append("text").text(y).attr("x",S).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const g=f.stopy-f.starty+2*s.diagramMarginY,x=S+f.stopx+2*s.diagramMarginX;(0,a.v)(h,g,x,s.useMaxWidth),h.append("line").attr("x1",S).attr("y1",4*s.height).attr("x2",x-S-4).attr("y2",4*s.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const m=y?70:0;h.attr("viewBox",`${f.startx} -25 ${x} ${g+m}`),h.attr("preserveAspectRatio","xMinYMin meet"),h.attr("height",g+m+25)}},V={parser:c,db:d,renderer:D,styles:f,init:t=>{D.setConf(t.journey),d.clear()}}}}]);
//# sourceMappingURL=55-f9f8694e756934b9dcb4.js.map