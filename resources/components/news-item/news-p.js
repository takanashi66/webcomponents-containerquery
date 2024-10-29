import style from "./news-item.css?inline";
import noimage from "./noimg.webp";

class NewsP extends HTMLElement {
    connectedCallback() {
        // カスタムエレメントの属性を取得
        const text = this.getAttribute('text') || '#';
        
        const template = `
            <p>${text}</p>
        `;

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = template;
    }
}

customElements.define('news-p', NewsP);