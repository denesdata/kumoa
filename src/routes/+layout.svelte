<script lang="ts">
  import type { LayoutData } from './$types'
  import { onMount } from 'svelte'
  import { browser, dev } from '$app/environment'
  import { genTags } from '$lib/utils/posts'
  import { posts, tags } from '$lib/stores/posts'
  import { registerSW } from 'virtual:pwa-register'
  import Head from '$lib/components/head_static.svelte'
  import Header from '$lib/components/header.svelte'
  import Transition from '$lib/components/transition.svelte'
  import Hirek from '$lib/components/hirek.svelte'
  import Terkep from '$lib/components/terkep.svelte'
  import Adat from '$lib/components/adat.svelte'
  import Blog from '$lib/components/blog.svelte'
  import Archivum from '$lib/components/archivum.svelte'
  import 'uno.css'
  import '../app.pcss'
  import PostCard from '$lib/components/post_card.svelte'

  export let data: LayoutData

  let { res, path } = data

  $: if (data) path = data.path

  posts.set(res)
  tags.set(genTags(res))
  onMount(
    () =>
      !dev &&
      browser &&
      registerSW({
        immediate: true,
        onRegistered: r => r && setInterval(async () => await r.update(), 198964),
        onRegisterError: error => console.error(error)
      })
  )
</script>

<Head />

<Header {path} />

<Transition {path}>
  {#if path == '/blog'}
    <Blog />
  {:else if path == '/hirek'}
    <Hirek />
  {:else if path == '/terkep'}
    <Terkep />
  {:else if path == '/adat'}
    <Adat />
  {:else if path == '/archivum'}
    <Archivum />
  {:else}
    <!-- {path.split('/')[1]} -->
    <slot />
  {/if}
</Transition>
