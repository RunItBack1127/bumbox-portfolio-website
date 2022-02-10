<template>
  <main id="site-landing-content" v-on:scroll="updateScrollMenu">
    <div id="site-gradient-background"></div>
    <model-display @modelLoaded="initializeSiteContent" :modelComponentBlur="this.modelComponentBlur" />
    <section class="site-transition-content" :class="this.displaySiteContent === true ? 'display-site-content' : ''" id="site-intro-content">
      <site-navigation-menu @scroll="scrollToElement" />
      <site-hero @scroll="scrollToElement" />
    </section>
    <div :class="this.showScrollMenu ? 'show-scroll-menu' : ''" id="scroll-navigation-menu">
      <site-navigation-menu @scroll="scrollToElement" />
    </div>
    <speaker-brand-gallery :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" />
    <content-section-header id="features-header" :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" :sectionTitle="'Features'" />
    <app-features :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" />
    <content-section-header id="download-header" :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" :sectionTitle="'Download'" />
    <download-app :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" />
    <content-section-header id="contact-header" :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" :sectionTitle="'Contact Us'" />
    <contact-section :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" />
    <socials-advert :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" />
    <site-footer :class="this.displaySiteContent === true ? 'display-site-content' : ''" class="site-transition-content" />
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

import { ref } from 'vue';
import * as TWEEN from '@tweenjs/tween.js';
import { scrollIntoView } from 'scroll-js';

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

    return {
      modelComponentBlur,
      displaySiteContent,
      fadeFeatures,
      showScrollMenu,
      initializeSiteContent: modelObfuscator.start()
    }
  },
  methods: {
    scrollToElement: function({ element }) {
      scrollIntoView(document.querySelector(element), document.querySelector('#site-landing-content'), {
        duration: 500
      });
    },
    updateScrollMenu: function() {
      this.showScrollMenu = document.querySelector('#site-landing-content').scrollTop >= 500;
    }
  },
  mounted() {
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
  overflow-x: hidden;
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
  z-index: 1000;
  overflow-x: hidden;
}

div {
  &#site-model-display {
    z-index: -1000;
  }

  &#scroll-navigation-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100vw;
    opacity: 0.0;
    pointer-events: none;
    transition: opacity 750ms ease-in-out;

    &.show-scroll-menu {
      opacity: 1.0;
      pointer-events: all;
    }
  }

  &#site-gradient-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, #fff 60%, rgba(0, 0, 0, 0.1) 100%);
    z-index: -10;
  }
}

.site-transition-content {
  pointer-events: none;
  opacity: 0.0;
  transition: opacity 300ms ease-in;
  z-index: 1000;

  &.display-site-content {
    opacity: 1.0;
    pointer-events: all;
  }
}

@media screen and (max-width: 388px) {
  :root {
    font-size: 14px;
  }
}

@media screen and (min-width: 389px) and (max-width: 576px) {
  :root {
    font-size: 16px;
  }
}

@media screen and (min-width: 1919px) {
  :root {
    font-size: 25px;
  }
}

@font-face {
    src: url('https://raw.githubusercontent.com/RunItBack1127/bumbox-portfolio-website/main/src/assets/fonts/Expansiva.otf');
    font-family: 'Expansiva';
}
</style>
