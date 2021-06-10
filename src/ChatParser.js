// Generated from src/Chat.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ChatListener from './ChatListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0010R\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0006\u0002\u0016\n",
    "\u0002\r\u0002\u000e\u0002\u0017\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006",
    ".\n\u0006\r\u0006\u000e\u0006/\u0003\u0007\u0003\u0007\u0005\u00074",
    "\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u00079\n\u0007\u0003",
    "\u0007\u0005\u0007<\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0006\nL\n\n\r\n\u000e\nM\u0003\n\u0003\n\u0003\n\u0002\u0002\u000b",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003\u0003\u0002\u000b",
    "\f\u0002S\u0002\u0015\u0003\u0002\u0002\u0002\u0004\u001b\u0003\u0002",
    "\u0002\u0002\u0006 \u0003\u0002\u0002\u0002\b#\u0003\u0002\u0002\u0002",
    "\n-\u0003\u0002\u0002\u0002\f;\u0003\u0002\u0002\u0002\u000e=\u0003",
    "\u0002\u0002\u0002\u0010D\u0003\u0002\u0002\u0002\u0012K\u0003\u0002",
    "\u0002\u0002\u0014\u0016\u0005\u0004\u0003\u0002\u0015\u0014\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0007\u0002\u0002\u0003\u001a\u0003\u0003\u0002",
    "\u0002\u0002\u001b\u001c\u0005\u0006\u0004\u0002\u001c\u001d\u0005\b",
    "\u0005\u0002\u001d\u001e\u0005\n\u0006\u0002\u001e\u001f\u0007\u000f",
    "\u0002\u0002\u001f\u0005\u0003\u0002\u0002\u0002 !\u0007\r\u0002\u0002",
    "!\"\u0007\u000e\u0002\u0002\"\u0007\u0003\u0002\u0002\u0002#$\t\u0002",
    "\u0002\u0002$%\u0007\u0003\u0002\u0002%&\u0007\u000e\u0002\u0002&\t",
    "\u0003\u0002\u0002\u0002\'.\u0005\f\u0007\u0002(.\u0005\u000e\b\u0002",
    ").\u0005\u0010\t\u0002*.\u0005\u0012\n\u0002+.\u0007\r\u0002\u0002,",
    ".\u0007\u000e\u0002\u0002-\'\u0003\u0002\u0002\u0002-(\u0003\u0002\u0002",
    "\u0002-)\u0003\u0002\u0002\u0002-*\u0003\u0002\u0002\u0002-+\u0003\u0002",
    "\u0002\u0002-,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020\u000b\u0003\u0002\u0002",
    "\u000213\u0007\u0003\u0002\u000224\u0007\u0004\u0002\u000232\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u00025<\u0007",
    "\u0005\u0002\u000268\u0007\u0003\u0002\u000279\u0007\u0004\u0002\u0002",
    "87\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029:\u0003\u0002\u0002",
    "\u0002:<\u0007\u0006\u0002\u0002;1\u0003\u0002\u0002\u0002;6\u0003\u0002",
    "\u0002\u0002<\r\u0003\u0002\u0002\u0002=>\u0007\u0007\u0002\u0002>?",
    "\u0007\u0010\u0002\u0002?@\u0007\b\u0002\u0002@A\u0007\u0006\u0002\u0002",
    "AB\u0007\u0010\u0002\u0002BC\u0007\u0005\u0002\u0002C\u000f\u0003\u0002",
    "\u0002\u0002DE\u0007\t\u0002\u0002EF\u0007\r\u0002\u0002FG\u0007\t\u0002",
    "\u0002GH\u0005\n\u0006\u0002HI\u0007\t\u0002\u0002I\u0011\u0003\u0002",
    "\u0002\u0002JL\u0007\n\u0002\u0002KJ\u0003\u0002\u0002\u0002LM\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "NO\u0003\u0002\u0002\u0002OP\u0007\r\u0002\u0002P\u0013\u0003\u0002",
    "\u0002\u0002\t\u0017-/38;M"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ChatParser extends antlr4.Parser {

    static grammarFileName = "Chat.g4";
    static literalNames = [ null, "':'", "'-'", "')'", "'('", "'['", "']'", 
                            "'/'", "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "SAYS", "SHOUTS", "WORD", "WHITESPACE", 
                             "NEWLINE", "TEXT" ];
    static ruleNames = [ "chat", "line", "name", "command", "message", "emoticon", 
                         "link", "color", "mention" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ChatParser.ruleNames;
        this.literalNames = ChatParser.literalNames;
        this.symbolicNames = ChatParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	chat() {
	    let localctx = new ChatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ChatParser.RULE_chat);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.line();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===ChatParser.WORD);
	        this.state = 23;
	        this.match(ChatParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ChatParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.name();
	        this.state = 26;
	        this.command();
	        this.state = 27;
	        this.message();
	        this.state = 28;
	        this.match(ChatParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ChatParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(ChatParser.WORD);
	        this.state = 31;
	        this.match(ChatParser.WHITESPACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ChatParser.RULE_command);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!(_la===ChatParser.SAYS || _la===ChatParser.SHOUTS)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 34;
	        this.match(ChatParser.T__0);
	        this.state = 35;
	        this.match(ChatParser.WHITESPACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	message() {
	    let localctx = new MessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ChatParser.RULE_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 43;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case ChatParser.T__0:
	        		    this.state = 37;
	        		    this.emoticon();
	        		    break;
	        		case ChatParser.T__4:
	        		    this.state = 38;
	        		    this.link();
	        		    break;
	        		case ChatParser.T__6:
	        		    this.state = 39;
	        		    this.color();
	        		    break;
	        		case ChatParser.T__7:
	        		    this.state = 40;
	        		    this.mention();
	        		    break;
	        		case ChatParser.WORD:
	        		    this.state = 41;
	        		    this.match(ChatParser.WORD);
	        		    break;
	        		case ChatParser.WHITESPACE:
	        		    this.state = 42;
	        		    this.match(ChatParser.WHITESPACE);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 45; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emoticon() {
	    let localctx = new EmoticonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ChatParser.RULE_emoticon);
	    var _la = 0; // Token type
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(ChatParser.T__0);
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ChatParser.T__1) {
	                this.state = 48;
	                this.match(ChatParser.T__1);
	            }

	            this.state = 51;
	            this.match(ChatParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.match(ChatParser.T__0);
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ChatParser.T__1) {
	                this.state = 53;
	                this.match(ChatParser.T__1);
	            }

	            this.state = 56;
	            this.match(ChatParser.T__3);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	link() {
	    let localctx = new LinkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ChatParser.RULE_link);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(ChatParser.T__4);
	        this.state = 60;
	        this.match(ChatParser.TEXT);
	        this.state = 61;
	        this.match(ChatParser.T__5);
	        this.state = 62;
	        this.match(ChatParser.T__3);
	        this.state = 63;
	        this.match(ChatParser.TEXT);
	        this.state = 64;
	        this.match(ChatParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	color() {
	    let localctx = new ColorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ChatParser.RULE_color);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(ChatParser.T__6);
	        this.state = 67;
	        this.match(ChatParser.WORD);
	        this.state = 68;
	        this.match(ChatParser.T__6);
	        this.state = 69;
	        this.message();
	        this.state = 70;
	        this.match(ChatParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mention() {
	    let localctx = new MentionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ChatParser.RULE_mention);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 72;
	            this.match(ChatParser.T__7);
	            this.state = 75; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===ChatParser.T__7);
	        this.state = 77;
	        this.match(ChatParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ChatParser.EOF = antlr4.Token.EOF;
ChatParser.T__0 = 1;
ChatParser.T__1 = 2;
ChatParser.T__2 = 3;
ChatParser.T__3 = 4;
ChatParser.T__4 = 5;
ChatParser.T__5 = 6;
ChatParser.T__6 = 7;
ChatParser.T__7 = 8;
ChatParser.SAYS = 9;
ChatParser.SHOUTS = 10;
ChatParser.WORD = 11;
ChatParser.WHITESPACE = 12;
ChatParser.NEWLINE = 13;
ChatParser.TEXT = 14;

ChatParser.RULE_chat = 0;
ChatParser.RULE_line = 1;
ChatParser.RULE_name = 2;
ChatParser.RULE_command = 3;
ChatParser.RULE_message = 4;
ChatParser.RULE_emoticon = 5;
ChatParser.RULE_link = 6;
ChatParser.RULE_color = 7;
ChatParser.RULE_mention = 8;

class ChatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_chat;
    }

	EOF() {
	    return this.getToken(ChatParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterChat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitChat(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_line;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	NEWLINE() {
	    return this.getToken(ChatParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitLine(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_name;
    }

	WORD() {
	    return this.getToken(ChatParser.WORD, 0);
	};

	WHITESPACE() {
	    return this.getToken(ChatParser.WHITESPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitName(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_command;
    }

	WHITESPACE() {
	    return this.getToken(ChatParser.WHITESPACE, 0);
	};

	SAYS() {
	    return this.getToken(ChatParser.SAYS, 0);
	};

	SHOUTS() {
	    return this.getToken(ChatParser.SHOUTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitCommand(this);
		}
	}


}



class MessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_message;
    }

	emoticon = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmoticonContext);
	    } else {
	        return this.getTypedRuleContext(EmoticonContext,i);
	    }
	};

	link = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LinkContext);
	    } else {
	        return this.getTypedRuleContext(LinkContext,i);
	    }
	};

	color = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ColorContext);
	    } else {
	        return this.getTypedRuleContext(ColorContext,i);
	    }
	};

	mention = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MentionContext);
	    } else {
	        return this.getTypedRuleContext(MentionContext,i);
	    }
	};

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ChatParser.WORD);
	    } else {
	        return this.getToken(ChatParser.WORD, i);
	    }
	};


	WHITESPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ChatParser.WHITESPACE);
	    } else {
	        return this.getToken(ChatParser.WHITESPACE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitMessage(this);
		}
	}


}



class EmoticonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_emoticon;
    }


	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterEmoticon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitEmoticon(this);
		}
	}


}



class LinkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_link;
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ChatParser.TEXT);
	    } else {
	        return this.getToken(ChatParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterLink(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitLink(this);
		}
	}


}



class ColorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_color;
    }

	WORD() {
	    return this.getToken(ChatParser.WORD, 0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterColor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitColor(this);
		}
	}


}



class MentionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ChatParser.RULE_mention;
    }

	WORD() {
	    return this.getToken(ChatParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.enterMention(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ChatListener ) {
	        listener.exitMention(this);
		}
	}


}




ChatParser.ChatContext = ChatContext; 
ChatParser.LineContext = LineContext; 
ChatParser.NameContext = NameContext; 
ChatParser.CommandContext = CommandContext; 
ChatParser.MessageContext = MessageContext; 
ChatParser.EmoticonContext = EmoticonContext; 
ChatParser.LinkContext = LinkContext; 
ChatParser.ColorContext = ColorContext; 
ChatParser.MentionContext = MentionContext; 
