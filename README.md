# SAMURAI Sports Club Astana — Midterm Project

## Project Overview
Official website for SAMURAI Sports Club in Astana, specializing in professional karate training and general physical conditioning (ОФП) for children (aged 4+) and adults.

- **Author / Student:** Yasmina
- **Course:** Introduction to Web Technologies
- **Framework:** Bootstrap v5.3.3
- **Custom CSS:** `css/yasmina.css`

---

## Page Structure
1. `index.html` — Homepage featuring club introduction, core advantages, and head coach quote.
2. `services.html` — Pricing table, training schedules, karate terminology, and FAQ accordion.
3. `order.html` — Interactive registration form to book a free trial karate session across 8 Astana dojos.
4. `colophon.html` — Information about certified coaches with mastery indicators and Dojo rules modal window.

---

## Three User Journeys

### Journey 1: Find Pricing, Schedule, and Book a Trial Lesson
1. **Start:** User opens `index.html` looking for karate classes for their child.
2. **Steps:**
   - User clicks the **"Our Schedules & Fees"** button in the main hero section.
   - User navigates to `services.html`, reviews the pricing table (Junior/Senior groups), and checks class times.
   - Satisfied with the schedule, user clicks the **"Book Free Trial"** link in the navigation menu.
3. **End:** User arrives at `order.html`, selects a branch, and submits the booking form.

### Journey 2: Explore Coaches, Read Dojo Etiquette, and Apply
1. **Start:** User opens `index.html` and wants to verify coach qualifications before enrolling.
2. **Steps:**
   - User clicks **"About Us"** in the navigation menu to visit `colophon.html`.
   - User reviews the coach cards (Azamat, Ruslan, Timur) and their experience progress bars.
   - User clicks the **"View Dojo Rules"** button to open the interactive modal window and read the club code.
3. **End:** User closes the modal and clicks the **"Book Free Trial"** navigation item to complete registration.

### Journey 3: Quick Direct Trial Booking
1. **Start:** A returning user or direct visitor lands on `index.html`.
2. **Steps:**
   - User immediately clicks the bright red **"Book Free Trial"** CTA button on the homepage.
   - User is redirected directly to `order.html`.
   - User fills in their full name, phone number, email address, and selects "Dojo 1: Musrepov 14/2".
3. **End:** User clicks **"Submit Application"** and receives visual confirmation area prepared for JS.

---

## Readiness for JavaScript (Freeze Readiness)
- Every interactive element, form input, button, section, and card has a unique lowercase English `id`.
- Empty alert containers (`#form-alert-container`, `#services-alert-container`, etc.) are pre-built to receive dynamic messages via JavaScript.
- CSS utility classes for state management (`.is-hidden`, `.is-active`, `.is-error`, `.is-success`) are predefined in `css/yasmina.css`.

---

## Quality Pass & Bug Fix Log
- **Navigation Consistency:** Ensured all 4 pages share the identical header, navbar structure, active tab states, and footer.
- **Image Optimization:** Fixed card photo proportions for coaches in `yasmina.css` using `object-fit: cover`.
- **Validation:** Verified W3C HTML compliance with zero errors and clean console logs.
- **Link Verification:** Removed all `href="#"` dead links; all navigation paths lead to valid pages.

---

## AI Log Policy
- AI was consulted exclusively for explaining Web Technologies concepts, CSS layout debugging, and generating structured documentation.