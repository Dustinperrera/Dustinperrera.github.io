# Dustin Perrera — Personal Portfolio

Local first design draft for a one-page BSIT portfolio. No GitHub changes or publishing have been made.

## Preview in VS Code

Open `index.html`, then choose **Go Live** in the bottom-right corner (the Live Server extension is already visible in your VS Code screenshot). You can also open `index.html` directly in a browser. No installation or build is needed.

## Files

- `index.html`: sections and portfolio content
- `styles.css`: light and dark themes, technology badges, responsive layout, and motion
- `script.js`: theme toggle, mobile navigation, project detail dialogs, and scroll reveals
- `assets/images/`: add your portrait and project screenshots here
- `assets/documents/`: public resume, plus future project evidence and supporting documents

## Content still needed

- Professional portrait, 150–250 word About Me, education, and career objective
- Confirmed skills, honest proficiency levels, and evidence
- Breathe Easy Solution screenshots, contribution details, and API service details
- Customer-facing and staff-side screenshots and API service details for SneakDup (live site: https://sneakdup-eight.vercel.app/)
- Excel workbook and analysis findings; SQL demonstration and screenshots
- Actual networking demonstration, topology, addressing plan, configuration, and test evidence
- Five troubleshooting cases and one defensive cybersecurity case study
- Project documentation, testing, deployment evidence, and authorized source/repository links
- LinkedIn profile link
- Actual certificates and achievements
- Career development plan, mock/technical interview evidence, and project defense materials
- 500–800 word personal reflection
- AI usage log with Dustin's own verification
- Organized offline submission archive

Draft placeholders are explicitly labeled. Do not treat project artwork as real screenshots, proposed skills as verified competencies, or pending evidence as completed work. Replace these before publishing.

## Design and dependencies

Plain HTML, CSS, and JavaScript, suitable for GitHub Pages after review. Uses Google Fonts (DM Sans and Space Grotesk) with Arial fallbacks; the rest of the design has no external dependencies. Technology badges are stylized, not official brand assets. Supports keyboard navigation, native dialog focus management, mobile layouts, and reduced motion.

## Professional portfolio revision

Black-and-white theme; professional Web & Mobile Developer introduction; grouped technologies including Flutter, Kotlin, Android Studio, Tailwind CSS, Laragon, and phpMyAdmin. DCSA Mini LMS is featured with user-confirmed capabilities and stack. The unfinished 2D game is labeled in development. The About copy is a draft for Dustin to review. Portrait, mobile screenshots, and API service details remain pending. SneakDup is live at https://sneakdup-eight.vercel.app/.

## Color and portrait update

The page frame remains monochrome. Project preview colors reflect Breathe Easy (blue/green), DCSA (maroon/blue), data analysis (green/blue), and networking (cyan/blue). Preview art is not a screenshot of the actual projects. The introduction reserves space for the user-supplied portrait; no photo has been supplied yet. Local technology SVGs are from Devicon v2.17.0 (https://github.com/devicons/devicon, MIT) and Simple Icons v15 (https://github.com/simple-icons/simple-icons, CC0); brand marks remain their respective owners’ trademarks. Excel uses a stylized badge.

## Navigation, toolkit, and contact

Added a sticky navigation bar with section highlighting, hover/focus/press states, pausable toolkit rows, and Node.js labeled Fundamentals. The contact form validates input and prepares a mailto draft; it does not send messages or use a backend. Visitors must open and send from their email client, or copy the message into webmail. Public email and GitHub links are connected. LinkedIn remains an unlinked placeholder. Reduced-motion preferences disable the moving toolkit.

## Expanded toolkit and evidence

Added Dart, Git, VS Code, PostgreSQL, Supabase, and C++ with experience labels. Dustin later confirmed he uses PostgreSQL, Supabase, and C++, so they appear with his current tools. Toolkit movement can be paused; reduced-motion preferences disable it. Section 05 opens full-width proof panels. Certificate slots and reflection prompts do not claim that images or reflection text are finished. Ambient code is decorative, subtle, and disabled for reduced motion. New logos are from Devicon v2.17.0 (MIT; brands retain their marks).

## Unique tools and project case studies

The toolkit contains one card per technology. All four rows slide to the right and then return without cloning cards, so duplicate cards are never shown. Bootstrap, NetBeans, DbSchema, PHP, Hostinger, and GitHub were added. PostgreSQL and Supabase are grouped with data tools, C++ with programming, and only Linux and Bitbucket are labeled Exploring. Some new tool badges are original stylized text marks rather than official logos.

Selected Work opens a larger case study with project description, role, tools, highlights, and a navigable gallery. Breathe Easy Solution has the confirmed public link at https://breatheeasysolution.com/. Its stack reflects Dustin's confirmation: HTML, CSS, JavaScript, PHP, SQL, Laragon, phpMyAdmin, Hostinger, and API integration. The public site was inspected to describe visible services and flows. SneakDup is a second freelance website and retail system with catalog, stock/size/variant visibility, staff login, POS, inventory, and sales analytics; its customer-facing site is live at https://sneakdup-eight.vercel.app/. DCSA Mini LMS now lists Android Studio, Kotlin, Firebase, and API integration. Firebase appears once in the mobile toolkit and XAMPP once in platforms and workflow. The data, network, and game cards distinguish existing work from planned work.

The gallery currently contains clearly labeled screenshot slots because no project images have been supplied. To add real images, put optimized `.webp`, `.jpg`, or `.png` files in `assets/images/`, then set the matching `src` values in each project's `gallery` array near the top of `script.js`. Update the caption for each image. Clicking **Open full image** will then let visitors view the original file. See `assets/images/README.md` for the suggested screenshot list.

The networking chapter uses a legible concept topology with outlined router, switch, and PC nodes. The 2D game chapter and its gallery placeholder use original block-world SVG concept art from `assets/images/block-world-concept.svg`. This art is labeled as a concept and is not presented as a gameplay screenshot.

## Light and dark themes

Click the `dp.` mark in the top-left navigation to switch themes. The page starts in dark mode, remembers the chosen theme in the browser, and applies it before the stylesheet loads on later visits. The mark is a keyboard-accessible button but keeps the appearance of the existing logo. The `dp.` link in the footer still returns to the top of the page.

## Motion and project previews

The hero enters in stages and section labels draw in as they appear. Selected Work is a vertical showreel with one wide project chapter at a time and a numbered jump index. Normal page scrolling activates project-specific scenes: a booking panel for Breathe Easy, layered storefront and staff screens for SneakDup, lesson and quiz panels for DCSA Mini LMS, a chart and query result for data analysis, drawn network paths and signals, and assembling blocks for the game. The section uses screen and text reveals rather than pointer-driven 3D tilt. These are decorative concepts, not project screenshots or results. The case-study galleries still have labeled slots for real screenshots. Reduced-motion settings remove the entrance and scene movement.

SneakDup appears after Breathe Easy with an original storefront and staff-dashboard concept preview. The chapters order live client work first, then mobile, data, networking, and the game in development. The preview does not represent real SneakDup screenshots or disclose staff data.

## Resume preview

The resume section opens an on-page PDF preview. It loads `assets/documents/Dustin-Perrera-Resume.pdf` only when the visitor clicks **Preview my resume**. The preview offers **Open in new tab** if a device cannot display the embedded PDF, plus a separate **Download PDF** action. To replace the resume later, export the new version as a PDF and overwrite that exact file in `assets/documents/`; the portfolio links will keep working. Review the PDF's contact information before publishing the site publicly.

## Approved presentation polish - October 20, 2026

Breathe Easy Solution, SneakDup, and DCSA Mini LMS are the three featured applications. Excel/SQL notes, the untested networking concept, and the unfinished game remain accessible in compact learning cards while assignment requirements are rechecked. No SQL exercise or network testing has been represented as completed. The three application dialogs now share problem, contribution, approach, challenges/current limits, gallery, and evidence/status sections. Intro, About, project summaries, and contact copy are more specific; navigation consistently uses Behind the Work. The dp startup runs on the first page load in a tab session and is skipped on refresh via sessionStorage. Storage failure retains the normal finishing animation. Reduced-motion support and existing evidence PDFs remain in place.

## Mock interview and main game project - October 20, 2026

The 2D game is restored as the fourth main project, explicitly labeled In development, with concept artwork and its existing development notes. Data and networking remain in the smaller learning section. Career Development now reserves space for a recorded mock interview and a forthcoming YouTube link, with all twelve preparation questions in an expandable list. No video link or recording is presented as available. The user asked to omit a project-defense section; its Career Development placeholder has been removed.

## Services, development timeline, and FAQ - October 20, 2026

Added What I Do before Projects with six original service descriptions: Business Websites, Retail & Management Systems, Android Applications, Website Improvements, Integrations (APIs, maps, email, third-party tools), and Support & Growth (maintenance, performance, analytics, technical SEO, fixes, future features). Relevant services and the timeline open existing project case studies; support leads to Contact. Experience appears within About using user-confirmed milestones: college/programming in 2023, building systems in 2024, and current web/mobile projects without assigning unconfirmed project dates. Five FAQs polish Dustin's answers about project types, reviewing existing sites, gathering requirements, client privacy, and ongoing support. Hosting availability remains part of the live-demo explanation. Added a navigation link, renumbered main sections, responsive layouts, original inline SVG icons, and reduced-motion-aware reveals. No new packages or external services were added.

## Compact FAQ - October 20, 2026

FAQ now uses a short title/introduction on the left and a smaller accordion on the right. Question numbering is removed; all five answers are retained verbatim. Desktop questions use 17px type and tighter spacing; phones stack the section with comfortable tap targets. Contact link, native single-open disclosure behavior, keyboard operation, and both themes are preserved. Other page sections are unchanged.

## Sequential experience timeline - October 20, 2026

A teal line and milestone highlights move through 2023, 2024, and Today on a nine-second loop, holding the completed path for about five seconds. Its length and intermediate stop follow the actual milestone positions, including font and responsive changes. Intersection and visibility checks pause motion outside the viewport or when the page is hidden. A small pause/resume control supports user choice, while reduced-motion preferences keep the original static timeline and hide that control. Timeline text remains visible throughout. Section 06 Behind the Work is unchanged.

## Selected Work horizontal slider - October 20, 2026

The four main project cards now form a manually controlled native horizontal scroll-snap carousel. Desktop arrows, numbered project selectors, keyboard arrow keys within the carousel, and native sideways scrolling/touch gestures select a project. The first/last navigation buttons reflect their limits, a live announcement reports the selected project, and offscreen slides are inert and hidden from assistive navigation. No automatic advancement or wheel interception is used. Each breakpoint has a stable slide height, while native vertical page scrolling remains available. Existing case studies and galleries are preserved. A soft section background and one-time entrance distinguish Selected Work. Reduced-motion preferences disable animated scrolling and decorative transitions; without JavaScript the original project list remains available. Existing learning cards and all other sections are unchanged.

## Draggable centered projects and replayable startup - October 20, 2026

The project carousel now centers a full-size card with smaller, dimmed neighbor previews. Desktop visitors can hold and drag anywhere outside its action buttons; phones retain native sideways scrolling, with normal vertical page scrolling. Release snaps to the nearest project. Repeated card sets allow looping in either direction; their IDs are removed, only one physical slide is active, and offscreen cards are inert and hidden from assistive navigation. Number selectors, arrows, keyboard controls, counters, and case studies remain. Case studies open only through explicit buttons, with delegated handling for repeated cards and suppression of clicks caused by a drag. Desktop cards use 84% of the viewport width; phone cards use 82%, with stable height and responsive geometry.

The once-per-tab startup setting has been removed at Dustin's request. The theme-aware dp intro and name typing now replay on every reload. The finished name stays visible, and reduced-motion preferences continue to skip decorative animation. All other sections and source project cards are unchanged.

## LinkedIn and desktop cursor - October 20, 2026

The LinkedIn placeholder is now a contact link to Dustin's supplied profile at https://www.linkedin.com/in/dustin-perrera-7a4394445/, opening in a new tab with noopener/noreferrer. Added an original 32px SVG cursor with a teal fill and contrasting dark/light outlines, applied only to devices with a fine pointer and hover. Hand cursors on links/buttons, text cursors in inputs, and the carousel's grab/grabbing behavior remain. No new JavaScript or cursor-following overlay was added.

## Simple hand cursor - October 20, 2026

Replaced the decorative SVG arrow with the native grab-hand cursor for mouse users, matching the project slider. Interactive links/buttons retain pointer cursors and text inputs retain text cursors. The existing closed-hand cursor while dragging the project carousel is unchanged.


## Preview shortcuts and interaction polish - October 26, 2026

The hero resume button opens the existing PDF preview immediately, with its PDF link as a no-JavaScript fallback. All three preview dialogs animate in and out, support Escape and outside clicks, lock background scrolling, and return focus without scrolling to their opening control. Removed the inherited underline from project number circles. All seven evidence headings share teal badges and an open-state tint in both themes. Evidence and FAQ accordions expand and collapse with interruptible height animations; reduced-motion preferences skip these effects and native details remain usable without JavaScript.


## Career development roadmap - October 26, 2026

Replaced the career-plan placeholder with a first-person plan based on Dustin's reflection: career direction, existing experience, programming and planning priorities, technologies and future certificate topics, 6-month/1-year/3-year goals, weekly development habits, and career vision. Added a one-page PDF, image-based preview, and direct download. The milestone path animates for four seconds, rests five seconds, and repeats only while visible and expanded, with pause/resume and reduced-motion support. The mock interview stays separate below the roadmap. Future milestones and training are plans, not completed achievements.


## Cobalt identity and compact evidence library - October 26, 2026

Applied a shared charcoal/off-white/cobalt palette across both themes: loading screen, actions, active project controls, services, experience/career paths, articles, form controls, and dialogs. Project captures, technology logos, portrait variants, and the floating code atmosphere retain their original assets and behavior. All seven Behind the Work entries have larger unboxed chapter numbers, topic icons, and brief descriptions. Closed cards use a two-column desktop library; an opened article occupies the full width, with a single-column phone layout. Existing details, PDF actions, certificate originals, interview questions, and reflection text are retained. Native disclosures, interrupted expansion/collapse, keyboard support, and reduced-motion settings remain available.
