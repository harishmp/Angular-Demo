"use strict";(self.webpackChunkAngular_Demo=self.webpackChunkAngular_Demo||[]).push([[96],{3096:(x,m,i)=>{i.r(m),i.d(m,{WishlistModule:()=>T});var a=i(9808),r=i(9291),p=i(6961),h=i(1530),t=i(5e3),c=i(8966),g=i(7423);let f=(()=>{class o{constructor(n){this.dialogRef=n}ngOnInit(){}onNoClick(){this.dialogRef.close()}onYesClick(){this.dialogRef.close(!0)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(c.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dialog"]],decls:8,vars:0,consts:[["mat-dialog-content",""],["mat-dialog-actions",""],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,l){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"p"),t._uU(2,"Are you sure you want to delete this item?"),t.qZA(),t.qZA(),t.TgZ(3,"div",1),t.TgZ(4,"button",2),t.NdJ("click",function(){return l.onNoClick()}),t._uU(5,"No Thanks"),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){return l.onYesClick()}),t._uU(7,"Ok"),t.qZA(),t.qZA())},directives:[c.xY,c.H8,g.lW],styles:[""]}),o})();var v=i(7261),k=i(5620),u=i(2391);function C(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"lib-pokemon-card",3),t.NdJ("onclickEventredirect",function(e){return t.CHM(n),t.oxw().redirecttoDetailPage(e)})("onclickEventsecondicon",function(e){return t.CHM(n),t.oxw().deletefromPersonallist(e)}),t.ALo(2,"async"),t.qZA(),t.qZA()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("dataList",t.lcZ(2,1,n.pokemonWishList$))}}function Z(o,s){1&o&&(t.TgZ(0,"div",4),t.TgZ(1,"h2",5),t._uU(2,"List is empty!!!"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Add items to wishlist."),t.qZA(),t.qZA())}const W=[{path:"",component:(()=>{class o{constructor(n,l,e,d){this.router=n,this._snackBar=l,this.store=e,this.dialog=d,this.pokemonWishList$=this.store.select(h.jq)}ngOnInit(){}redirecttoDetailPage(n){this.router.navigate([`pokemon-detail-page/${n.id}`])}deletefromPersonallist(n){this.dialog.open(f,{width:"250px"}).afterClosed().subscribe(e=>{!e||(this.store.dispatch((0,p.J)({id:n.id})),this._snackBar.open("Deleted item successfully","close",{duration:2500}))})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.F0),t.Y36(v.ux),t.Y36(k.yh),t.Y36(c.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-wishlist"]],decls:5,vars:8,consts:[["class","container-fluid mt-2",4,"ngIf"],["class","row card shadow p-3 m-3",4,"ngIf"],[1,"container-fluid","mt-2"],[3,"dataList","onclickEventredirect","onclickEventsecondicon"],[1,"row","card","shadow","p-3","m-3"],[1,"m-0"]],template:function(n,l){if(1&n&&(t.YNc(0,C,3,3,"div",0),t.ALo(1,"async"),t.YNc(2,Z,5,0,"div",1),t.ALo(3,"async"),t.ALo(4,"async")),2&n){let e;t.Q6J("ngIf",t.lcZ(1,2,l.pokemonWishList$)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(3,4,l.pokemonWishList$)||0==(null==(e=t.lcZ(4,6,l.pokemonWishList$))?null:e.length))}},directives:[a.O5,u.U],pipes:[a.Ov],styles:[""]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(W)],r.Bz]}),o})();var A=i(5580);let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.ez,y,u.F,A.q]]}),o})()}}]);