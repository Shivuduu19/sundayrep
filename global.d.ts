import 'react'


declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            "media-controller": { children: Element[]; className: string; };
            "media-control-bar": { children: Element[]; className: string; };
        }
    }
}


// export { };
