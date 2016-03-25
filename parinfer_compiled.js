if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6495 = cljs.core.seq.call(null,self__.watches);var chunk__6496 = null;var count__6497 = 0;var i__6498 = 0;while(true){
if((i__6498 < count__6497))
{var vec__6499 = cljs.core._nth.call(null,chunk__6496,i__6498);var key__$1 = cljs.core.nth.call(null,vec__6499,0,null);var f = cljs.core.nth.call(null,vec__6499,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6574 = seq__6495;
var G__6575 = chunk__6496;
var G__6576 = count__6497;
var G__6577 = (i__6498 + 1);
seq__6495 = G__6574;
chunk__6496 = G__6575;
count__6497 = G__6576;
i__6498 = G__6577;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6495);if(temp__4092__auto__)
{var seq__6495__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6495__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6495__$1);{
var G__6578 = cljs.core.chunk_rest.call(null,seq__6495__$1);
var G__6579 = c__5632__auto__;
var G__6580 = cljs.core.count.call(null,c__5632__auto__);
var G__6581 = 0;
seq__6495 = G__6578;
chunk__6496 = G__6579;
count__6497 = G__6580;
i__6498 = G__6581;
continue;
}
} else
{var vec__6500 = cljs.core.first.call(null,seq__6495__$1);var key__$1 = cljs.core.nth.call(null,vec__6500,0,null);var f = cljs.core.nth.call(null,vec__6500,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6582 = cljs.core.next.call(null,seq__6495__$1);
var G__6583 = null;
var G__6584 = 0;
var G__6585 = 0;
seq__6495 = G__6582;
chunk__6496 = G__6583;
count__6497 = G__6584;
i__6498 = G__6585;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__6502 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__6502,0,null);var path__$2 = cljs.core.nth.call(null,vec__6502,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__6502,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__6502,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__6586__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__6586 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__6586__delegate.call(this,sa,f,x,y,z,more);};
G__6586.cljs$lang$maxFixedArity = 5;
G__6586.cljs$lang$applyTo = (function (arglist__6587){
var sa = cljs.core.first(arglist__6587);
arglist__6587 = cljs.core.next(arglist__6587);
var f = cljs.core.first(arglist__6587);
arglist__6587 = cljs.core.next(arglist__6587);
var x = cljs.core.first(arglist__6587);
arglist__6587 = cljs.core.next(arglist__6587);
var y = cljs.core.first(arglist__6587);
arglist__6587 = cljs.core.next(arglist__6587);
var z = cljs.core.first(arglist__6587);
var more = cljs.core.rest(arglist__6587);
return G__6586__delegate(sa,f,x,y,z,more);
});
G__6586.cljs$core$IFn$_invoke$arity$variadic = G__6586__delegate;
return G__6586;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj6504 = {};return obj6504;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._depend[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._depend["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._compute[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._compute["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
});})(this$__$1))
);
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6505 = cljs.core.seq.call(null,self__.watches);var chunk__6506 = null;var count__6507 = 0;var i__6508 = 0;while(true){
if((i__6508 < count__6507))
{var vec__6509 = cljs.core._nth.call(null,chunk__6506,i__6508);var key__$1 = cljs.core.nth.call(null,vec__6509,0,null);var f = cljs.core.nth.call(null,vec__6509,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6588 = seq__6505;
var G__6589 = chunk__6506;
var G__6590 = count__6507;
var G__6591 = (i__6508 + 1);
seq__6505 = G__6588;
chunk__6506 = G__6589;
count__6507 = G__6590;
i__6508 = G__6591;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6505);if(temp__4092__auto__)
{var seq__6505__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6505__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6505__$1);{
var G__6592 = cljs.core.chunk_rest.call(null,seq__6505__$1);
var G__6593 = c__5632__auto__;
var G__6594 = cljs.core.count.call(null,c__5632__auto__);
var G__6595 = 0;
seq__6505 = G__6592;
chunk__6506 = G__6593;
count__6507 = G__6594;
i__6508 = G__6595;
continue;
}
} else
{var vec__6510 = cljs.core.first.call(null,seq__6505__$1);var key__$1 = cljs.core.nth.call(null,vec__6510,0,null);var f = cljs.core.nth.call(null,vec__6510,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6596 = cljs.core.next.call(null,seq__6505__$1);
var G__6597 = null;
var G__6598 = 0;
var G__6599 = 0;
seq__6505 = G__6596;
chunk__6506 = G__6597;
count__6507 = G__6598;
i__6508 = G__6599;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__6515_6600 = cljs.core.seq.call(null,atms);var chunk__6516_6601 = null;var count__6517_6602 = 0;var i__6518_6603 = 0;while(true){
if((i__6518_6603 < count__6517_6602))
{var atm_6604 = cljs.core._nth.call(null,chunk__6516_6601,i__6518_6603);crate.binding._depend.call(null,neue,atm_6604);
{
var G__6605 = seq__6515_6600;
var G__6606 = chunk__6516_6601;
var G__6607 = count__6517_6602;
var G__6608 = (i__6518_6603 + 1);
seq__6515_6600 = G__6605;
chunk__6516_6601 = G__6606;
count__6517_6602 = G__6607;
i__6518_6603 = G__6608;
continue;
}
} else
{var temp__4092__auto___6609 = cljs.core.seq.call(null,seq__6515_6600);if(temp__4092__auto___6609)
{var seq__6515_6610__$1 = temp__4092__auto___6609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6515_6610__$1))
{var c__5632__auto___6611 = cljs.core.chunk_first.call(null,seq__6515_6610__$1);{
var G__6612 = cljs.core.chunk_rest.call(null,seq__6515_6610__$1);
var G__6613 = c__5632__auto___6611;
var G__6614 = cljs.core.count.call(null,c__5632__auto___6611);
var G__6615 = 0;
seq__6515_6600 = G__6612;
chunk__6516_6601 = G__6613;
count__6517_6602 = G__6614;
i__6518_6603 = G__6615;
continue;
}
} else
{var atm_6616 = cljs.core.first.call(null,seq__6515_6610__$1);crate.binding._depend.call(null,neue,atm_6616);
{
var G__6617 = cljs.core.next.call(null,seq__6515_6610__$1);
var G__6618 = null;
var G__6619 = 0;
var G__6620 = 0;
seq__6515_6600 = G__6617;
chunk__6516_6601 = G__6618;
count__6517_6602 = G__6619;
i__6518_6603 = G__6620;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj6520 = {};return obj6520;
})();
crate.binding.bindable = (function (){var obj6522 = {};return obj6522;
})();
crate.binding._value = (function _value(this$){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._value[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._value["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._on_change[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._on_change["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6523 = cljs.core.seq.call(null,self__.watches);var chunk__6524 = null;var count__6525 = 0;var i__6526 = 0;while(true){
if((i__6526 < count__6525))
{var vec__6527 = cljs.core._nth.call(null,chunk__6524,i__6526);var key = cljs.core.nth.call(null,vec__6527,0,null);var f = cljs.core.nth.call(null,vec__6527,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6621 = seq__6523;
var G__6622 = chunk__6524;
var G__6623 = count__6525;
var G__6624 = (i__6526 + 1);
seq__6523 = G__6621;
chunk__6524 = G__6622;
count__6525 = G__6623;
i__6526 = G__6624;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6523);if(temp__4092__auto__)
{var seq__6523__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6523__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6523__$1);{
var G__6625 = cljs.core.chunk_rest.call(null,seq__6523__$1);
var G__6626 = c__5632__auto__;
var G__6627 = cljs.core.count.call(null,c__5632__auto__);
var G__6628 = 0;
seq__6523 = G__6625;
chunk__6524 = G__6626;
count__6525 = G__6627;
i__6526 = G__6628;
continue;
}
} else
{var vec__6528 = cljs.core.first.call(null,seq__6523__$1);var key = cljs.core.nth.call(null,vec__6528,0,null);var f = cljs.core.nth.call(null,vec__6528,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6629 = cljs.core.next.call(null,seq__6523__$1);
var G__6630 = null;
var G__6631 = 0;
var G__6632 = 0;
seq__6523 = G__6629;
chunk__6524 = G__6630;
count__6525 = G__6631;
i__6526 = G__6632;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__6529){var vec__6530 = p__6529;var event = cljs.core.nth.call(null,vec__6530,0,null);var el = cljs.core.nth.call(null,vec__6530,1,null);var v = cljs.core.nth.call(null,vec__6530,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__4884__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__6633){
var bc = cljs.core.first(arglist__6633);
var segs = cljs.core.rest(arglist__6633);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__6539_6634 = cljs.core.seq.call(null,added);var chunk__6540_6635 = null;var count__6541_6636 = 0;var i__6542_6637 = 0;while(true){
if((i__6542_6637 < count__6541_6636))
{var a_6638 = cljs.core._nth.call(null,chunk__6540_6635,i__6542_6637);crate.binding.bc_add.call(null,bc,a_6638,a_6638);
{
var G__6639 = seq__6539_6634;
var G__6640 = chunk__6540_6635;
var G__6641 = count__6541_6636;
var G__6642 = (i__6542_6637 + 1);
seq__6539_6634 = G__6639;
chunk__6540_6635 = G__6640;
count__6541_6636 = G__6641;
i__6542_6637 = G__6642;
continue;
}
} else
{var temp__4092__auto___6643 = cljs.core.seq.call(null,seq__6539_6634);if(temp__4092__auto___6643)
{var seq__6539_6644__$1 = temp__4092__auto___6643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6539_6644__$1))
{var c__5632__auto___6645 = cljs.core.chunk_first.call(null,seq__6539_6644__$1);{
var G__6646 = cljs.core.chunk_rest.call(null,seq__6539_6644__$1);
var G__6647 = c__5632__auto___6645;
var G__6648 = cljs.core.count.call(null,c__5632__auto___6645);
var G__6649 = 0;
seq__6539_6634 = G__6646;
chunk__6540_6635 = G__6647;
count__6541_6636 = G__6648;
i__6542_6637 = G__6649;
continue;
}
} else
{var a_6650 = cljs.core.first.call(null,seq__6539_6644__$1);crate.binding.bc_add.call(null,bc,a_6650,a_6650);
{
var G__6651 = cljs.core.next.call(null,seq__6539_6644__$1);
var G__6652 = null;
var G__6653 = 0;
var G__6654 = 0;
seq__6539_6634 = G__6651;
chunk__6540_6635 = G__6652;
count__6541_6636 = G__6653;
i__6542_6637 = G__6654;
continue;
}
}
} else
{}
}
break;
}
var seq__6543 = cljs.core.seq.call(null,removed);var chunk__6544 = null;var count__6545 = 0;var i__6546 = 0;while(true){
if((i__6546 < count__6545))
{var r = cljs.core._nth.call(null,chunk__6544,i__6546);crate.binding.bc_remove.call(null,bc,r);
{
var G__6655 = seq__6543;
var G__6656 = chunk__6544;
var G__6657 = count__6545;
var G__6658 = (i__6546 + 1);
seq__6543 = G__6655;
chunk__6544 = G__6656;
count__6545 = G__6657;
i__6546 = G__6658;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6543);if(temp__4092__auto__)
{var seq__6543__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6543__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6543__$1);{
var G__6659 = cljs.core.chunk_rest.call(null,seq__6543__$1);
var G__6660 = c__5632__auto__;
var G__6661 = cljs.core.count.call(null,c__5632__auto__);
var G__6662 = 0;
seq__6543 = G__6659;
chunk__6544 = G__6660;
count__6545 = G__6661;
i__6546 = G__6662;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__6543__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__6663 = cljs.core.next.call(null,seq__6543__$1);
var G__6664 = null;
var G__6665 = 0;
var G__6666 = 0;
seq__6543 = G__6663;
chunk__6544 = G__6664;
count__6545 = G__6665;
i__6546 = G__6666;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__6547){var vec__6550 = p__6547;var path = cljs.core.nth.call(null,vec__6550,0,null);var opts = cljs.core.nth.call(null,vec__6550,1,null);var vec__6551 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__6551,0,null);var opts__$1 = cljs.core.nth.call(null,vec__6551,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__6551,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__6550,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__6551,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__6550,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__6547 = null;if (arguments.length > 1) {
  p__6547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__6547);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__6667){
var atm = cljs.core.first(arglist__6667);
var p__6547 = cljs.core.rest(arglist__6667);
return bound_coll__delegate(atm,p__6547);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__6552){var vec__6554 = p__6552;var opts = cljs.core.nth.call(null,vec__6554,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__6554,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__6554,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__6552 = null;if (arguments.length > 2) {
  p__6552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__6552);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__6668){
var as = cljs.core.first(arglist__6668);
arglist__6668 = cljs.core.next(arglist__6668);
var atm = cljs.core.first(arglist__6668);
var p__6552 = cljs.core.rest(arglist__6668);
return map_bound__delegate(as,atm,p__6552);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__6556 = b;if(G__6556)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__6556.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__6556.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__6556);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__6556);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__6558 = b;if(G__6558)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__6558.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__6558.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__6558);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__6558);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__6560 = atm;if(G__6560)
{var bit__5534__auto__ = (G__6560.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__5534__auto__) || (G__6560.cljs$core$IDeref$))
{return true;
} else
{if((!G__6560.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__6560);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__6560);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__6561){var vec__6563 = p__6561;var func = cljs.core.nth.call(null,vec__6563,0,null);var func__$1 = (function (){var or__4884__auto__ = func;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__6561 = null;if (arguments.length > 1) {
  p__6561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__6561);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__6669){
var atm = cljs.core.first(arglist__6669);
var p__6561 = cljs.core.rest(arglist__6669);
return bound__delegate(atm,p__6561);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-parinfer')) {
goog.provide('lt.plugins.lt_parinfer');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.plugins');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_parinfer.pi = require(lt.objs.plugins.local_module.call(null,"Parinfer","parinfer"));
lt.plugins.lt_parinfer.run_parinfer = (function run_parinfer(txt,cursor_line,cursor_x,mode){var params = {"cursorDx": (cursor_x - new cljs.core.Keyword(null,"last-x","last-x",4198973043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.lt_parinfer.parinfer_editors))), "cursorX": cursor_x, "cursorLine": cursor_line};var G__6487 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"paren","paren",1120341116),G__6487))
{return lt.plugins.lt_parinfer.pi.parenMode(txt,params);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094),G__6487))
{return lt.plugins.lt_parinfer.pi.indentMode(txt,params);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return {"success": true, "text": txt};
} else
{return null;
}
}
}
});
/**
* @param {...*} var_args
*/
lt.plugins.lt_parinfer.parinfer_behind_cursor = (function() { 
var parinfer_behind_cursor__delegate = function (_){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var old_txt = cm.getValue();var scroll = cm.getScrollInfo();var cursor = cm.getCursor();var history = cm.getHistory();var cursor_line = cursor.line;var cursor_x = (cursor.ch + 1);var result = lt.plugins.lt_parinfer.run_parinfer.call(null,old_txt,cursor_line,cursor_x,cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_parinfer.parinfer_editors),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null)));var txt = result.text;if(cljs.core.not_EQ_.call(null,old_txt,txt))
{lt.objs.editor.set_val.call(null,cm,txt);
lt.objs.editor.scroll_to.call(null,cm,scroll.left,scroll.top);
cm.setCursor(cursor);
cm.setHistory(history);
return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-x","last-x",4198973043)], null),cursor_x);
} else
{return null;
}
};
var parinfer_behind_cursor = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return parinfer_behind_cursor__delegate.call(this,_);};
parinfer_behind_cursor.cljs$lang$maxFixedArity = 0;
parinfer_behind_cursor.cljs$lang$applyTo = (function (arglist__6494){
var _ = cljs.core.seq(arglist__6494);
return parinfer_behind_cursor__delegate(_);
});
parinfer_behind_cursor.cljs$core$IFn$_invoke$arity$variadic = parinfer_behind_cursor__delegate;
return parinfer_behind_cursor;
})()
;
lt.plugins.lt_parinfer.editor_id = (function editor_id(){return lt.object.__GT_id.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.plugins.lt_parinfer.__GT_mode_str = (function __GT_mode_str(p__6488){var map__6491 = p__6488;var map__6491__$1 = ((cljs.core.seq_QMARK_.call(null,map__6491))?cljs.core.apply.call(null,cljs.core.hash_map,map__6491):map__6491);var current_editor = cljs.core.get.call(null,map__6491__$1,new cljs.core.Keyword(null,"current-editor","current-editor",2029475763));var modes = cljs.core.get.call(null,map__6491__$1,new cljs.core.Keyword(null,"modes","modes",1117974178));var mode = cljs.core.get.call(null,modes,current_editor);var G__6492 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"disabled","disabled",1284845038),G__6492))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pos","span.pos",3069890850),"Parinfer: disabled"], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"paren","paren",1120341116),G__6492))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pos","span.pos",3069890850),"Parinfer: paren mode"], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094),G__6492))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pos","span.pos",3069890850),"Parinfer: indent mode"], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pos","span.pos",3069890850)], null);
} else
{return null;
}
}
}
}
});
lt.plugins.lt_parinfer.__BEH__show_parinfer_mode = (function __BEH__show_parinfer_mode(obj){return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","show-parinfer-mode","lt.plugins.lt-parinfer/show-parinfer-mode",1127221598),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_parinfer.__BEH__show_parinfer_mode,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","parinfer.editors","lt.plugins.lt-parinfer/parinfer.editors",3581042988),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-parinfer","show-parinfer-mode","lt.plugins.lt-parinfer/show-parinfer-mode",1127221598),null], null), null),new cljs.core.Keyword(null,"modes","modes",1117974178),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-editor","current-editor",2029475763),null,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.plugins.lt_parinfer.__GT_mode_str),"");
}));
lt.plugins.lt_parinfer.parinfer_editors = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","parinfer.editors","lt.plugins.lt-parinfer/parinfer.editors",3581042988));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.lt_parinfer.parinfer_editors);
lt.plugins.lt_parinfer.update_editor_and_state = (function update_editor_and_state(ed,cm,result){lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null),new cljs.core.Keyword(null,"indent","indent",4124632094));
if(cljs.core.not_EQ_.call(null,result.text,lt.objs.editor.__GT_val.call(null,ed)))
{return lt.objs.editor.set_val.call(null,cm,result.text);
} else
{return null;
}
});
lt.plugins.lt_parinfer.unbalanced = (function unbalanced(ed){lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Unbalanced Parenthesis",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"The opened file is unbalanced. Parinfer is disabled"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Please, correct the file and activate parinfer again"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Ok"], null)], null)], null));
return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null),new cljs.core.Keyword(null,"disabled","disabled",1284845038));
});
lt.plugins.lt_parinfer.start_parinfer = (function start_parinfer(ed){var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);var old_txt = cm.getValue();var result = lt.plugins.lt_parinfer.pi.parenMode(old_txt);if(cljs.core.truth_(result.success))
{return lt.plugins.lt_parinfer.update_editor_and_state.call(null,ed,cm,result);
} else
{return lt.plugins.lt_parinfer.unbalanced.call(null,ed);
}
});
lt.plugins.lt_parinfer.start_or_continue_parinfer = (function start_or_continue_parinfer(){var ed = lt.objs.editor.pool.last_active.call(null);if((cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_parinfer.parinfer_editors),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null)) == null))
{return lt.plugins.lt_parinfer.start_parinfer.call(null,ed);
} else
{return null;
}
});
lt.plugins.lt_parinfer.__BEH__start_parinfer = (function __BEH__start_parinfer(obj){return lt.plugins.lt_parinfer.start_or_continue_parinfer.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","start-parinfer","lt.plugins.lt-parinfer/start-parinfer",1942056535),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_parinfer.__BEH__start_parinfer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.plugins.lt_parinfer.__BEH__stop_parinfer = (function __BEH__stop_parinfer(obj){return lt.object.update_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178)], null),cljs.core.dissoc,lt.plugins.lt_parinfer.editor_id.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","stop-parinfer","lt.plugins.lt-parinfer/stop-parinfer",3582459639),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_parinfer.__BEH__stop_parinfer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",3951351006),null], null), null));
lt.plugins.lt_parinfer.__BEH__update_parinfer_mode = (function __BEH__update_parinfer_mode(obj){return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-editor","current-editor",2029475763)], null),lt.plugins.lt_parinfer.editor_id.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","update-parinfer-mode","lt.plugins.lt-parinfer/update-parinfer-mode",1027363346),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_parinfer.__BEH__update_parinfer_mode,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parinfer-behind-cursor","parinfer-behind-cursor",4196896059),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parinfer: infer parenthesis on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.lt_parinfer.parinfer_behind_cursor], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parinfer-enable","parinfer-enable",2408040053),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parinfer: enable parinfer in current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (_){lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null),null);
return lt.plugins.lt_parinfer.start_or_continue_parinfer.call(null);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parinfer-disable","parinfer-disable",4563343578),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parinfer: disable parinfer in current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (_){return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null),new cljs.core.Keyword(null,"disabled","disabled",1284845038));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parinfer-toggle-mode","parinfer-toggle-mode",1566460526),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parinfer: toggle mode (indent or paren) in current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (_){var e = lt.plugins.lt_parinfer.editor_id.call(null);var G__6493 = cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_parinfer.parinfer_editors),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"paren","paren",1120341116),G__6493))
{return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),e], null),new cljs.core.Keyword(null,"indent","indent",4124632094));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094),G__6493))
{return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),e], null),new cljs.core.Keyword(null,"paren","paren",1120341116));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
})], null));
}

//# sourceMappingURL=parinfer_compiled.js.map