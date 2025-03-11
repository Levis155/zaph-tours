import parisImg from '../assets/paris.jpg'
import santoriniImg from '../assets/santorini.jpg'
import kyotoImg from "../assets/kyoto.jpg"
import serengetiImg from "../assets/serengeti.jpg"
import banffImg from "../assets/banff.jpg"
import machuPicchuImg from "../assets/machupichu.jpg"
import icelandImg from "../assets/iceland.jpg"
import veniceImg from "../assets/venice.jpg"
import maldivesImg from "../assets/maldives.jpg"
import newyorkImg from "../assets/newyork.jpg"
import capetownImg from "../assets/capetown.jpg"
import alpsImg from "../assets/alps.jpg"
import mtkenyaImg from "../assets/mtkenya.jpg"
import mtrwenzoriImg from "../assets/mtrwenzori.jpg"
import lakenakuruImg from "../assets/lakenakuru.jpg"
import tsavoImg from "../assets/tsavo.jpg"
import nairobiImg from "../assets/nairobinatpark.jpg"
import coastkenyaImg from "../assets/coastkenya.jpg"

const destinationsData = [
    {
      name: "Paris, france",
      img: parisImg,
      tagline: "Explore the City of Lights",
      excerpt: "Paris is a timeless destination where romance, art, and history come alive. Stroll along the Seine, marvel at the Eiffel Tower, and explore world-class museums like the Louvre. From charming cafés to iconic landmarks, Paris offers an unforgettable experience for every traveler.",
      priceGroup: "$1,200",
      priceIndividual: "$350"
    },
    {
      name: "Santorini, Greece",
      img: santoriniImg,
      tagline: "Discover the Jewel of the Aegean",
      excerpt: "Santorini is a postcard-perfect destination with its whitewashed buildings, blue-domed churches, and stunning sunsets. Relax on black sand beaches, explore ancient ruins, or savor fresh seafood by the sea. This Greek island is a dream come true for lovers of beauty and tranquility.",
      priceGroup: "$1,500",
      priceIndividual: "$400"
    },
    {
      name: "Kyoto, Japan",
      img: kyotoImg,
      tagline: "Step into Timeless Tradition",
      excerpt: "Kyoto is the heart of Japan's cultural heritage, offering a blend of ancient temples, serene Zen gardens, and traditional tea houses. Walk through the iconic Fushimi Inari Shrine, witness geisha performances in Gion, and experience the beauty of cherry blossoms in spring.",
      priceGroup: "$1,800",
      priceIndividual: "$450"
    },
    {
      name: "Serengeti National Park, Tanzania",
      img: serengetiImg,
      tagline: "Witness the Wild Heart of Africa",
      excerpt: "The Serengeti is synonymous with wildlife adventure. Experience the thrill of the Great Migration, where millions of wildebeest and zebras traverse the plains. With lions, elephants, and cheetahs roaming freely, this UNESCO World Heritage Site is a safari lover's paradise.",
      priceGroup: "$2,500",
      priceIndividual: "$700"
    },
    {
      name: "Banff National Park, Canada",
      img: banffImg,
      tagline: "Adventure in the Canadian Rockies",
      excerpt: "Banff National Park is a haven for outdoor enthusiasts, offering turquoise lakes, snow-capped peaks, and endless hiking trails. Explore Lake Louise, soak in the Banff Hot Springs, or spot wildlife like elk and grizzly bears in this breathtaking alpine wonderland.",
      priceGroup: "$1,600",
      priceIndividual: "$400"
    },
    {
      name: "Machu Picchu, Peru",
      img: machuPicchuImg,
      tagline: "Uncover the Lost City of the Incas",
      excerpt: "Machu Picchu is one of the world's most iconic archaeological sites, nestled high in the Andes Mountains. Hike the Inca Trail, explore ancient ruins, and marvel at the engineering marvels of the Inca civilization. This UNESCO World Heritage Site is a bucket-list destination.",
      priceGroup: "$1,700",
      priceIndividual: "$450"
    },
    {
      name: "Iceland",
      img: icelandImg,
      tagline: "Land of Fire and Ice",
      excerpt: "Iceland is a land of contrasts, where glaciers meet volcanoes and geothermal hot springs dot the landscape. Explore the Golden Circle, chase the Northern Lights, or relax in the Blue Lagoon. Iceland's dramatic scenery and unique experiences make it a must-visit destination.",
      priceGroup: "$2,000",
      priceIndividual: "$550"
    },
    {
      name: "venice, italy",
      img: veniceImg,
      tagline: "Glide Through the Floating City",
      excerpt: "Venice is a city like no other, with its winding canals, historic bridges, and Renaissance architecture. Take a gondola ride through the Grand Canal, visit St. Mark's Basilica, and lose yourself in the charm of this romantic Italian city.",
      priceGroup: "$1,300",
      priceIndividual: "$350"
    },
    {
      name: "Maldives",
      img: maldivesImg,
      tagline: "Dive into Paradise",
      excerpt: "The Maldives is the epitome of luxury and relaxation, with its overwater bungalows, coral reefs, and turquoise waters. Snorkel with manta rays, enjoy a private beach dinner, or simply unwind in this tropical paradise. It's the perfect escape for honeymooners and beach lovers.",
      priceGroup: "$2,200",
      priceIndividual: "$600"
    },
    {
      name: "New York City, USA",
      img: newyorkImg,
      tagline: "Experience the City That Never Sleeps",
      excerpt: "New York City is a vibrant metropolis filled with iconic landmarks, world-class museums, and endless entertainment. Visit Times Square, stroll through Central Park, and catch a Broadway show. From the Statue of Liberty to the Empire State Building, NYC has something for everyone.",
      priceGroup: "$1,500",
      priceIndividual: "$400"
    },
    {
      name: "Cape Town, South Africa",
      img: capetownImg,
      tagline: "Where Mountains Meet the Sea",
      excerpt: "Cape Town is a stunning destination with Table Mountain, pristine beaches, and vibrant culture. Explore the Cape Winelands, visit Robben Island, or take a cable car to the top of Table Mountain for panoramic views. Cape Town is a feast for the senses.",
      priceGroup: "$1,800",
      priceIndividual: "$480"
    },
    {
      name: "Swiss Alps, Switzerland",
      img: alpsImg,
      tagline: "Conquer the Peaks",
      excerpt: "The Swiss Alps are a playground for outdoor enthusiasts, offering skiing, hiking, and breathtaking alpine views. Visit charming villages like Zermatt, ride the Glacier Express, or hike through the Lauterbrunnen Valley. The Swiss Alps are a year-round destination for adventure.",
      priceGroup: "$2,100",
      priceIndividual: "$550"
    },
    {
      name: "Mt. Kenya, Kenya",
      img: mtkenyaImg,
      tagline: "Conquer Africa's Second Highest Peak",
      excerpt: "Mt. Kenya offers an unforgettable trekking experience through diverse ecosystems, from dense bamboo forests to alpine meadows and glacial peaks. Whether you're a seasoned climber or a nature enthusiast, this UNESCO World Heritage Site promises breathtaking views and unique wildlife sightings.",
      priceGroup: "$1,200",
      priceIndividual: "$300"
    },
    {
      name: "Mt. Ruwenzori, Uganda",
      img: mtrwenzoriImg,
      tagline: "Hike the Mountains of the Moon",
      excerpt: "Mt. Ruwenzori, also known as the 'Mountains of the Moon,' is a hiker's paradise with its misty peaks, rare vegetation, and stunning alpine scenery. The challenging trails lead you through lush rainforests, giant lobelias, and glacial valleys, offering a truly magical adventure.",
      priceGroup: "$1,400",
      priceIndividual: "$350"
    },
    {
      name: "Lake Nakuru, Kenya",
      img: lakenakuruImg,
      tagline: "Witness the Flamingo Paradise",
      excerpt: "Famous for its flocks of pink flamingos, Lake Nakuru is a birdwatcher's dream. The park is also home to rhinos, lions, and giraffes, set against the stunning backdrop of the lake and surrounding escarpments. A visit here promises unforgettable wildlife encounters and scenic beauty.",
      priceGroup: "$900",
      priceIndividual: "$250"
    },
    {
      name: "Tsavo National Park, Kenya",
      img: tsavoImg,
      tagline: "Explore Kenya's Largest Wilderness",
      excerpt: "Tsavo National Park, one of the largest parks in the world, is a land of dramatic landscapes, from the red soil of the Yatta Plateau to the lush greenery along the Galana River. Known for its 'Red Elephants,' lions, and diverse wildlife, Tsavo offers an authentic safari experience in a vast, untamed setting.",
      priceGroup: "$1,100",
      priceIndividual: "$280"
    },
    {
      name: "Nairobi National Park, Kenya",
      img: nairobiImg,
      tagline: "Wildlife at the City's Doorstep",
      excerpt: "Nairobi National Park is a unique gem where wildlife roams against the backdrop of a bustling city skyline. Just a short drive from Nairobi, this park is home to lions, giraffes, zebras, and rhinos. It's the perfect destination for a quick safari or a day trip filled with adventure.",
      priceGroup: "$800",
      priceIndividual: "$200"
    },
    {
      name: "Coastal Kenya (Diani, Watamu, Lamu)",
      img: coastkenyaImg,
      tagline: "Relax on Kenya's Pristine Shores",
      excerpt: "Coastal Kenya is a tropical paradise with white sandy beaches, crystal-clear waters, and rich Swahili culture. Whether you're diving in Watamu's coral reefs, exploring Lamu's ancient streets, or lounging on Diani Beach, this region offers the perfect blend of relaxation and cultural exploration.",
      priceGroup: "$1,300",
      priceIndividual: "$350"
    }
  ];

export default destinationsData