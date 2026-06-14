export const INTRO_STORAGE_KEY = "hustlgram-intro-seen";
export const INTRO_ACTIVE_CLASS = "hg-intro-active";
export const INTRO_EXIT_MS = 2500;
export const INTRO_REMOVE_MS = 3100;

export function isLeadReportPath(pathname: string) {
  return pathname.startsWith("/lead-reports");
}

/** Runs in <head> before paint to avoid a flash of page content before the intro. */
export const INTRO_BOOT_SCRIPT = `(function(){try{var p=location.pathname;if(p.indexOf("/lead-reports")===0){document.documentElement.classList.remove(${JSON.stringify(INTRO_ACTIVE_CLASS)});return;}var k=${JSON.stringify(INTRO_STORAGE_KEY)};if(!sessionStorage.getItem(k)){document.documentElement.classList.add(${JSON.stringify(INTRO_ACTIVE_CLASS)});}}catch(e){}})();`;

export function clearIntroLock() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.remove(INTRO_ACTIVE_CLASS);
  document.body.style.overflow = "";
}

/** Unstick intro after bfcache / browser-back restores. */
export function resetIntroAfterNavigation() {
  clearIntroLock();
  if (typeof document === "undefined") return;
  const splash = document.getElementById("intro-splash");
  if (splash) {
    splash.style.display = "none";
    splash.setAttribute("aria-hidden", "true");
  }
}
