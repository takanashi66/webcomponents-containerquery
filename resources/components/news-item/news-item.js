import style from "./news-item.css?inline";
import noimage from "./noimg.webp";
import "./news-p";

class NewsItem extends HTMLElement {
    connectedCallback() {
        // カスタムエレメントの属性を取得
        const link = this.getAttribute('link') || '#';
        const img = this.getAttribute('img') || noimage;
        
        const template = `
            <style>
                ${style} /* CSSをインラインで出力 */
            </style>
            <div class="news_item">
                <a href="${link}">
                    <img src="${img}">
                    <div class="news_contents">
                        <h3><slot name="title"></slot></h3>
                        <p><slot name="excerpt"></slot></p>
                        <news-p text="${link}"></news-p>
                    </div>
                </a>
            </div>
        `;

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = template;
    }
}

customElements.define('news-item', NewsItem);