<script setup>
import Header from "@/App.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import RoomsView from "@/views/RoomsView.vue";
</script>

<template>
  <h1>Boutique Hotel</h1>
  <ImageCarousel/>

  <div class="mt-3">
    <h2>Willkommen im Boutique Hotel,</h2>
    <p>
      Ihrem luxuriösen Zufluchtsort für unvergessliche Aufenthalte, umgeben von atemberaubender Natur. Unser stilvolles Hotel bietet eine elegante Kombination aus Komfort, Gastfreundschaft und erstklassigem Service, während es sich harmonisch in die natürliche Umgebung einfügt. Mit geräumigen Zimmern und Suiten, exquisiter Kulinarik in unserem hauseigenen Restaurant, einem entspannenden Wellnessbereich und modernen Tagungseinrichtungen, sind wir die ideale Wahl für Geschäftsreisende, Urlauber und Veranstaltungsplaner. Unsere einzigartige Lage ermöglicht es Ihnen, die Schönheit der umliegenden Natur zu genießen, sei es bei Wanderungen in den nahegelegenen Wäldern oder dem Blick auf majestätische Berge. Unser engagiertes Team freut sich darauf, Ihren Aufenthalt unvergesslich zu gestalten. Willkommen im Boutique Hotel – wo Gastfreundschaft auf höchstem Niveau mit der Natur in Einklang steht.
    </p>
  </div>

  <RoomsView/>
</template>
