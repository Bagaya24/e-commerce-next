import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
    price: "130.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx3mq0z0qh/AIR+MAX+90.png",
    category: "Shoes",
    stock: 25,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07. This basketball original puts a fresh spin on what you know best.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a3d88eeb9a44/AIR+FORCE+1+%2707.png",
    category: "Shoes",
    stock: 40,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, this '80s basketball icon returns with classic details and throwback hoops flair.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d12b2b0-4653-4232-8560-8a563190c92d/DUNK+LOW+RETRO.png",
    category: "Shoes",
    stock: 30,
  },
  {
    name: "Nike Sportswear Tech Fleece Joggers",
    description:
      "Slim-through-the-leg joggers with a tapered design for a sleek, modern look. Made with lightweight Nike Tech Fleece fabric.",
    price: "110.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/v4qx2oequlf7pjuukmrm/M+NK+TCH+FLC+JGGR.png",
    category: "Clothing",
    stock: 50,
  },
  {
    name: "Nike Club Fleece Hoodie",
    description:
      "The Nike Club Fleece Pullover Hoodie combines classic style with the soft comfort of fleece for an elevated everyday look.",
    price: "65.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/m4hkuotexfndeumblpwf/M+NK+CLUB+BB+PO+HOODIE.png",
    category: "Clothing",
    stock: 60,
  },
  {
    name: "Nike Air Max 270",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Air Max 270. The design draws inspiration from Air Max icons.",
    price: "160.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awqjpue7v0erblkfkpgo/AIR+MAX+270.png",
    category: "Shoes",
    stock: 20,
  },
  {
    name: "Nike Brasilia 9.5 Backpack",
    description:
      "Hit the road or head to class with the Nike Brasilia Backpack. Durable and roomy, it features multiple zippered pockets for organized storage.",
    price: "45.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e9648d5-4122-4539-85f5-9228894ecae1/NK+BRSLA+M+BKPK+-+9.5+%2824L%29.png",
    category: "Accessories",
    stock: 35,
  },
  {
    name: "Nike Pro Dri-FIT T-Shirt",
    description:
      "The Nike Pro Dri-FIT T-Shirt delivers a snug, supportive feel with sweat-wicking performance technology for your toughest workouts.",
    price: "35.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/81ef0839-7d05-436a-b602-af3888225e32/M+NP+DF+TIGHT+TOP+SS.png",
    category: "Clothing",
    stock: 45,
  },
];

async function seed() {
  console.log("Seeding database with Nike products...");
  await db.insert(products).values(nikeProducts);
  console.log(`Inserted ${nikeProducts.length} Nike products.`);
}

seed()
  .then(() => {
    console.log("Seeding complete!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  });
