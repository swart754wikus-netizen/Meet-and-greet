const HOURS: { day: string; hours: string }[] = [
  { day: "Monday", hours: "9 am – 9 pm" },
  { day: "Tuesday", hours: "9 am – 9 pm" },
  { day: "Wednesday", hours: "9 am – 9 pm" },
  { day: "Thursday", hours: "9 am – 9 pm" },
  { day: "Friday", hours: "9 am – 9 pm" },
  { day: "Saturday", hours: "9 am – 9 pm" },
  { day: "Sunday", hours: "9 am – 9 pm" },
];

const MENU_HIGHLIGHTS = [
  { name: "Pizza", tag: "Popular" },
  { name: "Steak with Pepper and Mushroom Sauce", tag: "Popular" },
  { name: "Chicken Salad", tag: "" },
  { name: "Blue Cheese and Fig Pizza", tag: "" },
  { name: "Meat Basket", tag: "" },
  { name: "French Fries", tag: "" },
];

const SERVICES = ["Dine-in", "Takeaway", "Delivery", "Outdoor seating"];

const AMENITY_GROUPS: { title: string; items: string[] }[] = [
  { title: "Highlights", items: ["Great beer selection", "Great cocktails", "Great coffee", "Great dessert", "Great wine list", "Sport"] },
  { title: "Popular for", items: ["Lunch", "Dinner", "Solo dining"] },
  { title: "Offerings", items: ["Alcohol", "Beer", "Cocktails", "Coffee", "Late-night food", "Quick bite", "Small plates", "Spirits", "Vegan options", "Wine"] },
  { title: "Dining options", items: ["Brunch", "Lunch", "Dinner", "Dessert", "Seating", "Table service"] },
  { title: "Amenities", items: ["Toilet", "Wi-Fi", "Free Wi-Fi"] },
  { title: "Atmosphere", items: ["Casual", "Cosy", "Trendy"] },
  { title: "Crowd", items: ["Groups", "Tourists"] },
  { title: "Planning", items: ["Brunch reservations recommended", "Lunch reservations recommended", "Dinner reservations recommended", "Accepts reservations"] },
  { title: "Payments", items: ["Credit cards", "Debit cards", "NFC mobile payments"] },
  { title: "Children", items: ["High chairs", "Kids' menu"] },
  { title: "Parking", items: ["Free of charge street parking", "Free parking lot", "Plenty of parking"] },
];

const REVIEWS = [
  {
    name: "Jess van Putten",
    meta: "Local Guide · 77 reviews · 452 photos",
    when: "11 months ago",
    text: "Fantastic host and hostess, who made us feel at home. The food was delicious particularly the chicken salad. If you're in the area its a great place for a bite.",
  },
  {
    name: "Maite Jostina Modiba",
    meta: "2 reviews · 4 photos",
    when: "4 months ago",
    text: "Nice vibe delicious food… my new favourite spot.",
  },
  {
    name: "Jacques Möller",
    meta: "5 reviews",
    when: "4 months ago",
    text: "This is an amazing and central place to meet up for a good meal and drink with friends or family. The host made special arrangements to have us seated when the restaurant was jam-packed and did not turn us away. Meals are affordable.",
  },
];

const NEARBY = [
  { name: "Monya's Restaurant", rating: "4.2", count: "368", type: "Restaurant" },
  { name: "Magnolia's Catering", rating: "4.5", count: "67", type: "Catering food and drink supplier" },
  { name: "Crawdaddy's Restaurant", rating: "4.1", count: "1,378", type: "Restaurant" },
  { name: "Kwa Khumza Pub & Grill", rating: "4.4", count: "151", type: "Grill" },
  { name: "Safari Pub & Grill", rating: "4.4", count: "449", type: "Restaurant" },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="text-amber-500" aria-hidden="true">
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Hero */}
      <header className="border-b border-black/[.08] bg-white dark:border-white/[.145] dark:bg-black">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 py-10 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Restaurant
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            The Meet and Greet Tzaneen
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1 font-medium text-black dark:text-zinc-50">
              <Stars rating={4.6} /> 4.6
            </span>
            <span>(493 reviews)</span>
            <span aria-hidden="true">·</span>
            <span>R 200–300 per person</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {SERVICES.map((service) => (
              <span
                key={service}
                className="rounded-full border border-black/[.08] px-3 py-1 text-sm text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-10 sm:px-10">
        {/* Overview */}
        <section className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
              Location & contact
            </h2>
            <dl className="flex flex-col gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <div>
                <dt className="font-medium text-black dark:text-zinc-50">Address</dt>
                <dd>11 Peace St, Arbor Park, Tzaneen, 0850</dd>
              </div>
              <div>
                <dt className="font-medium text-black dark:text-zinc-50">Hours</dt>
                <dd>Open · Closes 9 pm</dd>
              </div>
              <div>
                <dt className="font-medium text-black dark:text-zinc-50">Phone</dt>
                <dd>
                  <a className="underline hover:no-underline" href="tel:0795004181">
                    079 500 4181
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-black dark:text-zinc-50">Plus code</dt>
                <dd>5584+PC Tzaneen</dd>
              </div>
              <div>
                <dt className="font-medium text-black dark:text-zinc-50">Facebook</dt>
                <dd>
                  <a
                    className="underline hover:no-underline"
                    href="https://m.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    m.facebook.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
              Opening hours
            </h2>
            <table className="text-sm text-zinc-700 dark:text-zinc-300">
              <tbody>
                {HOURS.map(({ day, hours }) => (
                  <tr key={day} className="border-b border-black/[.05] last:border-0 dark:border-white/[.08]">
                    <td className="py-1.5 pr-6 font-medium text-black dark:text-zinc-50">
                      {day}
                    </td>
                    <td className="py-1.5">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Menu */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Menu highlights
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {MENU_HIGHLIGHTS.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between rounded-lg border border-black/[.08] bg-white px-4 py-3 text-sm dark:border-white/[.145] dark:bg-zinc-950"
              >
                <span className="text-black dark:text-zinc-50">{item.name}</span>
                {item.tag && (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                    {item.tag}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Amenities & info */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Service options & amenities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {AMENITY_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-2 text-sm font-semibold text-black dark:text-zinc-50">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
              Reviews
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              4.6 average · 493 reviews
            </span>
          </div>
          <ul className="flex flex-col gap-4">
            {REVIEWS.map((review) => (
              <li
                key={review.name}
                className="rounded-lg border border-black/[.08] bg-white p-4 dark:border-white/[.145] dark:bg-zinc-950"
              >
                <div className="flex items-baseline justify-between">
                  <p className="font-medium text-black dark:text-zinc-50">
                    {review.name}
                  </p>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {review.when}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {review.meta}
                </p>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {review.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Nearby */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            People also search for
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {NEARBY.map((place) => (
              <li
                key={place.name}
                className="rounded-lg border border-black/[.08] bg-white p-4 dark:border-white/[.145] dark:bg-zinc-950"
              >
                <p className="font-medium text-black dark:text-zinc-50">
                  {place.name}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {place.rating} ({place.count}) · {place.type}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-black/[.08] py-6 text-center text-sm text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
        The Meet and Greet Tzaneen · 11 Peace St, Arbor Park, Tzaneen, 0850
      </footer>
    </div>
  );
}
