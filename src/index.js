import antlr4 from 'antlr4';
import ChatLexer from './chat/ChatLexer';
import ChatParser from './chat/ChatParser';
import HtmlChatListener from './HtmlChatListener';

const input = 'peter SAYS: hello :-) \npaul SHOUTS: ayo :)\n';

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


const output = document.querySelector('#output');
output.innerHTML = htmlChat.getHtml();
