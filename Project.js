function addHyphen (element) {
    let ele = document.getElementById(element.id);
      let val = ele.value.replace(/[^0-9]+/g, "");
    let finalVal = "";
    if(val){
         val = val.split(' ').join('');
         finalVal = val.match(/.{1,4}/g).join(' ');
    }else{
        finalVal = "";
    }
   if(finalVal.length != 19){
           document.getElementById(element.id).classList.add("cardNumberError") 
      document.getElementById(element.id).classList.contains("cardNumberSuccess") ? document.getElementById(element.id).classList.remove("cardNumberSuccess") : ""
      document.getElementById(element.id).classList.contains("cardTypeIcon") ? document.getElementById(element.id).classList.remove("cardTypeIcon") : ""
   }else{
       document.getElementById(element.id).classList.add("cardTypeIcon", "cardNumberSuccess") 
      document.getElementById(element.id).classList.contains("cardNumberError") ? document.getElementById(element.id).classList.remove("cardNumberError") : ""
   }
    document.getElementById(element.id).value = finalVal;
}