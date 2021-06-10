import { LitElement, html, css } from 'lit-element';
import antlr4 from 'antlr4';
import ChatLexer from './chat/ChatLexer';
import ChatParser from './chat/ChatParser';
import HtmlChatListener from './HtmlChatListener';

class EditorAndInterpreter extends LitElement {

    static get styles() {
        return css`
            :host {
                display: flex;
                font-family: sans-serif;
                justify-content: stretch;
                width: 100%;
                height: 500px;
            }

            [part=code] {
                width: 300px;
                margin-right: 15px;
                display: flex;
                flex-direction: column;
            }

            [part=code] textarea {
                display: block;
                flex: 1;
                margin-bottom: 5px;
            }
            
            [part=output] h2 {
                margin: 0 0 10px;
            }
        `;
    }

    static get properties() {
        return {

        };
    }

    constructor() {
        super();
        this.input = 'peter SAYS: hello :-) \npaul SHOUTS: ayo :)\n';
    }

    getCode() {
        const editor = this.shadowRoot.querySelector('[part=editor]');
        return editor.value;
    }

    setOutput(value) {
        const output = this.shadowRoot.querySelector('[part=output-generated]');
        return output.innerHTML = value;
    }

    run() {
        const input = this.getCode();
        const chars = new antlr4.InputStream(input);
        const lexer = new ChatLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ChatParser(tokens);
        parser.buildParseTrees = true;

        /**
         * We set the root node of the tree as a chat rule. 
         * You want to invoke the parser specifying a rule which typically is the first rule. 
         * However you can actually invoke any rule directly.
         */
        const tree = parser.chat();

        const htmlChat = new HtmlChatListener();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlChat, tree);

        this.setOutput(htmlChat.getHtml());
    }

    render() {
        return html`
            <div part="code">
                <textarea part="editor">${this.input}</textarea>
                <button @click="${this.run}">Run</button>
            </div>
            <div part="output">
                <h2>Output:</h2>
                <div part="output-generated"></div>
            </div>
        `;
    }
}

window.customElements.define('editor-and-interpreter', EditorAndInterpreter);