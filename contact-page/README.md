# Contact Landing Page — Next.js

דף נחיתה של צור קשר בנוי עם Next.js, React, Tailwind CSS.
נתוני הטופס נשלחים ל-Airtable דרך Server Action מאובטח.

## טכנולוגיות

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Airtable REST API

## התקנה והרצה

### 1. שכפל את הפרויקט

    git clone <your-repo-url>
    cd contact-page-next

### 2. התקן תלויות

    npm install

### 3. הגדר משתני סביבה

צור קובץ `.env.local` בתיקיית הבסיס:

    AIRTABLE_API_KEY=your_api_key_here
    AIRTABLE_BASE_ID=your_base_id_here

### 4. הרץ לוקלית

    npm run dev

פתח את http://localhost:3000

### 5. בנה לפרודקשן

    npm run build
    npm run start

## מבנה הפרויקט

    app/
    ├── actions.js          ← Server Action — קריאה ל-Airtable
    ├── layout.jsx          ← מעטפת גלובלית
    ├── page.jsx            ← דף הבית
    ├── globals.css         ← עיצוב גלובלי
    └── components/
        └── ContactForm.jsx ← קומפוננטת הטופס (Client)

## אבטחה

ה-API key של Airtable נמצא אך ורק בצד השרת (Server Action).
הדפדפן של המשתמש לעולם לא רואה אותו.
קובץ `.env.local` מוגן על ידי `.gitignore` ולא יועלה ל-GitHub.
