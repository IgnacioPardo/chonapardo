// The <model-viewer> custom element is configured imperatively (see Model3D),
// so a permissive intrinsic-element declaration is all TypeScript needs.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

export {};
