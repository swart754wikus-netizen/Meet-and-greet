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
  {
    name: "Pizza",
    tag: "Popular",
    desc: "Wood-fired, loaded with your favourite toppings.",
  },
  {
    name: "Steak with Pepper & Mushroom Sauce",
    tag: "Popular",
    desc: "Char-grilled to order, smothered in a rich pan sauce.",
  },
  {
    name: "Chicken Salad",
    tag: "",
    desc: "Fresh, light and a firm local favourite.",
  },
  {
    name: "Blue Cheese & Fig Pizza",
    tag: "",
    desc: "Sweet fig jam and tangy blue cheese on a crisp base.",
  },
  {
    name: "Meat Basket",
    tag: "",
    desc: "A shareable spread for the table.",
  },
  {
    name: "French Fries",
    tag: "",
    desc: "Golden, crispy, the perfect side or bar snack.",
  },
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
    meta: "Local Guide · 77 reviews",
    when: "11 months ago",
    text: "Fantastic host and hostess, who made us feel at home. The food was delicious particularly the chicken salad. If you're in the area its a great place for a bite.",
  },
  {
    name: "Maite Jostina Modiba",
    meta: "2 reviews",
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

const NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
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

function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#7c2d12] font-[family-name:var(--font-display)] text-lg font-bold text-[#fef3c7] ${className}`}
    >
      M&amp;G
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#fdf8f0] font-sans dark:bg-[#1a120b]">
      {/* Nav */}
      <nav className="sticky top-0 z-10 border-b border-[#7c2d12]/10 bg-[#fdf8f0]/90 backdrop-blur dark:border-[#f5e9d8]/10 dark:bg-[#1a120b]/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 sm:px-10">
          <a href="#top" className="flex items-center gap-3">
            <Logo />
            <span className="hidden font-[family-name:var(--font-display)] text-lg font-semibold text-[#2a1a12] dark:text-[#f5e9d8] sm:inline">
              Meet and Greet
            </span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-[#5c3a24] dark:text-[#e7d3b8]">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#7c2d12] dark:hover:text-[#f5e9d8]">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="tel:0795004181"
            className="rounded-full bg-[#7c2d12] px-4 py-2 text-sm font-semibold text-[#fef3c7] transition-colors hover:bg-[#5c220d]"
          >
            Call to book
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative overflow-hidden bg-[#2a1a12] text-[#fdf8f0]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #d97706 0, transparent 45%), radial-gradient(circle at 80% 0%, #7c2d12 0, transparent 50%)",
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:px-10 sm:py-32">
          <span className="rounded-full border border-[#fdf8f0]/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#f5c88a]">
            Arbor Park · Tzaneen
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight sm:text-6xl">
            The Meet and Greet
          </h1>
          <p className="max-w-xl text-lg text-[#f0dfc6]">
            A warm, welcoming table in the heart of Tzaneen — good food, cold
            drinks, and a place worth gathering around.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-[#f0dfc6]">
            <span className="flex items-center gap-1 font-semibold text-[#fdf8f0]">
              <Stars rating={4.6} /> 4.6
            </span>
            <span>(493 reviews)</span>
            <span aria-hidden="true">·</span>
            <span>R 200–300 per person</span>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#menu"
              className="rounded-full bg-[#f5c88a] px-6 py-3 text-sm font-semibold text-[#2a1a12] transition-colors hover:bg-[#eab465]"
            >
              View the menu
            </a>
            <a
              href="#visit"
              className="rounded-full border border-[#fdf8f0]/40 px-6 py-3 text-sm font-semibold text-[#fdf8f0] transition-colors hover:bg-[#fdf8f0]/10"
            >
              Find us
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-20 sm:px-10">
        {/* Services strip */}
        <section className="relative z-10 -mt-32 flex flex-wrap justify-center gap-4 rounded-2xl border border-[#7c2d12]/10 bg-white p-6 shadow-lg shadow-[#2a1a12]/10 dark:border-[#f5e9d8]/10 dark:bg-[#2a1a12] sm:justify-between">
          {SERVICES.map((service) => (
            <span
              key={service}
              className="rounded-full bg-[#fdf1de] px-4 py-2 text-sm font-medium text-[#7c2d12] dark:bg-[#3a281b] dark:text-[#f5c88a]"
            >
              {service}
            </span>
          ))}
        </section>

        {/* Menu */}
        <section id="menu" className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#a8602f]">
              On the table
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#2a1a12] dark:text-[#f5e9d8] sm:text-4xl">
              Menu highlights
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENU_HIGHLIGHTS.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-2 rounded-2xl border border-[#7c2d12]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-[#f5e9d8]/10 dark:bg-[#2a1a12]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#2a1a12] dark:text-[#f5e9d8]">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span className="flex-shrink-0 rounded-full bg-[#fdf1de] px-2 py-0.5 text-xs font-semibold text-[#a8602f] dark:bg-[#3a281b] dark:text-[#f5c88a]">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#6b4a34] dark:text-[#d8c3ab]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About / amenities */}
        <section id="about" className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#a8602f]">
              What to expect
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#2a1a12] dark:text-[#f5e9d8] sm:text-4xl">
              A relaxed spot for every occasion
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-6 rounded-2xl border border-[#7c2d12]/10 bg-white p-8 dark:border-[#f5e9d8]/10 dark:bg-[#2a1a12] sm:grid-cols-2 lg:grid-cols-3">
            {AMENITY_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[#a8602f]">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-1 text-sm text-[#6b4a34] dark:text-[#d8c3ab]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#a8602f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#a8602f]">
              What people say
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#2a1a12] dark:text-[#f5e9d8] sm:text-4xl">
              4.6 stars from 493 reviews
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {REVIEWS.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col gap-4 rounded-2xl border border-[#7c2d12]/10 bg-white p-6 dark:border-[#f5e9d8]/10 dark:bg-[#2a1a12]"
              >
                <Stars rating={5} />
                <blockquote className="flex-1 text-sm text-[#6b4a34] dark:text-[#d8c3ab]">
                  “{review.text}”
                </blockquote>
                <figcaption>
                  <p className="font-semibold text-[#2a1a12] dark:text-[#f5e9d8]">
                    {review.name}
                  </p>
                  <p className="text-xs text-[#a8602f]">
                    {review.meta} · {review.when}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Visit */}
        <section
          id="visit"
          className="grid gap-10 rounded-2xl bg-[#2a1a12] p-8 text-[#fdf8f0] sm:grid-cols-2 sm:p-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f5c88a]">
              Come say hello
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
              Visit us
            </h2>
            <dl className="flex flex-col gap-3 text-sm text-[#f0dfc6]">
              <div>
                <dt className="font-semibold text-[#fdf8f0]">Address</dt>
                <dd>11 Peace St, Arbor Park, Tzaneen, 0850</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#fdf8f0]">Hours</dt>
                <dd>Open daily · Closes 9 pm</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#fdf8f0]">Phone</dt>
                <dd>
                  <a className="underline hover:no-underline" href="tel:0795004181">
                    079 500 4181
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[#fdf8f0]">Facebook</dt>
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
          <div>
            <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold">
              Opening hours
            </h3>
            <table className="w-full text-sm text-[#f0dfc6]">
              <tbody>
                {HOURS.map(({ day, hours }) => (
                  <tr key={day} className="border-b border-[#fdf8f0]/10 last:border-0">
                    <td className="py-2 pr-6 font-medium text-[#fdf8f0]">
                      {day}
                    </td>
                    <td className="py-2">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#7c2d12]/10 py-8 text-center text-sm text-[#6b4a34] dark:border-[#f5e9d8]/10 dark:text-[#d8c3ab]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6">
          <Logo />
          <p>The Meet and Greet · 11 Peace St, Arbor Park, Tzaneen, 0850</p>
        </div>
      </footer>
    </div>
  );
}
