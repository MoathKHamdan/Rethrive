# ReThrive WordPress Conversion Guide

## 🎯 Overview
This guide helps convert your React-based ReThrive website into a WordPress theme. The project is production-ready with 8 pages, responsive design, and Framer Motion animations.

---

## 📦 **Export from Figma Make**

### Step 1: Download Your Code
1. In Figma Make, click the **three dots menu** (⋯) in the top-right
2. Select **"Download code"** or **"Export project"**
3. You'll get a `.zip` file with all your React code

---

## 🏗️ **Project Structure**

```
/src/app/
├── App.tsx                    → Main routing (convert to WP templates)
├── components/
│   ├── Header.tsx            → WP header.php
│   ├── Footer.tsx (CTA.tsx)  → WP footer.php
│   ├── Hero.tsx              → Reusable block/section
│   ├── Services.tsx          → Reusable block
│   ├── Testimonials.tsx      → Reusable block
│   ├── Philosophy.tsx        → Reusable block
│   └── ui/                   → Convert to shortcodes/blocks
├── pages/
│   ├── Home.tsx              → page-home.php
│   ├── HowItWorks.tsx        → page-how-it-works.php
│   ├── Experts.tsx           → page-experts.php
│   ├── ClinicianProfile.tsx  → single-clinician.php (custom post type)
│   ├── Ecosystem.tsx         → page-ecosystem.php
│   ├── Model.tsx             → page-model.php
│   ├── Intake.tsx            → page-intake.php
│   └── Blog.tsx              → archive-post.php / index.php
└── styles/
    ├── theme.css             → WP style.css + CSS variables
    └── fonts.css             → Enqueue in functions.php
```

---

## 🔄 **Conversion Strategies**

### **Option A: Headless WordPress (Recommended)**
Best for preserving React functionality, animations, and interactivity.

**Architecture:**
- **Frontend:** Keep React (this codebase) hosted separately
- **Backend:** WordPress as headless CMS via REST API/GraphQL
- **Deployment:** Vercel/Netlify for React, WordPress on hosting

**Pros:**
✅ Keep all animations (Framer Motion)
✅ Keep all React functionality
✅ Fast performance
✅ Client can edit content in WordPress admin

**Cons:**
❌ Requires two hosting environments
❌ More complex setup

**Steps:**
1. Install WordPress with REST API or WPGraphQL
2. Create custom post types (Experts, Blog Posts)
3. Update React components to fetch from WP API
4. Deploy React app to Vercel/Netlify
5. Point to WordPress API endpoint

---

### **Option B: Custom WordPress Theme**
Convert React to traditional PHP WordPress theme.

**Pros:**
✅ Single WordPress installation
✅ Client familiar with WP
✅ Standard hosting

**Cons:**
❌ Lose React interactivity
❌ Framer Motion animations need jQuery/CSS
❌ More conversion work

**Key Conversions:**

#### 1. **Header Component → header.php**
```php
<?php
/**
 * Header Template
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
    <nav class="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="<?php echo home_url(); ?>" class="flex items-center gap-2">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="ReThrive" class="h-12 md:h-16">
        </a>
        
        <div class="hidden lg:flex items-center gap-8">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'flex gap-8'
            ));
            ?>
        </div>
        
        <a href="<?php echo home_url('/intake'); ?>" class="btn-primary">
            Get Started
        </a>
    </nav>
</header>
```

#### 2. **Page Templates**
Create `/page-templates/page-home.php`:
```php
<?php
/**
 * Template Name: Home Page
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    // Hero Section
    get_template_part('template-parts/sections/hero');
    
    // Services Section
    get_template_part('template-parts/sections/services');
    
    // Testimonials Section
    get_template_part('template-parts/sections/testimonials');
    ?>
</main>

<?php get_footer(); ?>
```

#### 3. **Custom Post Type: Experts**
In `functions.php`:
```php
function rethrive_register_experts_post_type() {
    register_post_type('expert', array(
        'labels' => array(
            'name' => 'Experts',
            'singular_name' => 'Expert'
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'experts'),
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'rethrive_register_experts_post_type');
```

#### 4. **Enqueue Styles & Scripts**
In `functions.php`:
```php
function rethrive_enqueue_assets() {
    // Tailwind CSS (compile first)
    wp_enqueue_style('rethrive-tailwind', get_template_directory_uri() . '/dist/styles/main.css', array(), '1.0.0');
    
    // Custom fonts
    wp_enqueue_style('rethrive-fonts', get_template_directory_uri() . '/assets/fonts/fonts.css', array(), '1.0.0');
    
    // Main JS (if needed)
    wp_enqueue_script('rethrive-main', get_template_directory_uri() . '/dist/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'rethrive_enqueue_assets');
```

---

### **Option C: WordPress + React Hybrid (Gutenberg Blocks)**
Convert React components to Gutenberg blocks.

**Pros:**
✅ Keep React components
✅ Client can use WordPress editor
✅ Drag-and-drop page building

**Steps:**
1. Use `@wordpress/scripts` to build blocks
2. Convert each component (Hero, Services, etc.) to a Gutenberg block
3. Register blocks in `functions.php`
4. Client builds pages with blocks

**Example Block Structure:**
```
/blocks/
├── hero-block/
│   ├── index.js
│   ├── edit.js       ← React component from Hero.tsx
│   ├── save.js
│   └── style.css
├── services-block/
└── testimonials-block/
```

---

## 📋 **Asset Migration Checklist**

### Images to Export:
- [ ] Logo: `https://iili.io/qHfdUsj.png` → `/assets/images/logo.png`
- [ ] Expert photos (5): `https://iili.io/qHfxdP9.png`, etc. → `/assets/images/experts/`
- [ ] Ecosystem images (2): Dashboard, Portal → `/assets/images/ecosystem/`
- [ ] Testimonial photos (4): Unsplash images → `/assets/images/testimonials/`
- [ ] Blog images (3): Unsplash images → `/assets/images/blog/`

### Videos:
- [ ] Hero YouTube video: `nFyC43ZmrTk` → Use oEmbed in WP or embed code
- [ ] Philosophy video → Save as custom field in WP

### Fonts:
- [ ] Check `/src/styles/fonts.css` for font files
- [ ] Upload to `/assets/fonts/` in WP theme

---

## 🎨 **Tailwind CSS in WordPress**

### Option 1: Compile Tailwind CSS
1. Keep your `tailwind.css` file
2. Run build process: `npm run build` (outputs compiled CSS)
3. Enqueue compiled CSS in WordPress

### Option 2: Use WordPress + Tailwind Plugin
1. Install WordPress plugin: "Tailwind CSS"
2. Or manually configure Tailwind in theme

**Recommended:** Compile during development, upload compiled CSS.

---

## 🔌 **Required WordPress Plugins**

1. **Advanced Custom Fields (ACF)** → For expert bios, credentials, testimonials
2. **Contact Form 7** or **Gravity Forms** → For intake form (`/intake`)
3. **Yoast SEO** → SEO optimization
4. **WP Rocket** → Performance (optional)
5. **WPGraphQL** → If using headless approach

---

## 📄 **Pages to Create in WordPress**

After theme setup, create these pages:

| Page Title | Slug | Template |
|------------|------|----------|
| Home | `/` | page-home.php |
| How It Works | `/how-it-works` | page-how-it-works.php |
| Our Experts | `/experts` | page-experts.php |
| Ecosystem | `/ecosystem` | page-ecosystem.php |
| Our Model | `/model` | page-model.php |
| Get Started | `/intake` | page-intake.php |
| Blog | `/blog` | archive.php |

---

## 🚀 **Recommended Approach for Your Client**

### **Path: Headless WordPress**

**Why:** Keeps all functionality, animations, and modern feel while giving client WP admin.

**Implementation Steps:**

1. **Set up WordPress backend:**
   - Install WordPress on hosting
   - Install WPGraphQL plugin
   - Create custom post types (Experts, Testimonials, Blog)
   - Add content via WP admin

2. **Update React app to fetch from WordPress:**
   - Install `@apollo/client` or use REST API
   - Update components to fetch dynamic content
   - Deploy React app to Vercel/Netlify

3. **Client workflow:**
   - Edit content in WordPress admin (familiar)
   - Content appears on React site (fast, modern)

**Cost:** Free (WordPress) + Free (Vercel/Netlify for React)

---

## 🛠️ **Tools & Resources**

### Conversion Tools:
- **Frontity** (https://frontity.org) → React framework for WordPress
- **WPGraphQL** (https://www.wpgraphql.com) → GraphQL for WordPress
- **wp-scripts** → Build Gutenberg blocks with React

### Headless WordPress Hosts:
- **WordPress.com** (with business plan)
- **WP Engine** (headless CMS tier)
- **Any shared hosting** (Bluehost, SiteGround)

### React Deployment:
- **Vercel** (recommended for React)
- **Netlify**
- **AWS Amplify**

---

## 📞 **Next Steps**

1. **Download code** from Figma Make
2. **Choose conversion strategy:**
   - Headless WordPress (recommended)
   - Custom WP theme
   - Gutenberg blocks
3. **Set up WordPress backend**
4. **Migrate assets** (images, videos, fonts)
5. **Test & deploy**

---

## ⚠️ **Important Notes**

### Intake Form:
Your current intake form (`/src/app/pages/Intake.tsx`) is frontend-only. For WordPress:
- Use **Contact Form 7** or **Gravity Forms**
- Store submissions in WP database
- Add HIPAA-compliant encryption if needed
- **Important:** Client mentioned need for secure backend storage

### Animations:
- **Framer Motion** animations work in headless approach
- For PHP theme, convert to CSS animations or jQuery

### Responsive Design:
- All Tailwind responsive classes (md:, lg:) work in WordPress
- Test mobile menu functionality

---

## 📚 **Additional Resources**

- **Headless WordPress Tutorial:** https://www.wpgraphql.com/docs/quick-start
- **Tailwind CSS in WordPress:** https://tailwindcss.com/docs/guides/wordpress
- **React to WordPress:** https://developer.wordpress.org/block-editor/

---

**Need help?** Reply with your chosen approach and I'll provide detailed implementation steps!
