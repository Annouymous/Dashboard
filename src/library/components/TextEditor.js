import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

function TextEditor({onEditorChange,initialValue}) {
  return (
    <Editor
      value={initialValue}
      onEditorChange={onEditorChange}
      apiKey='0g0qyshm3i40em0cfrgg54f5udj67uhw7sj6vo6fco88gqps'
      init={{
        menubar: false,
        min_height: 500,
        height: 500,
        plugins: [
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          'checklist', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
      }}
    />
  );
}

export default TextEditor;
