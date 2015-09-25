function ajax(value){
	    ts = new Date().getTime();
      var i = 0;
      // generate hash
      hash = md5(ts + "c14552138dc8a5e78d9d67dcc6cf10016d8ba4f281936413912824898eeca7e8cf419364");
      // create URL
      if(value){
      	var url = 'http://gateway.marvel.com:80/v1/public/characters?apikey=81936413912824898eeca7e8cf419364&ts=' + ts + '&hash=' + hash + "&nameStartsWith=" + value;
      }
      else{
      	var url = 'http://gateway.marvel.com:80/v1/public/characters?apikey=81936413912824898eeca7e8cf419364&ts=' + ts + '&hash=' + hash ;
      }

      console.log(url);


      //var url = 'http://gateway.marvel.com:80/v1/public/characters?apikey=81936413912824898eeca7e8cf419364&ts=' + ts + '&hash=' + hash + "&name=" + value;


      // make AJAX Call
      $.getJSON(url, function(object) {
          // Obtain results
          var content = document.getElementById("characters");
          var singleContent = document.getElementById("singleContent");
          heroes = object.data.results;
          singleHeroe = heroes.name;
          console.log(heroes);


          var characters = Handlebars.compile(document.getElementById("characters-item").innerHTML);
          content.innerHTML = characters(object.data);

          var single = Handlebars.compile(document.getElementById("single").innerHTML);
          singleContent.innerHTML = single(object.data.results[0]);
      });
}











