function popWin(url,title,w,h)
{
  var obj_lkupwindow = window.open(url,title,
  'width='+w+',height='+h+',status=yes,resizable=yes,scrollbars=yes,top=200,left=200,dependent=yes,alwaysRaised=yes');
  obj_lkupwindow.opener = window;
  obj_lkupwindow.focus();
}

function settab(tab,tablist)
{
  var tstr=new String(tablist);
  var tlist=tstr.split(",");
  for(var i=0;i<tlist.length;i++)
  {
    section=document.getElementById(tlist[i]);
    section.style.visibilty='hidden';
    section.style.display='none';
    tabobj=document.getElementById('title'+tlist[i]);
    tabobj.className='tabtitle';
  }
  section=document.getElementById(tab);
  section.style.visibility='visible';
  section.style.display='inline';
  tabobj=document.getElementById('title'+tab);
  tabobj.className='tabtitlesel';
}

var eblack_list=new Array('yahoo.com','hotmail.com','gmail.com');
function validateEmail(email) 
{ 
  var re_mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z])+$/; 
  if (!re_mail.test(email.value))
  { 
    return false; 
  }
  var x=email.value;
  x=x.toLowerCase();
  for(i=0;i<eblack_list.length;i++)
  {
     if(x.search(eblack_list[i])>0)
       return false;
  }
  return true; 
}


function setrctab(tab,tablist)
{
  var tstr=new String(tablist);
  var tlist=tstr.split(",");
  for(var i=0;i<tlist.length;i++)
  {
    section=document.getElementById(tlist[i]);
    section.style.visibilty='hidden';
    section.style.display='none';
    tabobj=document.getElementById('inner'+tlist[i]);
    tabobj.className='rctabinner';
    Nifty('div#inner'+tlist[i],'top');
  }
  section=document.getElementById(tab);
  section.style.visibility='visible';
  section.style.display='inline';
  tabobj=document.getElementById('inner'+tab);
  tabobj.className='rctabinnersel';
  Nifty('div#inner'+tab,'top');
}

function toggle(targetId) {
  target = document.getElementById(targetId);
  if (target.style.display == "none"){
     target.style.display="";
     target.style.visibility="visible";
     }
  else {
     target.style.display="none";
     target.style.visibility="hidden";
     }
}

function toggle_on(targetId) {
  target = document.getElementById(targetId);
  if(target)
  {
    target.style.display="";
    target.style.visibility="visible";
  }
}

function toggle_off(targetId) {
  targets = targetId.split(",");
  for(i=0;i<targets.length;i++)
  {
    target = document.getElementById(targets[i]);
    if(target)
    {
      target.style.display="none";
      target.style.visibility="hidden";
    }
  }
}

function toggle_with_img(targetId,imgId) {
  target = document.getElementById(targetId);
  img = document.getElementById(imgId);
  if (target.style.display == "none"){
     target.style.display="";
     target.style.visibility="visible";
     img.src=img.src.replace('up','down');
     }
  else {
     target.style.display="none";
     target.style.visibility="hidden";
     img.src=img.src.replace('down','up');
     }
}

function toggle_with_text(targetId,textId,onText,offText) {
  target = document.getElementById(targetId);
  text = document.getElementById(textId);
  if (target.style.display == "none"){
     target.style.display="";
     target.style.visibility="visible";
     text.innerHTML=onText;
     }
  else {
     target.style.display="none";
     target.style.visibility="hidden";
     text.innerHTML=offText;
     }
}



function openmenu(menu,curmenu)
{
  var mymenu=document.getElementById(menu);
  mymenu.style.visibility='visible';
  var mytab=document.getElementById('tab'+menu);
  mytab.className='menucellon';
  try{
    var mycur=document.getElementById('tab'+curmenu);
    mycur.className='menucell';
  }catch(e) {}
}

function closemenu(menu,curmenu)
{
  var mymenu=document.getElementById(menu);
  mymenu.style.visibility='hidden';
  var mytab=document.getElementById('tab'+menu);
  mytab.className='menucell';
  try{
    var mycur=document.getElementById('tab'+curmenu);
    mycur.className='menucellon';
  }catch(e) {}
}

function itemover(ctrlid,newstyle)
{
  var myitem=document.getElementById(ctrlid);
  myitem.className=newstyle;
}
function itemout(ctrlid,oldstyle)
{
  var myitem=document.getElementById(ctrlid);
  myitem.className=oldstyle;
}

var tinyMCEmode = false;
var tinyMCEsettings= new Array();
function toggleEditorMode(id) 
{
  if(tinyMCEmode) 
  {
    tinyMCE.execCommand('mceRemoveControl', false, id)
    tinyMCEmode = false;
    document.getElementById(id).style.height='600';
  } 
  else 
  {
    tinyMCE.settings=tinyMCEsettings[0];
    tinyMCE.execCommand('mceAddControl', false, id)
    tinyMCEmode = true;
    document.getElementById(id).className='';
  }
}

function remove_from_list(from_list,from_pool)
{
  var fl=document.getElementById(from_list);
  var fp=document.getElementById(from_pool);
  var fpl=new String(fp.value).split(",")            
  var newfpl=new Array;
  if(fl.selectedIndex!=-1&&fl.value!='')
  {
    for(i=0,j=0;i<fpl.length;i++)
    {
      if(fl.value!=fpl[i])        
        newfpl[j++]=fpl[i];
    }
    fl.remove(fl.selectedIndex);
    fp.value=newfpl.join(",");
  }
}  
        
function add_to_list(to_list,from_list,to_pool)
{  
  var tl=document.getElementById(to_list);
  var fl=document.getElementById(from_list);      
  var tp=document.getElementById(to_pool);
  var tpl=new String(tp.value).split(",")
  if(fl.type=='select-one'&&fl.selectedIndex!=-1&&fl.value!=''&&get_index(tpl,fl.value)<0)
  {
    tpl[tp.value.length==0?0:tpl.length]=fl.value;
    tp.value=tpl.join(",");    
    newopt=document.createElement('option');
    newopt.text=fl.options[fl.selectedIndex].text;
    newopt.value=fl.options[fl.selectedIndex].value;
    try{ tl.add(newopt,null); }
    catch (e) { tl.add(newopt,Number(-1)); }
  }
  if(fl.type=='text'&&fl.value!='')
  {
    tpl[tp.value.length==0?0:tpl.length]=fl.value;
    tp.value=tpl.join(",");    
    newopt=document.createElement('option');
    newopt.text=fl.value;
    newopt.value=fl.value;
    try{ tl.add(newopt,null); }
    catch (e) { tl.add(newopt,Number(-1)); }
  }
}

function get_index(arr,item)
{
  for(i=0;i<arr.length;i++)  
    if(item==arr[i])          
      return i;
  return -1;
}



//ROUNDED CORNER STUFF
var niftyOk=(document.getElementById && document.createElement && Array.prototype.push);

String.prototype.find=function(what){
  return(this.indexOf(what)>=0 ? true : false);
}

function Nifty(selector,options)
{
  if(niftyOk==false) return; 
  var i,v=selector.split(","),h=0;
  if(options==null) options="";
  if(options.find("fixed-height"))
    h=getElementsBySelector(v[0])[0].offsetHeight;
  for(i=0;i<v.length;i++)
  {
    NiftyReset(v[i]);
    Rounded(v[i],options);
  }
  if(options.find("height")) SameHeight(selector,h);
}

function NiftyReset(selector)
{
  //DELETE ALL THE OLD JUNK
  if(selector)
  {
    var a=selector.split('#');
    x=document.getElementById(a[1]);
    try{
      y=document.getElementById(a[1]+'main');
      x.removeChild(y);
    }catch(e) {}
  }
}

function Rounded(selector,options)
{
  var i,top="",bottom="",v=new Array();
  if(options!="")
  {
    options=options.replace("left","tl bl");
    options=options.replace("left-top","tl");
    options=options.replace("right","tr br");
    options=options.replace("right-top","tr");
    options=options.replace("top","tr tl");
    options=options.replace("bottom","br bl");
    options=options.replace("transparent","alias");
    if(options.find("tl"))
    {
      top="both";
      if(!options.find("tr")) top="left";
    }
    else if(options.find("tr")) top="right";
    if(options.find("bl"))
    {
      bottom="both";
      if(!options.find("br")) bottom="left";
    }
    else if(options.find("br")) bottom="right";
  }
  if(top=="" && bottom=="" && !options.find("none")){top="both";bottom="both";}
  v=getElementsBySelector(selector);
  for(i=0;i<v.length;i++)
  {
    FixIE(v[i]);
    if(top!="") AddTop(v[i],top,options);
    if(bottom!="") AddBottom(v[i],bottom,options);
  }
}

function AddTop(el,side,options)
{
  var d=CreateEl("b",el.id+'main'),lim=4,border="",p,i,btype="r",bk,color;
  d.style.marginLeft="-"+getPadding(el,"Left")+"px";
  d.style.marginRight="-"+getPadding(el,"Right")+"px";
  if(options.find("alias") || ((color=getBk(el))=="transparent" && !options.find("outline")))
  {
    color="transparent";bk="transparent"; border=getParentBk(el);btype="t";
  }
  else
  {
    bk=getParentBk(el); border=Mix(color,bk);
  }
  d.style.background=bk;
  d.className="niftycorners";
  p=getPadding(el,"Top");
  if(options.find("small"))
  {
    d.style.marginBottom=(p-2)+"px";
    btype+="s"; lim=2;
  }
  else if(options.find("big"))
  {
    d.style.marginBottom=(p-10)+"px";
    btype+="b"; lim=8;
  }
  else 
    d.style.marginBottom=(p-5)+"px";
  for(i=1;i<=lim;i++)
    d.appendChild(CreateStrip(el.id,i,side,color,border,btype));
  el.style.paddingTop="0";
  el.insertBefore(d,el.firstChild);
}

function AddBottom(el,side,options)
{
  var d=CreateEl("b",el),lim=4,border="",p,i,btype="r",bk,color;
  d.style.marginLeft="-"+getPadding(el,"Left")+"px";
  d.style.marginRight="-"+getPadding(el,"Right")+"px";
  if(options.find("alias") || (color=getBk(el))=="transparent")
  {
    color="transparent";bk="transparent"; border=getParentBk(el);btype="t";
  }
  else
  {
    bk=getParentBk(el); border=Mix(color,bk);
  }
  d.style.background=bk;
  d.className="niftycorners";
  p=getPadding(el,"Bottom");
  if(options.find("small"))
  {
    d.style.marginTop=(p-2)+"px";
    btype+="s"; lim=2;
  }
  else if(options.find("big"))
  {
    d.style.marginTop=(p-10)+"px";
    btype+="b"; lim=8;
  }
  else d.style.marginTop=(p-5)+"px";
  for(i=lim;i>0;i--)
    d.appendChild(CreateStrip(el.id,i,side,color,border,btype));
  el.style.paddingBottom=0;
  el.appendChild(d);
}

function CreateStrip(id,index,side,color,border,btype)
{
  var x=CreateEl("b",id+index);
  x.className=btype+index;
  x.style.backgroundColor=color;
  x.style.borderColor=border;
  if(side=="left")
  {
    x.style.borderRightWidth="0";
    x.style.marginRight="0";
  }
  else if(side=="right")
  {
    x.style.borderLeftWidth="0";
    x.style.marginLeft="0";
  }
  return(x);
}

function CreateEl(x,id)
{
  var y=document.createElement(x);
  y.id=id;
  return(y);
}

function FixIE(el)
{
  if(el.currentStyle!=null && el.currentStyle.hasLayout!=null && el.currentStyle.hasLayout==false)
    el.style.display="inline-block";
}

function SameHeight(selector,maxh)
{
  var i,v=selector.split(","),t,j,els=[],gap;
  for(i=0;i<v.length;i++)
  {
    t=getElementsBySelector(v[i]);
    els=els.concat(t);
  }
  for(i=0;i<els.length;i++)
  {
    if(els[i].offsetHeight>maxh) maxh=els[i].offsetHeight;
    els[i].style.height="auto";
  }
  for(i=0;i<els.length;i++)
  {
    gap=maxh-els[i].offsetHeight;
    if(gap>0)
    {
      t=CreateEl("b",els[i].id+'fix'+i);t.className="niftyfill";t.style.height=gap+"px";
      nc=els[i].lastChild;
      if(nc.className=="niftycorners")
          els[i].insertBefore(t,nc);
      else 
          els[i].appendChild(t);
    }
  }
}

function getElementsBySelector(selector)
{
  var i,j,selid="",selclass="",tag=selector,tag2="",v2,k,f,a,s=[],objlist=[],c;
  if(selector.find("#"))
  { //id selector like "tag#id"
    if(selector.find(" "))
    {  //descendant selector like "tag#id tag"
      s=selector.split(" ");
      var fs=s[0].split("#");
      if(fs.length==1) return(objlist);
      f=document.getElementById(fs[1]);
      if(f)
      {
        v=f.getElementsByTagName(s[1]);
        for(i=0;i<v.length;i++) objlist.push(v[i]);
      }
      return(objlist);
    }
    else
    {
      s=selector.split("#");
      tag=s[0];
      selid=s[1];
      if(selid!="")
      {
        f=document.getElementById(selid);
        if(f) objlist.push(f);
        return(objlist);
      }
    }
  }
  if(selector.find("."))
  {      //class selector like "tag.class"
    s=selector.split(".");
    tag=s[0];
    selclass=s[1];
    if(selclass.find(" "))
    {   //descendant selector like tag1.classname tag2
      s=selclass.split(" ");
      selclass=s[0];
      tag2=s[1];
    }
  }
  var v=document.getElementsByTagName(tag);  // tag selector like "tag"
  if(selclass=="")
  {
    for(i=0;i<v.length;i++) objlist.push(v[i]);
    return(objlist);
  }
  for(i=0;i<v.length;i++)
  {
    c=v[i].className.split(" ");
    for(j=0;j<c.length;j++)
    {
      if(c[j]==selclass)
      {
        if(tag2=="") objlist.push(v[i]);
        else
        {
          v2=v[i].getElementsByTagName(tag2);
          for(k=0;k<v2.length;k++) objlist.push(v2[k]);
        }
      }
    }
  }
  return(objlist);
}

function getParentBk(x)
{
  var el=x.parentNode,c;
  while(el.tagName.toUpperCase()!="HTML" && (c=getBk(el))=="transparent")
    el=el.parentNode;
  if(c=="transparent") c="#FFFFFF";
  return(c);
}

function getBk(x)
{
  var c=getStyleProp(x,"backgroundColor");
  if(c==null || c=="transparent" || c.find("rgba(0, 0, 0, 0)"))
    return("transparent");
  if(c.find("rgb")) c=rgb2hex(c);
  return(c);
}

function getPadding(x,side)
{
  var p=getStyleProp(x,"padding"+side);
  if(p==null || !p.find("px")) return(0);
  return(parseInt(p));
}

function getStyleProp(x,prop)
{
  if(x.currentStyle)
    return(x.currentStyle[prop]);
  if(document.defaultView.getComputedStyle)
    return(document.defaultView.getComputedStyle(x,'')[prop]);
  return(null);
}

function rgb2hex(value)
{
  var hex="",v,h,i;
  var regexp=/([0-9]+)[, ]+([0-9]+)[, ]+([0-9]+)/;
  var h=regexp.exec(value);
  for(i=1;i<4;i++)
  {
    v=parseInt(h[i]).toString(16);
    if(v.length==1) hex+="0"+v;
    else hex+=v;
  }
  return("#"+hex);
}

function Mix(c1,c2)
{
  var i,step1,step2,x,y,r=new Array(3);
  if(c1.length==4)step1=1;
  else step1=2;
  if(c2.length==4) step2=1;
  else step2=2;
  for(i=0;i<3;i++)
  {
    x=parseInt(c1.substr(1+step1*i,step1),16);
    if(step1==1) x=16*x+x;
    y=parseInt(c2.substr(1+step2*i,step2),16);
    if(step2==1) y=16*y+y;
    r[i]=Math.floor((x*50+y*50)/100);
    r[i]=r[i].toString(16);
    if(r[i].length==1) r[i]="0"+r[i];
  }
  return("#"+r[0]+r[1]+r[2]);
}


function disable_screen(screen,w,h)
{
  var x,y,t,l,b;
  if (self.innerHeight) // all except Explorer
  {
        x = self.innerWidth;
        y = self.innerHeight;
        t = window.pageYOffset;
        if(document.body.scrollHeight)
          b=document.body.scrollHeight
        if(document.documentElement&&document.documentElement.scrollHeight)
          b = document.documentElement.scrollHeight;
  }
  else if (document.documentElement && document.documentElement.clientHeight)
        // Explorer 6 Strict Mode
  {
        x = document.documentElement.clientWidth;
        y = document.documentElement.clientHeight;
        t = document.documentElement.scrollTop;
        b = document.documentElement.scrollHeight;
  }
  else if (document.body) // other Explorers
  {
        x = document.body.clientWidth;
        y = document.body.clientHeight;
        t = document.body.scrollTop;
        b = document.body.scrollHeight;
  }

  var a=document.getElementById('disable_screen');

  a.style.visibility='visible';
  a.style.display='block';
  a.style.height=b+'px';
  a.style.width=x+'px';
  var b=document.getElementById(screen);
  b.style.visibility='visible';
  b.style.display='block';
  b.style.top=t+Math.round(y/2-h/2)+'px';
  b.style.left=Math.round(x/2-w/2)+'px';
}

function enable_screen(screen)
{
  var x=document.getElementById('disable_screen');
  x.style.visbility='hidden';
  x.style.display='none';
  var y=document.getElementById(screen);
  y.style.visbility='hidden';
  y.style.display='none';
}

function move_item_up(id,cpid)
{
  var sel=document.getElementById(id);
  var cpl=document.getElementById(cpid);
  var retval=true;

  //DETECT IF ITEM IS SELECTED
  if(sel.selectedIndex==-1)
  { retval=false; code=1; }

  //DETECT IF WE ARE AT THE TOP OF THE LIST
  if(sel.selectedIndex==0)
  { retval=false; code=2; }
 
  if(retval)
  {
    swap_options(cpl,sel,sel.selectedIndex,sel.selectedIndex-1); 
    sel.selectedIndex-=1; 
  }
  
  if(!retval)
  {
    if(code==1)
      alert("You must select an Item to move");
    if(code==2)
      alert("You cannot move this item up anymore");
  }
  return retval;
}

function move_item_down(id,cpid)
{
  var sel=document.getElementById(id);
  var cpl=document.getElementById(cpid);
  var retval=true;
 
  //DETECT IF ITEM IS SELECTED
  if(sel.selectedIndex==-1)
  { retval=false; code=1; }

  //DETECT IF WE ARE AT THE END
  if(sel.selectedIndex==sel.options.length-1)
  { retval=false; code=2; }

  if(retval)
  { 
    swap_options(cpl,sel,sel.selectedIndex,sel.selectedIndex+1);
    sel.selectedIndex+=1; 
  }

  if(!retval)
  {
    if(code==1)
      alert("You must select an Item to move");
    if(code==2)
      alert("You cannot move this item down anymore");
  }
  return retval;
}

function swap_options(olist,list,a,b)
{
  var tmp_text;
  var tmp_value;
  tmp_text=list.options[a].text;
  tmp_value=list.options[a].value;
  list.options[a].text=list.options[b].text;
  list.options[a].value=list.options[b].value;
  list.options[b].text=tmp_text;
  list.options[b].value=tmp_value;
    
  var s=new String(olist.value);
  var tmp;
  s=s.split(",");
  tmp=s[a];    
  s[a]=s[b];
  s[b]=tmp;
  olist.value=s.join(",");
} 

