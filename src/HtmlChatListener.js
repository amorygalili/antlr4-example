import ChatParser from './chat/ChatParser';
import ChatListener from './chat/ChatListener';

class HtmlChatListener extends ChatListener {

    constructor(res) {
        super();
        this.Res = res;
        this.html = '';
    }

    enterName(ctx) {
        this.html += '<strong>';
    }

    exitName(ctx) {
        this.html += ctx.WORD().getText();
        this.html += "</strong> ";
    }

    exitEmoticon(ctx) {
        const emoticon = ctx.getText();

        if (emoticon == ':-)' || emoticon == ':)') {
            ctx.formattedText = '&#9786;';
        }

        if (emoticon == ':-(' || emoticon == ':(') {
            ctx.formattedText = '&#9785;';
        }
    }

    exitMessage(ctx) {             
        let text = '';

        for (let index = 0; index <  ctx.children.length; index++) {
            if (ctx.children[index].formattedText != null) {
                text += ctx.children[index].formattedText;
            } else {
                text += ctx.children[index].getText();
            }
        }

        if (ctx.parentCtx instanceof ChatParser.LineContext == false) {
            ctx.formattedText = text; 
        } else {
            this.html += text;
            this.html += '</span>';
        }
    }

    enterCommand(ctx) {
        if (ctx.SAYS() != null) {
            this.html += ctx.SAYS().getText() + ': <span>';
        }

        if (ctx.SHOUTS() != null) {
            this.html += ctx.SHOUTS().getText() + ': <span style="text-transform: uppercase">';
        }
    }

    exitLine(ctx) {
        this.html += '<br>';
    }

    getHtml() {
        return this.html;
    }
}

export default HtmlChatListener;