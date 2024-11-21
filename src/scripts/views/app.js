import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // Initialize other components if necessary
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log('Parsed URL:', url); // Debugging line to check parsed URL
    const page = routes[url];

    if (!page) {
      // Handle case where the page is not found in the routes
      console.error('Page not found for URL:', url); // Log the error
      this._content.innerHTML = '<h2>Page Not Found</h2>';
      return;
    }

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.error('Error while rendering page:', error); // Log any error during rendering
      this._content.innerHTML = '<h2>An error occurred while rendering the page.</h2>';
    }
  }
}

export default App;
