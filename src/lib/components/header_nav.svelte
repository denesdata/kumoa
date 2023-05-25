<script lang="ts">
  import { site } from '$lib/config/site'
  export let nav: { text: string; link?: string; children?: { text: string; link: string }[] }[]
  export let path: string
  export let title: string
  export let scrollY: number
  export let pin: boolean
  import { page } from '$app/stores'
  let category = $page.url.toString().split('/')[3]
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- reference: https://github.com/saadeghi/daisyui/issues/1285 -->
<div class="dropdown lg:hidden">
  <label for="navbar-dropdown" tabindex="0" class="btn btn-square btn-ghost">
    <span class="i-heroicons-outline-menu-alt-1" />
  </label>
  <ul
    id="navbar-dropdown"
    tabindex="0"
    class:hidden={!pin}
    class="menu menu-compact dropdown-content bg-base-100 text-base-content shadow-lg rounded-box min-w-max max-w-52 p-2
    ">
    {#each nav as { text, link, children }}
      {#if link && !children}
        <li>
          <a class:font-bold={link === path} href={link}>{text}</a>
        </li>
      {:else if children}
        <li tabindex="0">
          <span class:font-bold={children.some(({ link }) => link === path)} class="justify-between gap-1 max-w-[13rem]">
            {text}
            <span class="i-heroicons-solid-chevron-right mr-2" />
          </span>
          <ul class="bg-base-100 text-base-content shadow-lg p-2">
            {#each children as { text, link }}
              <li>
                <a class:font-bold={link === path} href={link}>{text}</a>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </ul>
</div>
<div class:swap-active={scrollY > 32 && title} class="swap order-last hidden lg:inline-grid">
  <button
    on:click={() => window.scrollTo(0, 0)}
    class:hidden={scrollY < 32 || !title}
    class="swap-on btn btn-ghost text-base font-normal normal-case transition-all duration-200">
    {#if category}
      <img src={site.category[category].img} alt={category} class="u-photo mr-3 z-10 w-14 h-7 md:w-7 md:h-7" />
    {/if}
    {title}
  </button>
  <ul class:hidden={scrollY > 64 && title} class="swap-off menu menu-horizontal p-0">
    {#each nav as { text, link, children }}
      {#if link && !children}
        <li>
          <a class="!rounded-btn" class:font-bold={link === path} href={link}>
            <img src={site.category[link.slice(1)].img} alt={link.slice(1)} class="u-photo z-10 w-14 h-7 md:w-7 md:h-7" />
            {text}
          </a>
        </li>
      {:else if children}
        <li>
          <span class:font-bold={children.some(({ link }) => link === path)} class="!rounded-btn gap-3">
            <img
              src={site.category[text.toLowerCase()].img}
              alt={text.toLowerCase()}
              class="u-photo z-10 w-16 h-8 md:w-8 md:h-8" />
            {text}
            <span class="i-heroicons-solid-chevron-down -mr-1" />
          </span>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul tabindex="0" class="menu rounded-box bg-base-100 text-base-content shadow-lg p-2">
            {#each children as { text, link }}
              <li>
                <a class:font-bold={link === path} href={link}>{text}</a>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </ul>
</div>
