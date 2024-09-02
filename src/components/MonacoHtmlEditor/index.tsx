import { Card } from "antd";
import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { htmlString } from './html';
import Editor, { Monaco } from '@monaco-editor/react';

interface MonacoHtmlEditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

const MonacoHtmlEditor = forwardRef(({ initialValue = htmlString, onChange }: MonacoHtmlEditorProps, ref) => {
  const [content, setContent] = useState(initialValue);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const renderIframe = (htmlContent: string) => {
    if (iframeRef.current?.contentDocument?.body) {
      iframeRef.current.contentDocument.body.innerHTML = htmlContent;
    }
  };

  const handleEditorChange = (value: string | undefined) => {
    const htmlContent = value || '';
    setContent(htmlContent);
    renderIframe(htmlContent);
    if (onChange) {
      onChange(htmlContent);
    }
  };

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    // 自动格式化
    editor.getAction('editor.action.formatDocument').run();

    // 绑定 Ctrl+S / Cmd+S 事件
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      editor.getAction('editor.action.formatDocument').run();
    });
  };


  useEffect(() => {
    renderIframe(content);
  }, [content]);

  useImperativeHandle(ref, () => ({
    getHtml: () => content
  }));

  return (
    <Card>
      <div className="flex w-full h-full" id='monaco_html_id'>
        <div className="w-full h-full flex-1 text-center">
          <Editor
            height="80vh"
            language="html"
            defaultValue={htmlString}
            value={content}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
          />
        </div>
        <div className="flex-1">
          <iframe ref={iframeRef} className="w-full h-[600px]" />
        </div>
      </div>
    </Card>
  );
});

export default MonacoHtmlEditor;
