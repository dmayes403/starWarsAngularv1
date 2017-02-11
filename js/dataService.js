angular.module('myApp').service('srvc', function(){
  data = [
            {
        	"name": "Luke Skywalker",
        	"height": "172",
        	"mass": "77",
        	"hair_color": "blond",
        	"skin_color": "fair",
        	"eye_color": "blue",
        	"birth_year": "19BBY",
        	"gender": "male",
        	"homeworld": "http://swapi.co/api/planets/1/",
          "headShot": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8EMwgzaN2NUBzrxvf7sWnPdq7p4F-jfHfkRJWT4xtjCuJ8Vo_",
        	"films": [
        		"http://swapi.co/api/films/6/",
        		"http://swapi.co/api/films/3/",
        		"http://swapi.co/api/films/2/",
        		"http://swapi.co/api/films/1/",
        		"http://swapi.co/api/films/7/"
        	],
        	"species": [
        		"http://swapi.co/api/species/1/"
        	],
        	"vehicles": [
        		"http://swapi.co/api/vehicles/14/",
        		"http://swapi.co/api/vehicles/30/"
        	],
        	"starships": [
        		"http://swapi.co/api/starships/12/",
        		"http://swapi.co/api/starships/22/"
        	],
        	"created": "2014-12-09T13:50:51.644000Z",
        	"edited": "2014-12-20T21:17:56.891000Z",
        	"url": "http://swapi.co/api/people/1/"
        },
        {
        	"name": "C-3PO",
        	"height": "167",
        	"mass": "75",
        	"hair_color": "n/a",
        	"skin_color": "gold",
        	"eye_color": "yellow",
        	"birth_year": "112BBY",
        	"gender": "n/a",
        	"homeworld": "http://swapi.co/api/planets/1/",
          "headShot": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQF4uSkVKyKC5H_YGfm_5PNENv60D-w9lV2cAgt_19H8oVkKafe",
        	"films": [
        		"http://swapi.co/api/films/5/",
        		"http://swapi.co/api/films/4/",
        		"http://swapi.co/api/films/6/",
        		"http://swapi.co/api/films/3/",
        		"http://swapi.co/api/films/2/",
        		"http://swapi.co/api/films/1/"
        	],
        	"species": [
        		"http://swapi.co/api/species/2/"
        	],
        	"vehicles": [],
        	"starships": [],
        	"created": "2014-12-10T15:10:51.357000Z",
        	"edited": "2014-12-20T21:17:50.309000Z",
        	"url": "http://swapi.co/api/people/2/"
        },
        {
        	"name": "R2-D2",
        	"height": "96",
        	"mass": "32",
        	"hair_color": "n/a",
        	"skin_color": "white, blue",
        	"eye_color": "red",
        	"birth_year": "33BBY",
        	"gender": "n/a",
        	"homeworld": "http://swapi.co/api/planets/8/",
          "headShot": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfpAcAir8a6hLvtCjB5m3zdqF63C302siN9_QlS9yYrcnwSAW",
        	"films": [
        		"http://swapi.co/api/films/5/",
        		"http://swapi.co/api/films/4/",
        		"http://swapi.co/api/films/6/",
        		"http://swapi.co/api/films/3/",
        		"http://swapi.co/api/films/2/",
        		"http://swapi.co/api/films/1/",
        		"http://swapi.co/api/films/7/"
        	],
        	"species": [
        		"http://swapi.co/api/species/2/"
        	],
        	"vehicles": [],
        	"starships": [],
        	"created": "2014-12-10T15:11:50.376000Z",
        	"edited": "2014-12-20T21:17:50.311000Z",
        	"url": "http://swapi.co/api/people/3/"
        },
        {
        	"name": "Darth Vader",
        	"height": "202",
        	"mass": "136",
        	"hair_color": "none",
        	"skin_color": "white",
        	"eye_color": "yellow",
        	"birth_year": "41.9BBY",
        	"gender": "male",
        	"homeworld": "http://swapi.co/api/planets/1/",
          "headShot": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHkXVZ61HOI8OFRtyfc-WV5EmRTUoKkuzC-Wlq-Xlh0U_0p61z",
        	"films": [
        		"http://swapi.co/api/films/6/",
        		"http://swapi.co/api/films/3/",
        		"http://swapi.co/api/films/2/",
        		"http://swapi.co/api/films/1/"
        	],
        	"species": [
        		"http://swapi.co/api/species/1/"
        	],
        	"vehicles": [],
        	"starships": [
        		"http://swapi.co/api/starships/13/"
        	],
        	"created": "2014-12-10T15:18:20.704000Z",
        	"edited": "2014-12-20T21:17:50.313000Z",
        	"url": "http://swapi.co/api/people/4/"
        },
        {
        	"name": "Leia Organa",
        	"height": "150",
        	"mass": "49",
        	"hair_color": "brown",
        	"skin_color": "light",
        	"eye_color": "brown",
        	"birth_year": "19BBY",
        	"gender": "female",
        	"homeworld": "http://swapi.co/api/planets/2/",
          "headShot": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2CCcQ1ALi0CDOrAN5eKfR1uVYbhRe7Ci39cNvfyXpsiuXheu",
        	"films": [
        		"http://swapi.co/api/films/6/",
        		"http://swapi.co/api/films/3/",
        		"http://swapi.co/api/films/2/",
        		"http://swapi.co/api/films/1/",
        		"http://swapi.co/api/films/7/"
        	],
        	"species": [
        		"http://swapi.co/api/species/1/"
        	],
        	"vehicles": [
        		"http://swapi.co/api/vehicles/30/"
        	],
        	"starships": [],
        	"created": "2014-12-10T15:20:09.791000Z",
        	"edited": "2014-12-20T21:17:50.315000Z",
        	"url": "http://swapi.co/api/people/5/"
        },
        {
        	"name": "Owen Lars",
        	"height": "178",
        	"mass": "120",
        	"hair_color": "brown, grey",
        	"skin_color": "light",
        	"eye_color": "blue",
        	"birth_year": "52BBY",
        	"gender": "male",
        	"homeworld": "http://swapi.co/api/planets/1/",
          "headShot": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMSpkRUVWXdPCNyQcV8XyHy3iJNvIarmquM-X_R4o_0UTC22nL",
        	"films": [
        		"http://swapi.co/api/films/5/",
        		"http://swapi.co/api/films/6/",
        		"http://swapi.co/api/films/1/"
        	],
        	"species": [
        		"http://swapi.co/api/species/1/"
        	],
        	"vehicles": [],
        	"starships": [],
        	"created": "2014-12-10T15:52:14.024000Z",
        	"edited": "2014-12-20T21:17:50.317000Z",
        	"url": "http://swapi.co/api/people/6/"
        },
        {
        	"name": "R5-D4",
        	"height": "97",
        	"mass": "32",
        	"hair_color": "n/a",
        	"skin_color": "white, red",
        	"eye_color": "red",
        	"birth_year": "unknown",
        	"gender": "n/a",
        	"homeworld": "http://swapi.co/api/planets/1/",
          "headShot": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGjbWQUIoBRt9RYjozQAVQPGA2rOqPSsKU7pZm3QZgOTAx4OOS",
        	"films": [
        		"http://swapi.co/api/films/1/"
        	],
        	"species": [
        		"http://swapi.co/api/species/2/"
        	],
        	"vehicles": [],
        	"starships": [],
        	"created": "2014-12-10T15:57:50.959000Z",
        	"edited": "2014-12-20T21:17:50.321000Z",
        	"url": "http://swapi.co/api/people/8/"
        },
        {
        	"name": "Biggs Darklighter",
        	"height": "183",
        	"mass": "84",
        	"hair_color": "black",
        	"skin_color": "light",
        	"eye_color": "brown",
        	"birth_year": "24BBY",
        	"gender": "male",
        	"homeworld": "http://swapi.co/api/planets/1/",
          "headShot": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSH5J-AgfUx24T1g3Fz_AHffgxDj-iT33dyph_EbNF9wLkV5Syp",
        	"films": [
        		"http://swapi.co/api/films/1/"
        	],
        	"species": [
        		"http://swapi.co/api/species/1/"
        	],
        	"vehicles": [],
        	"starships": [
        		"http://swapi.co/api/starships/12/"
        	],
        	"created": "2014-12-10T15:59:50.509000Z",
        	"edited": "2014-12-20T21:17:50.323000Z",
        	"url": "http://swapi.co/api/people/9/"
        },
        {
        	"name": "Ben Quadinaros",
        	"height": "163",
        	"mass": "65",
        	"hair_color": "none",
        	"skin_color": "grey, green, yellow",
        	"eye_color": "orange",
        	"birth_year": "unknown",
        	"gender": "male",
        	"homeworld": "http://swapi.co/api/planets/41/",
          "headShot": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQi9qo3MJh14FJsrJDOXi9zVpd8U6X4HGHngUrJCnqufYv4mrMoyg",
        	"films": [
        		"http://swapi.co/api/films/4/"
        	],
        	"species": [
        		"http://swapi.co/api/species/19/"
        	],
        	"vehicles": [],
        	"starships": [],
        	"created": "2014-12-20T10:08:33.777000Z",
        	"edited": "2014-12-20T21:17:50.417000Z",
        	"url": "http://swapi.co/api/people/50/"
        },
        {
        	"name": "Lando Calrissian",
        	"height": "177",
        	"mass": "79",
        	"hair_color": "black",
        	"skin_color": "dark",
        	"eye_color": "brown",
        	"birth_year": "31BBY",
        	"gender": "male",
        	"homeworld": "http://swapi.co/api/planets/30/",
          "headShot": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7qQXwOtRbmT8N_qT-Nva3RK5ynyTbNRrogEITvHblAiuBxThgxA",
        	"films": [
        		"http://swapi.co/api/films/3/",
        		"http://swapi.co/api/films/2/"
        	],
        	"species": [
        		"http://swapi.co/api/species/1/"
        	],
        	"vehicles": [],
        	"starships": [
        		"http://swapi.co/api/starships/10/"
        	],
        	"created": "2014-12-15T12:56:32.683000Z",
        	"edited": "2014-12-20T21:17:50.357000Z",
        	"url": "http://swapi.co/api/people/25/"
        }
  ]


  this.getData =function(){
    return data;
  }
})
