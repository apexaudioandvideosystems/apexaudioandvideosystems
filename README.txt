APEX WEBSITE + ADMIN CMS

WHAT YOU CAN MANAGE
- Add/delete projects
- Upload project photos
- Upload project videos
- Add/delete customer reviews
- Publish content to the public homepage without editing HTML

SETUP
1. Create a free Supabase project at supabase.com.
2. In Supabase > SQL Editor, run supabase-setup.sql.
3. In Supabase > Authentication > Users, create your admin user (email + password).
4. In Supabase > Project Settings > API, copy the Project URL and anon/public key.
5. Open js/config.js and replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY.
6. Deploy this folder to Vercel.
7. Visit /admin/ and sign in.

SECURITY
- Only authenticated Supabase users can add/edit/delete projects, reviews, or uploads.
- Public visitors can only read published projects/reviews and public media.
- Do NOT put the Supabase service-role key in this website.

VIDEO NOTE
For very large videos, compress them before uploading or use YouTube/Vimeo embeds later. Supabase storage works well for shorter project clips.
