const usersData = [
  {
    name: 'Kevin'
  },
  {
    name: 'Nick'
  },
  {
    name: 'Caden'
  },
  {
    name: 'Hana'
  },
  {
    name: 'Jacob'
  },
  {
    name: 'Peter'
  },
  {
    name: 'Kevin J'
  },
  {
    name: 'Kevin C'
  },
  {
    name: 'Josh'
  },
  {
    name: 'Benny'
  }
];

const photosData = [
  {
    "url": "",
    "comment": "Good",
    "userId": 1,
    "restaurantId": 1
  },
  {
    "url": "",
    "comment": "badd",
    "userId": 1,
    "restaurantId": 3
  },
  {
    "url": "",
    "comment": "ok",
    "userId": 2,
    "restaurantId": 1
  },
  {
    "url": "",
    "comment": "adf",
    "userId": 4,
    "restaurantId": 4
  },
  {
    "url": "",
    "comment": "adf",
    "userId": 5,
    "restaurantId": 5
  },
  {
    "url": "",
    "comment": "adf",
    "userId": 1,
    "restaurantId": 6
  },
  {
    "url": "",
    "comment": "ddd",
    "userId": 2,
    "restaurantId": 6
  },
  {
    "url": "",
    "comment": "dadsfasdf",
    "userId": 3,
    "restaurantId": 6
  },
  {
    "url": "",
    "comment": "adsfasdfdsf",
    "userId": 4,
    "restaurantId": 1
  },
  {
    "url": "",
    "comment": "asdfsdfxcv",
    "userId": 5,
    "restaurantId": 2
  },
  {
    "url": "",
    "comment": "adfadsf",
    "userId": 8,
    "restaurantId": 3
  },
  {
    "url": "",
    "comment": "",
    "userId": 10,
    "restaurantId": 7
  },
  {
    "url": "",
    "comment": "asdfasdf",
    "userId": 4,
    "restaurantId": 8
  },
  {
    "url": "",
    "comment": "google",
    "userId": 4,
    "restaurantId": 9
  },
  {
    "url": "",
    "comment": "gad",
    "userId": 5,
    "restaurantId": 10
  },
  {
    "url": "",
    "comment": "gud",
    "userId": 6,
    "restaurantId": 1
  },
  {
    "url": "",
    "comment": "meh",
    "userId": 7,
    "restaurantId": 10
  },
  {
    "url": "",
    "comment": "meh",
    "userId": 8,
    "restaurantId": 10
  },
  {
    "url": "",
    "comment": "",
    "userId": 9,
    "restaurantId": 5
  },
  {
    "url": "",
    "comment": "g",
    "userId": 9,
    "restaurantId": 5
  }
];


const restaurantsData = [
  {
    "name": "The Burrow",
    "address": "821 S Flower St, Los Angeles, CA 90014",
    "phone_number": "(213) 784-3050",
    "url": "theburrowla.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Barbeque, Steak, Salad",
  },
  {
    "name": "The Great Ice",
    "address": "300 N Flower St, Los Angeles, CA 90002",
    "phone_number": "(611) 222-3049",
    "url": "thegreatice.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Ice Cream & Frozen Yogurt, Desserts",
  },
  {
    "name": "The Great Boba",
    "address": "439 N Garfield St, Monterey Park, CA 910024",
    "phone_number": "(626) 213-4567",
    "url": "thegreatboba.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Boba, Drink",
  },
  {
    "name": "Urban Cafe",
    "address": "300 S Mariposa Ave, Los Angeles, CA 90020",
    "phone_number": "(949) 845-2103",
    "url": "urbancafe.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Coffee & Tea, Brunch",
  },
  {
    "name": "Panda Express",
    "address": "388 N Flower St, Alhambra, CA 91801",
    "phone_number": "(900) 129-1231",
    "url": "panda.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Chinese, Fastfood",
  },
  {
    "name": "dooF",
    "address": "200 N St, Los Angeles, CA 90024",
    "phone_number": "(233) 200-3421",
    "url": "dooF.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Barbeque, Steak, Salad",
  },
  {
    "name": "Sushiii",
    "address": "300 N St, Alhambra, CA 91801",
    "phone_number": "(624) 312-2314",
    "url": "sushi.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Japnese, Sushi",
  },
  {
    "name": "KKTofu",
    "address": "420 N Dank, Dank, CA 90023",
    "phone_number": "(323) 433-4559",
    "url": "kfood.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Spicy, Korean, Soup",
  },
  {
    "name": "Kung Fu Food",
    "address": "100 S St, Los Angeles, CA 92193",
    "phone_number": "(400) 400-400",
    "url": "cfood.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Chinese, Fastfood",
  },
  {
    "name": "Drink more",
    "address": "422 E Melrose, Los Angeles, CA 90023",
    "phone_number": "(333) 333-333",
    "url": "getfued.com",
    "google_map": "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=34.046899%2C-118.260718&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C34.046899%2C-118.260718&client=gme-yelp&sensor=false&size=286x135&signature=kGEntvluDVpEEcPLEHcq_R0-jZY=",
    "categories": "Bar, Alochol",
  }
];

const users_restaurants = [
  {
    "userId": 1,
    "restaurantId": 1
  }, 
  {
    "userId": 1,
    "restaurantId": 3
  }, 
  {
    "userId": 1,
    "restaurantId": 6
  }, 
  {
    "userId": 2,
    "restaurantId": 1
  }, 
  {
    "userId": 2,
    "restaurantId": 6
  }, 
  {
    "userId": 3,
    "restaurantId": 6
  }, 
  {
    "userId": 4,
    "restaurantId": 4
  }, 
  {
    "userId": 4,
    "restaurantId": 1
  }, 
  {
    "userId": 4,
    "restaurantId": 8
  }, 
  {
    "userId": 4,
    "restaurantId": 9
  }, 
  {
    "userId": 5,
    "restaurantId": 5
  }, 
  {
    "userId": 5,
    "restaurantId": 2
  }, 
  {
    "userId": 5,
    "restaurantId": 10
  }, 
  {
    "userId": 6,
    "restaurantId": 1
  }, 
  {
    "userId": 7,
    "restaurantId": 10
  }, 
  {
    "userId": 8,
    "restaurantId": 3
  }, 
  {
    "userId": 8,
    "restaurantId": 10
  }, 
  {
    "userId": 9,
    "restaurantId": 5
  }, 
  {
    "userId": 9,
    "restaurantId": 5
  }, 
  {
    "userId": 10,
    "restaurantId": 7
  }
];

module.exports = {
  usersData, photosData, restaurantsData, users_restaurants
}

