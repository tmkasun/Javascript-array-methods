/**
 * Ref: https://js-array-playground.netlify.app/
 */
import React from "react";
import "./styles.css";
import ExampleSet from "./Components/ExampleSet";

const defaultArray = (size = 5): any[] => {
  return new Array(size).fill(null).map((_, i) => i);
};

const charArray = (size = 5) => {
  return new Array(size).fill(null).map((_, i) => String.fromCharCode(97 + i));
};

export default function App() {
  return (
    <>
      <div className="App">
        <h1>JavaScript Array</h1>
        <div className="legend">
          <div className="legend-color"></div>
          <a
            rel="noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods"
            target="_blank"
          >
            Mutating Methods
          </a>
        </div>
        <div className="example">
          <h2>Original</h2>
          <h2>Operation</h2>
          <h2>Return</h2>
        </div>
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().toString()}
          operation=".toString()"
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().slice(0, 3)}
          operation=".slice(0,2)"
        />
        <ExampleSet
          original={charArray()}
          returned={charArray().push("f")}
          operation='.push("f")'
          modified={(() => {
            const a = charArray();
            a.push("f");
            return a;
          })()}
        />
        <ExampleSet
          original={[1, 4, 6, 3, 2]}
          returned={[1, 4, 6, 3, 2].length}
          operation=".length"
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().unshift(-1)}
          modified={(() => {
            const a = defaultArray();
            a.unshift(-1);
            return a;
          })()}
          operation=".unshift()"
        />
        <ExampleSet
          original={charArray()}
          returned={charArray().shift()}
          modified={(() => {
            const a = charArray();
            a.shift();
            return a;
          })()}
          operation=".shift()"
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().pop()}
          modified={(() => {
            const a = defaultArray();
            a.pop();
            return a;
          })()}
          operation=".pop()"
        />
        <ExampleSet
          original={[1, 4, 6, 3, 2]}
          returned={[1, 4, 6, 3, 2].sort((a, b) => a - b)}
          modified={[1, 4, 6, 3, 2].sort((a, b) => a - b)}
          operation=".sort()"
        />
        <ExampleSet
          original={charArray()}
          returned={charArray().at(2)}
          operation=".at(2)"
        />
        <ExampleSet
          original={charArray()}
          returned={charArray().indexOf("e")}
          operation='.indexOf("e")'
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().includes(3)}
          operation=".includes(3)"
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().map((e) => e ** 2)}
          operation=".map((e) => e ** 2)"
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().some((e) => e === 3)}
          operation=".some((e) => e === 3)"
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().splice(1, 2)}
          modified={(() => {
            const a = defaultArray();
            a.splice(1, 2);
            return a;
          })()}
          operation=".splice(1,2)"
          returnedSameRef={false}
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().filter((e) => e % 2)}
          operation=".filter((e) => e % 2)"
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().every((e) => e < 2)}
          operation=".every((e) => e < 2)"
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().fill("A")}
          modified={(() => {
            const a = defaultArray();
            a.fill("A");
            return a;
          })()}
          operation='.fill("A")'
        />
        <ExampleSet
          original={defaultArray()}
          returned={defaultArray().reverse()}
          modified={(() => {
            const a = defaultArray();
            a.reverse();
            return a;
          })()}
          operation=".reverse()"
        />
      </div>
      <div className="knnect-tools">
        <div className="knnect-tool">
          <a href="https://github.com/tmkasun/Javascript-array-methods" target="_blank" rel="noreferrer">
            Source
          </a>
        </div>
      </div>
    </>
  );
}
