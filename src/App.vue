<template>
  <main id="site-landing-content">
    <div id="site-gradient-background"></div>
    <model-display @modelLoaded="initializeSiteContent" :modelComponentBlur="this.modelComponentBlur" />
    <section :class="this.displaySiteContent === true ? 'display-site-content' : ''" id="site-intro-content">
      <site-navigation-menu @scroll="scrollTo" />
      <site-hero @scroll="scrollTo" />
    </section>
    <div :class="this.showScrollMenu ? 'show-scroll-menu' : ''" id="scroll-navigation-menu">
      <site-navigation-menu @scroll="scrollTo" />
    </div>
    <div :class="this.displaySiteContent === true ? 'display-site-content' : ''" id="site-contents">
      <speaker-brand-gallery />
      <content-section-header :sectionTitle="'Features'" />
      <app-features />
      <content-section-header :sectionTitle="'Download'" />
      <download-app />
      <content-section-header :sectionTitle="'Contact Us'" />
      <contact-section />
      <socials-advert />
      <site-footer />
    </div>
  </main>
</template>

<script>
import ModelDisplay from '@/components/ModelDisplay.vue';
import SiteNavigationMenu from '@/components/SiteNavigationMenu.vue';
import SiteHero from '@/components/SiteHero.vue';
import SpeakerBrandGallery from '@/components/SpeakerBrandGallery.vue';
import ContentSectionHeader from '@/components/ContentSectionHeader.vue';
import AppFeatures from '@/components/AppFeatures.vue';
import DownloadApp from '@/components/DownloadApp.vue';
import SocialsAdvert from '@/components/SocialsAdvert.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import ContactSection from '@/components/ContactSection.vue';

import { ref, computed } from 'vue';
import * as TWEEN from '@tweenjs/tween.js';
import * as scrollToElement from 'scroll-to-element';

export default {
  name: 'App',
  components: {
    ModelDisplay,
    SiteNavigationMenu,
    SiteHero,
    SpeakerBrandGallery,
    ContentSectionHeader,
    AppFeatures,
    DownloadApp,
    SocialsAdvert,
    SiteFooter,
    ContactSection
  },
  setup() {
    const modelComponentBlur = ref(100);
    const displaySiteContent = ref(false);
    const fadeFeatures = ref(false);
    const showScrollMenu = ref(false);

    const blur = {
      blur: 100
    }
    const modelObfuscator = new TWEEN.Tween(blur).
      to({ blur: 0 }, 2500).easing(TWEEN.Easing.Quadratic.Out).
      onUpdate(() => {
        modelComponentBlur.value = blur.blur;
      }).
      onComplete(() => {
        displaySiteContent.value = true;
      });
    
    function animateBlur() {
      requestAnimationFrame(animateBlur);
      TWEEN.update();
    }
    requestAnimationFrame(animateBlur);

    const initializeSiteContent = computed(() => {
      modelObfuscator.start();
      return null;
    });

    return {
      modelComponentBlur,
      displaySiteContent,
      fadeFeatures,
      showScrollMenu,
      initializeSiteContent
    }
  },
  methods: {
    scrollTo: function({ element }) {
      scrollToElement(element, {
        offset: -250,
        duration: 1500
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.showScrollMenu = window.scrollY >= 500;
    });

    document.title = "Bumbox\xa0\xa0|\xa0\xa0Universal Bluetooth Dashboard";
  }
};
</script>

<style lang="less">
@import (css) url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 20px;
}

#app {
  font-family: Manrope, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: #fff;
  color: #000;
}

a {
  display: inline-block;
  text-decoration: none;
  color: #000;
}

ul {
  list-style: none;
}

#site-landing-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #fff 60%, rgba(0, 0, 0, 0.1) 100%);
  z-index: 1000;
}

div {
  &#site-model-display {
    z-index: -1000;
  }

  &#scroll-navigation-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100vw;
    opacity: 0.0;
    transition: opacity 750ms ease-in-out;

    &.show-scroll-menu {
      opacity: 1.0;
    }
  }
}

section {

  &#site-intro-content {
    pointer-events: none;
    opacity: 0.0;
    transition: opacity 300ms ease-in;
    z-index: 1000;

    &.display-site-content {
      opacity: 1.0;
    }
  }
}

div {

  &#site-contents {
    pointer-events: none;
    opacity: 0.0;
    transition: opacity 300ms ease-in;
    z-index: 1000;

    &.display-site-content {
      opacity: 1.0;
    }
  }
}

@font-face {
    src: url('https://raw.githubusercontent.com/RunItBack1127/bumbox-portfolio-website/main/src/assets/fonts/Expansiva.otf');
    font-family: 'Expansiva';
}
</style>
