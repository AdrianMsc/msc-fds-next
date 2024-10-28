import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Codeblock = ({ children }: any) => {
  return (
    <SyntaxHighlighter
      language="htmlbars"
      style={atomOneDark}
      className="max-[1500px] mt-2 rounded mb-10"
    >
      {children}
    </SyntaxHighlighter>
  );
};
export default Codeblock;
