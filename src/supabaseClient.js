import { createClient } from "@supabase/supabase-js"

// Variáveis de ambiente com as credenciais do Supabase
const URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_KEY

// Criação do cliente para conexão com o banco de dados Supabase
export const supabase = createClient(URL, KEY)
