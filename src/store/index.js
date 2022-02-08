import { createStore } from 'vuex'

export default createStore({
  state: {
    OPERATING_SYSTEMS: {
      Windows: {
        name: "Windows 10",
        iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/windows-logo.png"
      },
      Mac: {
        name: "Mac OS",
        iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/apple-logo.png"
      },
      Linux: {
        name: "Linux",
        iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/linux-logo.png"
      },
      Android: {
        name: "Android",
        iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/android-logo.png"
      },
      iOS: {
        name: "iOS",
        iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/apple-logo.png"
      }
    },
    PLATFORM_OS_LIST: {
      pc: [
        {
          iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/windows-download-logo.png",
          downloadURL: 'https://www.microsoft.com/en-us/store/apps/windows',
          osIndex: 1
        },
        {
            iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/apple-download-logo.png",
            downloadURL: 'https://www.apple.com/store',
            osIndex: 2
        },
        {
            iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/linux-logo.png",
            downloadURL: 'https://flathub.org/home',
            osIndex: 3
        }
      ],
      mobile: [
        {
          iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/android-logo.png",
          downloadURL: 'https://play.google.com/store?hl=en_US&gl=US',
          osIndex: 4
        },
        {
            iconURL: "https://raw.githubusercontent.com/RunItBack1127/bumbox_website/main/src/assets/icons/apple-download-logo.png",
            downloadURL: 'https://www.apple.com/store',
            osIndex: 5
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
