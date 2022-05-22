"use strict";(self.webpackChunkAngular_Demo=self.webpackChunkAngular_Demo||[]).push([[278],{4278:(U,s,i)=>{i.r(s),i.d(s,{DetailPageModule:()=>C});var d=i(9808),l=i(9291),c=i(8865),t=i(5e3),u=i(8534),Z=i(7423),p=i(5245),h=i(7322),r=i(9224),m=i(6688),f=i(5899);function T(a,g){if(1&a&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"mat-progress-bar",20),t.qZA(),t.qZA()),2&a){const e=g.$implicit,o=t.oxw(2);t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.type),t.xp6(2),t.s9C("value",e.accuracy),t.Q6J("bufferValue",o.bufferValue)}}function A(a,g){if(1&a&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.qZA()),2&a){const e=g.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.game_index)}}function v(a,g){if(1&a&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.TgZ(2,"mat-card",8),t.TgZ(3,"mat-card-header"),t._UZ(4,"img",9),t.TgZ(5,"mat-card-title"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-subtitle"),t._uU(8),t.qZA(),t.qZA(),t._UZ(9,"img",10),t.TgZ(10,"mat-card-content"),t.TgZ(11,"mat-chip-list"),t.TgZ(12,"mat-chip",11),t._uU(13),t.qZA(),t.TgZ(14,"mat-chip",11),t._uU(15),t.qZA(),t.TgZ(16,"mat-chip",11),t._uU(17),t.qZA(),t.TgZ(18,"mat-chip",11),t._uU(19),t.qZA(),t.TgZ(20,"mat-chip",11),t._uU(21),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",12),t.TgZ(23,"div",13),t.TgZ(24,"div",14),t.TgZ(25,"h2"),t._uU(26,"Moves Details"),t.qZA(),t.TgZ(27,"table",15),t.TgZ(28,"thead",16),t.TgZ(29,"tr"),t.TgZ(30,"th"),t._uU(31,"Name"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Type"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Accuracy"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"tbody"),t.YNc(37,T,7,4,"tr",17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",18),t.TgZ(39,"h2"),t._uU(40,"Stats Details"),t.qZA(),t.TgZ(41,"table",15),t.TgZ(42,"thead",19),t.TgZ(43,"tr"),t.TgZ(44,"th"),t._uU(45,"Id"),t.qZA(),t.TgZ(46,"th"),t._uU(47,"Name"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Game Index"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"tbody"),t.YNc(51,A,7,3,"tr",17),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.s9C("src",e.pokemonDetails.sprites,t.LSH),t.xp6(2),t.Oqu(e.pokemonDetails.name),t.xp6(2),t.hij("ID: ",e.pokemonDetails.id,""),t.xp6(1),t.s9C("src",e.pokemonDetails.dream_world,t.LSH),t.xp6(4),t.hij("Type: ",e.pokemonDetails.types,""),t.xp6(2),t.hij("Height: ",e.pokemonDetails.height,""),t.xp6(2),t.hij("Weight: ",e.pokemonDetails.weight,""),t.xp6(2),t.hij("Base Experience: ",e.pokemonDetails.base_experience,""),t.xp6(2),t.hij("Order: ",e.pokemonDetails.order,""),t.xp6(16),t.Q6J("ngForOf",e.resultmove),t.xp6(14),t.Q6J("ngForOf",e.resultstat)}}function x(a,g){1&a&&(t.TgZ(0,"div",21),t.TgZ(1,"h2"),t._uU(2,"Loading..."),t.qZA(),t.qZA())}function q(a,g){1&a&&(t.TgZ(0,"div",21),t.TgZ(1,"h2"),t._uU(2,"Something went wrong !!!. Please try again later"),t.qZA(),t.qZA())}const b=[{path:"",component:(()=>{class a{constructor(e,o,n){this.dataService=e,this.router=o,this.activatedRouter=n,this.bufferValue=75,this.pokemonDetails={},this.resultmove=new Array,this.resultstat=new Array,this.enableView=!1,this.isLoading=!1,this.activatedRouter.params.subscribe(O=>this.getPokemondetail(O.id))}ngOnInit(){}getPokemondetail(e){this.isLoading=!0,this.dataService.getPokemons(e).subscribe(o=>{this.pokemonDetails=new c.Nt(o.name,o.id,o.sprites,o.dream_world,o.types,o.moves,o.stats,o.height,o.weight,o.order,o.base_experience),this.enableView=!0,this.isLoading=!1,this.getMoves(this.pokemonDetails),this.getStats(this.pokemonDetails)},o=>{this.isLoading=!1,this.enableView=!1,console.log("In Error Block---",o._body+" "+o.status)})}getMoves(e){e.moves.forEach(o=>{this.dataService.getPokeMoves(o.move.url).subscribe(n=>{this.resultmove.push(new c.GP(n.name,n.type,n.accuracy))},n=>console.log("In Error Block---",n._body+" "+n.status))})}getStats(e){e.stats.forEach(o=>{this.dataService.getPokeStats(o.stat.url).subscribe(n=>{this.resultstat.push(new c.h0(n.name,n.id,n.game_index))},n=>console.log("In Error Block---",n._body+" "+n.status))})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u.D),t.Y36(l.F0),t.Y36(l.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-detail-page"]],decls:9,vars:3,consts:[[1,"container-fluid","col-md-12","pt-3","pb-3"],[1,"mb-3"],["mat-raised-button","","color","primary"],["matSuffix",""],["class","row col-md-12",4,"ngIf"],["class","row card shadow p-3",4,"ngIf"],[1,"row","col-md-12"],[1,"col-md-3","mb-3",2,"min-width","250px"],[1,"cardbg"],["mat-card-avatar","",1,"header-image",3,"src"],["mat-card-image","","alt","'pokemonDetails'",1,"p-5",3,"src"],["color","primary"],[1,"card","col-md-9"],[1,"row"],[1,"col-md-12","pt-3","tableFixHead"],[1,"table"],[1,"thead-dark"],[4,"ngFor","ngForOf"],[1,"col-md-12"],[1,"thead-light"],["color","primary","mode","determinate",1,"example-margin",3,"value","bufferValue"],[1,"row","card","shadow","p-3"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.TgZ(3,"mat-icon",3),t._uU(4,"keyboard_backspace"),t.qZA(),t._uU(5," Back "),t.qZA(),t.qZA(),t.YNc(6,v,52,11,"div",4),t.YNc(7,x,3,0,"div",5),t.YNc(8,q,3,0,"div",5),t.qZA()),2&e&&(t.xp6(6),t.Q6J("ngIf",o.enableView),t.xp6(1),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",!o.enableView&&!o.isLoading))},directives:[Z.lW,p.Hw,h.R9,d.O5,r.a8,r.dk,r.kc,r.n5,r.$j,r.G2,r.dn,m.qn,m.HS,d.sg,f.pW],styles:[".cardbg[_ngcontent-%COMP%]{background-color:#007bff40}.header-image[_ngcontent-%COMP%]{background-size:cover}.mat-card-header[_ngcontent-%COMP%]{background-color:#fff;padding-top:10px;border-radius:10px}.mat-card-title[_ngcontent-%COMP%]{text-transform:uppercase;color:#000}.mat-card-subtitle[_ngcontent-%COMP%]{color:#000}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#fff}.example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}button[_ngcontent-%COMP%]{width:100px}.moves-detail[_ngcontent-%COMP%]{max-height:500px;overflow-y:auto;margin-bottom:25px}.tableFixHead[_ngcontent-%COMP%]{overflow:auto;height:300px}.tableFixHead[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}th[_ngcontent-%COMP%]{background:#eee}"]}),a})()}];let P=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[l.Bz.forChild(b)],l.Bz]}),a})();var D=i(5580),y=i(7872);let C=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[d.ez,D.q,P,y.O]]}),a})()}}]);