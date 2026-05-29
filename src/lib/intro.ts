export const INTRO_STORAGE_KEY = "hustlgram-intro-seen";
export const INTRO_ACTIVE_CLASS = "hg-intro-active";
export const INTRO_EXIT_MS = 2500;
export const INTRO_REMOVE_MS = 3100;

/** Runs in <head> before paint to avoid a flash of page content before the intro. */
export const INTRO_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(INTRO_STORAGE_KEY)};if(!sessionStorage.getItem(k)){document.documentElement.classList.add(${JSON.stringify(INTRO_ACTIVE_CLASS)});}}catch(e){}})();`;
