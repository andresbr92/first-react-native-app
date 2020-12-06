import React from "react";
import Svg, { Defs, Path, Circle } from "react-native-svg";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent() {
  return (
    
      <Svg
        height={300}
        width={300}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 841.89 595.28"
      >
        <Defs></Defs>
        <Path
          fill="#1f140f"
          d="M394.7 256v9.09h-27.25v18.2h23v9.14h-23v25h-11.52V256zM460 317.51h-8.84a3.9 3.9 0 01-2.45-.74 4.33 4.33 0 01-1.38-1.85l-4.59-12.54h-25.51l-4.59 12.54a4 4 0 01-1.34 1.78 3.74 3.74 0 01-2.44.81H400L424.12 256h11.69zm-39.83-23.21h19.6l-7.49-20.45c-.34-.91-.71-2-1.12-3.21s-.82-2.57-1.21-4c-.4 1.45-.79 2.79-1.17 4s-.76 2.34-1.13 3.28zM474.8 317.51V256H496a40.44 40.44 0 0110.31 1.14 19.59 19.59 0 017 3.28 12.71 12.71 0 014 5.14 17.35 17.35 0 011.28 6.8 13.3 13.3 0 01-.64 4.15 12 12 0 01-2 3.7 14.46 14.46 0 01-3.4 3.12 20.21 20.21 0 01-4.91 2.38q12.68 2.85 12.67 13.69a17.48 17.48 0 01-1.49 7.23 15.89 15.89 0 01-4.33 5.72 20.8 20.8 0 01-7 3.76 30.56 30.56 0 01-9.52 1.36zm11.43-34.86h9.14c3.89 0 6.83-.71 8.85-2.13s3-3.67 3-6.76-.9-5.48-2.72-6.84-4.64-2-8.5-2h-9.78zm0 7.91v18h11.61a16 16 0 005.33-.76 9.27 9.27 0 003.45-2 7.46 7.46 0 001.87-3 11.28 11.28 0 00.57-3.61 9.54 9.54 0 00-.64-3.6 6.81 6.81 0 00-2-2.72 9.43 9.43 0 00-3.49-1.72 19.59 19.59 0 00-5.14-.59zM571.64 267.22a3.21 3.21 0 01-1.08 1.32 2.8 2.8 0 01-1.47.38 3.68 3.68 0 01-1.91-.66c-.71-.44-1.55-.93-2.51-1.47a20.65 20.65 0 00-3.38-1.46 14.22 14.22 0 00-4.57-.66 13.56 13.56 0 00-4.15.57 8.7 8.7 0 00-3 1.6 6.37 6.37 0 00-1.81 2.44 8 8 0 00-.6 3.12 5.45 5.45 0 001.22 3.62 10 10 0 003.21 2.46 29.77 29.77 0 004.54 1.83q2.55.81 5.21 1.72a49.94 49.94 0 015.21 2.13 18.16 18.16 0 014.55 3.06 13.87 13.87 0 013.21 4.53 15.65 15.65 0 011.21 6.5 21.15 21.15 0 01-1.42 7.8 18 18 0 01-4.17 6.34 19.55 19.55 0 01-6.7 4.25 24.7 24.7 0 01-9 1.55 29.35 29.35 0 01-5.78-.57A31.16 31.16 0 01543 316a28.56 28.56 0 01-4.88-2.55 23.76 23.76 0 01-4.06-3.32l3.31-5.48a4.17 4.17 0 011.13-1 2.74 2.74 0 011.46-.4 4.06 4.06 0 012.3.87c.82.58 1.79 1.22 2.91 1.93a22.84 22.84 0 004 1.94 15.25 15.25 0 005.46.87q4.89 0 7.57-2.32a8.32 8.32 0 002.67-6.65 6.17 6.17 0 00-1.21-4 9.69 9.69 0 00-3.21-2.57 24.11 24.11 0 00-4.55-1.76q-2.55-.72-5.18-1.58a42.3 42.3 0 01-5.19-2 16.59 16.59 0 01-4.55-3.1 14.25 14.25 0 01-3.21-4.78 18.17 18.17 0 01-1.21-7.08 16.91 16.91 0 015.25-12.2 19.6 19.6 0 016.31-4 23.08 23.08 0 018.55-1.48 28.5 28.5 0 0110 1.7 22.56 22.56 0 017.82 4.76zM367.75 370.49v24h-11.44V333h18.75a38.93 38.93 0 0110.78 1.3 20.39 20.39 0 017.35 3.63 14 14 0 014.21 5.59 19.61 19.61 0 01.43 13 16.85 16.85 0 01-2.64 5 17.68 17.68 0 01-4.25 3.95 22.19 22.19 0 01-5.76 2.72 11.39 11.39 0 013.74 3.53l15.39 22.7H394a5 5 0 01-2.53-.59 5.18 5.18 0 01-1.76-1.7l-12.91-19.59a4.5 4.5 0 00-1.59-1.58 5.6 5.6 0 00-2.57-.47zm0-8.2h7.14a17.6 17.6 0 005.63-.81 10.9 10.9 0 004-2.23 9.06 9.06 0 002.32-3.38 11.65 11.65 0 00.76-4.29 8.75 8.75 0 00-3.08-7.19q-3.09-2.5-9.42-2.51h-7.31zM477.05 363.78a34.14 34.14 0 01-2.25 12.52 29.86 29.86 0 01-6.34 10 28.66 28.66 0 01-9.82 6.56 35.46 35.46 0 01-25.44 0 28.83 28.83 0 01-9.86-6.56 29.44 29.44 0 01-6.36-10 36 36 0 010-25 29.35 29.35 0 016.36-10 28.71 28.71 0 019.86-6.57 33.32 33.32 0 0112.73-2.36 32.78 32.78 0 0112.71 2.38 29.12 29.12 0 019.82 6.57 29.57 29.57 0 016.34 9.95 34.1 34.1 0 012.25 12.51zm-11.73 0a28.75 28.75 0 00-1.32-9.08 19.16 19.16 0 00-3.85-6.82 16.7 16.7 0 00-6.1-4.3 23 23 0 00-16.22 0 16.77 16.77 0 00-6.14 4.3 19.08 19.08 0 00-3.89 6.82 31 31 0 000 18.15 19 19 0 003.89 6.81 16.81 16.81 0 006.14 4.27 22.82 22.82 0 0016.22 0 16.75 16.75 0 006.1-4.27 19 19 0 003.85-6.81 28.64 28.64 0 001.32-9.07zM494.57 394.51V333h21.21a40 40 0 0110.31 1.15 19.58 19.58 0 017 3.27 12.67 12.67 0 014 5.15 17.32 17.32 0 011.28 6.8 13.53 13.53 0 01-.64 4.14 12.17 12.17 0 01-2 3.7 14.71 14.71 0 01-3.4 3.13 20.58 20.58 0 01-4.91 2.38q12.67 2.85 12.67 13.69a17.47 17.47 0 01-1.49 7.22 16 16 0 01-4.33 5.72 20.63 20.63 0 01-7 3.76 30.56 30.56 0 01-9.52 1.36zM506 359.65h9.14c3.88 0 6.83-.7 8.84-2.12s3-3.67 3-6.76-.9-5.48-2.72-6.85-4.65-2-8.5-2H506zm0 7.91v18h11.61a16 16 0 005.33-.77 9.35 9.35 0 003.45-2 7.61 7.61 0 001.87-3 11.34 11.34 0 00.57-3.62 9.49 9.49 0 00-.64-3.59 6.74 6.74 0 00-2-2.72 9.28 9.28 0 00-3.49-1.72 19.14 19.14 0 00-5.14-.6zM617.43 363.78a34.14 34.14 0 01-2.26 12.52 29.68 29.68 0 01-6.33 10 28.75 28.75 0 01-9.82 6.56 35.49 35.49 0 01-25.45 0 28.92 28.92 0 01-9.86-6.56 29.57 29.57 0 01-6.35-10 35.81 35.81 0 010-25 29.47 29.47 0 016.35-10 28.8 28.8 0 019.86-6.57 33.38 33.38 0 0112.74-2.36 32.85 32.85 0 0112.69 2.37 28.68 28.68 0 0116.15 16.52 34.1 34.1 0 012.28 12.52zm-11.74 0a28.46 28.46 0 00-1.34-9.08 19.14 19.14 0 00-3.84-6.82 16.78 16.78 0 00-6.1-4.3 23 23 0 00-16.22 0 16.89 16.89 0 00-6.15 4.3 19.38 19.38 0 00-3.89 6.82 31 31 0 000 18.15 19.25 19.25 0 003.89 6.81 16.93 16.93 0 006.15 4.27 22.82 22.82 0 0016.22 0 16.83 16.83 0 006.1-4.27 19 19 0 003.84-6.81 28.36 28.36 0 001.34-9.07zM675 333v9.4h-18.5v52.07H645v-52.03h-18.56V333zM703.6 394.51h-11.48V333h11.48zM768.18 380a2.14 2.14 0 011.61.72l4.51 4.89a24.81 24.81 0 01-9.21 7.1 31.76 31.76 0 01-13.09 2.48 31 31 0 01-12.31-2.33 27.14 27.14 0 01-9.33-6.51 28.37 28.37 0 01-5.93-10 37.17 37.17 0 01-2.06-12.62 34 34 0 012.29-12.69 28.62 28.62 0 0116.43-16.41 34.17 34.17 0 0112.82-2.32 30.26 30.26 0 0112 2.19 28 28 0 018.78 5.8l-3.83 5.32a3.5 3.5 0 01-.87.89 2.5 2.5 0 01-1.47.38 3.37 3.37 0 01-2-.76 23.69 23.69 0 00-2.59-1.66 20.82 20.82 0 00-4-1.66 23 23 0 00-14.07.75 17.55 17.55 0 00-6.25 4.31 19.68 19.68 0 00-4.08 6.82 26.17 26.17 0 00-1.47 9 26.82 26.82 0 001.47 9.22 20.22 20.22 0 004 6.81 17 17 0 005.91 4.23 18.39 18.39 0 007.31 1.46 31.89 31.89 0 004.23-.25 18 18 0 003.49-.81 15.72 15.72 0 003-1.42 19.72 19.72 0 002.82-2.15 4 4 0 01.9-.62 2.31 2.31 0 01.99-.16zM824.38 344.22a3.16 3.16 0 01-1.09 1.32 2.76 2.76 0 01-1.46.38 3.74 3.74 0 01-1.92-.66c-.71-.44-1.54-.92-2.5-1.46a20.76 20.76 0 00-3.39-1.47 14.17 14.17 0 00-4.57-.66 13.54 13.54 0 00-4.14.57 8.92 8.92 0 00-3 1.6 6.34 6.34 0 00-1.8 2.44 8 8 0 00-.6 3.13 5.47 5.47 0 001.21 3.61 10.08 10.08 0 003.21 2.47 29.91 29.91 0 004.55 1.83c1.7.53 3.44 1.11 5.21 1.72a52.15 52.15 0 015.21 2.12 18.34 18.34 0 014.55 3.06 14.08 14.08 0 013.21 4.53 15.89 15.89 0 011.21 6.51 21.23 21.23 0 01-1.43 7.8 18 18 0 01-4.16 6.33 19.55 19.55 0 01-6.7 4.25 24.49 24.49 0 01-9 1.55 29.28 29.28 0 01-5.78-.57 30.09 30.09 0 01-5.5-1.62 28.32 28.32 0 01-4.89-2.55 24.11 24.11 0 01-4.06-3.31l3.32-5.49a4.47 4.47 0 011.12-1 2.78 2.78 0 011.47-.4 4.06 4.06 0 012.3.87c.82.58 1.79 1.23 2.91 1.94a22.37 22.37 0 004 1.93 15.35 15.35 0 005.47.87c3.25 0 5.78-.77 7.56-2.32a8.29 8.29 0 002.68-6.65 6.16 6.16 0 00-1.21-3.95 9.77 9.77 0 00-3.21-2.57 23.45 23.45 0 00-4.55-1.77q-2.55-.72-5.18-1.57a45.77 45.77 0 01-5.19-2 17 17 0 01-4.55-3.1 14.19 14.19 0 01-3.21-4.79 18.17 18.17 0 01-1.21-7.08 17 17 0 015.25-12.2 19.31 19.31 0 016.31-3.95 23 23 0 018.55-1.49 28.77 28.77 0 0110 1.7 22.56 22.56 0 017.82 4.76z"
        />
        <Path
          fill="#939191"
          d="M357.65 420.77h3.41v21.66h-3.41zM368.3 420.77h6.13c7.07 0 11.41 4.42 11.41 10.83s-4.31 10.83-11.41 10.83h-6.13zm5.92 18.63c5.61 0 8.06-3.21 8.06-7.8s-2.45-7.8-8.06-7.8h-2.51v15.6zM392 420.77h15.77v3.81h-11.83v5.66h10.51v3.27h-10.51V439h12.39v3.46H392zM420.17 435.56l-2.95 6.87h-3.93l9.33-21.66h3.15l9.42 21.66h-4.13l-2.83-6.87zm6.64-3.41l-2.66-6.33-2.65 6.33zM458.14 420.77h3.29l8.95 10.37 8.84-10.37h3.3v21.66h-3.67v-16l-8.44 10.08h-.2l-8.4-10.08v16h-3.67zM495 435.56l-2.94 6.87h-3.93l9.33-21.66h3.15l9.39 21.66h-4.1l-2.83-6.87zm6.65-3.41l-2.65-6.33-2.66 6.33zM527.5 420.77h3.87l-10 12.48 10 9.18H527l-7.91-6.61v6.61h-3.41v-21.66h3.41v10.74zM536.77 420.77h15.77v3.81h-11.87v5.66h10.51v3.27h-10.51V439h12.39v3.46h-16.29zM559.55 442.46V420.8h8.73c5.45 0 9.73 3 9.73 6.84v.84c-.06 2.54-1.85 4.68-4.62 5.87l6.58 8.08h-5.05l-5.81-7.13a7.77 7.77 0 01-.83 0h-4.8v7.13zm3.93-17.53v6.27h4.8c3.43 0 5.51-1.53 5.63-2.72a2.47 2.47 0 000-.84c-.18-1.15-2.2-2.71-5.63-2.71zM588.23 436.91a6.34 6.34 0 005.83 3.07c2.71 0 4.54-1.13 4.54-3 0-2.14-1.83-2.86-4.11-3.76l-1.76-.69c-3.78-1.44-6.35-3.17-6.35-6.67s2.89-5.86 7.13-5.86c3.29 0 5.69 1.15 7.34 3.52l-3.06 1.76a4.62 4.62 0 00-4.19-2.16c-2.08 0-3.3 1-3.3 2.6 0 1.79 1.25 2.48 4.05 3.58l1.76.69c3.9 1.5 6.47 3.06 6.47 6.87 0 4.14-3.61 6.24-8.49 6.24-4.33 0-7.51-1.84-9.24-4.73z"
        />
        <Path
          fill="#1f140f"
          d="M234.09 410.51a3.79 3.79 0 01-1.9-.51l-85.58-49.41a3.81 3.81 0 01-1.9-3.29v-98.82a3.81 3.81 0 011.9-3.28l85.58-49.41a3.78 3.78 0 013.79 0l85.59 49.41a3.8 3.8 0 011.89 3.28v98.82a3.8 3.8 0 01-1.89 3.29L236 410a3.75 3.75 0 01-1.91.51zm-81.8-55.39l81.8 47.22 81.79-47.22v-94.45l-81.79-47.22-81.8 47.22z"
        />
        <Path
          fill="#1f140f"
          d="M119.73 443.78a3.78 3.78 0 01-1.89-.51l-85.59-49.41a3.8 3.8 0 01-1.89-3.28v-98.83a3.8 3.8 0 011.89-3.28l85.59-49.41a3.78 3.78 0 013.79 0l85.58 49.41a3.78 3.78 0 011.9 3.28v98.83a3.78 3.78 0 01-1.9 3.28l-85.58 49.41a3.79 3.79 0 01-1.9.51zm-81.79-55.39l81.79 47.22 81.8-47.22v-94.45l-81.8-47.22-81.79 47.22z"
        />
        <Path
          fill="#1f140f"
          d="M35.23 394.77a3.79 3.79 0 01-1.95-7l71.49-42.81a3.79 3.79 0 113.89 6.5l-71.49 42.78a3.81 3.81 0 01-1.94.53z"
        />
        <Circle fill="#fff" cx={106.71} cy={348.17} r={7.01} />
        <Path
          fill="#1f140f"
          d="M106.71 359a10.75 10.75 0 01-2.62-.33 10.77 10.77 0 112.62.33zm-.78-7.68a3.22 3.22 0 003.9-2.34 3.21 3.21 0 10-6.23-1.56 3.14 3.14 0 00.36 2.43 3.18 3.18 0 002 1.47zM234.14 298.17a3.8 3.8 0 01-3.8-3.79v-83.33a3.8 3.8 0 017.59 0v83.33a3.79 3.79 0 01-3.79 3.79z"
        />
        <Circle fill="#fff" cx={234.14} cy={294.38} r={7.01} />
        <Path
          fill="#1f140f"
          d="M234.14 305.17a10.8 10.8 0 01-7.64-18.43 10.8 10.8 0 117.64 18.43zm-2.28-13.07a3.23 3.23 0 000 4.55 3.3 3.3 0 004.55 0 3.22 3.22 0 000-4.55 3.31 3.31 0 00-4.55 0z"
        />
      </Svg>
  );
}

export default SvgComponent;
