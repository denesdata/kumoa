<script lang="ts">
  import { site } from '$lib/config/site'
  // export let post: Urara.Post
  // let category = post.slug.slice(1).split('/')[0]
  import { page } from '$app/stores'
  let category = $page.url.toString().split('/')[3]
</script>

<div
  class="h-card top-8 flex flex-col gap-4 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs">
  <a href={site.protocol + site.domain} class="hidden u-url u-uid">{site.category[category].name}</a>
  <figure class="relative mx-auto group">
    {#if category}
      {#if site.category[category].img}
        <img
          class="u-photo rounded-full transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"
          src={site.category[category].img}
          alt="" />
      {/if}
    {/if}
  </figure>
  <div class="text-center flex flex-col gap-2">
    <h2 class="text-2xl font-bold mt-0 mb-2 p-name">{site.category[category].name}</h2>
    <p class="opacity-75 p-note">{@html site.category[category].description}</p>
  </div>
</div>
