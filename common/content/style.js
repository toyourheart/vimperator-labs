// Copyright (c) 2008-2009 by Kris Maglione <maglione.k at Gmail>
//
// This work is licensed for reuse under an MIT license. Details are
// given in the LICENSE.txt file included with this file.

/** @scope modules */

/**
 * @constant
 * @property {string} The default highlighting rules. They have the
 * form:
 *    rule ::= selector space css
 *    selector ::= group
 *               | group "," css-selector
 *               | group "," css-selector "," scope
 *    group ::= groupname
 *            | groupname css-selector
 */
// <css>
Highlights.prototype.CSS = <![CDATA[
    Boolean     color: red;
    Function    color: navy;
    Null        color: blue;
    Number      color: blue;
    Object      color: maroon;
    String      color: green;

    Key         font-weight: bold;

    Enabled     color: blue;
    Disabled    color: red;

    Normal      color: black; background: white;
    ErrorMsg    color: white; background: red; font-weight: bold;
    InfoMsg     color: black; background: white;
    ModeMsg     color: black; background: white;
    MoreMsg     color: green; background: white;
    WarningMsg  color: red; background: white;
    Message     white-space: normal; min-width: 100%; padding-left: 2em; text-indent: -2em; display: block;
    NonText     color: blue; min-height: 16px; padding-left: 2px;
    Preview     color: gray;

    CmdLine,>*  font-family: monospace; padding: 1px;
    CmdOutput   white-space: pre;

    CompGroup
    CompGroup:not(:first-of-type) margin-top: .5em;
    CompTitle          color: magenta; background: white; font-weight: bold;
    CompTitle>*        padding: 0 .5ex;
    CompMsg            font-style: italic; margin-left: 16px;
    CompItem
    CompItem[selected] background: yellow;
    CompItem>*         padding: 0 .5ex;
    CompIcon           width: 16px; min-width: 16px; display: inline-block; margin-right: .5ex;
    CompIcon>img       max-width: 16px; max-height: 16px; vertical-align: middle;
    CompResult         width: 45%; overflow: hidden;
    CompDesc           color: gray; width: 50%;
    CompLess           text-align: center; height: 0;    line-height: .5ex; padding-top: 1ex;
    CompLess::after    content: "\2303" /* Unicode up arrowhead */
    CompMore           text-align: center; height: .5ex; line-height: .5ex; margin-bottom: -.5ex;
    CompMore::after    content: "\2304" /* Unicode down arrowhead */

    Gradient        height: 1px; margin-bottom: -1px; margin-top: -1px;
    GradientLeft    background-color: magenta;
    GradientRight   background-color: white;

    Indicator   color: blue;
    Filter      font-weight: bold;

    Keyword     color: red;
    Tag         color: blue;

    LineNr      color: orange; background: white;
    Question    color: green; background: white; font-weight: bold;

    StatusLine         color: white; background: black;
    StatusLineBroken   color: black; background: #FFa0a0 /* light-red */
    StatusLineSecure   color: black; background: #a0a0FF /* light-blue */
    StatusLineExtended color: black; background: #a0FFa0 /* light-green */

    TabClose,.tab-close-button
    TabIcon,.tab-icon
    TabText,.tab-text
    TabNumber      font-weight: bold; margin: 0px; padding-right: .3ex;
    TabIconNumber {
        font-weight: bold;
        color: white;
        text-align: center;
        text-shadow: black -1px 0 1px, black 0 1px 1px, black 1px 0 1px, black 0 -1px 1px;
    }

    Title       color: magenta; background: white; font-weight: bold;
    URL         text-decoration: none; color: green; background: inherit;
    URL:hover   text-decoration: underline; cursor: pointer;

    FrameIndicator,,* {
        background-color: red;
        opacity: 0.5;
        z-index: 999;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    Bell         border: none; background-color: black;
    Hint,,* {
        font-family: monospace;
        font-size: 10px;
        font-weight: bold;
        color: white;
        background-color: red;
        border-color: ButtonShadow;
        border-width: 0px;
        border-style: solid;
        padding: 0px 1px 0px 1px;
    }
    Hint::after,,*  content: attr(number);
    HintElem,,*     background-color: yellow;  color: black;
    HintActive,,*   background-color: #88FF00; color: black;
    HintImage,,*    opacity: .5;

    Help                                        font-size: 8pt; line-height: 1.4em; font-family: -moz-fixed;

    HelpArg,liberator|a                         color: #6A97D4;
    HelpArg::before                             content: "{";
    HelpArg::after                              content: "}";
    HelpOptionalArg,liberator|oa                color: #6A97D4;
    HelpOptionalArg::before                     content: "[";
    HelpOptionalArg::after                      content: "]";

    HelpBody                                    display: block; margin: 1em auto; max-width: 100ex;
    HelpBorder,liberator|*                      border-color: silver; border-width: 0px; border-style: solid;
    HelpCode,liberator|code                     display: block; white-space: pre; margin-left: 2em; font-family: courier, monospace;

    HelpDefault,liberator|default               margin-right: 1ex; white-space: pre;
    HelpDefault::after                          content: ")"
    HelpDefault::before                         content: "(default: ";

    HelpDescription,liberator|description       display: block;
    HelpEm,liberator|em                         font-weight: bold;

    HelpEx,liberator|ex                         display: inline-block; color: #527BBD; font-weight: bold;
    HelpEx:hover                                text-decoration: underline; cursor: pointer;

    HelpExample,liberator|example               display: block; margin: 1em 0;
    HelpExample::before                         content: "Example: "; font-weight: bold;
    HelpHead,liberator|h1                       display: block; margin: 1em 0; padding-bottom: .2ex; border-bottom-width: 1px; font-size: 2em; font-weight: bold; color: #527BBD; clear: both;
    HelpItem,liberator|item                     display: block; margin: 1em 1em 1em 10em; clear: both;

    HelpKey,liberator|k                         color: #102663;

    HelpLink,liberator|*>html|a                 text-decoration: none;
    HelpLink:hover                              text-decoration: underline;

    HelpList                                    display: block; list-style: outside disc;
    HelpOrderedList                             display: block; list-style: outside decimal;
    HelpListItem,liberator|li                   display: list-item;

    HelpNote,liberator|note                     display: block; margin: 1em 0em;
    HelpNote::before                            content: "Note: "; color: red; font-weight: bold;

    HelpOpt,liberator|o                         color: #106326;
    HelpOpt:hover                               text-decoration: underline; cursor: pointer;
    HelpOptInfo                                 display: inline-block; margin-bottom: 1ex;

    HelpParagraph,liberator|p                   display: block; margin: 1em 0em;
    HelpSpec,liberator|spec                     display: block; margin-left: -10em; float: left; clear: left; color: #527BBD;

    HelpString,liberator|str                    display: inline-block; color: green; font-weight: normal; vertical-align: text-top;
    HelpString::before                          content: '"';
    HelpString::after                           content: '"';

    HelpSubhead,liberator|h2                    display: block; margin: 1em 0; padding-bottom: .2ex; border-bottom-width: 1px; font-size: 1.2em; font-weight: bold; color: #527BBD; clear: both;
    HelpSubsubhead,liberator|h3                 display: block; margin: 1em 0; padding-bottom: .2ex; font-size: 1.1em; font-weight: bold; color: #527BBD; clear: both;

    HelpTOC
    HelpTOC>ol ol                               margin-left: -1em;

    HelpTab,liberator|dl                        display: table; width: 100%; margin: 1em 0; border-bottom-width: 1px; border-top-width: 1px; padding: .5ex 0; table-layout: fixed;
    HelpTabColumn,liberator|column              display: table-column;
    HelpTabColumn:first-child                   width: 25%;
    HelpTabTitle,liberator|dt                   display: table-cell; padding: .1ex 1ex; font-weight: bold;
    HelpTabDescription,liberator|dd             display: table-cell; padding: .1ex 1ex;
    HelpTabRow,liberator|dl>tr                  display: table-row;

    HelpTag,liberator|tag                       display: inline-block; color: #527BBD; margin-left: 1ex; font-size: 8pt; font-weight: bold;
    HelpTags,liberator|tags                     display: block; float: right; clear: right;
    HelpTopic,liberator|t                       color: #102663;
    HelpType,liberator|type                     margin-right: 2ex;

    HelpWarning,liberator|warning               display: block; margin: 1em 0em;
    HelpWarning::before                         content: "Warning: "; color: red; font-weight: bold;

    Search,,* {
        font-size: inherit;
        padding: 0;
        color: black;
        background-color: yellow;
    }
    ]]>.toString();

/**
 * A class to manage highlighting rules. The parameters are the
 * standard parameters for any {@link Storage} object.
 *
 * @author Kris Maglione <maglione.k@gmail.com>
 */
function Highlights(name, store)
{
    let self = this;
    let highlight = {};
    let styles = storage.styles;

    const Highlight = Struct("class", "selector", "filter", "default", "value", "base");
    Highlight.defaultValue("filter", function () 
        this.base ? this.base.filter :
        ["chrome://liberator/*",
         "liberator:*",
         "file://*"].concat(config.styleableChrome).join(","));
    Highlight.defaultValue("selector", function () self.selector(this.class));
    Highlight.defaultValue("value", function () this.default);
    Highlight.defaultValue("base", function () {
        let base = this.class.match(/^(\w*)/)[0];
        return base != this.class && base in highlight ? highlight[base] : null;
    });
    Highlight.prototype.toString = function () "Highlight(" + this.class + ")\n\t" + [k + ": " + util.escapeString(v || "undefined") for ([k, v] in this)].join("\n\t");

    function keys() [k for ([k, v] in Iterator(highlight))].sort();

    this.__iterator__ = function () (highlight[v] for ([k, v] in Iterator(keys())));

    this.get = function (k) highlight[k];
    this.set = function (key, newStyle, force, append)
    {
        let [, class, selectors] = key.match(/^([a-zA-Z_-]+)(.*)/);

        if (!(class in highlight))
            return "Unknown highlight keyword: " + class;

        let style = highlight[key] || new Highlight(key);
        styles.removeSheet(true, style.selector);

        if (append)
            newStyle = (style.value || "").replace(/;?\s*$/, "; " + newStyle);
        if (/^\s*$/.test(newStyle))
            newStyle = null;
        if (newStyle == null)
        {
            if (style.default == null)
            {
                delete highlight[style.class];
                styles.removeSheet(true, style.selector);
                return null;
            }
            newStyle = style.default;
            force = true;
        }

        let css = newStyle.replace(/(?:!\s*important\s*)?(?:;?\s*$|;)/g, "!important;")
                          .replace(";!important;", ";", "g"); // Seeming Spidermonkey bug
        if (!/^\s*(?:!\s*important\s*)?;*\s*$/.test(css))
        {
            css = style.selector + " { " + css + " }";

            let error = styles.addSheet(true, "highlight:" + style.class, style.filter, css, true);
            if (error)
                return error;
        }
        style.value = newStyle;
        highlight[style.class] = style;
    };

    /**
     * Gets a CSS selector given a highlight group.
     *
     * @param {string} class
     */
    this.selector = function (class)
    {
        let [, hl, rest] = class.match(/^(\w*)(.*)/);
        let pattern = "[liberator|highlight~=" + hl + "]"
        if (highlight[hl] && highlight[hl].class != class)
            pattern = highlight[hl].selector;
        return pattern + rest;
    };

    /**
     * Clears all highlighting rules. Rules with default values are
     * reset.
     */
    this.clear = function ()
    {
        for (let [k, v] in Iterator(highlight))
            this.set(k, null, true);
    };

    /**
     * Bulk loads new CSS rules.
     *
     * @param {string} css The rules to load. See {@link Highlights#css}.
     */
    this.loadCSS = function (css)
    {
        css.replace(/^(\s*\S*\s+)\{((?:.|\n)*?)\}\s*$/gm, function (_, _1, _2) _1 + _2.replace(/\n\s*/g, " "))
           .split("\n").filter(function (s) /\S/.test(s))
           .forEach(function (style)
        {
            style = Highlight.apply(Highlight, Array.slice(style.match(/^\s*((?:[^,\s]|\s\S)+)(?:,((?:[^,\s]|\s\S)+)?)?(?:,((?:[^,\s]|\s\S)+))?\s*(.*)$/), 1));
            if (/^[>+ ]/.test(style.selector))
                style.selector = self.selector(style.class) + style.selector;

            let old = highlight[style.class];
            highlight[style.class] = style;
            if (old && old.value != old.default)
                style.value = old.value;
        });
        for (let [class, hl] in Iterator(highlight))
        {
            if (hl.value == hl.default)
                this.set(class);
        }
    };
    this.loadCSS(this.CSS);
}

/**
 * Manages named and unnamed user style sheets, which apply to both
 * chrome and content pages. The parameters are the standard
 * parameters for any {@link Storage} object.
 *
 * @author Kris Maglione <maglione.k@gmail.com>
 */
function Styles(name, store)
{
    // Can't reference liberator or Components inside Styles --
    // they're members of the window object, which disappear
    // with this window.
    const self = this;
    const util = modules.util;
    const sleep = liberator.sleep;
    const storage = modules.storage;
    const ios = services.get("io");
    const sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
    const namespace = '@namespace html "' + XHTML + '";\n' +
                      '@namespace xul "' + XUL + '";\n' +
                      '@namespace liberator "' + NS.uri + '";\n';

    const Sheet = new Struct("name", "id", "sites", "css", "system", "agent");
    Sheet.prototype.__defineGetter__("fullCSS", function wrapCSS() {
        let filter = this.sites;
        let css = this.css;
        if (filter[0] == "*")
            return namespace + css;
        let selectors = filter.map(function (part) (/[*]$/.test(part)   ? "url-prefix" :
                                                    /[\/:]/.test(part)  ? "url"
                                                                        : "domain")
                                            + '("' + part.replace(/"/g, "%22").replace(/[*]$/, "") + '")')
                              .join(", ");
        return namespace + "/* Liberator style #" + this.id + " */ @-moz-document " + selectors + "{\n" + css + "\n}\n";
    });
    Sheet.prototype.__defineGetter__("enabled", function () this._enabled);
    Sheet.prototype.__defineSetter__("enabled", function (on) {
        this._enabled = Boolean(on);
        if (on)
        {
            self.registerSheet(cssUri(this.fullCSS));
            if (this.agent)
                self.registerSheet(cssUri(this.fullCSS), true);
        }
        else
        {
            self.unregisterSheet(cssUri(this.fullCSS));
            self.unregisterSheet(cssUri(this.fullCSS), true);
        }
    });

    let cssUri = function (css) "chrome-data:text/css," + window.encodeURI(css);

    let userSheets = [];
    let systemSheets = [];
    let userNames = {};
    let systemNames = {};

    let id = 0;

    this.__iterator__ = function () Iterator(userSheets.concat(systemSheets));
    this.__defineGetter__("systemSheets", function () Iterator(systemSheets));
    this.__defineGetter__("userSheets", function () Iterator(userSheets));
    this.__defineGetter__("systemNames", function () Iterator(systemNames));
    this.__defineGetter__("userNames", function () Iterator(userNames));

    /**
     * Add a new style sheet.
     *
     * @param {boolean} system Declares whether this is a system or
     *     user sheet. System sheets are used internally by
     *     @liberator.
     * @param {string} name The name given to the style sheet by
     *     which it may be later referenced.
     * @param {string} filter The sites to which this sheet will
     *     apply. Can be a domain name or a URL. Any URL ending in
     *     "*" is matched as a prefix.
     * @param {string} css The CSS to be applied.
     */
    this.addSheet = function (system, name, filter, css, agent)
    {
        let sheets = system ? systemSheets : userSheets;
        let names = system ? systemNames : userNames;
        if (name && name in names)
            this.removeSheet(system, name);

        let sheet = Sheet(name, id++, filter.split(",").filter(util.identity), String(css), null, system, agent);

        try
        {
            sheet.enabled = true;
        }
        catch (e)
        {
            return e.echoerr || e;
        }
        sheets.push(sheet);

        if (name)
            names[name] = sheet;
        return null;
    };

    /**
     * Get a sheet with a given name or index.
     *
     * @param {boolean} system
     * @param {string or number} sheet The sheet to retrieve. Strings indicate
     *     sheet names, while numbers indicate indices.
     */
    this.get = function get(system, sheet)
    {
        let sheets = system ? systemSheets : userSheets;
        let names = system ? systemNames : userNames;
        if (typeof sheet === "number")
            return sheets[sheet];
        return names[sheet];
    };

    /**
     * Find sheets matching the parameters. See {@link #addSheet}
     * for parameters.
     *
     * @param {boolean} system
     * @param {string} name
     * @param {string} filter
     * @param {string} css
     * @param {number} index
     */
    this.findSheets = function (system, name, filter, css, index)
    {
        let sheets = system ? systemSheets : userSheets;
        let names = system ? systemNames : userNames;

        // Grossly inefficient.
        let matches = [k for ([k, v] in Iterator(sheets))];
        if (index)
            matches = String(index).split(",").filter(function (i) i in sheets);
        if (name)
            matches = matches.filter(function (i) sheets[i] == names[name]);
        if (css)
            matches = matches.filter(function (i) sheets[i].css == css);
        if (filter)
            matches = matches.filter(function (i) sheets[i].sites.indexOf(filter) >= 0);
        return matches.map(function (i) sheets[i]);
    };

    /**
     * Remove a style sheet. See {@link #addSheet} for parameters.
     * In cases where <b>filter</b> is supplied, the given filters
     * are removed from matching sheets. If any remain, the sheet is
     * left in place.
     *
     * @param {boolean} system
     * @param {string} name
     * @param {string} filter
     * @param {string} css
     * @param {number} index
     */
    this.removeSheet = function (system, name, filter, css, index)
    {
        let self = this;
        if (arguments.length == 0)
        {
            var matches = [system];
            system = sheet.system;
        }
        let sheets = system ? systemSheets : userSheets;
        let names = system ? systemNames : userNames;

        if (filter && filter.indexOf(",") > -1)
            return filter.split(",").reduce(
                function (n, f) n + self.removeSheet(system, name, f, index), 0);

        if (filter == undefined)
            filter = "";

        if (!matches)
            matches = this.findSheets(system, name, filter, css, index);
        if (matches.length == 0)
            return;

        for (let [, sheet] in Iterator(matches.reverse()))
        {
            sheet.enabled = false;
            if (name)
                delete names[name];
            if (sheets.indexOf(sheet) > -1)
                sheets.splice(sheets.indexOf(sheet), 1);

            /* Re-add if we're only changing the site filter. */
            if (filter)
            {
                let sites = sheet.sites.filter(function (f) f != filter);
                if (sites.length)
                    this.addSheet(system, name, sites.join(","), css, sheet.agent);
            }
        }
        return matches.length;
    };

    /**
     * Register a user style sheet at the given URI.
     *
     * @param {string} uri The URI of the sheet to register.
     * @param {boolean} agent If true, sheet is registered as an agent sheet.
     * @param {boolean} reload Whether to reload any sheets that are
     *     already registered.
     */
    this.registerSheet = function (uri, agent, reload)
    {
        if (reload)
            this.unregisterSheet(uri, agent);
        uri = ios.newURI(uri, null, null);
        if (reload || !sss.sheetRegistered(uri, agent ? sss.AGENT_SHEET : sss.USER_SHEET))
            sss.loadAndRegisterSheet(uri, agent ? sss.AGENT_SHEET : sss.USER_SHEET);
    };

    /**
     * Unregister a sheet at the given URI.
     *
     * @param {string} uri The URI of the sheet to unregister.
     */
    this.unregisterSheet = function (uri, agent)
    {
        uri = ios.newURI(uri, null, null);
        if (sss.sheetRegistered(uri, agent ? sss.AGENT_SHEET : sss.USER_SHEET))
            sss.unregisterSheet(uri, agent ? sss.AGENT_SHEET : sss.USER_SHEET);
    };
}
let (array = util.Array)
{
    util.extend(Styles.prototype, {
        get sites() array([v.sites for ([k, v] in this.userSheets)]).flatten().uniq().__proto__,
        completeSite: function (context, content)
        {
            context.anchored = false;
            try
            {
                context.fork("current", 0, this, function (context) {
                    context.title = ["Current Site"];
                    context.completions = [
                        [content.location.host, "Current Host"],
                        [content.location.href, "Current URL"]
                    ];
                });
            }
            catch (e) {}
            context.fork("others", 0, this, function (context) {
                context.title = ["Site"];
                context.completions = [[s, ""] for ([, s] in Iterator(styles.sites))];
            });
        }
    });
}

/**
 * @property {Styles}
 */
const styles = storage.newObject("styles", Styles, { store: false });

/**
 * @property {Highlights}
 */
const highlight = storage.newObject("highlight", Highlights, { store: false });

if (highlight.CSS != Highlights.prototype.CSS)
{
    highlight.CSS = Highlights.prototype.CSS;
    highlight.loadCSS(highlight.CSS);
}

liberator.triggerObserver("load_styles", "styles");
liberator.triggerObserver("load_highlight", "highlight");

/////////////////////////////////////////////////////////////////////////////}}}
////////////////////// COMMANDS ////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////{{{

liberator.registerObserver("load_commands", function () {

    commands.add(["colo[rscheme]"],
        "Load a color scheme",
        function (args)
        {
            let scheme = args[0];

            if (scheme == "default")
                highlight.clear();
            else if (!io.sourceFromRuntimePath(["colors/" + scheme + ".vimp"]))
                return void liberator.echoerr("E185: Cannot find color scheme " + scheme);
            autocommands.trigger("ColorScheme", { name: scheme });
        },
        {
            argCount: "1",
            completer: function (context) completion.colorScheme(context)
        });

    commands.add(["sty[le]"],
        "Add or list user styles",
        function (args)
        {
            let [filter, css] = args;
            let name = args["-name"];

            if (!css)
            {
                let list = Array.concat([i for (i in styles.userNames)],
                                        [i for (i in styles.userSheets) if (!i[1].name)]);
                let str = template.tabular(["", "Name", "Filter", "CSS"],
                    ["min-width: 1em; text-align: center; color: red; font-weight: bold;",
                     "padding: 0 1em 0 1ex; vertical-align: top;",
                     "padding: 0 1em 0 0; vertical-align: top;"],
                    ([sheet.enabled ? "" : "\u00d7",
                      key,
                      sheet.sites.join(","),
                      sheet.css]
                     for ([i, [key, sheet]] in Iterator(list))
                     if ((!filter || sheet.sites.indexOf(filter) >= 0) && (!name || sheet.name == name))));
                commandline.echo(str, commandline.HL_NORMAL, commandline.FORCE_MULTILINE);
            }
            else
            {
                if ("-append" in args)
                {
                    let sheet = styles.get(false, name);
                    if (sheet)
                    {
                        filter = sheet.sites.concat(filter).join(",");
                        css = sheet.css + " " + css;
                    }
                }
                let err = styles.addSheet(false, name, filter, css);
                if (err)
                    liberator.echoerr(err);
            }
        },
        {
            bang: true,
            completer: function (context, args)
            {
                let compl = [];
                if (args.completeArg == 0)
                    styles.completeSite(context, content);
                else if (args.completeArg == 1)
                {
                    let sheet = styles.get(false, args["-name"]);
                    if (sheet)
                        context.completions = [[sheet.css, "Current Value"]];
                }
            },
            hereDoc: true,
            literal: 1,
            options: [[["-name", "-n"], commands.OPTION_STRING, null, function () [[k, v.css] for ([k, v] in Iterator(styles.userNames))]],
                      [["-append", "-a"], commands.OPTION_NOARG]],
            serial: function () [
                {
                    command: this.name,
                    bang: true,
                    options: sty.name ? { "-name": sty.name } : {},
                    arguments: [sty.sites.join(",")],
                    literalArg: sty.css
                } for ([k, sty] in styles.userSheets)
            ]
        });

    [
        {
            name: ["stylee[nable]", "stye[nable]"],
            desc: "Enable a user style sheet",
            action: function (sheet) sheet.enabled = true,
            filter: function (sheet) !sheet.enabled
        },
        {
            name: ["styled[isable]", "styd[isable]"],
            desc: "Disable a user style sheet",
            action: function (sheet) sheet.enabled = false,
            filter: function (sheet) sheet.enabled
        },
        {
            name: ["stylet[oggle]", "styt[oggle]"],
            desc: "Toggle a user style sheet",
            action: function (sheet) sheet.enabled = !sheet.enabled
        },
        {
            name: ["dels[tyle]"],
            desc: "Remove a user style sheet",
            action: function (sheet) styles.removeSheet(sheet)
        }
    ].forEach(function (cmd) {
        commands.add(cmd.name, cmd.desc,
            function (args)
            {
                styles.findSheets(false, args["-name"], args[0], args.literalArg, args["-index"])
                      .forEach(cmd.action);
            },
        {
            completer: function (context) { context.completions = styles.sites.map(function (site) [site, ""]); },
            literal: 1,
            options: [[["-index", "-i"], commands.OPTION_INT, null,
                        function (context) {
                            context.compare = CompletionContext.Sort.number;
                            return [[i, <>{sheet.sites.join(",")}: {sheet.css.replace("\n", "\\n")}</>]
                                    for ([i, sheet] in styles.userSheets)
                                    if (!cmd.filter || cmd.filter(sheet))]
                        }],
                      [["-name", "-n"],  commands.OPTION_STRING, null,
                        function () [[name, sheet.css]
                                     for ([name, sheet] in Iterator(styles.userNames))
                                     if (!cmd.filter || cmd.filter(sheet))]]]
        });
    });

    commands.add(["hi[ghlight]"],
        "Set the style of certain display elements",
        function (args)
        {
            let style = <![CDATA[
                ;
                display: inline-block !important;
                position: static !important;
                margin: 0px !important; padding: 0px !important;
                width: 3em !important; min-width: 3em !important; max-width: 3em !important;
                height: 1em !important; min-height: 1em !important; max-height: 1em !important;
                overflow: hidden !important;
            ]]>;
            let clear = args[0] == "clear";
            if (clear)
                args.shift();

            let [key, css] = args;
            if (clear && css)
                return liberator.echo("E488: Trailing characters");

            if (!css && !clear)
            {
                // List matching keys
                let str = template.tabular(["Key", "Sample", "CSS"],
                    ["padding: 0 1em 0 0; vertical-align: top",
                     "text-align: center"],
                    ([h.class,
                      <span style={"text-align: center; line-height: 1em;" + h.value + style}>XXX</span>,
                      template.highlightRegexp(h.value, /\b[-\w]+(?=:)/g)]
                        for (h in highlight)
                        if (!key || h.class.indexOf(key) > -1)));
                commandline.echo(str, commandline.HL_NORMAL, commandline.FORCE_MULTILINE);
                return;
            }
            if (!key && clear)
                return highlight.clear();
            let error = highlight.set(key, css, clear, "-append" in args);
            if (error)
                liberator.echoerr(error);
        },
        {
            // TODO: add this as a standard highlight completion function?
            completer: function (context, args)
            {
                // Complete a highlight group on :hi clear ...
                if (args.completeArg > 0 && args[0] == "clear")
                    args.completeArg = args.completeArg > 1 ? -1 : 0;

                if (args.completeArg == 0)
                    context.completions = [[v.class, v.value] for (v in highlight)];
                else if (args.completeArg == 1)
                {
                    let hl = highlight.get(args[0]);
                    if (hl)
                        context.completions = [[hl.value, "Current Value"], [hl.default || "", "Default Value"]];
                }
            },
            hereDoc: true,
            literal: 1,
            options: [[["-append", "-a"], commands.OPTION_NOARG]],
            serial: function () [
                {
                    command: this.name,
                    arguments: [k],
                    literalArg: v
                }
                for ([k, v] in Iterator(highlight))
                if (v.value != v.default)
            ]
        });
});
/////////////////////////////////////////////////////////////////////////////}}}
////////////////////// COMPLETIONS /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////{{{

liberator.registerObserver("load_completion", function () {
    completion.setFunctionCompleter(["get", "addSheet", "removeSheet", "findSheets"].map(function (m) styles[m]),
        [ // Prototype: (system, name, filter, css, index)
            null,
            function (context, obj, args) args[0] ? styles.systemNames : styles.userNames,
            function (context, obj, args) styles.completeSite(context, content),
            null,
            function (context, obj, args) args[0] ? styles.systemSheets : styles.userSheets
        ]);

    completion.colorScheme = function colorScheme(context) {
        let colors = [];

        io.getRuntimeDirectories("colors").forEach(function (dir) {
            io.readDirectory(dir).forEach(function (file) {
                if (/\.vimp$/.test(file.leafName) && !colors.some(function (c) c.leafName == file.leafName))
                    colors.push(file);
            });
        });

        context.title = ["Color Scheme", "Runtime Path"];
        context.completions = [[c.leafName.replace(/\.vimp$/, ""), c.parent.path] for ([, c] in Iterator(colors))]
    };

    completion.highlightGroup = function highlightGroup(context) {
        context.title = ["Highlight Group", "Value"];
        context.completions = [[v.class, v.value] for (v in highlight)];
    };
});
//}}}

// vim: set fdm=marker sw=4 ts=4 et:
