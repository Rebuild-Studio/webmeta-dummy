class PageManager {
  endOfPage = false;
  hasTransition = false;

  setEndOfPage(value) {
    this.endOfPage = value;
  }

  setHasTransition(value) {
    this.hasTransition = value;
  }

  wheel() {
    const currentScrollHeight = window.scrollY + window.innerHeight;
    const totalHeight = document.body.scrollHeight;
    if (currentScrollHeight >= totalHeight) {
      if (this.endOfPage) {
        window.parent.postMessage({ fromUrl: window.location.href, message: 'set transition' }, '*');
        this.setEndOfPage(false);
        this.setHasTransition(true);
      } else {
        window.parent.postMessage({ fromUrl: window.location.href, message: 'end of page' }, '*');
        this.setEndOfPage(true);
      }
    } else{
      this.setHasTransition(false);
    }
  }
}

export default PageManager;