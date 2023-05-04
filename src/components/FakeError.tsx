import React from 'react';

function FakeError() {
  
  return (<div
    id="webpack-dev-server-client-overlay-div"
    style={{
      position: "fixed",
      boxSizing: "border-box",
      inset: 0,
      width: "100vw",
      height: "100vh",
      fontSize: "large",
      padding: "2rem 2rem 4rem",
      lineHeight: "1.2",
      whiteSpace: "pre-wrap",
      overflow: "auto",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      color: "white"
    }}
  >
    <div
      style={{
        color: "rgb(232, 59, 70)",
        fontSize: "2em",
        whiteSpace: "pre-wrap",
        fontFamily: "sans-serif",
        margin: "0px 2rem 2rem 0px",
        flex: "0 0 auto",
        maxHeight: "50%",
        overflow: "auto"
      }}
    >
      Compiled with problems:
    </div>
    <button
      style={{
        color: "rgb(255, 255, 255)",
        lineHeight: "1rem",
        fontSize: "1.5rem",
        padding: "1rem",
        cursor: "pointer",
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "transparent",
        border: "medium none"
      }}
    >
      ×
    </button>
    <div>
      <div
        style={{
          backgroundColor: "rgba(206, 17, 38, 0.1)",
          color: "rgb(252, 207, 207)",
          padding: "1rem 1rem 1.5rem"
        }}
      >
        <div
          style={{
            color: "rgb(232, 59, 70)",
            fontSize: "1.2em",
            marginBottom: "1rem",
            fontFamily: "sans-serif"
          }}
        >
          ERROR
        </div>
        <div
          style={{
            lineHeight: "1.5",
            fontSize: "1rem",
            fontFamily: "Menlo, Consolas, monospace"
          }}
        >
          this.container is null
          Termynal@http://localhost:3000/static/js/bundle.js:669:5
          ./src/components/Terminal.tsx/Terminal/&lt;@http://localhost:3000/static/js/bundle.js:37:5
          commitHookEffectListMount@http://localhost:3000/static/js/bundle.js:29206:30
          commitPassiveMountOnFiber@http://localhost:3000/static/js/bundle.js:30699:42
          commitPassiveMountEffects_complete@http://localhost:3000/static/js/bundle.js:30671:38
          commitPassiveMountEffects_begin@http://localhost:3000/static/js/bundle.js:30661:45
          commitPassiveMountEffects@http://localhost:3000/static/js/bundle.js:30651:38
          flushPassiveEffectsImpl@http://localhost:3000/static/js/bundle.js:32536:32
          flushPassiveEffects@http://localhost:3000/static/js/bundle.js:32488:18
          ./node_modules/react-dom/cjs/react-dom.development.js/commitRootImpl/&lt;@http://localhost:3000/static/js/bundle.js:32303:13
          workLoop@http://localhost:3000/static/js/bundle.js:39441:46
          flushWork@http://localhost:3000/static/js/bundle.js:39419:18
          performWorkUntilDeadline@http://localhost:3000/static/js/bundle.js:39656:25
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(206, 17, 38, 0.1)",
          color: "rgb(252, 207, 207)",
          padding: "1rem 1rem 1.5rem"
        }}
      >
        <div
          style={{
            color: "rgb(232, 59, 70)",
            fontSize: "1.2em",
            marginBottom: "1rem",
            fontFamily: "sans-serif"
          }}
        >
          ERROR
        </div>
        <div
          style={{
            lineHeight: "1.5",
            fontSize: "1rem",
            fontFamily: "Menlo, Consolas, monospace"
          }}
        >
          this.container is null
          Termynal@http://localhost:3000/static/js/bundle.js:669:5
          ./src/components/Terminal.tsx/Terminal/&lt;@http://localhost:3000/static/js/bundle.js:37:5
          commitHookEffectListMount@http://localhost:3000/static/js/bundle.js:29206:30
          commitPassiveMountOnFiber@http://localhost:3000/static/js/bundle.js:30699:42
          commitPassiveMountEffects_complete@http://localhost:3000/static/js/bundle.js:30671:38
          commitPassiveMountEffects_begin@http://localhost:3000/static/js/bundle.js:30661:45
          commitPassiveMountEffects@http://localhost:3000/static/js/bundle.js:30651:38
          flushPassiveEffectsImpl@http://localhost:3000/static/js/bundle.js:32536:32
          flushPassiveEffects@http://localhost:3000/static/js/bundle.js:32488:18
          ./node_modules/react-dom/cjs/react-dom.development.js/commitRootImpl/&lt;@http://localhost:3000/static/js/bundle.js:32303:13
          workLoop@http://localhost:3000/static/js/bundle.js:39441:46
          flushWork@http://localhost:3000/static/js/bundle.js:39419:18
          performWorkUntilDeadline@http://localhost:3000/static/js/bundle.js:39656:25
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(206, 17, 38, 0.1)",
          color: "rgb(252, 207, 207)",
          padding: "1rem 1rem 1.5rem"
        }}
      >
        <div
          style={{
            color: "rgb(232, 59, 70)",
            fontSize: "1.2em",
            marginBottom: "1rem",
            fontFamily: "sans-serif"
          }}
        >
          ERROR
        </div>
        <div
          style={{
            lineHeight: "1.5",
            fontSize: "1rem",
            fontFamily: "Menlo, Consolas, monospace"
          }}
        >
          this.container is null
          Termynal@http://localhost:3000/static/js/bundle.js:669:5
          ./src/components/Terminal.tsx/Terminal/&lt;@http://localhost:3000/static/js/bundle.js:37:5
          commitHookEffectListMount@http://localhost:3000/static/js/bundle.js:29206:30
          commitPassiveMountOnFiber@http://localhost:3000/static/js/bundle.js:30699:42
          commitPassiveMountEffects_complete@http://localhost:3000/static/js/bundle.js:30671:38
          commitPassiveMountEffects_begin@http://localhost:3000/static/js/bundle.js:30661:45
          commitPassiveMountEffects@http://localhost:3000/static/js/bundle.js:30651:38
          flushPassiveEffectsImpl@http://localhost:3000/static/js/bundle.js:32536:32
          flushPassiveEffects@http://localhost:3000/static/js/bundle.js:32488:18
          ./node_modules/react-dom/cjs/react-dom.development.js/commitRootImpl/&lt;@http://localhost:3000/static/js/bundle.js:32303:13
          workLoop@http://localhost:3000/static/js/bundle.js:39441:46
          flushWork@http://localhost:3000/static/js/bundle.js:39419:18
          performWorkUntilDeadline@http://localhost:3000/static/js/bundle.js:39656:25
        </div>
      </div>
    </div>
  </div>
  )
}

export default FakeError