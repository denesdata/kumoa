<script lang="ts">
  import { fly } from 'svelte/transition'
  import { browser } from '$app/environment'
  import Card from '$lib/components/post_card.svelte'
  import Head from '$lib/components/head.svelte'
  import Toc from '$lib/components/post_toc.svelte'
  import Action from '$lib/components/post_action.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Category from '$lib/components/category.svelte'
  import MiniDash from '$lib/components/minidash.svelte'
  export let post: Urara.Post
</script>

<Head {post} />

<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap">
  <!-- <div
    in:fly={{ x: 25, duration: 300, delay: 500 }}
    out:fly={{ x: 25, duration: 300 }}
    class="flex-1 columns-1 top-24 xl:order-first ease-out transform mx-auto xl:ml-0 xl:ml-12 xl:max-w-md"> -->
  <!-- <div
    in:fly={{ x: 25, duration: 300, delay: 500 }}
    out:fly={{ x: 25, duration: 300 }}
    class="flex-1 w-full max-w-screen-md order-first ease-out transform mx-auto xl:mr-0 sticky top-24 hidden xl:flex flex-col gap-4 w-fit h-[calc(100vh-12rem)] ml-auto mr-8 my-8 justify-center"> -->
  <div
    in:fly={{ x: 25, duration: 300, delay: 500 }}
    out:fly={{ x: 25, duration: 300 }}
    class="flex-1 w-full max-w-screen-md order-first ease-out transform mx-auto xl:mr-0">
    {#if browser}
      <Category />
      <MiniDash />
      <!-- <Action {post} /> -->
    {/if}
  </div>
  <div
    in:fly={{ x: -25, duration: 300, delay: 500 }}
    out:fly={{ x: -25, duration: 300 }}
    class="flex-1 w-full max-w-screen-md xl:order-last ease-out transform mx-auto xl:mr-0">
    {#if browser && post.toc}
      <div class="h-full hidden xl:block">
        <Toc toc={post.toc} />
      </div>
    {/if}
  </div>
  <div class="flex-none w-full max-w-screen-md mx-auto xl:mx-0 mt-8">
    <Card {post}>
      <slot />
    </Card>
    <Footer sticky={true} />
  </div>
</div>
