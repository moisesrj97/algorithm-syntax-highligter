import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import './App.css';
import { useState } from 'react';

Prism.languages.your_language = {
  'const-def': {
    pattern: /(?:end )?const/,
  },
  "const-name": {
    pattern: /(?:[A-Z][A-Z_0-9]*)(?=\s*:)/,
  },
  "const-type": {
    pattern: /(?:integer|real)/,
  },
  "comment-curly": {
    pattern: /{.*}/,
  }
};

function App() {
  const [code, setCode] = useState("");

console.log(Prism.highlight(code, Prism.languages.your_language));
  return (
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => Prism.highlight(code, Prism.languages.your_language)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}

export default App;
