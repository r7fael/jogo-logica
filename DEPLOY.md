# Deploy na Vercel + Supabase

## 1. Criar projeto no Supabase

1. Crie um projeto em https://supabase.com.
2. Abra `Project Settings` > `API`.
3. Copie:
   - `Project URL`
   - chave publica `anon` ou `publishable`
4. Nao use a `service_role` key no front.

O multiplayer usa apenas Supabase Realtime com Broadcast/Presence. Nao precisa criar tabelas para este MVP.

## 2. Configurar variaveis na Vercel

No projeto da Vercel, abra `Settings` > `Environment Variables` e crie:

```text
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_ANON_KEY=SUA_CHAVE_PUBLICA
```

Marque `Production`, `Preview` e `Development` se quiser usar nos tres ambientes.

## 3. Deploy pela Vercel

1. Suba este repositorio para o GitHub.
2. Na Vercel, clique em `Add New` > `Project`.
3. Importe o repositorio.
4. Mantenha a raiz do projeto como a pasta atual do repositorio.
5. Framework preset: `Other`.
6. Build command: deixe vazio.
7. Output directory: deixe vazio.
8. Clique em `Deploy`.

O arquivo `vercel.json` redireciona `/` para `jogo/index.html` e mapeia os assets principais.

## 4. Testar multiplayer

1. Abra a URL da Vercel em duas abas ou dois navegadores.
2. Na primeira, clique em `Criar como atacante`.
3. Copie o codigo da sala.
4. Na segunda, digite o codigo e clique em `Entrar como defensor`.
5. O defensor deve ver os controles de defesa na lateral.

## 5. Rodar localmente

Para testar local sem Vercel, preencha `jogo/config.js` com os mesmos valores:

```js
window.LOGIC_BREACH_CONFIG = {
  SUPABASE_URL: "https://SEU-PROJETO.supabase.co",
  SUPABASE_ANON_KEY: "SUA_CHAVE_PUBLICA",
};
```

Na Vercel, `/api/config.js` sobrescreve esse arquivo usando as variaveis do projeto.
