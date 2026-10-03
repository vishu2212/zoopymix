export type Dish = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
};

export const dishes: Dish[] = [
  { slug: "chole", name: "Chole", eyebrow: "Chickpea classic", description: "A dish-specific blend for rich, comforting chole." },
  { slug: "rajma", name: "Rajma", eyebrow: "Slow-cooked comfort", description: "A dedicated blend for everyday rajma." },
  { slug: "paneer", name: "Paneer", eyebrow: "Paneer favourites", description: "A focused spice blend for paneer dishes." },
  { slug: "dal-tadka", name: "Dal Tadka", eyebrow: "Everyday staple", description: "A dedicated blend for a familiar dal tadka." },
  { slug: "aloo-sabzi", name: "Aloo Sabzi", eyebrow: "Weekday comfort", description: "A simple blend for everyday aloo sabzi." },
  { slug: "biryani", name: "Biryani", eyebrow: "Rice, elevated", description: "A dish-specific blend for biryani." },
];
