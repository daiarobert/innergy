"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

export default function FroalaEditorWrapper({ model }: { model: string }) {
  useEffect(() => {
    import("froala-editor/js/plugins.pkgd.min.js");
    import("froala-editor/css/froala_editor.pkgd.min.css");
    import("froala-editor/css/froala_style.min.css");
    import("froala-editor/css/themes/gray.min.css");
  }, []);

  const FroalaEditor = dynamic(() => import("react-froala-wysiwyg"), {
    ssr: false,
  });

  return (
    <div>
      <FroalaEditor tag="textarea" model={model} />
    </div>
  );
}
