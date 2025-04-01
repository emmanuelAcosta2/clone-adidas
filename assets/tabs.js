console.log('Tabs script loaded');

class Tabs extends HTMLElement {
    constructor() {
        super();
        this.titles = this.querySelectorAll('tab-title');
        this.contents = this.querySelectorAll('tab-content');
    }

    /**
     * Called when the element is first connected to the DOM.
     * This is where you can set up the initial state of the element.
     */
    connectedCallback() {

    }

    removeTitlesActive() {
        this.titles.forEach((title) => {
            title.removeAttribute('active');
        });
    }
    removeContentActive() {
        this.contents.forEach((content) => {
            content.removeAttribute('active');
        });
    }

}

/**
 * Custom element for the tab content. What is a Custom Element? A custom element is a type of web component that allows you to create reusable HTML tags with custom behavior.
 * Custom elements are defined using the Web Components API and can encapsulate HTML, CSS, and JavaScript.
 */
class TabTitle extends HTMLElement {
    constructor() {
        super();
        this.tabsContainer = this.closest('tabs-container');
    }
    connectedCallback() {
        console.log(this.tabsContainer)
        this.addEventListener('click', () => {
            this.tabsContainer.removeTitlesActive();
            this.setAttribute('active', '');
            this.tabsContainer.removeContentActive();
            const activeContent = this.tabsContainer.querySelector(`tab-content[index="${this.getAttribute('index')}"]`);
            activeContent.setAttribute('active', '');
        });
    }
}

class TabContent extends HTMLElement {
    constructor() {
        super();
        this.tabsContainer = this.closest('tabs-container');
    }
    connectedCallback() {
       
    }
}

customElements.define('tabs-container', Tabs);
customElements.define('tab-title', TabTitle);
customElements.define('tab-content', TabContent);