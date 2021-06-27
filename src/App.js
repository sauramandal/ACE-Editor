import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-spellcheck";
import "ace-builds/src-min-noconflict/snippets/javascript";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/webpack-resolver";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-monokai";
import "./App.css";

const ace = require("ace-builds/src-noconflict/ace");
ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
);
ace.config.setModuleUrl(
  "ace/mode/javascript_worker",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
);

const App = (props) => {
  const [value, setValue] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const myRef = useRef(null);
  const aceEditorRef = useRef(null);
  const onEditorChange = (newValue) => {
    ReactDOM.findDOMNode(myRef.current).innerHTML = newValue;
  };

  const onPaste = (evt) => {
    setValue(evt.text);
  };

  const onClickRun = () => {
    setShowOutput(true);
  };

  return (
    <div className="App">
      <div className="flex-split">
        <div className="flex-split-left">
          <AceEditor
            mode="html"
            theme="monokai"
            name="awesome-code"
            height={"100%"}
            width={"100%"}
            ref={aceEditorRef}
            onChange={(val) => onEditorChange(val)}
            // onPaste={this.onPaste}
            fontSize={14}
            showPrintMargin={true}
            focus={true}
            editorProps={{
              $blockScrolling: true,
            }}
            wrapEnabled={true}
            highlightActiveLine={true}
            autoScrollEditorIntoView={true}
            value={value}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
              showGutter: true,
            }}
          />
          <button className="" onClick={evt => onClickRun()}>
            Run
          </button>
        </div>

        <div className="flex-split-right">
          <div className="" ref={myRef} />
        </div>
      </div>
    </div>
  );
};

export default App;
