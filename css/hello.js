function ajax(){
      // make AJAX Call
      $.getJSON(app.config.complete(), function(object) {
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

ajax();








