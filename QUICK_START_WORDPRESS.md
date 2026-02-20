# ReThrive → WordPress: Quick Start Implementation

This is a step-by-step guide to convert your ReThrive React site to WordPress in the fastest way possible.

---

## 🚀 **Recommended Path: Headless WordPress**

**Why this approach:**
- ✅ Keeps all animations and interactivity
- ✅ Client gets familiar WordPress admin panel
- ✅ Modern, fast website experience
- ✅ Easy to maintain and update

**Time estimate:** 4-8 hours for experienced developer

---

## 📋 **Prerequisites**

- [ ] WordPress hosting account (Bluehost, SiteGround, etc.)
- [ ] Vercel/Netlify account (free)
- [ ] Code exported from Figma Make
- [ ] Basic WordPress knowledge
- [ ] Node.js installed

---

## 🎬 **Step-by-Step Implementation**

### **Phase 1: Export & Prepare (30 minutes)**

#### 1.1 Export from Figma Make
1. Open your ReThrive project in Figma Make
2. Click **three dots menu** (⋯) in top-right
3. Select **"Download code"** or **"Export project"**
4. Extract the `.zip` file to your computer

#### 1.2 Download Assets
```bash
# Navigate to extracted folder
cd rethrive-export

# Create asset directory
mkdir -p wordpress-assets/images

# Download all images from ASSET_EXPORT_LIST.md
# (Use the download script or manually save images)
```

---

### **Phase 2: WordPress Backend Setup (1-2 hours)**

#### 2.1 Install WordPress
1. Log into your hosting control panel (cPanel)
2. Find "WordPress" or "Softaculous" installer
3. Install WordPress to your domain
4. Complete WordPress setup wizard

#### 2.2 Install Required Plugins

Log into WordPress admin (`yourdomain.com/wp-admin`), go to **Plugins → Add New**, install:

1. **WPGraphQL** (for API)
   ```
   Plugin name: WPGraphQL
   ```

2. **WPGraphQL for Advanced Custom Fields**
   ```
   Plugin name: WPGraphQL for Advanced Custom Fields
   ```

3. **Advanced Custom Fields (ACF)**
   ```
   Plugin name: Advanced Custom Fields
   ```

4. **Contact Form 7** (for intake form)
   ```
   Plugin name: Contact Form 7
   ```

Click **Activate** on all plugins.

#### 2.3 Enable CORS

Add to WordPress `wp-config.php` (before "That's all, stop editing!"):

```php
// Enable CORS for headless frontend
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'your-secret-key-here-change-this');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
```

#### 2.4 Test GraphQL Endpoint

Visit: `https://yourdomain.com/graphql`

You should see GraphiQL interface. If yes, ✅ backend is ready!

---

### **Phase 3: Create WordPress Content Structure (1 hour)**

#### 3.1 Create Custom Post Type: Experts

In WordPress admin, go to **Plugins → Add New**, install:
- **Custom Post Type UI**

Activate, then:
1. Go to **CPT UI → Add/Edit Post Types**
2. Post Type Slug: `expert`
3. Plural Label: `Experts`
4. Singular Label: `Expert`
5. Check **Has Archive**, **Public**, **Show in REST API**
6. Save

#### 3.2 Add Custom Fields for Experts

1. Go to **Custom Fields → Add New**
2. Title: "Expert Fields"
3. Add fields:
   - `name` (Text)
   - `credentials` (Text) - e.g., "DPT, CSCS"
   - `specialty` (Text) - e.g., "Sports Rehabilitation"
   - `experience` (Text) - e.g., "12+ years"
   - `bio` (Textarea)
   - `image` (Image)
   - `rating` (Number)
   - `reviews` (Number)

4. Location Rules: **Post Type is equal to Expert**
5. Publish

#### 3.3 Add Expert Content

1. Go to **Experts → Add New**
2. Create 5 experts from your data:

**Expert 1:**
- Title: Sarah Chen
- Credentials: DPT
- Specialty: Sports Rehabilitation
- Bio: (copy from `/src/app/pages/Experts.tsx`)
- Upload image: `sarah-chen.png`

Repeat for all 5 experts.

#### 3.4 Create Pages

Go to **Pages → Add New**, create:

1. **Home** (slug: `home`)
2. **How It Works** (slug: `how-it-works`)
3. **Our Experts** (slug: `experts`)
4. **Ecosystem** (slug: `ecosystem`)
5. **Our Model** (slug: `model`)
6. **Get Started** (slug: `intake`)
7. **Blog** (already exists)

Go to **Settings → Reading**, set "Homepage displays" to **Static page** → Home

---

### **Phase 4: Update React App to Fetch from WordPress (2-3 hours)**

#### 4.1 Install GraphQL Client

In your exported React project:

```bash
cd rethrive-export
npm install @apollo/client graphql
```

#### 4.2 Create GraphQL Client

Create `/src/lib/apollo-client.ts`:

```typescript
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://your-wordpress-domain.com/graphql', // ⚠️ Change this!
  }),
  cache: new InMemoryCache(),
});

export default client;
```

#### 4.3 Update App.tsx

```typescript
import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo-client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* existing code */}
      </Router>
    </ApolloProvider>
  );
}
```

#### 4.4 Update Experts Page to Fetch from WordPress

Update `/src/app/pages/Experts.tsx`:

```typescript
import { useQuery, gql } from '@apollo/client';

const GET_EXPERTS = gql`
  query GetExperts {
    experts {
      nodes {
        id
        title
        expertFields {
          credentials
          specialty
          experience
          bio
          image {
            sourceUrl
          }
          rating
          reviews
        }
      }
    }
  }
`;

export function Experts() {
  const { loading, error, data } = useQuery(GET_EXPERTS);

  if (loading) return <div className="min-h-screen flex items-center justify-center">
    <div className="text-lg">Loading experts...</div>
  </div>;

  if (error) return <div>Error loading experts</div>;

  const experts = data.experts.nodes;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-16 text-center">Our Experts</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert: any) => (
            <div key={expert.id} className="bg-white rounded-2xl shadow-lg p-6">
              <img 
                src={expert.expertFields.image.sourceUrl} 
                alt={expert.title}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold text-center">{expert.title}</h3>
              <p className="text-[#0BA4AE] text-center mb-2">
                {expert.expertFields.credentials}
              </p>
              <p className="text-neutral-600 text-center mb-4">
                {expert.expertFields.specialty}
              </p>
              <p className="text-sm text-neutral-600">
                {expert.expertFields.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

#### 4.5 Update Other Pages (Optional)

For now, you can keep other pages static. Later, convert:
- Testimonials → Custom Post Type
- Blog Posts → WordPress posts
- Case Studies → Custom Post Type

---

### **Phase 5: Deploy React App (1 hour)**

#### 5.1 Deploy to Vercel

1. Go to **vercel.com** and sign up (free)
2. Click **"Add New Project"**
3. Import from GitHub/upload code
4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variable:
   - Name: `VITE_WORDPRESS_URL`
   - Value: `https://your-wordpress-domain.com`
6. Click **Deploy**

Your site will be live at: `https://your-project.vercel.app`

#### 5.2 Custom Domain (Optional)

In Vercel dashboard:
1. Go to **Settings → Domains**
2. Add your custom domain (e.g., `rethrive.com`)
3. Update DNS records as instructed

---

### **Phase 6: Setup Intake Form (30 minutes)**

#### 6.1 Create Form in WordPress

1. Go to **Contact Form 7 → Add New**
2. Form name: "Intake Form"
3. Add form fields:

```html
<label> Your name
    [text* your-name] </label>

<label> Your email
    [email* your-email] </label>

<label> Phone
    [tel your-phone] </label>

<label> Primary condition or concern
    [textarea* condition] </label>

<label> Insurance provider (optional)
    [text insurance] </label>

[submit "Submit"]
```

4. Copy the shortcode (e.g., `[contact-form-7 id="123"]`)

#### 6.2 Get Form Endpoint

Contact Form 7 has a REST API. The endpoint is:
```
https://your-wordpress-domain.com/wp-json/contact-form-7/v1/contact-forms/123/feedback
```

Replace `123` with your form ID.

#### 6.3 Update Intake.tsx

Update your intake form to POST to WordPress:

```typescript
const handleSubmit = async (data: any) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const response = await fetch(
      'https://your-wordpress-domain.com/wp-json/contact-form-7/v1/contact-forms/123/feedback',
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();
    
    if (result.status === 'mail_sent') {
      setShowSuccess(true);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
```

---

## ✅ **Testing Checklist**

- [ ] WordPress GraphQL endpoint works
- [ ] Experts page loads from WordPress
- [ ] All images display correctly
- [ ] Intake form submits to WordPress
- [ ] Mobile responsive design works
- [ ] Animations play correctly
- [ ] All navigation links work
- [ ] Blog page displays posts

---

## 🎯 **Final Steps**

### For Production:
1. **SSL Certificate:** Ensure WordPress has HTTPS
2. **Security:** Install Wordfence plugin
3. **Backup:** Install UpdraftPlus plugin
4. **Performance:** Install WP Rocket
5. **SEO:** Install Yoast SEO

### Client Access:
1. Create WordPress admin account for client
2. Show them how to:
   - Add/edit experts
   - Create blog posts
   - View form submissions (Contact Form 7 → Contact Forms → submissions)

---

## 📞 **Troubleshooting**

### Issue: CORS errors
**Solution:** Update `wp-config.php` with CORS headers (see Phase 2.3)

### Issue: GraphQL returns empty data
**Solution:** 
1. Check if WPGraphQL plugin is active
2. Visit `/graphql` and test query in GraphiQL
3. Ensure custom post types have "Show in REST API" enabled

### Issue: Images don't load
**Solution:**
1. Check image URLs in WordPress media library
2. Update GraphQL query to include `sourceUrl`
3. Ensure CORS allows image loading

### Issue: Forms don't submit
**Solution:**
1. Check Contact Form 7 form ID
2. Verify REST API endpoint URL
3. Check browser console for errors

---

## 🚀 **You're Done!**

Your ReThrive site is now:
- ✅ Running on modern React frontend (Vercel)
- ✅ Powered by WordPress backend (your hosting)
- ✅ Client can edit content in WordPress
- ✅ All animations and functionality preserved
- ✅ Intake form stores data securely in WordPress

**Total time:** 4-8 hours depending on experience level

---

## 📚 **Next Steps**

Want to take it further?
1. Convert testimonials to WordPress custom post type
2. Add user authentication (WordPress JWT)
3. Set up automatic deployments
4. Add more dynamic content

**Need help?** Refer to:
- `WORDPRESS_CONVERSION_GUIDE.md` (detailed guide)
- `ASSET_EXPORT_LIST.md` (all assets to download)
- WPGraphQL docs: https://www.wpgraphql.com
