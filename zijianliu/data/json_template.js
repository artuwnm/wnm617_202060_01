
/*animals*/
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    User_id: '{{integer(1,10)}}',
    
    name: '{{company()}}',
    
    type: '{{random("dog","cat","bird")}}',
    breed: function(tags){
      var breeds = {
        dog:["Labrador","pitpull"],
        cat:["ginger", "Civet cat"],
        bird:["bluejay", "parrot"]
      };
      var chosen_type = breeds[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
    
    decription:'{{lorem(3,"sentences")}}',

    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    img: function(tags) {
      return 'https://via.placeholder.com.400/'+
        tags.integer(700,999)+'/fff/?text='+this.name;
    }
  }
]

/*user*/

[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username:function(){
      return'user'+this.id;
    
    },
    
    email:function(){
      return this.username+'@gmail.com';
    },
    password:'md5(\'pass\')',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    img: function(tags) {
      return 'https://via.placeholder.com.400/'+
        tags.integer(700,999)+'/fff/?text='+this.username;
    }
  }
]

/*location*/
[
  '{{repeat(150)}}',
  {
    id: '{{index(1)}}',
    animal_id: '{{integer(1,50)}}',
    
    
   
    lat: '{{floating(37.804001,37.696300)}}',
    lng: '{{floating(-122.503774, -122.374145)}}',
    
   
    
    decription:'{{lorem(3,"sentences")}}',

    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    
    photo: 'https://via.placeholder.com/400',
    icon: 'https://via.placeholder.com/100/888/fff/?text = ICON'
    
   
  }
]