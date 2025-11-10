# Deployment Instructions

## Fixing .webp Images in Production

### 1. Build the Application
```bash
ng build --configuration production
```

### 2. Copy Server Configuration Files

After building, copy these files to your deployment server's root directory (same level as index.html):

- **.htaccess** (for Apache servers)
- **web.config** (for IIS/Windows servers)

These files ensure that:
- `.webp` images are served with the correct MIME type (`image/webp`)
- Angular routing works correctly
- Images are cached properly

### 3. Server Requirements

#### Apache Server
- Ensure `mod_mime` and `mod_rewrite` are enabled
- The `.htaccess` file will handle MIME types and routing

#### IIS Server
- The `web.config` file will configure MIME types and URL rewriting
- URL Rewrite module must be installed on IIS

#### Nginx Server
Add this to your nginx configuration:
```nginx
# Enable .webp MIME type
location ~* \.webp$ {
    add_header Content-Type image/webp;
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Angular routing fallback
location / {
    try_files $uri $uri/ /index.html;
}
```

### 4. Verify Deployment

After deployment, check:
1. Open browser developer tools (F12)
2. Check Network tab for image requests
3. Verify `.webp` images load with status 200
4. Check that `Content-Type: image/webp` header is present

### 5. Troubleshooting

If `.webp` images still don't load:
1. Check server logs for 404 errors
2. Verify files exist in `dist/yta-portal/assets/images/`
3. Check browser console for CORS or MIME type errors
4. Verify server configuration files are in the correct location
5. Clear browser cache and try again

### Notes
- The image fallback directive will automatically try `.png` versions if `.webp` fails
- Production builds use file hashing (`outputHashing: "all"`), which is handled automatically
- All assets from `src/assets` are copied to `dist/yta-portal/assets/` during build

