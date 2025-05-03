document.addEventListener('DOMContentLoaded', () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const appStoreLink = document.getElementById('app-store-link');
    const googlePlayLink = document.getElementById('google-play-link');

    // Check for iOS (iPhone, iPad, iPod)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        if (appStoreLink) {
            appStoreLink.classList.add('highlight');
        }
    }
    // Check for Android
    else if (/android/i.test(userAgent)) {
        if (googlePlayLink) {
            googlePlayLink.classList.add('highlight');
        }
    }
    // Optional: You could add checks for other platforms if needed
    // else {
    //    // Neither iOS nor Android detected (e.g., Desktop)
    //    // You could potentially hide both or highlight neither
    // }
});