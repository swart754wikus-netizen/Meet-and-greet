export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
};

export type MenuCategory = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    title: "Starters",
    items: [
      { name: "Chicken Livers", price: "R79", desc: "With bacon bits, Peri-Peri or mild or plain. Served with pap or pizza bread." },
      { name: "Crumbed Pork Rashers", price: "R98", desc: "With honey mustard sauce." },
      { name: "Cheesy Focaccia", price: "R69", desc: "With olive oil, garlic & mozzarella cheese." },
      { name: "Garlic Snails", price: "R109", desc: "Creamy garlic sauce served with pizza bread." },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Greek Salad", price: "R89", desc: "Lettuce, tomatoes, peppers, onion, olives, cucumber, peppadew and feta." },
      { name: "Shrimp Salad", price: "R119", desc: "Lemon & herb or spicy. Rocket, lettuce, tomatoes, cucumber, avo, pineapple, feta & shrimp." },
      { name: "Smoked Salmon", price: "R129", desc: "Lettuce, tomatoes, peppers, onion, olives, cucumber, peppadew and feta." },
      { name: "Sweet Chilli Chicken", price: "R109", desc: "Lettuce, tomatoes, peppers, onion, olives, cucumber, peppadew, feta, cashew nuts & chicken." },
    ],
  },
  {
    title: "Pasta",
    note: "All served with pasta penne",
    items: [
      { name: "Chicken Mushroom", price: "R125", desc: "Chicken strips, mushrooms, onions & mixed peppers in a rich creamy white sauce." },
      { name: "Biltong Pasta", price: "R130", desc: "Biltong, mushrooms, onions & mixed peppers in a rich creamy white sauce." },
      { name: "Alfredo", price: "R120", desc: "Crispy bacon, ham, mushrooms & parmesan cheese in a rich creamy white sauce." },
      { name: "Black Pepper Fillet Pasta", price: "R135", desc: "150g fillet with spring onions, black pepper and diced peppers in a rich creamy sauce." },
      { name: "Something Meaty", price: "R135", desc: "Crispy bacon, russian, salami, onions & mixed peppers in a rich creamy red sauce." },
      { name: "Chicken & Broccoli", price: "R125", desc: "Chicken strips & broccoli in a creamy white sauce." },
      { name: "Spaghetti Bolognese", price: "R99", desc: "Fried beef mince in a tomato based sauce served with spaghetti." },
    ],
  },
  {
    title: "Pizzas",
    note: "32 cm",
    items: [
      { name: "Regina", price: "R120", desc: "Ham & mushroom." },
      { name: "Margherita", price: "R110", desc: "Mozzarella cheese and Neapolitan sauce." },
      { name: "Caprese", price: "R115", desc: "Ham & cheese." },
      { name: "Bacon & Cheese", price: "R130" },
      { name: "Garlic Snail", price: "R165" },
      { name: "Hawaiian", price: "R125", desc: "Ham & pineapple." },
      { name: "Chicken Mayo", price: "R130", desc: "Chicken mayonnaise." },
      { name: "Mexicana", price: "R155", desc: "Mince, onion, mixed pepper, tomato & jalapeños (chilli on the side)." },
      { name: "Chicken Mushroom", price: "R148", desc: "Sweet chilli chicken & mushroom." },
      { name: "Perfeto", price: "R160", desc: "Salami, ham, mushrooms, olives, garlic onion & avo." },
      { name: "Miami", price: "R150", desc: "Bacon, avo & feta." },
      { name: "Duo", price: "R165" },
      { name: "Mystic", price: "R150", desc: "Salami, bacon, peppadew topped with cheddar cheese." },
      { name: "Blue Cheese", price: "R155", desc: "Bacon, blue cheese, fig jam & rocket." },
      { name: "Carnivores", price: "R165", desc: "Ham, salami, bacon, russian & feta." },
      { name: "Biltong", price: "R160", desc: "Biltong, feta & avo. Mrs Balls chutney optional." },
      { name: "Pollo", price: "R153", desc: "Sweet chilli chicken strips, avo & feta cheese." },
      { name: "Siciliana", price: "R155", desc: "Anchovies, olives, capers & mushrooms." },
      { name: "Vegetarian", price: "R135", desc: "Mushrooms, olives, peppadew, feta & 3 peppers." },
      { name: "Supreme", price: "R155", desc: "Mushrooms, olives, peppadew, feta, 3 peppers and crispy bacon." },
      { name: "Chicken Liver", price: "R150", desc: "Peri-Peri, mild or plain." },
      { name: "Three Cheese", price: "R135", desc: "Garlic flatbread topped with mozzarella, cheddar and feta cheese." },
    ],
  },
  {
    title: "Grills",
    note: "Served with 1 choice of sides — chips & salad, pap & sheba, or 2 vegetables",
    items: [
      { name: "300g Rump Steak", price: "R185" },
      { name: "500g T-Bone", price: "R215" },
      { name: "220g Fillet with any sauce", price: "R189" },
      { name: "2 x Lamb Chops (200g each)", price: "R245" },
      { name: "1 kg Pork Spare Ribs", price: "R295" },
      { name: "Cheesy Jalapeno Steak", price: "R198", desc: "300g rump, cheese sauce, jalapeno with melted mozzarella." },
      { name: "Black Pepper Mushroom Steak", price: "R198", desc: "300g rump, topped with black pepper and mushroom sauce." },
      { name: "Steak, Egg and Chips", price: "R195", desc: "300g rump, with fried egg and chips." },
      { name: "Chuck", price: "R189", desc: "400g chuck." },
      { name: "Crumbed Pork Chops", price: "R149", desc: "300g with 2 vegetables." },
      { name: "Short Ribs", price: "R105", desc: "200g with pap & sheba sauce." },
      { name: "Pork Rashers", price: "R105", desc: "200g with pap & sheba sauce." },
    ],
  },
  {
    title: "Combo Grills",
    items: [
      { name: "Pork Rashers, Short Rib & Wors", price: "R210", desc: "Served with pap & sheba or veggies." },
      { name: "500g T-Bone and Chicken Wings", price: "R298", desc: "Served with pap & sheba or veggies." },
      { name: "Chuck & Chicken Wings", price: "R275", desc: "400g chuck & 4 full chicken wings with pap & sheba or chips & salad." },
      { name: "Chuck & Wors", price: "R229", desc: "400g chuck & wors with pap & sheba or chips & salad." },
      { name: "Pork Spare Ribs & Wings", price: "R265", desc: "600g spare ribs & chicken wings with pap & sheba or chips." },
      { name: "Sauces", price: "R28", desc: "Cheesy garlic / mushroom / cheese black pepper / sweet chilli / peri-peri / cheesy jalapeno." },
    ],
  },
  {
    title: "Baskets",
    items: [
      { name: "Meat Basket", price: "R189", desc: "Short rib & russian & pork rasher, chips & pizza flat bread with cheese sauce." },
      { name: "Grilled Short Rib", price: "R69", desc: "Build your own basket." },
      { name: "Pork Rashers", price: "R69", desc: "Build your own basket." },
      { name: "Jalapeno Cheddar Bites", price: "R82", desc: "Build your own basket." },
      { name: "Russian", price: "R28", desc: "Build your own basket." },
      { name: "Chips", price: "R30", desc: "Build your own basket." },
      { name: "Boerewors", price: "R55", desc: "Build your own basket." },
      { name: "Spicy Chicken Wings", price: "R85", desc: "Build your own basket." },
      { name: "Sauces", price: "R28", desc: "Tartar / sweet chilli / cheese." },
    ],
  },
  {
    title: "Kiddies",
    items: [
      { name: "Russian & Chips", price: "R58" },
      { name: "Plate of Chips", price: "R79" },
      { name: "Chicken Strips & Chips", price: "R75" },
    ],
  },
  {
    title: "Burgers",
    note: "All burgers (250g beef patty) are served with chips",
    items: [
      { name: "Beef Burger", price: "R120", desc: "Beef patty with tomato, lettuce and red onion." },
      { name: "Cheese Burger", price: "R135", desc: "Beef patty with cheese sauce, tomato, lettuce and red onion." },
      { name: "Cheese Jalapeno Burger", price: "R135", desc: "Beef patty with chopped jalapenos and cheese sauce, tomato, lettuce and red onion." },
      { name: "Mushroom Burger", price: "R135", desc: "Beef patty with creamy mushroom sauce, tomato, lettuce and red onion." },
    ],
  },
  {
    title: "On Plates",
    items: [
      { name: "Chicken Schnitzel", price: "R139", desc: "With chips or salad and creamy white sauce, with peppadew on top." },
      { name: "Chicken Livers", price: "R119", desc: "With bacon bits, Peri-Peri or plain, served with pap or pizza bread." },
      { name: "Chicken Breast", price: "R135", desc: "Honey mustard or BBQ sauce. Grilled, served with stir-fry or 2 veggies." },
      { name: "Hake with Tartar Sauce", price: "R129", desc: "Served with 1 choice of sides — chips & salad or 2 vegetables." },
      { name: "Seafood Jollof", price: "R186", desc: "Hake on savoury rice topped with seafood mix in creamy garlic sauce and lemon." },
      { name: "Sauces", price: "R28", desc: "Cheesy garlic / mushroom / cheese black pepper / sweet chilli / peri-peri cheesy jalapeno." },
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: "Chocolate Brownie", price: "R72", desc: "With nuts, served with ice cream or cream." },
      { name: "Ice Cream", price: "R30" },
    ],
  },
  {
    title: "Milkshakes",
    items: [
      { name: "Kiddies", price: "R49" },
      { name: "Large", price: "R55" },
      { name: "Flavours", price: "", desc: "Bubble-gum, strawberry, chocolate, banana, lime, vanilla, cookies & cream." },
    ],
  },
  {
    title: "Wine",
    items: [
      { name: "KWV Merlot", price: "R220", desc: "Red · bottle." },
      { name: "Van Loveren African Java Pinotage", price: "R220", desc: "Red · bottle." },
      { name: "Roodeberg Black", price: "R395", desc: "Red · bottle · owner's private stock." },
      { name: "My Best Friends Red", price: "R215", desc: "Red · bottle · when available." },
      { name: "The Old Man's Blend Cabernet Sauvignon", price: "R260", desc: "Red · bottle." },
      { name: "KWV Sauvignon Blanc", price: "R218", desc: "White · bottle." },
      { name: "Jakkalsvlei White / Pienk Moscato", price: "R235", desc: "White · bottle." },
      { name: "Vondeling Chenin Blanc", price: "R260", desc: "White · bottle." },
      { name: "Durbanville Hills Sauvignon Blanc", price: "R218", desc: "White · bottle." },
      { name: "Bonne Esperance Dry Red (KWV)", price: "R39", desc: "Per glass." },
      { name: "Overmeer Sweet Rosé", price: "R39", desc: "Per glass." },
      { name: "Annabelle Cuvée Rosé Sparkling Wine", price: "R239", desc: "Champagne." },
    ],
  },
  {
    title: "Aperitifs & Beer",
    note: "Add whiskey or any liqueur of your choice",
    items: [
      { name: "Dom Pedro", price: "R59" },
      { name: "Irish Coffee", price: "R59" },
      { name: "Castle Lite", price: "", desc: "Draught, when available." },
      { name: "Stella Artois", price: "", desc: "Draught, when available." },
      { name: "Blueberry Gin", price: "" },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Soda Drinks", price: "", desc: "Coke / Coke Light / Coke Zero, Sprite / Sprite Zero, Sparberry / Cream Soda, Soda Water / Lemonade, Ginger Ale / Dry Lemon, Pink Tonic / Tonic Water, Appletiser / Grapetiser, Still / Sparkling Water, Orange Juice / Lipton Ice Tea, Red Bull." },
    ],
  },
  {
    title: "Hot Drinks",
    items: [
      { name: "Instant Coffee", price: "R28" },
      { name: "Cappuccino", price: "R35", desc: "Nescafé instant sachet." },
      { name: "Hot Chocolate", price: "R35" },
      { name: "Amarula Hot Chocolate", price: "R42" },
      { name: "Milo", price: "R35" },
      { name: "Add Cream", price: "R13" },
    ],
  },
];
