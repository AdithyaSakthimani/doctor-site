
# 📖 Quotes Carousel Component

A visually engaging **React** component that displays inspirational mental-health-related quotes in a carousel format. Supports **auto-play**, **manual navigation**, and is styled using **Tailwind CSS** with iconography from `lucide-react`.

---

## 🚀 Features

- ✅ Auto-advancing quotes every 6 seconds (auto-play)
- ✅ Manual navigation using left/right arrow buttons
- ✅ Quote indicators for quick navigation
- ✅ Play/pause toggle for auto-play
- ✅ Responsive and accessible design
- ✅ Clean aesthetic using Tailwind CSS
- ✅ Uses modern `lucide-react` icons

---

## 📂 File Structure

```

src/
├── components/
│   └── QuotesComponent.jsx
├── styles/
│   └── Quote.css
├── App.jsx
└── index.js

```

---

## 🧑‍💻 Installation

1. **Clone the repo**
```

git clone [https://github.com/your-username/quotes-carousel.git](https://github.com/your-username/quotes-carousel.git)
cd quotes-carousel

```

2. **Install dependencies**
```

npm install

```

3. **Run the app**
```

npm start

````

---

## 🛠 Dependencies

- **React**
- **Tailwind CSS**
- **lucide-react**
- **eslint** (with Flat config + Next.js rules)

---

## ⚙️ ESLint Config

If you use ESLint, this project uses the `next/core-web-vitals` base config with a disabled rule for `react/no-unescaped-entities`:

```js
// eslint.config.js
{
  rules: {
    "react/no-unescaped-entities": "off"
  }
}
````

This prevents build errors due to unescaped `'` and `"` characters in quotes.

---

## 📸 Preview

> “You don’t have to be perfect. You just have to be brave enough to be yourself.” – Anonymous

---

## 🧠 Inspiration

This project is inspired by mental health therapy apps and https://www.drjenniferhahm.com/ website, aiming to deliver calming and encouraging thoughts in a minimal UI format.

---

