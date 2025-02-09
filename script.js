// Sample data of wheelchair-accessible places withtype district, and coordinates
const accessiblePlaces = [
    { name: "Lulu Mall",type: "Mall", district: "Ernakulam", lat: 10.0261, lon: 76.3083 },
    { name: "Kochi Marina",type: "Leisure", district: "Ernakulam", lat: 9.974, lon: 76.2777 },
    { name: "Sree Chitra Tirunal Hospital",type: "Hospital", district: "Thiruvananthapuram", lat: 8.4899, lon: 76.9381 },
    { name: "Kozhikode Beach",type:"Leisure", district: "Kozhikode", lat: 11.2588, lon: 75.7804 },
    { name: "Trivandrum Central Railway Station",type: "Leisure", district: "Thiruvananthapuram", lat: 8.4872, lon: 76.952 },
    { name: "Malabar Cafe",type: "Restaurant", district: "Kozhikode", lat: 11.2580, lon: 75.7800 },
    { name: "The Oberon Mall",type: "Mall", district: "Ernakulam", lat: 9.9763, lon: 76.3089 },
    { name: "The Leela Kovalam",type: "Leisure", district: "Thiruvananthapuram", lat: 8.4007, lon: 76.9942 },
    { name: "Ramada Resort",type: "Leisure", district: "Ernakulam", lat: 9.9611, lon: 76.2672 },
    { name: "Sree Padmanabhaswamy Temple",type: "Leisure", district: "Thiruvananthapuram", lat: 8.4828, lon: 76.9438 },
    { name: "Grand Hotel",type: "Restaurant", district: "Thiruvananthapuram", lat: 8.5229, lon: 76.9364 },
    { name: "Kochi Medical College",type: "Hospital", district: "Ernakulam", lat: 10.0518, lon: 76.2857 },
    { name: "Infosys Campus",type:"Leisure", district: "Thiruvananthapuram", lat: 8.5241, lon: 76.9366 },
    { name: "Marine Drive",type:"Leisure", district: "Ernakulam", lat: 9.9816, lon: 76.281 },
    { name: "Thusharagiri Waterfalls",type:"Leisure", district: "Kozhikode", lat: 11.4036, lon: 75.8444 },
    { name: "Fort Kochi",type:"Leisure", district: "Ernakulam", lat: 9.9647, lon: 76.2425 },
    { name: "Changampuzha Park",type:"Leisure", district: "Ernakulam", lat: 10.0098, lon: 76.3013 },
    { name: "Kochi International Marina",type:"Leisure",district: "Ernakulam", lat: 9.9730, lon: 76.2855 },
    { name: "Kochi Biennale Foundation",type:"Leisure",district: "Ernakulam", lat: 9.9650, lon: 76.2420 },
    { name: "Mattancherry Palace",type:"Leisure",district: "Ernakulam", lat: 9.9570, lon: 76.2415 },
    { name: "Jewish Synagogue",type:"Leisure",district: "Ernakulam", lat: 9.9575, lon: 76.2410 },
    { name: "Hill Palace Museum",type:"Leisure",district: "Ernakulam", lat: 9.9735, lon: 76.3145 },
    { name: "Sree Poornathrayesa Temple",type:"Leisure",district: "Ernakulam", lat: 10.0165, lon: 76.3140 },
    { name: "Cherai Beach",type:"Leisure",district: "Ernakulam", lat: 10.1425, lon: 76.1781 }  ,
    { name: "Napier Museum",type:"Leisure",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    { name: "Shankumugham Beach",type:"Leisure",district: "Thiruvananthapuram", lat: 8.5240, lon: 76.9730 },
    { name: "Veli Tourist Village",type:"Leisure",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9735 },
    { name: "Kovalam Beach",type:"Leisure",district: "Thiruvananthapuram", lat: 8.4000, lon: 76.9960 },
    { name: "Sree Chitra Art Gallery",type:"Leisure",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    { name: "Thiruvananthapuram Zoo",type:"Leisure",district: "Thiruvananthapuram", lat: 8.5240, lon: 76.9365 },
    { name: "Kanakakunnu Palace",type:"Leisure",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    { name: "Attukal Bhagavathy Temple",type:"Leisure",district: "Thiruvananthapuram", lat: 8.5240, lon: 76.9365 },
    { name: "Loka Medicity",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5241, lon: 76.9366 },
    { name: "TSree Chitra Tirunal Institute for Medical Sciences and Technology",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    { name: "KIMSHEALTH Trivandrum",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5240, lon: 76.9365 },
    { name: "Medical College Hospital",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    { name: "Aster MIMS",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5240, lon: 76.9365 },
    { name: "NIMS Medicity",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    { name: "Sree Uthradom Thirunal Hospital",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5240, lon: 76.9365 },
    { name: "Ananthapuri Hospitals and Research Institute",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    { name: "Rajagiri Hospital",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    { name: "Sree Sankara Hospital",type:"Hospital",district: "Thiruvananthapuram", lat: 8.5245, lon: 76.9360 },
    {name: "Kozhikode Beach",type: "Leisure",district: "Kozhikode",lat: 11.2588,lon: 75.7804},
        {
          name: "Kappad Beach",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.5280,
          lon: 75.5220
        },
        {
          name: "Sarovaram Bio Park",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.2580,
          lon: 75.7800
        },
        {
          name: "Mananchira Square",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.2585,
          lon: 75.7802
        },
        {
          name: "S.M. Street (Sweet Meat Street)",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.2587,
          lon: 75.7803
        },
        {
          name: "Mishkal Mosque",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.2586,
          lon: 75.7801
        },
        {
          name: "Tali Temple",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.2584,
          lon: 75.7800
        },
        {
          name: "Kozhikode Planetarium",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.2583,
          lon: 75.7799
        },
        {
          name: "Sree Sankaracharya University of Sanskrit",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.2582,
          lon: 75.7798
        },
        {
          name: "Kozhikode Railway Station",
        type: "Leisure",
          district: "Kozhikode",
          lat: 11.2581,
          lon: 75.7797
        },
        
            {
              name: "Aster MIMS",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2588,
              lon: 75.7804
            },
            {
              name: "Baby Memorial Hospital",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2585,
              lon: 75.7802
            },
            {
              name: "Fathima Hospital",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2587,
              lon: 75.7803
            },
            {
              name: "Government General Hospital Kozhikode (Beach Hospital)",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2586,
              lon: 75.7801
            },
            {
              name: "Government Medical College, Kozhikode",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2584,
              lon: 75.7800
            },
            {
              name: "IQRAA Hospital",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2583,
              lon: 75.7799
            },
            {
              name: "Malabar Hospitals",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2582,
              lon: 75.7798
            },
            {
              name: "Meitra Hospital",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2581,
              lon: 75.7797
            },
            {
              name: "National Hospital",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2580,
              lon: 75.7796
            },
            {
              name: "Starcare Hospital",
            type: "Hospital",
              district: "Kozhikode",
              lat: 11.2579,
              lon: 75.7795
            },

                {
                  name: "HiLite Mall",
                type: "Mall",
                  district: "Kozhikode",
                  lat: 11.2588,
                  lon: 75.7804
                },
                {
                  name: "Focus Mall",
                type: "Mall",
                  district: "Kozhikode",
                  lat: 11.2585,
                  lon: 75.7802
                },
                {
                  name: "Gokulam Galleria Mall",
                type: "Mall",
                  district: "Kozhikode",
                  lat: 11.2587,
                  lon: 75.7803
                },
                {
                  name: "S.M. Street (Sweet Meat Street)",
                type: "Mall",
                  district: "Kozhikode",
                  lat: 11.2586,
                  lon: 75.7801
                },
                {
                  name: "Kozhikode Beach",
                type: "Mall",
                  district: "Kozhikode",
                  lat: 11.2584,
                  lon: 75.7800
                },
                {
                  name: "Kappad Beach",
                type: "Mall",
                  district: "Kozhikode",
                  lat: 11.5280,
                  lon: 75.5220
                },
                {
                  name: "Sarovaram Bio Park",
                type: "Leisure",
                  district: "Kozhikode",
                  lat: 11.2580,
                  lon: 75.7800
                },
                {
                  name: "Mananchira Square",
                type: "Leisure",
                  district: "Kozhikode",
                  lat: 11.2585,
                  lon: 75.7802
                },
                {
                  name: "Mishkal Mosque",
                type: "Leisure",
                  district: "Kozhikode",
                  lat: 11.2586,
                  lon: 75.7801
                },
                {
                  name: "Tali Temple",
                type: "Leisure",
                  district: "Kozhikode",
                  lat: 11.2584,
                  lon: 75.7800
                },
            
                    {
                      name: "Mezban Restaurant",
                    type: "Restaurant",
                      district: "Kozhikode",
                      lat: 11.2586,
                      lon: 75.7801
                    },
                    {
                      name: "Kovilakam Residency Pvt Ltd",
                    type: "Restaurant",
                      district: "Kozhikode",
                      lat: 11.2584,
                      lon: 75.7800
                    },
                    {
                      name: "Paragon Restaurant",
                    type: "Restaurant",
                      district: "Kozhikode",
                      lat: 11.2587,
                      lon: 75.7803
                    },
                    {
                      name: "Rahmath Hotel",
                    type: "Restaurant",
                      district: "Kozhikode",
                      lat: 11.2585,
                      lon: 75.7802
                    },
                    {
                      name: "Zam Zam Restaurant",
                    type: "Restaurant",
                      district: "Kozhikode",
                      lat: 11.2583,
                      lon: 75.7799
                    },
                    {
                      name: "Mayflower Restaurant & Catering",
                    type: "Restaurant",
                      district: "Kozhikode",
                      lat: 11.2582,
                      lon: 75.7798
                    },
                    {
                      name: "TIARA by MPS",
                    type: "Restaurant",
                      district: "Kozhikode",
                      lat: 11.2581,
                      lon: 75.7797
                    },
                    {
                      name: "Apollo Dimora Calicut",
                    type: "Restaurant",
                      district: "Kozhikode",
                      lat: 11.2580,
                      lon: 75.7796
                    },
                    {
                      name: "Gokulam Galleria Mall",
                    type: "Mall",
                      district: "Kozhikode",
                      lat: 11.2579,
                      lon: 75.7795
                    },
                    {
                      name: "HiLite Mall",
                    type: "Mall",
                      district: "Kozhikode",
                      lat: 11.2578,
                      lon: 75.7794
                    },
                    
                        {
                          name: "LuLu Mall",
                        type: "Mall",
                          district: "Thiruvananthapuram",
                          lat: 8.5240,
                          lon: 76.9365
                        },
                        {
                          name: "Mall of Travancore",
                        type: "Mall",
                          district: "Thiruvananthapuram",
                          lat: 8.5240,
                          lon: 76.9365
                        },
                        {
                          name: "Saphalyam Shopping Complex",
                        type: "Mall",
                          district: "Thiruvananthapuram",
                          lat: 8.5240,
                          lon: 76.9365
                        },
                        {
                          name: "Ramachandran Textiles",
                        type: "Mall",
                          district: "Thiruvananthapuram",
                          lat: 8.5240,
                          lon: 76.9365
                        },
                        {
                          name: "Pothys",
                        type: "Mall",
                          district: "Thiruvananthapuram",
                          lat: 8.5240,
                          lon: 76.9365
                        },
                        {
                          name: "Stacey International Exports and Imports",
                        type: "Mall",
                          district: "Thiruvananthapuram",
                          lat: 8.5240,
                          lon: 76.9365
                        },
                        {
                          name: "Indiegaga",
                        type: "Leisure",
                          district: "Thiruvananthapuram",
                          lat: 8.5240,
                          lon: 76.9365
                        },
                        
                        {
                          name: "Trivandrum International Airport",
                        type: "Leisure",
                          district: "Thiruvananthapuram",
                          lat: 8.5240,
                          lon: 76.9365
                        },
                        
                        
                            {
                              name: "Avocado",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            {
                              name: "Blnd Restobar",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            {
                              name: "MRA Restaurant",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            {
                              name: "Travancore Aramana",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            {
                              name: "The South Park Hotel",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            {
                              name: "HYCINTH Hotels",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            {
                              name: "Hilton Garden Inn, Trivandrum",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            {
                              name: "The Central Residency",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            {
                              name: "The Kerala Cafe",
                            type: "Restaurant",
                              district: "Thiruvananthapuram",
                              lat: 8.5240,
                              lon: 76.9365
                            },
                            
                            
                                {
                                  name: "The Bubble Café",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 9.9756,
                                  lon: 76.2859
                                },
                                {
                                  name: "Chariot Restaurant",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 9.9812,
                                  lon: 76.2851
                                },
                                {
                                  name: "Hotel Shree Aryas Restaurant",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 10.0100,
                                  lon: 76.3140
                                },
                                {
                                  name: "Ambiswamy's Vegetarian Restaurant (Kadavanthra)",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 9.9730,
                                  lon: 76.3070
                                },
                                {
                                  name: "Ambiswamy's Vegetarian Restaurant (M.G. Road)",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 9.9815,
                                  lon: 76.2855
                                },
                                {
                                  name: "Ambiswamy's Vegetarian Restaurant (Edappally)",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 10.0000,
                                  lon: 76.3145
                                },
                                {
                                  name: "The Imperial Kitchen",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 9.9810,
                                  lon: 76.2850
                                },
                                {
                                  name: "Kashi Art Café",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 9.9815,
                                  lon: 76.2855
                                },
                                {
                                  name: "Sree Krishna Café",
                                type: "Restaurant",
                                  district: "Ernakulam",
                                  lat: 9.9810,
                                  lon: 76.2850
                                },
                                {
                                  name: "Sree Muruga Café",
type: "Restaurant",
    district: "Ernakulam",
    lat: 9.9815,
    lon: 76.2855
  },
    {
      name: "Lulu International Shopping Mall",
    type: "Mall",
      district: "Ernakulam",
      lat: 10.0266,
      lon: 76.3084
    },
    {
      name: "Centre Square Mall",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9815,
      lon: 76.2812
    },
    {
      name: "Bay Pride Mall",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9810,
      lon: 76.2815
    },
    {
      name: "Gold Souk Grande Kochi",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9812,
      lon: 76.2818
    },
    {
      name: "Kochi One Mall",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9813,
      lon: 76.2819
    },
    {
      name: "Sree Gokulam Shopping Complex",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9814,
      lon: 76.2820
    },
    {
      name: "Kochi City Centre",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9816,
      lon: 76.2821
    },
    {
      name: "MG Road Shopping Complex",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9817,
      lon: 76.2822
    },
    {
      name: "Kochi Metro Mall",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9818,
      lon: 76.2823
    },
    {
      name: "Marine Drive Shopping Complex",
    type: "Mall",
      district: "Ernakulam",
      lat: 9.9819,
      lon: 76.2824
    },
  
    {
      name: "City Hospital",
    type: "Hospital",
      district: "Ernakulam",
      lat: 9.9815,
      lon: 76.2812
    },
    {
      name: "Ernakulam Medical Centre",
    type: "Hospital",
      district: "Ernakulam",
      lat: 9.9736,
      lon: 76.3070
    },
    {
      name: "Rajagiri Hospital",
    type: "Hospital",
      district: "Ernakulam",
      lat: 10.0165,
      lon: 76.3142
    },
    {
      name: "Lisie Hospital",
    type: "Hospital",
      district: "Ernakulam",
      lat: 9.9810,
      lon: 76.2815
    },
    {
      name: "Amrita Institute of Medical Sciences and Research Centre",
    type: "Hospital",
      district: "Ernakulam",
      lat: 10.0165,
      lon: 76.3142
    },
    {
      name: "Medical Trust Hospital",
    type: "Hospital",
      district: "Ernakulam",
      lat: 9.9810,
      lon: 76.2815
    },
    {
      name: "Cochin Hospital",
    type: "Hospital",
      district: "Ernakulam",
      lat: 9.9810,
      lon: 76.2815
    },
    {
      name: "Gautham Hospital",
    type: "Hospital",
      district: "Ernakulam",
      lat: 9.9810,
      lon: 76.2815
    },
    {
      name: "Dr. E.T. Kuriakose Eye Hospital",
    type: "Hospital",
      district: "Ernakulam",
      lat: 9.9810,
      lon: 76.2815
    },
    {
      name: "Cochin Port Hospital",
    type: "Hospital",
      district: "Ernakulam",
    lat: 9.9810,
    lon: 76.2815
  },
    {
      name: "Gitanjali Eye and ENT Hospital",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Dr. Nair's Hospital",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "ESIC Model & Super Speciality Hospital",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Sankar's Institute of Medical Science (SIMS)",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Kollam District Hospital",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Kollam Eye Hospital",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Kollam Medical College Hospital",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Kollam General Hospital",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Kollam Cancer Centre",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Kollam Heart Centre",
    type: "Hospital",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Regant Lake Palace Hotel",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam Picnic Village",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam Adventure Park",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam Children's Park",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam Link Road",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam Maidan",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam Link Road",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Asramam",
    type: "Mall",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Ramees Restaurant",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Keraleeyam Restaurant at The Leela Ashtamudi- A Raviz Hotel",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Frankztreat Restaurant",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "All Spice Restaurant",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Supreme Bakers",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Fusion Table",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Veg Way",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Mahal Food's Biriyani",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Aariyas Vegetarian Restaurant",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
    {
      name: "Kollam Junction Station",
    type: "Restaurant",
      district: "Kollam",
      lat: 8.8833,
      lon: 76.5917
    },
        {
          name: "Asramam",
        type: "Leisure",
          district: "Kollam",
          lat: 8.8833,
          lon: 76.5917
        },
        {
          name: "Punalur",
        type: "Leisure",
          district: "Kollam",
          lat: 9.0195,
          lon: 76.9425
        },
        {
          name: "Sasthamkotta Lake",
        type: "Leisure",
          district: "Kollam",
          lat: 9.0634,
          lon: 76.5584
        },
        {
          name: "Jatayu Earth's Center",
        type: "Leisure",
          district: "Kollam",
          lat: 9.2345,
          lon: 76.6174
        },
        {
          name: "Munroe Island",
        type: "Leisure",
          district: "Kollam",
          lat: 9.0243,
          lon: 76.5968
        },
        {
          name: "Thangassery Light House",
        type: "Leisure",
          district: "Kollam",
          lat: 8.8844,
          lon: 76.5969
        },
        {
          name: "Kollam Beach",
        type: "Leisure",
          district: "Kollam",
          lat: 8.8855,
          lon: 76.5920
        },
        {
          name: "Riverside Walk",
        type: "Leisure",
          district: "Kollam",
          lat: 8.8871,
          lon: 76.5895
        },
        {
          name: "Alappad Beach",
        type: "Leisure",
          district: "Kollam",
          lat: 8.8832,
          lon: 76.6610
        },
        {
          name: "Palaruvi Waterfalls",
        type: "Leisure",
          district: "Kollam",
          lat: 9.1539,
          lon: 77.1333
        },
            {
              name: "Alappuzha Medical College Hospital",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "KVM Hospital",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Medi City Hospital",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha District Hospital",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Sree Chithra Hospital",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Kottaram Medical Centre",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Eye Hospital",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Sree Gokulam Medical College Hospital",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Heart Centre",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Cancer Centre",
            type: "Hospital",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Mall",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Shopping Centre",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Central Mall",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Plaza",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha City Mall",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Hypermarket",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Mega Mall",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Fashion Mall",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Lifestyle Mall",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Electronics Mall",
            type: "Mall",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Bayroute Bistro",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Cafe Catamaran",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Memories Multicuisine Restaurant",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Choola Restaurant",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Mushroom",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "The Harbour Restaurant",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Borma",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Makkani Restaurant",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Avees Puttu House",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "DAD's CAFE",
            type: "Restaurant",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
            {
              name: "Alappuzha Backwaters",
            type: "Leisure",
              district: "Alappuzha",
              lat: 9.5000,
              lon: 76.3500
            },
                {
                  name: "Idukki District Hospital",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                {
                  name: "Munnar Medical Centre",
                type: "Hospital",
                  district: "Idukki",
                  lat: 10.0883,
                  lon: 77.0594
                },
                {
                  name: "Kochi Medical Centre",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                {
                  name: "Idukki Heart Centre",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                {
                  name: "Idukki Eye Hospital",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                {
                  name: "Idukki Cancer Centre",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                {
                  name: "Idukki Medical College Hospital",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                {
                  name: "Idukki General Hospital",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                {
                  name: "Idukki Orthopaedic Centre",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                {
                  name: "Idukki Women's Hospital",
                type: "Hospital",
                  district: "Idukki",
                  lat: 9.9833,
                  lon: 77.0667
                },
                    {
                      name: "Munnar Mall",
                    type: "Mall",
                      district: "Idukki",
                      lat: 10.0883,
                      lon: 77.0594
                    },
                    {
                      name: "Idukki Central Mall",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                    {
                      name: "Idukki Plaza",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                    {
                      name: "Idukki City Mall",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                    {
                      name: "Idukki Hypermarket",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                    {
                      name: "Idukki Mega Mall",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                    {
                      name: "Idukki Fashion Mall",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                    {
                      name: "Idukki Lifestyle Mall",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                    {
                      name: "Idukki Electronics Mall",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                    {
                      name: "Idukki Food Court Mall",
                    type: "Mall",
                      district: "Idukki",
                      lat: 9.9833,
                      lon: 77.0667
                    },
                        {
                          name: "Saravana Bhavan",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Rapsy Restaurant",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Bamboo Cafe",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Hotel Hillview Restaurant",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Hotel Sree Nivas Restaurant",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Hotel New York Restaurant",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Hotel Arya Bhavan Restaurant",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Hotel Sree Krishna Restaurant",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Hotel Sree Venkateswara Restaurant",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                        {
                          name: "Hotel Sree Ganesh Restaurant",
                        type: "Restaurant",
                          district: "Idukki",
                          lat: 10.0883,
                          lon: 77.0594
                        },
                            {
                              name: "Pathanamthitta General Hospital",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "Evergreen Hospital",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "KIMS Alappuzha",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "Sree Chitra Tirunal Institute for Medical Sciences and Technology",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "Medical College Hospital, Kottayam",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "Medi City Hospital",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "Sree Uthradom Thirunal Hospital",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "St. Thomas Hospital",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "Holy Cross Hospital",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                            {
                              name: "Sree Sankara Hospital",
                            type: "Hospital",
                              district: "Pathanamthitta",
                              lat: 9.2650,
                              lon: 76.7810
                            },
                                {
                                  name: "Pathanamthitta Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "Evergreen Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "KIMS Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "Sree Chitra Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "Medical College Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "Medi City Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "Sree Uthradom Thirunal Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "St. Thomas Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "Holy Cross Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                {
                                  name: "Sree Sankara Mall",
                                type: "Mall",
                                  district: "Pathanamthitta",
                                  lat: 9.2650,
                                  lon: 76.7810
                                },
                                    {
                                      name: "Evergreen",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel Arya Bhavan",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel Sree Krishna",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel New York",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel Sree Venkateswara",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel Sree Ganesh",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel Sree Nivas",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel Sree Lakshmi",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel Sree Devi",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                    {
                                      name: "Hotel Sree Raghavendra",
                                    type: "Restaurant",
                                      district: "Pathanamthitta",
                                      lat: 9.2650,
                                      lon: 76.7810
                                    },
                                        {
                                          name: "Sabarimala",
                                        type: "Leisure",
                                          district: "Pathanamthitta",
                                          lat: 9.2833,
                                          lon: 77.0833
                                        },
                                    
                                            {
                                              name: "Kottayam Medical College Hospital",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "Caritas Hospital",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "PVS Memorial Hospital",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "St. Mary's Hospital",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "Kottayam Eye Hospital",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "Kottayam Heart Institute",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "Kottayam Cancer Centre",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "Kottayam Orthopaedic Centre",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "Kottayam Women's Hospital",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            {
                                              name: "Kottayam Children's Hospital",
                                            type: "Hospital",
                                              district: "Kottayam",
                                              lat: 9.5910,
                                              lon: 76.5220
                                            },
                                            
                                                {
                                                  name: "Kottayam Mall",
                                                type: "Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "Caritas Mall",
                                                type: "Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "PVS Mall",
                                                type:"Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "St. Mary's Mall",
                                                type:"Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "Kottayam Eye Mall",
                                                type:"Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "Kottayam Heart Mall",
                                                type:"Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "Kottayam Cancer Mall",
                                                type:"Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "Kottayam Orthopaedic Mall",
                                                type:"Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "Kottayam Women's Mall",
                                                type:"Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                {
                                                  name: "Kottayam Children's Mall",
                                                type:"Mall",
                                                  district: "Kottayam",
                                                  lat: 9.5910,
                                                  lon: 76.5220
                                                },
                                                
                                                    {
                                                      name: "Lime Tree",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "The Waterside",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "Karimpumkala Restaurant",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "Laguna Bass Specialty Seafood Restaurant",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "Tharavadu Restaurant",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "Lakshmi Hotel and Resorts Restaurant",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "Hotel Annapoorna",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "Cinnamon Multi Cuisine Restaurant",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "Third Place",
                                                    type:"Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    {
                                                      name: "12 to 12 Barbeque",
                                                    type: "Restaurant",
                                                      district: "Kottayam",
                                                      lat: 9.5910,
                                                      lon: 76.5220
                                                    },
                                                    
                                                        {
                                                          name: "Vembanad Lake",
                                                        type: "Leisure",
                                                          district: "Kottayam",
                                                          lat: 9.5910,
                                                          lon: 76.5220
                                                        },
                                                        {
                                                          name: "Aymanam Village",
                                                        type: "Leisure",
                                                          district: "Kottayam",
                                                          lat: 9.5910,
                                                          lon: 76.5220
                                                        },
                                                        
                                                            {
                                                              name: "Oase Ayurveda Hospital",
                                                            type: "Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "St. Thomas Hospital",
                                                            type: "Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Medi City Hospital",
                                                            type:"Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Sree Chitra Tirunal Institute for Medical Sciences and Technology",
                                                            type:"Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Medical College Hospital, Kottayam",
                                                            type:"Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                                name: "Medi City Hospital",
                                                            type:"Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Sree Uthradom Thirunal Hospital",
                                                            type:"Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "St. Thomas Hospital",
                                                            type:"Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Holy Cross Hospital",
                                                            type:"Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Sree Sankara Hospital",
                                                            type: "Hospital",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                          
                                                          
                                                            {
                                                              name: "Sobha City Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "PVS Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Kalyan Silks Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Sree Gokulam Shopping Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Crown Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Kalyan Jewellers Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Sree Gokulam Shopping Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Crown Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Kalyan Jewellers Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Sobha City Mall",
                                                            type:"Mall",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                          
                                            
                                                            {
                                                              name: "Hotel Akshaya",
                                                            type:"Restaurant",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Noorjehan's Hotpan",
                                                            type:"Restaurant",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Ming Palace",
                                                            type:"Restaurant",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Alibaba & 41 Dishes",
                                                            type:"Restaurant",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Hotel Aryaas Veg",
                                                            type:"Restaurant",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Pisharody's Restaurant",
                                                            type:"Restaurant",
                                                              "district": "Thrissur",
                                                              "lat": 10.5270,
                                                              "lon": 76.2140
                                                            },
                                                            {
                                                              name: "C'sons RepEat",
                                                            type:"Restaurant",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Akshaya Hotel",
                                                            type:"Restaurant",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                              lon: 76.2140
                                                            },
                                                            {
                                                              name: "Bharath Hotel (Pure Veg)",
                                                            type:"Restaurant",
                                                              district: "Thrissur",
                                                              lat: 10.5270,
                                                            },
                                                            
                                                                {
                                                                  name: "Athirappilly Waterfalls",
                                                                type:"Leisure",
                                                                  district: "Thrissur",
                                                                  lat: 10.2820,
                                                                  lon: 76.5633
                                                                },
                                                                {
                                                                  name: "Vadakkunnathan Temple",
                                                                type:"Leisure",
                                                                  district: "Thrissur",
                                                                  lat: 10.5270,
                                                                  lon: 76.2140
                                                                },
                                                                {
                                                                  name: "Paramekavu Bhagavathy Temple",
                                                                type:"Leisure",
                                                                  district: "Thrissur",
                                                                  lat: 10.5270,
                                                                  lon: 76.2140
                                                                },
                                                                {
                                                                  name: "Snehatheeram Beach",
                                                                type:"Leisure",
                                                                  district: "Thrissur",
                                                                  lat: 10.2935,
                                                                  lon: 76.0487
                                                                },
                                                                {
                                                                  name: "Kerala Kalamandalam",
                                                                type:"Leisure",
                                                                  "district": "Thrissur",
                                                                  "lat": 10.5763,
                                                                  "lon": 76.2369
                                                                },
                                                                {
                                                                  name: "Shakthan Thampuran Palace",
                                                                type:"Leisure",
                                                                  district: "Thrissur",
                                                                  lat: 10.5270,
                                                                  lon: 76.2140
                                                                },
                                                                {
                                                                  name: "Thrissur Zoo & Museum",
                                                                type:"Liesure",
                                                                  district: "Thrissur",
                                                                  lat: 10.5265,
                                                                  lon: 76.2146
                                                                },
                                                                {
                                                                  name: "Peechi Dam",
                                                                type:"Leisure",
                                                                  district: "Thrissur",
                                                                  lat: 10.4411,
                                                                  lon: 76.4713
                                                                },
                                                                {
                                                                  name: "Vazhachal Waterfalls",
                                                                type:"Leisure",
                                                                  district: "Thrissur",
                                                                  lat: 10.2836,
                                                                  lon: 76.5636
                                                                },
                                                                {
                                                                  name: "Chavakkad Beach",
                                                                type:"Leisure",
                                                                  district: "Thrissur",
                                                                  lat: 10.5234,
                                                                  lon: 75.9600
                                                                },
                                                                
                                                                    {
                                                                      name: "Kairali Ayurvedic Health Resort",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Palakkad District Hospital",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Kottakkal Arya Vaidya Sala",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Chitra Tirunal Institute for Medical Sciences and Technology",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Sankara Medical Centre",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Ramakrishna Hospital",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Gokulam Medical College and Research Foundation",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Narayana Institute of Medical Sciences",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Chithra Homeopathic Medical College",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Sankara Medical College",
                                                                      type: "Hospital",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                  
                                                                  
                                                                    {
                                                                      name: "Lulu Mall Palakkad",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Kairali Shopping Complex",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Gokulam Shopping Mall",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Sankara Shopping Complex",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Ramakrishna Shopping Mall",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Chitra Shopping Complex",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Narayana Shopping Mall",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Chithra Shopping Complex",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Sankara Shopping Mall",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Sree Gokulam Shopping Complex",
                                                                      type: "Mall",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                  
                                                                
                                                                    {
                                                                      name: "Hasis Kitchen",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Saravana Bhavan",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Rapsy Restaurant",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Bamboo Cafe",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Hotel Hillview Restaurant",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Hotel Sree Nivas Restaurant",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Hotel New York Restaurant",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Hotel Arya Bhavan Restaurant",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Hotel Sree Krishna Restaurant",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                    {
                                                                      name: "Hotel Sree Venkateswara Restaurant",
                                                                      type: "Restaurant",
                                                                      district: "Palakkad",
                                                                      lat: 10.7733,
                                                                      lon: 76.6542
                                                                    },
                                                                
                                                                  {
                                                                    name: "Palakkad Fort",
                                                                    type: "Leisure",
                                                                    district: "Palakkad",
                                                                    lat: 10.7723,
                                                                    lon: 76.6566
                                                                  },
                                                                  {
                                                                    name: "Lulu Mall Palakkad",
                                                                    type: "Mall",
                                                                    district: "Palakkad",
                                                                    lat: 10.7392,
                                                                    lon: 76.6512
                                                                  },
                                                                  {
                                                                    name: "Malampuzha Dam and Gardens",
                                                                    type: "Leisure",
                                                                    district: "Palakkad",
                                                                    lat: 10.8081,
                                                                    lon: 76.6835
                                                                  },
                                                                  {
                                                                    name: "Kanjirapuzha Dam",
                                                                    type: "Leisure",
                                                                    district: "Palakkad",
                                                                    lat: 10.8880,
                                                                    lon: 76.3845
                                                                  },
                                                                  {
                                                                    name: "Ahalia Health Heritage and Knowledge Village",
                                                                    type: "Leisure",
                                                                    district: "Palakkad",
                                                                    lat: 10.7792,
                                                                    lon: 76.7739
                                                                  },
                                                                  {
                                                                    name: "Moulana Hospital",
                                                                    type: "Leisure",
                                                                    district: "Malappuram",
                                                                    lat: 10.9865,
                                                                    lon: 76.2180
                                                                  },
                                                                  {
                                                                    name: "Al-Shifa Hospital",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 11.0422,
                                                                    lon: 76.0815
                                                                  },
                                                                  {
                                                                    name: "EMS Memorial Co-operative Hospital",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 10.9945,
                                                                    lon: 76.2150
                                                                  },
                                                                  {
                                                                    name: "Government Medical College, Manjeri",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 11.1216,
                                                                    lon: 76.1192
                                                                  },
                                                                  {
                                                                    name: "Malappuram District Co-operative Hospital",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 11.0416,
                                                                    lon: 76.0822
                                                                  },
                                                                  {
                                                                    name: "Orchid Institute of Health Care",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 11.0410,
                                                                    lon: 76.0820
                                                                  },
                                                                  {
                                                                    name: "Korambayil Ahamed Haji Memorial Hospital",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 11.0486,
                                                                    lon: 76.0789
                                                                  },
                                                                  {
                                                                    name: "Arya Vaidya Sala, Kottakkal",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 10.9945,
                                                                    lon: 76.2150
                                                                  },
                                                                  {
                                                                    name: "Government Hospital, Malappuram",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 11.0416,
                                                                    lon: 76.0822
                                                                  },
                                                                  {
                                                                    name: "District Hospital, Manjeri",
                                                                    type: "Hospital",
                                                                    district: "Malappuram",
                                                                    lat: 11.1216,
                                                                    lon: 76.1192
                                                                  },
                                                                  {
                                                                    name: "Hotel Delicia",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 11.0416,
                                                                    lon: 76.0822
                                                                  },
                                                                  {
                                                                    name: "Food Lounge",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 11.0410,
                                                                    lon: 76.0820
                                                                  },
                                                                  {
                                                                    name: "Albaik Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 11.0486,
                                                                    lon: 76.0789
                                                                  },
                                                                  {
                                                                    name: "Hotel Woodlands",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 10.9945,
                                                                    lon: 76.2150
                                                                  },
                                                                  {
                                                                    name: "Paragon Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 11.1216,
                                                                    lon: 76.1192
                                                                  },
                                                                  {
                                                                    name: "Hotel Sapphire",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 11.0416,
                                                                    lon: 76.0822
                                                                  },
                                                                  {
                                                                    name: "KFC Malappuram",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 11.0410,
                                                                    lon: 76.0820
                                                                  },
                                                                  {
                                                                    name: "Hotel Royal Treat",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 11.0486,
                                                                    lon: 76.0789
                                                                  },
                                                                  {
                                                                    name: "Hotel Pookodans",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 10.9945,
                                                                    lon: 76.2150
                                                                  },
                                                                  {
                                                                    name: "Hotel Sabka",
                                                                    type: "Restaurant",
                                                                    district: "Malappuram",
                                                                    lat: 11.1216,
                                                                    lon: 76.1192
                                                                  },
                                                                  {
                                                                    name: "HiLITE Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "Focus Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "RP Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "Gokulam Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "Mall of Joy",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "City Centre Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "K Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "Grand Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "Space Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "Emarald Mall",
                                                                    type: "Mall",
                                                                    district: "Malappuram",
                                                                    lat: 11.2588,
                                                                    lon: 75.7804
                                                                  },
                                                                  {
                                                                    name: "Kottakkunnu",
                                                                    type: "Leisure",
                                                                    district: "Malappuram",
                                                                    lat: 11.0736,
                                                                    lon: 76.0712
                                                                  },
                                                                  {
                                                                    name: "Mini Ooty (Arimbra Hills)",
                                                                    type: "Leisure",
                                                                    district: "Malappuram",
                                                                    lat: 11.1155,
                                                                    lon: 75.9803
                                                                  },
                                                                  {
                                                                    name: "Kodikuthimala",
                                                                    type: "Leisure",
                                                                    district: "Malappuram",
                                                                    lat: 10.9800,
                                                                    lon: 76.1700
                                                                  },
                                                                  {
                                                                    name: "Nilambur Teak Museum",
                                                                    type: "Leisure",
                                                                    district: "Malappuram",
                                                                    lat: 11.276
                                                                  },
                                                                  {
                                                                    name: "DM WIMS Medical College Hospital",
                                                                    type: "Hospital",
                                                                    district: "Wayanad",
                                                                    lat: 11.7151,
                                                                    lon: 76.0803
                                                                  },
                                                                  {
                                                                    name: "Assumption Hospital",
                                                                    type: "Hospital",
                                                                    district: "Wayanad",
                                                                    lat: 11.6050,
                                                                    lon: 76.0825
                                                                  },
                                                                  {
                                                                    name: "Nirmala Hospital",
                                                                    type: "Hospital",
                                                                    district: "Wayanad",
                                                                    lat: 11.7266,
                                                                    lon: 76.2166
                                                                  },
                                                                  {
                                                                    name: "St. Martin's Hospital",
                                                                    type: "Hospital",
                                                                    district: "Wayanad",
                                                                    lat: 11.7150,
                                                                    lon: 76.0800
                                                                  },
                                                                  {
                                                                    name: "Fathima Mata Mission Hospital",
                                                                    type: "Hospital",
                                                                    district: "Wayanad",
                                                                    lat: 11.6055,
                                                                    lon: 76.0820
                                                                  },
                                                                  {
                                                                    name: "1980's A Nostalgic Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Wayanad",
                                                                    lat: 11.6101,
                                                                    lon: 76.0825
                                                                  },
                                                                  {
                                                                    name: "The Bungalow Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Wayanad",
                                                                    lat: 11.6102,
                                                                    lon: 76.0826
                                                                  },
                                                                  {
                                                                    name: "Wilton Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Wayanad",
                                                                    lat: 11.6643,
                                                                    lon: 76.1320
                                                                  },
                                                                  {
                                                                    name: "Udupi Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Wayanad",
                                                                    lat: 11.6103,
                                                                    lon: 76.0827
                                                                  },
                                                                  {
                                                                    name: "Green Gates Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Wayanad",
                                                                    lat: 11.6104,
                                                                    lon: 76.0828
                                                                  },
                                                                  {
                                                                    name: "Trident Arcade",
                                                                    type: "Mall",
                                                                    district: "Wayanad",
                                                                    lat: 11.6644,
                                                                    lon: 76.1321
                                                                  },
                                                                  {
                                                                    name: "Dubai Shopping Centre",
                                                                    type: "Mall",
                                                                    district: "Wayanad",
                                                                    lat: 11.6105,
                                                                    lon: 76.0829
                                                                  },
                                                                  {
                                                                    name: "RP Mall",
                                                                    type: "Mall",
                                                                    district: "Wayanad",
                                                                    lat: 11.6106,
                                                                    lon: 76.0830
                                                                  },
                                                                  {
                                                                    name: "The Focus Mall",
                                                                    type: "Mall",
                                                                    district: "Wayanad",
                                                                    lat: 11.6107,
                                                                    lon: 76.0831
                                                                  },
                                                                  {
                                                                    name: "Santhi Pappadam",
                                                                    type: "Mall",
                                                                    district: "Wayanad",
                                                                    lat: 11.6108,
                                                                    lon: 76.0832
                                                                  },
                                                                  
                                                                  {
                                                                    name: "Pookode Lake",
                                                                    type: "Leisure",
                                                                    district: "Wayanad",
                                                                    lat: 11.5374,
                                                                    lon: 76.0226
                                                                  },
                                                                
                                                                  {
                                                                    name: "Wayanad Wildlife Sanctuary",
                                                                    type: "Leisure",
                                                                    district: "Wayanad",
                                                                    lat: 11.6512,
                                                                    lon: 76.4677
                                                                  },
                                                                  {
                                                                    name: "Kuruva Island",
                                                                    type: "Leisure",
                                                                    district: "Wayanad",
                                                                    lat: 11.8583,
                                                                    lon: 76.1756
                                                                  },
                                                                  {
                                                                    name: "AKG Memorial Cooperative Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8745,
                                                                    lon: 75.3704
                                                                  },
                                                                  {
                                                                    name: "Indira Gandhi Cooperative Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8687,
                                                                    lon: 75.3702
                                                                  },
                                                                  {
                                                                    name: "District Hospital Kannur",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8680,
                                                                    lon: 75.3556
                                                                  },
                                                                  {
                                                                    name: "Dhanalakshmi Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8740,
                                                                    lon: 75.3700
                                                                  },
                                                                  {
                                                                    name: "Koyili Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8742,
                                                                    lon: 75.3701
                                                                  },
                                                                  {
                                                                    name: "MIMS Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8743,
                                                                    lon: 75.3703
                                                                  },
                                                                  {
                                                                    name: "Pariyaram Medical College Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8744,
                                                                    lon: 75.3705
                                                                  },
                                                                  {
                                                                    name: "Malabar Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8746,
                                                                    lon: 75.3706
                                                                  },
                                                                  {
                                                                    name: "Aster MIMS Kannur",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8747,
                                                                    lon: 75.3707
                                                                  },
                                                                  {
                                                                    name: "Nirmala Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kannur",
                                                                    lat: 11.8748,
                                                                    lon: 75.3708
                                                                  },
                                                                  {
                                                                    name: "MVK Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8749,
                                                                    lon: 75.3709
                                                                  },
                                                                  {
                                                                    name: "Raandhal Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8750,
                                                                    lon: 75.3710
                                                                  },
                                                                  {
                                                                    name: "Hotel Odhens",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8751,
                                                                    lon: 75.3711
                                                                  },
                                                                  {
                                                                    name: "Sahib's Grill Kitchen",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8752,
                                                                    lon: 75.3712
                                                                  },
                                                                  {
                                                                    name: "Cabane Bambou",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8753,
                                                                    lon: 75.3713
                                                                  },
                                                                  {
                                                                    name: "MRA Bakery & Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8754,
                                                                    lon: 75.3714
                                                                  },
                                                                  {
                                                                    name: "Wheat House",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8755,
                                                                    lon: 75.3715
                                                                  },
                                                                  {
                                                                    name: "Hotel Odhens",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8756,
                                                                    lon: 75.3716
                                                                  },
                                                                  {
                                                                    name: "MVK Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8757,
                                                                    lon: 75.3717
                                                                  },
                                                                  {
                                                                    name: "Raandhal Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Kannur",
                                                                    lat: 11.8758,
                                                                    lon: 75.3718
                                                                  },
                                                                  {
                                                                    name: "Capitol Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8749,
                                                                    lon: 75.3709
                                                                  },
                                                                  {
                                                                    name: "Kannur Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8750,
                                                                    lon: 75.3710
                                                                  },
                                                                  {
                                                                    name: "Grand Plaza",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8751,
                                                                    lon: 75.3711
                                                                  },
                                                                  {
                                                                    name: "City Center Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8752,
                                                                    lon: 75.3712
                                                                  },
                                                                  {
                                                                    name: "G Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8753,
                                                                    lon: 75.3713
                                                                  },
                                                                  {
                                                                    name: "Royal Oak Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8754,
                                                                    lon: 75.3714
                                                                  },
                                                                  {
                                                                    name: "Central Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8755,
                                                                    lon: 75.3715
                                                                  },
                                                                  {
                                                                    name: "Focus Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8756,
                                                                    lon: 75.3716
                                                                  },
                                                                  {
                                                                    name: "HiLITE Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8757,
                                                                    lon: 75.3717
                                                                  },
                                                                  {
                                                                    name: "RP Mall",
                                                                    type: "Mall",
                                                                    district: "Kannur",
                                                                    lat: 11.8758,
                                                                    lon: 75.3718
                                                                  },
                                                                  {
                                                                    name: "Muzhappilangad Drive-in Beach",
                                                                    type: "Leisure",
                                                                    district: "Kannur",
                                                                    lat: 11.8749,
                                                                    lon: 75.3709
                                                                  },
                                                                  {
                                                                    name: "St. Angelo Fort",
                                                                    type: "Leisure",
                                                                    district: "Kannur",
                                                                    lat: 11.8750,
                                                                    lon: 75.3710
                                                                  },
                                                                  {
                                                                    name: "Payyambalam Beach",
                                                                    type: "Leisure",
                                                                    district: "Kannur",
                                                                    lat: 11.8751,
                                                                    lon: 75.3711
                                                                  },
                                                                  {
                                                                    name: "Arakkal Museum",
                                                                    type: "Leisure",
                                                                    district: "Kannur",
                                                                    lat: 11.8752,
                                                                    lon: 75.3712
                                                                  },
                                                                  {
                                                                    name: "Parassinikkadavu Snake Park",
                                                                    type: "Leisure",
                                                                    district: "Kannur",
                                                                    lat: 11.8753,
                                                                    lon: 75.3713
                                                                  },
                                                                  {
                                                                    name: "District Hospital Kasaragod",
                                                                    type: "Hospital",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4984,
                                                                    lon: 74.9896
                                                                  },
                                                                  {
                                                                    name: "Malik Deenar Charitable Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4987,
                                                                    lon: 74.9901
                                                                  },
                                                                  {
                                                                    name: "General Hospital Kanhangad",
                                                                    type: "Hospital",
                                                                    district: "Kasaragod",
                                                                    lat: 12.3316,
                                                                    lon: 75.0875
                                                                  },
                                                                  {
                                                                    name: "Indira Gandhi Co-Operative Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4989,
                                                                    lon: 74.9898
                                                                  },
                                                                  {
                                                                    name: "Ashwini Hospital",
                                                                    type: "Hospital",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4985,
                                                                    lon: 74.9897
                                                                  },
                                                                  {
                                                                    name: "Viceroy Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4982,
                                                                    lon: 74.9893
                                                                  },
                                                                  {
                                                                    name: "Royal Dine Restaurant",
                                                                    type: "Restaurant",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4983,
                                                                    lon: 74.9894
                                                                  },
                                                                  {
                                                                    name: "Vasanth Vihar",
                                                                    type: "Restaurant",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4981,
                                                                    lon: 74.9892
                                                                  },
                                                                  {
                                                                    name: "Hotel Highway Castle",
                                                                    type: "Restaurant",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4986,
                                                                    lon: 74.9895
                                                                  },
                                                                  {
                                                                    name: "Hotel City Tower",
                                                                    type: "Restaurant",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4980,
                                                                    lon: 74.9891
                                                                  },
                                                                  {
                                                                    name: "Metro Mall",
                                                                    type: "Mall",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4988,
                                                                    lon: 74.9899
                                                                  },
                                                                  {
                                                                    name: "City Center Mall",
                                                                    type: "Mall",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4989,
                                                                    lon: 74.9900
                                                                  },
                                                                  {
                                                                    name: "Fortune Mall",
                                                                    type: "Mall",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4990,
                                                                    lon: 74.9901
                                                                  },
                                                                  {
                                                                    name: "Royal Mall",
                                                                    type: "Mall",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4991,
                                                                    lon: 74.9902
                                                                  },
                                                                  {
                                                                    name: "Grand Mall",
                                                                    type: "Mall",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4992,
                                                                    lon: 74.9903
                                                                  },  
                                                                  {
                                                                    name: "Bekal Fort",
                                                                    type: "Leisure",
                                                                    district: "Kasaragod",
                                                                    lat: 12.3846,
                                                                    lon: 75.0340
                                                                  },
                                                                  {
                                                                    name: "Chandragiri Fort",
                                                                    type: "Leisure",
                                                                    district: "Kasaragod",
                                                                    lat: 12.5096,
                                                                    lon: 74.9861
                                                                  },
                                                                  {
                                                                    name: "Ananthapura Lake Temple",
                                                                    type: "Leisure",
                                                                    district: "Kasaragod",
                                                                    lat: 12.6086,
                                                                    lon: 74.9870
                                                                  },
                                                                  {
                                                                    name: "Ranipuram",
                                                                    type: "Leisure",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4090,
                                                                    lon: 75.2470
                                                                  },
                                                                  {
                                                                    name: "Kappil Beach",
                                                                    type: "Leisure",
                                                                    district: "Kasaragod",
                                                                    lat: 12.4315,
                                                                    lon: 75.0250
                                                                  }
                                                                                                                                                                                                            
];

function searchPlaces() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    let district = document.getElementById("districtInput").value.trim().toLowerCase();
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (district === "") {
        resultsDiv.innerHTML = "<p>Please enter a district name.</p>";
        return;
    }

    let foundPlaces = accessiblePlaces.filter(place => place.district.toLowerCase() === district);

    if (foundPlaces.length === 0) {
        resultsDiv.innerHTML = "<p>No wheelchair accessible places found in this district.</p>";
    } else {
        // Categorizing the places by type
        let categorizedResults = {
            Mall: [],
            Restaurant: [],
            Hospital: [],
            Leisure: []
        };

        foundPlaces.forEach(place => {
            if (categorizedResults.hasOwnProperty(place.type)) {
                categorizedResults[place.type].push(place);
            }
        });

        // Displaying the categorized results
        for (let category in categorizedResults) {
            if (categorizedResults[category].length > 0) {
                let categoryDiv = `<div class="category">${category}</div><ul>`;
                categorizedResults[category].forEach(place => {
                    categoryDiv += `<li><strong>${place.name}</strong> (Lat: ${place.lat}, Lon: ${place.lon})</li>`;
                });
                categoryDiv += "</ul>";
                resultsDiv.innerHTML += categoryDiv;
            }
        }
    }
  }, 2000); // Replace 2000 with your actual request time or callback
}
// Function to show the loading spinner
function showLoading() {
  document.getElementById('loading-spinner').style.display = 'flex';
}

// Function to hide the loading spinner
function hideLoading() {
  document.getElementById('loading-spinner').style.display = 'none';
}
// JavaScript to handle the comment submission and display
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from reloading the page

  let commentText = document.getElementById("commentInput").value.trim();

  if (commentText) {
      // Create a new comment element
      let newComment = document.createElement("div");
      newComment.textContent = commentText;

      // Append it to the comment list
      document.getElementById("commentList").appendChild(newComment);

      // Clear the input field
      document.getElementById("commentInput").value = "";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  let map = L.map('map').setView([10, 76], 10); // Default center (Kerala)

  // Load OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          // Set map to user location
          map.setView([userLat, userLon], 12);

          // Add user marker
          L.marker([userLat, userLon])
              .addTo(map)
              .bindPopup("You are here")
              .openPopup();

          // Filter and display nearby places
          accessiblePlaces.forEach(place => {
              const distance = getDistance(userLat, userLon, place.lat, place.lon);
              if (distance <= 10) {  // Check if within 10 km
                  L.marker([place.lat, place.lon])
                      .addTo(map)
                      .bindPopup(`<b>${place.name}</b><br>(${place.type})<br>${distance.toFixed(2)} km away`);
              }
          });
      }, () => alert("Geolocation failed."));
  } else {
      alert("Geolocation is not supported by this browser.");
  }
});

// Function to calculate distance using Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
