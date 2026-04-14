-- ============================================================
-- Table : contact_submissions
-- À exécuter dans l'éditeur SQL de votre projet Supabase.
-- ============================================================

CREATE TABLE contact_submissions (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT        NOT NULL,
  email       TEXT        NOT NULL,
  company     TEXT,
  phone       TEXT,
  subject     TEXT        NOT NULL,
  message     TEXT        NOT NULL,
  status      TEXT        NOT NULL DEFAULT 'new',
  created_at  TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Index utile pour trier les demandes par date dans un backoffice
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions (created_at DESC);

-- ============================================================
-- Row Level Security
-- La table est uniquement accessible via la clé service role
-- (utilisée côté serveur dans lib/supabase.ts).
-- Les requêtes publiques (clé anon) sont refusées.
-- ============================================================

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Aucune policy publique : seul le service role peut lire/écrire.
-- Si vous avez besoin d'un accès backoffice via l'interface Supabase,
-- vous pouvez ajouter une policy spécifique à votre rôle admin.
