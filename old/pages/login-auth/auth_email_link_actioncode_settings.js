const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://alienbot.thealiendoctor.com/auth/authed',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.ufoStudios.ab-20'
    },
    android: {
      packageName: 'com.ufoStudios.ab-20',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };