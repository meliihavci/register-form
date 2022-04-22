// [ "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Güdül", "Haymana", "Kalecik", "Kızılcahamam", "Nallıhan", "Polatlı", "Şereflikoçhisar", "Yenimahalle", "Gölbaşı", "Keçiören", "Mamak", "Sincan", "Kazan", "Akyurt", "Etimesgut", "Evren", "Pursaklar" ]
//"ilceleri": [ "Aliağa", "Bayındır", "Bergama", "Bornova", "Çeşme", "Dikili", "Foça", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Menemen", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla", "Beydağ", "Buca", "Konak", "Menderes", "Balçova", "Çiğli", "Gaziemir", "Narlıdere", "Güzelbahçe", "Bayraklı", "Karabağlar" ] },
//"ilceleri": [ "Çifteler", "Mahmudiye", "Mihalıççık", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Alpu", "Beylikova", "İnönü", "Günyüzü", "Han", "Mihalgazi", "Odunpazarı", "Tepebaşı" ] },

var data = [
  {
      "city" : "Ankara",
      "vall" : 1,
      "countys" : [
           "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Güdül",
            "Haymana", "Kalecik", "Kızılcahamam", "Nallıhan", "Polatlı", "Şereflikoçhisar", "Yenimahalle", 
            "Gölbaşı", "Keçiören", "Mamak", "Sincan", "Kazan", "Akyurt", "Etimesgut", "Evren", "Pursaklar" 
      ]
  },
  {
      "city" : "İzmir",
      "vall" : 2,
      "countys" : [ "Aliağa", "Bayındır", "Bergama", "Bornova", "Çeşme", "Dikili", "Foça", "Karaburun", "Karşıyaka",
       "Kemalpaşa", "Kınık", "Kiraz", "Menemen", "Ödemiş", "Seferihisar","Selçuk", "Tire", "Torbalı", "Urla", "Beydağ",
        "Buca", "Konak", "Menderes", "Balçova", "Çiğli", "Gaziemir", "Narlıdere", "Güzelbahçe", "Bayraklı", "Karabağlar" ]
  },

  {
      "city" : "Eskişehir",
      "vall" : 3,
      "countys" : [ "Çifteler", "Mahmudiye", "Mihalıççık", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Alpu", 
      "Beylikova", "İnönü", "Günyüzü", "Han", "Mihalgazi", "Odunpazarı", "Tepebaşı" ]
  }
]


function search(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].vall == nameKey) {
          return myArray[i];
      }
  }
}
$( document ).ready(function() {
$(".chosen-select").chosen({
no_results_text: "Oops, nothing found!"
});
$.each(data, function( index, value ) {
  $('#city').append($('<option>', {
      value: value.vall,
      text:  value.city
  }));
});
$("#city").change(function(){
  var valueSelected = this.value;
  if($('#city').val() > 0) {
    $('#county').html('');
    $('#county').append($('<option>', {
      value: 0,
      text:  'Please select a county'
    }));
    $('#county').prop("disabled", false);
    var resultObject = search($('#city').val(), data);
    $.each(resultObject.countys, function( index, value ) {
      $('#county').append($('<option>', {
          value: value,
          text:  value
      }));
    });
    return false;
  }
  $('#county').prop("disabled", true);
});
});