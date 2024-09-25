'use client';
import React from 'react';
import {
  Pre,
  Line,
  LineNo,
  LineContent
} from '@/components/PrismReactStyle/page';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

export default function SeoulDetail() {
  return (
    <div className="main w-full pt-[100px] p-[60px] bg-sySky">
      <div className="text-[60px] font-medium text-syNavy mt-[20px]">
        서울반도체 seoulsemicon
      </div>
      <div className="mt-[20px]">
        <span>링크 : </span>
        <a href="https://www.seoulsemicon.com/" target="_blank">
          https://www.seoulsemicon.com/
        </a>
      </div>
      <div className="text-[30px] font-medium text-syNavy mt-[40px]">
        코드 설명
      </div>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={exampleCode}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </div>
  );
}
