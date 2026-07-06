# Designer / Developer Brief

## Poetry Website for Veera Palo

## 1. Project overview

Create a poetic, immersive, English-language landing page for Veera Palo, presenting a curated selection of eight poems in a magical, soft, fairy-forest-inspired environment.

The website should feel like a small enchanted world rather than a traditional portfolio. The visitor should feel momentarily transported into a gentle, magical poetic space — light, flowing, beautiful, slightly mysterious, and emotionally uplifting.

The site functions as both:

* a personal poet / writer landing page
* a curated poetic experience
* a subtle calling card for readers, friends, collaborators, and creative contacts

The website should be easy to expand later with more poems, audio poems, collections, or additional sections.

---

# 2. Core atmosphere

The desired feeling:

A misty pastel-green fairy forest with rustic cuteness, soft sparkles, moving light, leaf shadows, sapphire-blue water reflections, and subtle flowing energy.

Keywords:

* cute
* rustic
* pastel
* magical
* enchanted
* soft
* fairy-like
* green
* misty
* leafy
* growing
* sparkling
* watery
* gentle
* dreamy
* alive
* poetic
* intimate
* mysterious but welcoming

Visual references / motifs:

* green pastel mist
* sprouting plants
* leaves
* green light
* tree shade
* sapphire-blue magical water
* water reflections
* fairy magic
* subtle glitter particles
* moving light
* soft leaf shadows
* flowing energy
* soap bubble / magical orb feeling

The magic should be subtle, not loud or childish. The site should feel elegant, poetic, and enchanted.

---

# 3. Site language

The whole site is in English.

Use the exact English copy provided below.

---

# 4. Site structure

The first version has two main views/pages:

1. Home / Landing page
2. About / Contact page

No large navigation menu is needed in the first version.

The only visible “navigation” element on the home page is the profile image bubble in the top right corner.

---

# 5. Home / Landing page

## 5.1 Main headline

At the top of the page, centered, large and soft:

Words to enchant.
God’s masks to try on.

Design notes:

* should feel soft and luminous
* large enough to be a clear opening statement
* not harsh, not corporate
* likely set in an elegant serif, poetic display font, or soft literary typeface
* line break must be preserved exactly as above
* use curly apostrophe in God’s
* should have enough breathing room above and below

Possible visual treatment:

* soft green glow
* subtle pastel highlight
* very gentle shimmer or light movement nearby
* do not over-animate the text itself

---

## 5.2 Main poem area

Below the headline, place a beautifully framed poem container.

This is the core experience of the page.

The poem container should show one poem at a time.

There are 8 poems total.

Each poem includes:

* poem title
* poem text
* optional audio bubble for two specific poems
* optional reader credit at the end for the two audio poems

The container should feel like a magical poem card, a framed page, or an enchanted text box floating within the forest-light background.

Design notes:

* soft border / frame
* beautiful but not too ornate
* organic, slightly rustic feeling
* pastel green, cream, soft gold, pale blue, or translucent glass-like tones can be explored
* text must remain highly readable
* box should adapt to poem length
* do not force all poems into the same fixed height
* long poems should allow the page to grow naturally
* on mobile, page scrolling is acceptable for longer poems

Important: the box should grow with longer poems.

---

# 6. Poem interaction

## 6.1 Poem order logic

There are 8 poems in a fixed sequence.

However, when the visitor opens the page, the first visible poem should be chosen randomly.

After that, poems continue in the same fixed cyclic order.

Example:

If fixed order is:
1. Poem A
2. Poem B
3. Poem C
4. Poem D
5. Poem E
6. Poem F
7. Poem G
8. Poem H

And the random starting poem is Poem D, the visitor sees:

Poem D → Poem E → Poem F → Poem G → Poem H → Poem A → Poem B → Poem C

This makes the site feel alive and slightly magical while preserving the intended poem order.

---

## 6.2 Changing poems

Visitors can change poems by:

* clicking / tapping
* swiping

There should be:

* no arrows
* no dot indicators
* no visible carousel pagination
* no “1 / 8” counter

The interaction should feel secret, smooth, and gallery-like.

Suggested behavior:

* click / tap poem area to go to next poem
* swipe left or right to move between poems
* smooth sliding or fading transition
* transition should feel graceful, soft, and magical

Important development note:

Clicking the audio bubble must not change the poem. The audio control should stop event propagation so the poem carousel does not advance when the user presses play/pause.

---

# 7. Poem title styling

Poem titles are important and are part of the poems themselves.

Each poem should display its title clearly.

The title should not feel like a technical label. It should feel like the opening of the poem.

Possible treatment:

* slightly larger than body text
* elegant and readable
* softly emphasized
* enough spacing between title and poem body

For poems with audio, the title row should contain:

Poem Title + small speaker bubble to the right of the title

The speaker bubble should feel like part of the magical interface, not like a default browser audio control.

---

# 8. Audio poems

Two of the eight poems include audio files.

For those poems:

* show a small speaker bubble on the right side of the poem title
* first click: play audio
* second click: pause audio
* third click: resume from the same position
* if the visitor changes poem while audio is playing, audio should pause or stop cleanly
* do not use the default large browser audio player
* use a custom, small, elegant control

Speaker bubble design:

* small round bubble
* soft green / translucent / soap-bubble-like
* subtle glow
* icon inside can be a speaker, sound wave, or simple audio glyph
* should fit the fairy-forest visual language

At the end of the two audio poems, show reader credit.

Format:

Read by [Reader Name]

The exact reader names will be provided with the poem content.

---

# 9. Background and visual environment

The home page background should create the feeling of entering a soft enchanted forest.

Desired visual elements:

* misty pastel green base
* subtle leafy shadows
* soft moving green light
* tiny sparkles / glitter particles
* very subtle water reflection movement
* hints of sapphire-blue water
* flowing energy
* gentle magical atmosphere

Animation guidance:

* subtle and slow
* no distracting motion
* no fast glitter
* no heavy fantasy effects
* should feel breathable and calming

Possible implementation:

* layered CSS gradients
* subtle animated light blobs
* transparent leaf-shadow overlays
* small particle layer
* soft radial glows
* water-reflection shimmer layer
* reduced-motion fallback for accessibility

Important:

Use animations sparingly. The poems are the focus.

---

# 10. Profile bubble

On the home page, in the top right corner, place a circular profile image bubble.

Content:

* Veera’s chosen image inside the circle
* green edges / border
* should feel like she is inside a soap bubble
* magical but elegant

Behavior:

* clicking the profile bubble opens the About / Contact page

Visual notes:

* circular
* soft green rim
* translucent / glossy / bubble-like feeling
* maybe slight glow
* maybe subtle hover shimmer
* should be visible but not overpower the poem

Do not add a large text label next to it unless required later.

---

# 11. About / Contact page

This page should be simple, clear, and poetic.

It should contain:

1. image of Veera
2. name
3. short creator line
4. contact information
5. footer copyright

No additional biography text should be added.

Exact content:
Veera Palo
Creator of poems, collections of words made to enchant.

For contact
WhatsApp: @tweedlede
Telegram: @veeratweed
Signal: Tweedlede.18

Design notes:

* keep it minimal
* still visually connected to the fairy-forest world
* can use the same background atmosphere as home, possibly calmer
* image can be larger than the home-page bubble image
* text centered or softly arranged
* should feel personal but not overly explanatory

The About / Contact page should not feel like a business card page pasted onto the site. It should feel like a quiet clearing inside the same enchanted world.

---

# 12. Footer

Add footer text:

All poems © Veera Palo

Use exact copyright symbol.

Footer treatment:

* small
* soft
* unobtrusive
* readable
* can appear at the bottom of both Home and About / Contact pages

---

# 13. Responsive design

The site must work beautifully on:

* mobile
* tablet
* desktop

Mobile is especially important because the poem carousel uses tapping and swiping.

Mobile behavior:

* headline remains readable but not oversized
* poem box has enough margin from screen edges
* poem text is comfortable to read
* long poems can extend page height
* profile bubble remains accessible in top right
* audio bubble remains easy to tap
* no overlap between title text and audio bubble

Desktop behavior:

* poem box can be centered and narrower for literary readability
* background has more room to breathe
* profile bubble remains in top right
* headline and poem area feel balanced vertically

---

# 14. Accessibility and usability

Important requirements:

* readable contrast between poem text and background
* no important text placed directly on busy moving backgrounds
* reduced-motion support for users who prefer less animation
* audio button must be keyboard accessible
* audio button should have accessible label, e.g. “Play audio for [Poem Title]”
* if audio is playing, label should update to “Pause audio for [Poem Title]”
* swipe should not be the only interaction; tapping/clicking must also work
* ensure focus states are visible but visually elegant
* images need alt text

Suggested alt text:

Home profile bubble:
Veera Palo

About page image:
Portrait of Veera Palo

---

# 15. Content management / future expansion

The site should be built so poems can be added or edited later without redesigning the full page.

Recommended content structure for each poem:

{
  title: "Poem title",
  text: "Poem text...",
  audio: "optional-audio-file.mp3",
  reader: "Reader Name, if audio exists"
}
The poem carousel should be generated from structured content rather than hardcoded into the layout.

Future possible additions:

* more poems
* separate audio poems section
* book / collection page
* collaborations section
* journal
* readings / events
* newsletter
* expanded contact options

Design should leave room for future expansion but first version should remain minimal.

---

# 16. Technical behavior summary

Required functionality:

* English-language site
* own domain
* home page with headline and poem carousel
* 8 poems
* random starting poem on page load
* fixed cyclic order after random start
* no arrows
* no dots
* no visible pagination
* click/tap to change poem
* swipe to change poem
* smooth transition between poems
* poem box grows with content
* two poems have custom audio controls
* audio button toggles play / pause / resume
* audio pauses or stops when changing poems
* profile bubble links to About / Contact page
* footer with copyright text

---

# 17. Exact text to use

## Home headline

Words to enchant.
God’s masks to try on.

## About / Contact

Veera Palo
Creator of poems, collections of words made to enchant.

For contact
WhatsApp: @tweedlede
Telegram: @veeratweed
Signal: Tweedlede.18

## Footer

All poems © Veera Palo

---

# 18. Visual direction in one sentence
Design and build an English-language poetry landing page that feels like a soft, rustic, pastel-green fairy forest: a magical space of leaves, green light, subtle sparkles, sapphire-blue water reflections, and flowing energy, where one poem at a time appears inside an enchanted, gently framed poem box.

---

# 19. Overall creative goal

The visitor should not feel like they are browsing a normal website.

They should feel like they have found a small hidden place.

A soft green world.
A poem waiting in a box of light.
A bubble in the corner leading to the poet.
Words that enchant.