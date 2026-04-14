import { createClient, SupabaseClient } from "@supabase/supabase-js"

let _client: SupabaseClient | null = null

/**
 * Client Supabase côté serveur uniquement.
 * Utilise la clé service role — ne jamais exposer côté client.
 * Créé à la demande pour éviter les erreurs au build.
 */
export function getSupabaseServer(): SupabaseClient {
  if (_client) return _client

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Variables d'environnement SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquantes."
    )
  }

  _client = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })

  return _client
}
