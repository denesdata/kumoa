<script lang="ts">
  import { site } from '$lib/config/site'
</script>

<!-- <div class="h-card flex flex-col gap-4 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs"> -->
<!-- <div class="sticky top-24 hidden xl:flex flex-col gap-4 w-fit h-[calc(100vh-12rem)] ml-auto mr-8 my-8 justify-center"> -->
<div
  class="h-card flex flex-col gap-4 sticky top-16 mt-20 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs">
  <a href={site.protocol + site.domain} class="hidden u-url u-uid">Minidash</a>
  <figure class="relative mx-auto group">
    <img class="u-photo rounded-full transition-shadow z-10 w-24 h-24 md:w-32 md:h-32" src="/assets/logo/c.png" alt="" />
  </figure>
  <div class="text-center flex flex-col gap-2">
    <h2 class="text-2xl font-bold mt-0 mb-2 p-name">Minidash</h2>
    <p class="opacity-75 p-note">Minidash description: charts and stuff</p>
    <p class="opacity-75 p-note">
      Last updated on:
      <b>21 March 2023</b>
    </p>
  </div>
  <div class="grid grid-cols-2 mt-8 gap-2">
    <figure class="relative mx-auto group">
      <img class="u-photo rounded-full transition-shadow z-10 w-24 h-24 md:w-32 md:h-32" src="/assets/logo/r.png" alt="" />
    </figure>
    <figure class="relative mx-auto group">
      <img class="u-photo rounded-full transition-shadow z-10 w-24 h-24 md:w-32 md:h-32" src="/assets/logo/a.png" alt="" />
    </figure>
    <figure class="relative mx-auto group">
      <img
        class="u-photo rounded-full transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"
        src="/assets/logo/orange-c.png"
        alt="" />
    </figure>
    <figure class="relative mx-auto group">
      <img
        class="u-photo rounded-full transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"
        src="/assets/logo/orange-a.png"
        alt="" />
    </figure>

    <figure class="relative mx-auto group">
      <img
        class="u-photo rounded-full transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"
        src="/assets/logo/purple-globe.png"
        alt="" />
    </figure>
    <figure class="relative mx-auto group">
      <img
        class="u-photo rounded-full transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"
        src="/assets/logo/blue-globe.png"
        alt="" />
    </figure>
  </div>
</div>
