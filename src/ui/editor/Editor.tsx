import { FC, memo, useEffect, useMemo, useRef } from 'react';
import { Editor as _Editor, EditorProps as _EditorProps, Monaco, useMonaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import useTheme from '@/ui/themeProvider/hooks/useTheme';
import { EDITOR_OPTIONS } from '@/ui/editor/common/config';
import { Spin } from 'antd';

export type EditorProps = Omit<_EditorProps, 'theme'> & {
  readOnly?: boolean;
  language: string;
};

const Editor: FC<EditorProps> = memo(({ readOnly = false, language, ...props }) => {
  const monaco = useMonaco();
  const { theme } = useTheme();
  const editorRef = useRef<editor.IStandaloneCodeEditor>();

  const options = useMemo(() => {
    return {
      ...EDITOR_OPTIONS,
      ...props?.options,
      readOnly,
    };
  }, [props?.options, readOnly]);

  useEffect(() => {
    if (monaco) {
      monaco.editor.setTheme(theme);
    }
  }, [monaco, theme]);

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {
    editorRef.current = editor;
    props?.onMount?.(editor, monaco);
    monaco.editor.setTheme(theme);
  }

  return (
    <_Editor
      loading={<Spin spinning />}
      {...props}
      language={language}
      options={options}
      onMount={handleEditorDidMount}
    />
  );
});

export default Editor;
