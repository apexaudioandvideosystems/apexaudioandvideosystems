-- Apex website database setup
create table if not exists public.social_links (
  id uuid primary key default gen_random_uuid(),
  platform text not null unique,
  url text not null default '',
  is_enabled boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.social_links(platform,url,is_enabled) values
('facebook','https://www.facebook.com/profile.php?id=61588828752135',true),
('instagram','https://www.instagram.com/apexaudioandvideollc',true),
('tiktok','https://www.tiktok.com/@apexaudiovideosystems',true),
('google','',true)
on conflict(platform) do update set
  url = case when excluded.url <> '' then excluded.url else public.social_links.url end;

alter table public.social_links enable row level security;

drop policy if exists "Public can read social links" on public.social_links;
drop policy if exists "Public can update social links" on public.social_links;
drop policy if exists "Authenticated can update social links" on public.social_links;
drop policy if exists "Authenticated can insert social links" on public.social_links;

create policy "Public can read social links"
on public.social_links for select
to anon, authenticated using (true);

create policy "Authenticated can update social links"
on public.social_links for update
to authenticated using (true) with check (true);

create policy "Authenticated can insert social links"
on public.social_links for insert
to authenticated with check (true);
