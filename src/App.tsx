import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import './App.css';
import { useState } from 'react';

Prism.languages.your_language = {
  'type-def-block': {
    pattern: /\btype\b[\s\S]*?\bend\s+type\b/,
    inside: {
      'constant': /\b[A-Z_]+\b/,
      'type-def': /\b(?:t|T)[A-Z][a-zA-Z]*\b/,
      'comment': /\{.*?\}/,
      'comment-line': /\/\/.*/,
    },
  },
  'comment': /\{.*?\}/,
  'comment-line': /\/\/.*/,
  'string': /"(?:[^"\\]|\\.)*"/,
  'number': /\b\d+\b/,
  'definition': [
    /\bconst\b|\bend\s+const\b/,
    /\bvar\b|\bend\s+var\b/,
    /\balgorithm\b|\bend\s+algorithm\b/,
  ],
  'keyword': /\b(?:for|while|do|end for|end while|if|then|else|end if)\b/,
  'constant': /\b[A-Z_]+\b/,
  'special-function':
    /(readInteger|readReal|readChar|readString|readBoolean|writeInteger|writeReal|writeChar|writeString|writeBoolean|integerToReal|realToInteger|charToCode|codeToChar)/,
  'type': /(integer|real|boolean|char|vector|string)/,
  'type-def': /\b(?:t|T)[A-Z][a-zA-Z]*\b/,

  'operator': /:=|<=|>=|<|>|=|≤|≠|≥|\+|-|\*|\/|\^|mod|and|or|not/,
  'boolean': /\b(true|false)\b/,
};

function App() {
  const [code, setCode] = useState("");

  return (
    <>
      <h1>Insert algorithm</h1>
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => Prism.highlight(code, Prism.languages.your_language, 'your_language')}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </>
  );
}

export default App;
