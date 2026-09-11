-- Run this once in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  location text,
  description text,
  cover_url text,
  video_url text,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  review_text text not null,
  rating int not null default 5 check (rating between 1 and 5),
  published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.reviews enable row level security;

drop policy if exists "Public can view published projects" on public.projects;
create policy "Public can view published projects" on public.projects for select using (published = true);
drop policy if exists "Authenticated users manage projects" on public.projects;
create policy "Authenticated users manage projects" on public.projects for all to authenticated using (true) with check (true);

drop policy if exists "Public can view published reviews" on public.reviews;
create policy "Public can view published reviews" on public.reviews for select using (published = true);
drop policy if exists "Authenticated users manage reviews" on public.reviews;
create policy "Authenticated users manage reviews" on public.reviews for all to authenticated using (true) with check (true);

insert into storage.buckets (id, name, public) values ('apex-media','apex-media',true)
on conflict (id) do update set public = true;

drop policy if exists "Public media read" on storage.objects;
create policy "Public media read" on storage.objects for select using (bucket_id='apex-media');
drop policy if exists "Authenticated media upload" on storage.objects;
create policy "Authenticated media upload" on storage.objects for insert to authenticated with check (bucket_id='apex-media');
drop policy if exists "Authenticated media update" on storage.objects;
create policy "Authenticated media update" on storage.objects for update to authenticated using (bucket_id='apex-media');
drop policy if exists "Authenticated media delete" on storage.objects;
create policy "Authenticated media delete" on storage.objects for delete to authenticated using (bucket_id='apex-media');
