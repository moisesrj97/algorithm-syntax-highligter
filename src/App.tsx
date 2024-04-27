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
      'type': /(integer|real|boolean|char|vector|string)/,
      'definition': /\brecord\b|\bend\s+record\b/,
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
    /\baction\b|\bend\s+action\b/,
    /\bfunction\b|\bend\s+function\b/,
  ],
  'keyword': /\b(?:for|while|do|end for|end while|if|then|else|end if)\b/,
  'constant': /\b[A-Z_]+\b/,
  'special-function':
    /(readInteger|readReal|readChar|readString|readBoolean|writeInteger|writeReal|writeChar|writeString|writeBoolean|integerToReal|realToInteger|charToCode|codeToChar)/,
  'type': /(integer|real|boolean|char|vector|string)/,
  'type-def': /\b(?:t|T)[A-Z][a-zA-Z]*\b/,

  'operator': /:=|<=|>=|<|>|=|≤|≠|≥|\+|-|\*|\/|\^|mod|and|or|not|return/,
  'boolean': /\b(true|false)\b/,
};

function App() {
  const [code, setCode] = useState('');

  return (
    <>
      <h1>Insert algorithm</h1>
      <div style={{ display: 'relative', width: '100%' }}>
        <div className='line-count'>
          {code.split('\n').map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code =>
            Prism.highlight(
              code,
              Prism.languages.your_language,
              'your_language'
            )
          }
          padding={{
            top: 10,
            right: 20,
            bottom: 10,
            left: 60,
          }}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>
    </>
  );
}

export default App;
