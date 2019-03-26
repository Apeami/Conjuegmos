
class ancer_base {
  constructor() {
    this.word_bank=get_definitions();}

  enter(question, definition) {
    this.word_bank[question] = definition;}

  define(question) {
    var a=this.word_bank[question];
    if (a===undefined){a='a';}
    return a;}
    //catch{return 'a';}}

  list(){
  console.log(JSON.stringify(this.word_bank))}
}


class solver{

  constructor(acttype,data_source,button) {
  this.acttype=acttype;
  this.data_script_loader(data_source);}

  load_button(){
    var btn = document.createElement("BUTTON");
    btn.type='button';
    btn.addEventListener('click', function() {test.ancer();}, false);
    document.getElementsByClassName("little-coqui")[0].appendChild(btn);}
    //coqui
  spam_ancer(amount){
    var b=0;
    while(amount>b){
      this.ancer();
      b=b+1;}}

  load_ancers(){
    this.basedata=new ancer_base();}

  data_script_loader(source){
    var tag= document.createElement("script");
    tag.src= "http://127.0.0.1:8887/"+source+".js";
    document.getElementsByTagName("head")[0].appendChild(tag);}

  ancer(){
  var question=this.get_question();
  if (question==undefined){question='a';}
  try{var ancer=this.basedata.define(question);}
  catch{var ancer='a'}
  this.put_ancer(ancer);
  if(this.check_wrong()==true){
    var right_ancer=this.get_right_ancer();
    this.basedata.enter(question,right_ancer);
    this.put_ancer(right_ancer);}}

  get_question(){
  if (this.acttype=='verb'){
  var verb = document.getElementById("verb-input");
  var subject = document.getElementById("pronoun-input");
  var person = this.get_person(subject.innerHTML);
  return (person+' '+verb.innerHTML);}
  if (this.acttype=='vocab'){
    return document.getElementById("question-input").innerHTML;}}

  get_person(subject){
    if (subject==='yo'){
      return 'sing:1';}
    if (subject==='tú'){
      return 'sing:2';}
    if (subject==='vosotros'){
      return 'plu:2';}
    if (subject==='usted'){
      return 'sing:3';}
    if (subject==='ustedes'){
      return 'plu:3';}
    var sent=[];
    var word='';
    for (var i in subject){
      var a=subject[i];
      if(a==' '){
        sent.push(word);
        word='';}
      if(a!=' '){
        word+=a;}}
    sent.push(word);
    if (sent.length==1){
      return 'sing:3';}
    if (sent[1]=='y' && sent[2]=='yo'){
      return 'plu:1';}
    if (sent[1]=='y' && sent[2]!='yo'){
      return 'plu:3';}
  }

  put_ancer(message){
  var input = document.getElementById("answer-input");
  input.value=message
  var button = document.getElementById("check-button");
  //button.value="The spam has begun"
  button.click()}

  check_wrong(){
  try{var ancer = document.getElementsByClassName("bubble incorrect");
  text_ancer=ancer[0].innerHTML;
  return true;}
  catch{var text_ancer='null';
  return false;}}

  get_right_ancer(){
  try{var ancer = document.getElementsByClassName("bubble incorrect");
  text_ancer=ancer[0].innerHTML;}
  catch{var text_ancer='null'}
  var count=false
  var actual_ancer=''
  for (var i in text_ancer){
  var a=text_ancer[i]
  if (a=='<'){
  count=false}
  if(count==true){
  if (a.length==1){
  actual_ancer=actual_ancer+a}}
  if (a=='>'){
  count=true}}
  return actual_ancer}
}


//var tag= document.createElement("script");
//tag.src= "http://127.0.0.1:8887/hack.js";
//document.getElementsByTagName("head")[0].appendChild(tag);

//var tag= document.createElement("script");
//tag.src= "http://127.0.0.1:8887/definitions.js";
//document.getElementsByTagName("head")[0].appendChild(tag);
