# WordPress Conversion - Troubleshooting Guide

Common issues and solutions when converting ReThrive to WordPress.

---

## 🔍 **Quick Diagnosis**

Use this flowchart to identify your issue:

```
Is your problem with...?

├─ WordPress Setup
│  ├─ Installation issues → See Section A
│  ├─ Plugin errors → See Section B
│  └─ GraphQL not working → See Section C
│
├─ React App
│  ├─ Build errors → See Section D
│  ├─ API connection errors → See Section E
│  └─ Deployment issues → See Section F
│
├─ Data/Content
│  ├─ Images not loading → See Section G
│  ├─ Empty data → See Section H
│  └─ Forms not working → See Section I
│
└─ Performance/Security
   ├─ Site is slow → See Section J
   └─ Security concerns → See Section K
```

---

## A. WordPress Installation Issues

### Problem: Can't install WordPress
**Symptoms:**
- 500 Internal Server Error
- White screen
- Installation wizard doesn't appear

**Solutions:**

1. **Check PHP version**
   ```bash
   # In hosting control panel, check PHP version
   # Must be PHP 7.4 or higher
   ```
   ✅ Fix: Upgrade PHP in hosting control panel

2. **Check database connection**
   - Verify database name, username, password in wp-config.php
   - Test database connection in phpMyAdmin

3. **Check file permissions**
   ```bash
   # Files should be 644
   # Folders should be 755
   chmod 644 wp-config.php
   chmod 755 wp-content
   ```

4. **Increase PHP memory limit**
   Add to `wp-config.php`:
   ```php
   define('WP_MEMORY_LIMIT', '256M');
   ```

---

## B. Plugin Errors

### Problem: WPGraphQL plugin not activating
**Error:** "Plugin could not be activated because it triggered a fatal error"

**Solutions:**

1. **Check PHP version**
   - WPGraphQL requires PHP 7.4+
   - Upgrade in hosting control panel

2. **Install dependencies first**
   - Install WordPress 5.0+
   - Update all existing plugins

3. **Manual installation**
   ```bash
   # Download from wordpress.org/plugins/wp-graphql
   # Upload via FTP to /wp-content/plugins/
   # Activate via admin panel
   ```

### Problem: ACF (Advanced Custom Fields) not showing fields
**Symptoms:**
- Custom fields don't appear in editor
- Fields not exposed in GraphQL

**Solutions:**

1. **Verify field group location rules**
   - Go to Custom Fields → Field Groups
   - Check "Location" section
   - Must be set to correct post type

2. **Show in GraphQL**
   - Edit field group
   - Check "Show in GraphQL" option
   - Set GraphQL field name

3. **Install WPGraphQL for ACF**
   ```
   Plugin: WPGraphQL for Advanced Custom Fields
   Required for ACF fields to appear in GraphQL
   ```

---

## C. GraphQL Issues

### Problem: /graphql endpoint returns 404
**Error:** "Not Found" when visiting `yourdomain.com/graphql`

**Solutions:**

1. **Flush permalinks**
   - Go to Settings → Permalinks
   - Click "Save Changes" (don't change anything)
   - Try /graphql again

2. **Check plugin activation**
   - Go to Plugins → Installed Plugins
   - Ensure WPGraphQL is **Active** (not just installed)

3. **Check .htaccess**
   Ensure this line exists:
   ```apache
   RewriteRule ^graphql$ /index.php [L]
   ```

4. **Test with GraphiQL**
   Visit: `yourdomain.com/graphql`
   Should see interactive GraphQL IDE

### Problem: GraphQL returns empty data
**Error:** Query succeeds but returns null/empty array

**Solutions:**

1. **Check post type registration**
   ```php
   // In functions.php or plugin
   register_post_type('expert', array(
       'show_in_graphql' => true,        // ← Must be true!
       'graphql_single_name' => 'Expert',
       'graphql_plural_name' => 'Experts',
   ));
   ```

2. **Publish some content**
   - Draft posts don't appear in GraphQL
   - Publish at least one test expert/post

3. **Test query in GraphiQL**
   ```graphql
   query {
     experts {
       nodes {
         id
         title
       }
     }
   }
   ```

### Problem: CORS errors in browser console
**Error:** "Access-Control-Allow-Origin" blocked

**Solutions:**

1. **Add CORS headers to wp-config.php**
   ```php
   // Add before "That's all, stop editing!"
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type, Authorization');
   ```

2. **Use plugin: WP CORS**
   - Install "WP CORS" plugin
   - Activate
   - Configure allowed origins

3. **Check .htaccess**
   Add:
   ```apache
   <IfModule mod_headers.c>
     Header set Access-Control-Allow-Origin "*"
   </IfModule>
   ```

---

## D. React App Build Errors

### Problem: npm install fails
**Error:** "Cannot find module" or "ERESOLVE unable to resolve dependency tree"

**Solutions:**

1. **Clear npm cache**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Use correct Node version**
   ```bash
   node --version  # Should be 16.x or 18.x
   # If wrong, install nvm and switch versions
   ```

3. **Install with legacy peer deps**
   ```bash
   npm install --legacy-peer-deps
   ```

### Problem: Build fails with Tailwind errors
**Error:** "Cannot find module '@tailwindcss/vite'"

**Solution:**
```bash
npm install @tailwindcss/vite@latest tailwindcss@latest --save-dev
npm run build
```

### Problem: Motion/Framer Motion import errors
**Error:** "Module not found: Can't resolve 'motion/react'"

**Solution:**
```bash
# Install motion package
npm install motion

# Update imports in code:
import { motion } from 'motion/react'  // ✅ Correct
import { motion } from 'framer-motion' // ❌ Old package
```

---

## E. React API Connection Errors

### Problem: Apollo Client errors
**Error:** "Network error: Failed to fetch"

**Solutions:**

1. **Check WordPress URL**
   ```typescript
   // In apollo-client.ts or .env
   const client = new ApolloClient({
     uri: 'https://your-wordpress.com/graphql', // ← Check this!
   });
   ```

2. **Verify HTTPS**
   - WordPress must have SSL certificate
   - URL must start with `https://`

3. **Test endpoint manually**
   ```bash
   curl https://your-wordpress.com/graphql \
     -H "Content-Type: application/json" \
     -d '{"query":"{ __typename }"}'
   ```

### Problem: Data not updating in React app
**Symptoms:**
- Changed content in WordPress
- React app still shows old data

**Solutions:**

1. **Disable Apollo cache (for testing)**
   ```typescript
   const client = new ApolloClient({
     uri: '...',
     cache: new InMemoryCache(),
     defaultOptions: {
       watchQuery: {
         fetchPolicy: 'network-only', // ← Force fresh data
       },
     },
   });
   ```

2. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

3. **Check query variables**
   - Ensure query is fetching published posts
   - Check filters (status, date, etc.)

---

## F. Deployment Issues

### Problem: Vercel deployment fails
**Error:** "Build failed" or "Command exited with 1"

**Solutions:**

1. **Check build command**
   In Vercel settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework: Vite

2. **Add environment variables**
   In Vercel dashboard:
   - Key: `VITE_WORDPRESS_URL`
   - Value: `https://your-wordpress.com`

3. **Check Node version**
   Add `.nvmrc` file:
   ```
   18
   ```

4. **View build logs**
   - Click on failed deployment
   - Read error messages
   - Fix errors in code

### Problem: Site deploys but pages are blank
**Symptoms:**
- Deployment succeeds
- White screen or blank page

**Solutions:**

1. **Check browser console**
   - Open DevTools (F12)
   - Look for JavaScript errors
   - Check Network tab for failed requests

2. **Verify environment variables**
   - Check Vercel dashboard → Settings → Environment Variables
   - Redeploy after adding variables

3. **Test locally first**
   ```bash
   npm run build
   npm run preview
   # Should work locally before deploying
   ```

---

## G. Image Loading Issues

### Problem: Images don't display
**Symptoms:**
- Broken image icons
- 404 errors in Network tab

**Solutions:**

1. **Check image URLs in WordPress**
   ```graphql
   query {
     experts {
       nodes {
         expertFields {
           image {
             sourceUrl     # ← Make sure this returns full URL
             mediaItemUrl  # ← Alternative field
           }
         }
       }
     }
   }
   ```

2. **Verify CORS for images**
   WordPress must allow cross-origin image loading

3. **Use WordPress CDN plugin**
   - Install "WP Offload Media" or similar
   - Serve images from CDN

4. **Check file permissions**
   ```bash
   # wp-content/uploads should be 755
   chmod 755 wp-content/uploads
   ```

### Problem: Images uploaded but not showing in media library
**Solution:**
1. Check PHP upload limits in hosting control panel
2. Increase limits in `.htaccess`:
   ```apache
   php_value upload_max_filesize 64M
   php_value post_max_size 64M
   ```

---

## H. Empty Data Issues

### Problem: useQuery returns no data
**Symptoms:**
- `data` is undefined
- `loading` stays true forever
- No errors shown

**Solutions:**

1. **Add error handling**
   ```typescript
   const { loading, error, data } = useQuery(GET_EXPERTS);
   
   console.log('Loading:', loading);
   console.log('Error:', error);
   console.log('Data:', data);
   
   if (error) {
     console.error('GraphQL Error:', error.message);
     console.error('Network Error:', error.networkError);
   }
   ```

2. **Test query in GraphiQL first**
   - Visit `yourdomain.com/graphql`
   - Paste your query
   - See if it returns data

3. **Check field names match**
   ```typescript
   // GraphQL query field names must match exactly
   query GetExperts {
     experts {           // ← Must match registered name
       nodes {
         expertFields {  // ← Must match ACF group name
           name          // ← Must match ACF field name
         }
       }
     }
   }
   ```

---

## I. Form Submission Issues

### Problem: Contact Form 7 not receiving submissions
**Symptoms:**
- Form submits but no email received
- No record in CF7 database

**Solutions:**

1. **Test WordPress mail**
   - Install "WP Mail SMTP" plugin
   - Configure with Gmail/SendGrid
   - Test email sending

2. **Check form ID**
   ```typescript
   // In your React code
   const formId = 123; // ← Must match actual CF7 form ID
   ```

3. **Check API endpoint**
   ```typescript
   const endpoint = `https://your-wp.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;
   ```

4. **Enable CF7 logging**
   Add to `wp-config.php`:
   ```php
   define('WPCF7_VALIDATE_CONFIGURATION', true);
   ```

### Problem: Form submission returns error
**Error:** "Validation failed" or "Invalid form"

**Solutions:**

1. **Check field names match**
   ```javascript
   // React form field names must match CF7 field names
   <input name="your-name" />    // ← Must match CF7 shortcode
   // CF7: [text* your-name]
   ```

2. **Send as FormData**
   ```javascript
   const formData = new FormData();
   formData.append('your-name', data.name);
   formData.append('your-email', data.email);
   
   await fetch(endpoint, {
     method: 'POST',
     body: formData, // ← Not JSON!
   });
   ```

---

## J. Performance Issues

### Problem: Site is slow
**Symptoms:**
- Long load times (>3 seconds)
- Slow API responses

**Solutions:**

1. **Enable WordPress caching**
   - Install "WP Rocket" or "W3 Total Cache"
   - Enable page caching
   - Enable object caching

2. **Optimize GraphQL queries**
   ```graphql
   # ❌ Don't fetch everything
   query {
     experts {
       nodes {
         id
         title
         content  # ← Large field
       }
     }
   }
   
   # ✅ Only fetch what you need
   query {
     experts {
       nodes {
         id
         title
       }
     }
   }
   ```

3. **Use CDN for images**
   - Install "WP Offload Media"
   - Store images on AWS S3 or Cloudflare

4. **Enable Vercel analytics**
   - Check Web Vitals in Vercel dashboard
   - Identify slow components

### Problem: WordPress admin is slow
**Solutions:**
1. Disable unused plugins
2. Upgrade hosting plan (more RAM)
3. Use managed WordPress hosting (WP Engine)

---

## K. Security Issues

### Problem: WordPress hacked/malware detected
**Solutions:**

1. **Scan for malware**
   - Install "Wordfence Security"
   - Run full scan
   - Remove threats

2. **Reset all passwords**
   - Admin users
   - Database password
   - FTP password

3. **Update everything**
   ```bash
   # Update WordPress core
   # Update all plugins
   # Update PHP version
   ```

4. **Add security headers**
   In `.htaccess`:
   ```apache
   Header set X-Content-Type-Options "nosniff"
   Header set X-Frame-Options "SAMEORIGIN"
   Header set X-XSS-Protection "1; mode=block"
   ```

### Problem: Brute force login attempts
**Solutions:**
1. Install "Limit Login Attempts"
2. Enable 2-factor authentication
3. Change login URL with "WPS Hide Login"

---

## 🆘 **Emergency Checklist**

Site completely broken? Try these in order:

1. **Disable all plugins**
   ```bash
   # Via FTP, rename /wp-content/plugins to /wp-content/plugins-old
   # Log into admin
   # Rename back
   # Activate plugins one by one
   ```

2. **Switch to default theme**
   - Via FTP, rename current theme folder
   - WordPress will use default theme

3. **Check error logs**
   ```bash
   # View in hosting control panel
   # Or check /wp-content/debug.log
   ```

4. **Restore from backup**
   - Use UpdraftPlus to restore last working backup
   - Or restore via hosting control panel

5. **Contact support**
   - Hosting provider support
   - WordPress.org forums
   - Hire developer on Upwork/Fiverr

---

## 📞 **Getting Help**

### Before asking for help, collect this info:

1. **Error message** (exact text)
2. **Browser console errors** (F12 → Console tab)
3. **WordPress version** (Dashboard → Updates)
4. **Plugin versions** (Dashboard → Plugins)
5. **PHP version** (Dashboard → Site Health)
6. **What you were doing when error occurred**

### Where to get help:

- **WordPress.org Forums:** https://wordpress.org/support/
- **WPGraphQL Discord:** https://discord.gg/AGVBqqyaUY
- **Stack Overflow:** Tag questions with `wordpress`, `wpgraphql`, `react`
- **Hire expert:** Upwork, Fiverr, Codeable

---

## ✅ **Verification Checklist**

Use this to verify everything works:

```bash
# WordPress Backend Tests
☐ Can log into wp-admin
☐ GraphQL endpoint responds (yourdomain.com/graphql)
☐ Custom post types visible in admin
☐ ACF fields show in editor
☐ Can publish test expert
☐ Expert appears in GraphQL query
☐ Forms submit successfully
☐ Emails received from forms

# React Frontend Tests
☐ npm run dev works locally
☐ npm run build completes without errors
☐ All pages load
☐ Data fetches from WordPress
☐ Images display correctly
☐ Forms submit
☐ Mobile responsive
☐ Animations work

# Production Tests
☐ Deployed to Vercel successfully
☐ Custom domain configured
☐ HTTPS enabled
☐ No console errors
☐ Performance: PageSpeed >90
☐ Security: SSL Labs A rating
```

---

## 🔧 **Useful Commands**

```bash
# WordPress
wp plugin list                    # List all plugins
wp cache flush                    # Clear WordPress cache
wp db export                      # Backup database

# React
npm run dev                       # Start dev server
npm run build                     # Build for production
npm run preview                   # Preview build locally

# Vercel
vercel dev                        # Test locally with Vercel
vercel deploy                     # Deploy to preview
vercel --prod                     # Deploy to production

# Debugging
curl -I https://yoursite.com      # Check HTTP headers
curl https://yoursite.com/graphql # Test GraphQL endpoint
```

---

**Still stuck?** Create a detailed issue report and seek help in WordPress/React communities!
