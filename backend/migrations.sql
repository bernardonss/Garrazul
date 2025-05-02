-- Tabela para Cardápio
create table if not exists menu (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text not null,
  price numeric(10,2) not null,
  category text not null check (
    category in (
      'pratos_principais',
      'bebidas',
      'sobremesas',
      'aperitivos'
    )
  ),
  image_url text,
  available boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela para Reservas
create table if not exists reservations (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text not null,
  date timestamp with time zone not null,
  number_of_people integer not null,
  special_requests text,
  status text not null default 'pending' check (
    status in ('pending', 'confirmed', 'cancelled')
  ),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela para Feedback
create table if not exists feedback (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela para Promoções
create table if not exists promotions (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text not null,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  image_url text,
  active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Função para atualizar o timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language 'plpgsql';

-- Trigger para atualizar o timestamp
create trigger update_menu_updated_at
    before update on menu
    for each row
    execute function update_updated_at_column();

create trigger update_reservations_updated_at
    before update on reservations
    for each row
    execute function update_updated_at_column();

create trigger update_promotions_updated_at
    before update on promotions
    for each row
    execute function update_updated_at_column();
