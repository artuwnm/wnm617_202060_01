/* User Template */
[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function() {
      return 'user'+this.id;
    },
    email: function() {
      return this.username+'@gmail.com';
    },
    password: 'md5(\'pass\')',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    img: function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999)+'/fff/?text='+this.username;
    }
  }
]

/* Food Template */
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id: '{{integer(1,10)}}',

    name: '{{company()}}',

    cuisine: '{{random("Chinese","American","Korean")}}',
    restaurant: function(tags) {
      var restaurants = {
        Chinese:["Chili House","Old Roof"],
        American:["Alexander's Steakhouse","Roam Artisan Burgers"],
        Korean:["Jang Soo BBQ","My Tofu House"]
      };
      var chosen_type = restaurants[this.cuisine];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },

    description: '{{lorem(3, "sentences")}}',

    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    img: function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999)+'/fff/?text='+this.name;
    }
  }
]

/* Location Template */
[
  '{{repeat(150)}}',
  {
    id: '{{index(1)}}',
    animal_id: '{{integer(1,50)}}',

    lat: '{{floating(37.801030, 37.698676)}}',
    lng: '{{floating(-122.502619, -122.389420)}}',

    description: '{{lorem(3, "sentences")}}',

    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',

    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/100/888/fff/?text=ICON'
  }
]

