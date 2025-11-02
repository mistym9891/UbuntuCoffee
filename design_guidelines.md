# Ubuntu Coffee - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium coffee brand websites (Sera Wild Coffee, Blue Bottle, Onyx Coffee Lab) combined with African cultural elements to create a distinctive, story-driven experience that positions Ubuntu Coffee as a premium export brand.

**Core Principles**:
- Heritage storytelling through rich visual narratives
- Ubuntu philosophy (community, togetherness) as the central theme
- Premium yet approachable aesthetic befitting international markets
- Cultural authenticity balanced with global appeal
- Warm, inviting atmosphere that evokes the Ugandan highlands

---

## Typography System

**Primary Font**: Playfair Display (Google Fonts)
- Headings H1: 56px/64px, weight 700
- Headings H2: 40px/48px, weight 600
- Headings H3: 32px/40px, weight 600
- For elegant, sophisticated brand presence

**Secondary Font**: Inter (Google Fonts)
- Body text: 18px/28px, weight 400
- Small text: 16px/24px, weight 400
- Navigation: 16px/24px, weight 500
- For excellent readability and modern professionalism

**Accent Font**: Cormorant Garamond (Google Fonts)
- Taglines: 24px/32px, weight 500, italic
- Pull quotes: 28px/36px, weight 500, italic
- For storytelling moments and emotional resonance

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 to gap-12
- Content margins: mb-6, mb-8, mb-12
- Container max-width: max-w-7xl for most sections

**Grid Strategy**:
- Hero: Full-width immersive experience
- Product showcase: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Story sections: Alternating 2-column layouts (60/40 split)
- Process steps: 4-column grid collapsing to single column
- Testimonials: 2-column masonry layout

---

## Component Library

### Navigation
**Primary Header**:
- Sticky navigation with subtle backdrop blur on scroll
- Logo left-aligned with Ubuntu symbol integrated
- Center: Product, Story, Sustainability, Contact links
- Right: Language selector (EN/FR/DE/CN), "Order Export" CTA button
- Mobile: Hamburger menu with full-screen overlay

### Hero Section
**Layout**: Full-viewport immersive section (min-h-screen)
- Large hero image: Misty Ugandan coffee plantation at sunrise with farmers harvesting
- Image treatment: Subtle gradient overlay for text legibility
- Centered content: Logo mark, main tagline "From Uganda's Highlands to Your Cup—Life is Richer When Shared"
- Subheading: "Premium 100% Arabica Coffee | Ethically Sourced | Globally Loved"
- Dual CTAs: "Explore Our Coffee" (primary), "Export Inquiry" (secondary outline)
- Buttons use backdrop blur (backdrop-blur-md bg-white/10) with white text
- Scroll indicator animation at bottom

### Brand Story Section
**Multi-section narrative** (5 distinct segments):

1. **Origin & Quality**:
- 2-column layout: Left - Large image of volcanic highlands, Right - Text content
- Include stats overlay: "1,800m elevation", "100% Arabica", "Volcanic soil"

2. **Ubuntu Philosophy**:
- Full-width centered content
- Large decorative Ubuntu symbol as background element
- Definition of Ubuntu with elegant typography
- How coffee embodies the philosophy

3. **Sustainability**:
- 3-column grid showing farmer partnerships, eco-practices, fair trade
- Each column: Icon, heading, description, supporting image

4. **Taste Profile**:
- Visual flavor wheel or tasting notes cards
- Chocolate, citrus, floral notes with illustrated icons
- Brewing recommendations

5. **Global Appeal**:
- World map showing export destinations with animated connection lines
- Testimonials from European, Asian, American importers

### Product Showcase
**Layout**: Premium product display
- Hero product image: The packaging mockup (provided image) as centerpiece
- 3-column grid below: Different roast profiles (Light, Medium, Dark)
- Each card: Product image, name, tasting notes, weight options, "Request Sample" CTA
- Hover effect: Subtle lift and shadow enhancement

### Coffee Journey Visualization
**4-step interactive timeline**:
- Hand picking cherries → Processing & sun-drying → Roasting → Packaging
- Each step: Large circular image, step number, heading, detailed description
- Horizontal scroll on mobile, vertical stacking
- Photography showing real process at Ugandan farms

### Farmers & Community Section
**Photo-rich storytelling**:
- Large hero image: Farmers in coffee plantation
- 2-column grid: Multiple farmer portraits with short bios
- Statistics: "500+ smallholder farmers", "3 cooperative partnerships"
- Quote wall: Testimonials from farmers (in quote cards)

### Export Information Section
**Professional B2B focus**:
- 2-column split: Left - Form (Company, Country, Volume needed, Message), Right - Export details
- Export capabilities: Certifications, shipping options, minimum order quantities
- Trust indicators: Organic certification badges, fair trade logos
- Contact methods: WhatsApp Business, Email, Phone

### Footer
**Comprehensive site map**:
- 4-column layout: Products, About Ubuntu, Resources, Connect
- Newsletter signup: "Join the Ubuntu Community" with email input
- Social proof: "Exporting to 24+ countries" stat
- Social media icons: Instagram, Facebook, LinkedIn
- Payment/shipping partner logos
- Legal links and copyright

---

## Visual Elements

### Icons
**Library**: Heroicons (outline style)
- Navigation: Menu, X, Globe, ShoppingCart
- Features: Leaf (sustainability), Users (community), Award (quality), MapPin (origin)
- Social: Instagram, Facebook, LinkedIn brand icons

### Geometric Patterns
**African-inspired motifs**:
- Subtle geometric patterns as section dividers
- Coffee bean patterns as decorative elements
- Ubuntu circular symbol integrated throughout
- Used sparingly as background textures (low opacity)

### Images
**High-priority photography**:

1. **Hero Section**: Panoramic sunrise shot of misty Ugandan coffee plantation with farmers in traditional attire harvesting red coffee cherries (full-width, high-resolution)

2. **Volcanic Highlands**: Dramatic landscape showing Mount Elgon with coffee farms in foreground (Origin section)

3. **Packaging Close-up**: The provided mockup image showing Ubuntu Coffee packaging with warm browns and gold accents (Product showcase centerpiece)

4. **Coffee Process**: 
   - Cherry picking (hands selecting ripe red cherries)
   - Washing stations (beans being processed)
   - Sun-drying patios (beans spread on raised beds)
   - Roasting equipment (modern roasting machinery)

5. **Farmers Portraits**: 6-8 authentic photos of Ugandan farmers, mixed gender, showing pride and professionalism

6. **Coffee Cultivation**: Close-ups of coffee plants, flowers, cherries at various stages

7. **Community Gatherings**: Groups of farmers cooperating, embodying Ubuntu philosophy

8. **Product Line**: Individual roast profile packages arranged artfully

9. **Tasting Moments**: Coffee being poured, latte art, people enjoying coffee in various global settings

10. **Sustainability Practices**: Composting, shade-grown coffee, water conservation methods

**Image Treatment**: All images should have warm, rich toning that emphasizes earthy browns, deep greens, and golden highlights consistent with the brand's premium, natural positioning.

---

## Animations & Interactions

**Minimal, purposeful motion**:
- Hero: Subtle parallax scroll effect on background image
- Scroll-triggered fade-ins for story sections (once, not repetitive)
- Product cards: Scale transform on hover (scale-105)
- Process timeline: Numbers count up on scroll into view
- Map connections: Gentle line-drawing animation
- Navigation: Smooth background fade on scroll
- NO carousel auto-rotation, NO excessive spinning, NO distracting effects

---

## Accessibility Standards

- Maintain WCAG 2.1 AA contrast ratios throughout
- All interactive elements have min 44px touch target
- Form inputs have clear labels and error states
- Images have descriptive alt text highlighting Ugandan heritage
- Skip navigation link for keyboard users
- Focus indicators on all interactive elements (ring-2 ring-offset-2)

---

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked content)
- Tablet: 768px - 1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts, max-w-7xl containers)

**Mobile-specific adjustments**:
- Hero: Reduced padding, larger touch targets for CTAs
- Navigation: Full-screen menu overlay
- Product grid: Single column with full-width cards
- Process timeline: Horizontal scroll or vertical stack
- Forms: Full-width with generous spacing (gap-6)

---

## Content Density

Each section should feel substantial and complete:
- Hero: Tagline + subheading + dual CTAs + scroll indicator
- Story sections: Heading + 2-3 paragraphs + supporting image + stats/quotes
- Product cards: Image + name + 3 flavor notes + weight + CTA
- Footer: 4-column navigation + newsletter + social proof + trust badges
- No sparse, single-element sections—every area serves multiple purposes

---

This design creates a premium, culturally rich experience that positions Ubuntu Coffee as a sophisticated export brand while honoring its Ugandan roots and Ubuntu philosophy of community and togetherness.