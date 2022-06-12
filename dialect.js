

function Callback(data) {
    console.log("donnees api", data);
    if (data.count === 0) {alert("Site en cours de construction");} else {
    
    document.getElementById("DZFR").innerHTML = "La phrase en algérien : \"" + data.sentences[0].dz_value + "\"";
    document.getElementById("FR").innerHTML = "La phrase en français : \"" + data.sentences[0].fr_value + "\"";
    document.getElementById("DZ").innerHTML = "La phrase en caractères arabes : \"" + data.sentences[0].dz_value_ar + "\"";
    document.getElementById("model").style.top = "110px";}

}

function Afficher(){ 
if(document.getElementById("ChoixVerbe").value === "-- sélectionnez un verbe --"){alert("Veuillez sélectionner un verbe s'il vous plaît");}
else{
var NumberOfPhrases = document.getElementById("nbr").value;
var Tenses= document.getElementById("SelectTenses").value;
if (Tenses === "PASSE"){ var Tenses = "PAST";};
var Verbes= document.getElementById("ChoixVerbe").value.toLowerCase();
var Adjectif = document.getElementById("ChoixAdjectif").value.toLowerCase();
var Noun = document.getElementById("ChoixNom").value.toLowerCase();
var url = `https://us-central1-dz-dialect-api.cloudfunctions.net/generate-sentence/sentence/generate?count=${NumberOfPhrases}&tenses=${Tenses}&verbs=${Verbes}&adjectives=${Adjectif}&nouns=${Noun}`;
      
    $.get(url,Callback)
    .done (function(){console.log("TestOk")})
    .fail (function(){alert("TestNotOk")})
}
}

function Fermer(){ 
    document.getElementById("model").style.top="-800px";
}
