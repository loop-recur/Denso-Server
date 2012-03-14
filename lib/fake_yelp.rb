module FakeYelp
  extend self
  
  def response(term)
    {"region"=>{"center"=>{"latitude"=>37.844011, "longitude"=>-122.4498985}, "span"=>{"latitude_delta"=>0.111978000000001, "longitude_delta"=>0.100202999999993}}, "total"=>34, "businesses"=>[{"name"=>"California Shell Service", "mobile_url"=>"http://m.yelp.com/biz/20Dcqa56ld_wQMVfEwaHRg", "rating"=>4.5, "location"=>{"address"=>["2501 California St"], "city"=>"San Francisco", "display_address"=>["2501 California St", "(b/t Steiner St & Pierce St)", "Pacific Heights", "San Francisco, CA 94115"], "country_code"=>"US", "postal_code"=>"94115", "coordinate"=>{"latitude"=>37.788411, "longitude"=>-122.435669}, "state_code"=>"CA", "neighborhoods"=>["Pacific Heights", "Lower Pac Heights"], "geo_accuracy"=>8, "cross_streets"=>"Steiner St & Pierce St"}, "image_url"=>"http://s3-media2.ak.yelpcdn.com/bphoto/Cbld6Q2H-Y4fcvS15ijdYA/ms.jpg", "rating_img_url_large"=>"http://media2.ak.yelpcdn.com/static/201012162752244354/img/ico/stars/stars_large_4_half.png", "url"=>"http://www.yelp.com/biz/california-shell-service-san-francisco", "id"=>"california-shell-service-san-francisco", "rating_img_url_small"=>"http://media4.ak.yelpcdn.com/static/201012161127761206/img/ico/stars/stars_small_4_half.png", "display_phone"=>"+1-415-567-6512", "snippet_text"=>"Just picked my car from Doug and again am incredibly grateful for the reliable, honest, above and beyond work he and Chelsea do.  They not only fixed what...", "phone"=>"4155676512", "categories"=>[["Auto Repair", "autorepair"], ["Gas & Service Stations", "servicestations"], ["Smog Check Stations", "smog_check_stations"]], "rating_img_url"=>"http://media4.ak.yelpcdn.com/static/201012163106483837/img/ico/stars/stars_4_half.png", "snippet_image_url"=>"http://s3-media2.ak.yelpcdn.com/photo/0aVUjtk_Jij2nzL5QtigOA/ms.jpg", "review_count"=>27}, {"name"=>"Pacific Heights Chevron", "mobile_url"=>"http://m.yelp.com/biz/9105_80WzqfRtss5uGNtaQ", "rating"=>3.5, "location"=>{"address"=>["2500 California St"], "city"=>"San Francisco", "display_address"=>["2500 California St", "(b/t Steiner St & Pierce St)", "Pacific Heights", "San Francisco, CA 94115"], "country_code"=>"US", "postal_code"=>"94115", "coordinate"=>{"latitude"=>37.78895, "longitude"=>-122.435748}, "state_code"=>"CA", "neighborhoods"=>["Pacific Heights"], "geo_accuracy"=>8, "cross_streets"=>"Steiner St & Pierce St"}, "image_url"=>"http://s3-media3.ak.yelpcdn.com/bphoto/2oG3oS9wjBgL6XXdHYUb-g/ms.jpg", "rating_img_url_large"=>"http://media1.ak.yelpcdn.com/static/201012161161255655/img/ico/stars/stars_large_3_half.png", "url"=>"http://www.yelp.com/biz/pacific-heights-chevron-san-francisco", "id"=>"pacific-heights-chevron-san-francisco", "rating_img_url_small"=>"http://media3.ak.yelpcdn.com/static/201012163952475669/img/ico/stars/stars_small_3_half.png", "display_phone"=>"+1-415-567-1136", "snippet_text"=>"This gas station holds a special place in my heart, primarily because the Shell across the street has TVs that blare at you while you fill up (one of my all...", "phone"=>"4155671136", "categories"=>[["Gas & Service Stations", "servicestations"], ["Smog Check Stations", "smog_check_stations"]], "rating_img_url"=>"http://media3.ak.yelpcdn.com/static/201012161235323114/img/ico/stars/stars_3_half.png", "snippet_image_url"=>"http://s3-media4.ak.yelpcdn.com/photo/TSwMsQlpvmCcTwT9oPfNug/ms.jpg", "review_count"=>21}, {"name"=>"Shell", "mobile_url"=>"http://m.yelp.com/biz/3c_lHXso9RlL7qDWbnTgZQ", "rating"=>3.0, "location"=>{"address"=>["2501 California St"], "city"=>"San Francisco", "display_address"=>["2501 California St", "(b/t Steiner St & Pierce St)", "Pacific Heights", "San Francisco, CA 94115"], "country_code"=>"US", "postal_code"=>"94115", "coordinate"=>{"latitude"=>37.788411, "longitude"=>-122.435669}, "state_code"=>"CA", "neighborhoods"=>["Pacific Heights", "Lower Pac Heights"], "geo_accuracy"=>8, "cross_streets"=>"Steiner St & Pierce St"}, "image_url"=>"http://s3-media1.ak.yelpcdn.com/bphoto/R69Wa5hV7Y0HfS4CBZXAPw/ms.jpg", "rating_img_url_large"=>"http://media3.ak.yelpcdn.com/static/201012161053250406/img/ico/stars/stars_large_3.png", "url"=>"http://www.yelp.com/biz/shell-san-francisco-3", "id"=>"shell-san-francisco-3", "rating_img_url_small"=>"http://media1.ak.yelpcdn.com/static/201012162337205794/img/ico/stars/stars_small_3.png", "display_phone"=>"+1-415-567-6512", "snippet_text"=>"Wait its raining but what does the weather channel say about it as I pump my gas at 3.49 per gallon!??\nAm I distracted or just suddenly suprised as I print...", "phone"=>"4155676512", "categories"=>[["Gas & Service Stations", "servicestations"]], "rating_img_url"=>"http://media1.ak.yelpcdn.com/static/201012161694360749/img/ico/stars/stars_3.png", "snippet_image_url"=>"http://s3-media3.ak.yelpcdn.com/photo/lZTUt3AJpF64zdrK5KPctg/ms.jpg", "review_count"=>5}]}
  end
  
end
