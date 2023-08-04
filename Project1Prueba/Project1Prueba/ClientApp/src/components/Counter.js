import React, { useRef } from 'react';
import './style.css';
import sample from './sample.json';
import EmailEditor from 'react-email-editor';


export function Counter() {
    const emailEditorRef = useRef(null);

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
            // save para el "usuario", donde el le de para guardar su diseno 
            // aqui mandar el html/json para almacenarlo en la nube/base de datos/ data.
        });
    };

    const onLoad = () => {
        // editor instance is created
        // you can load your template here;
        // const templateJson = {};
        //  emailEditorRef.current.editor.addEventListener(
        //   'design:loaded',
        //   onDesignLoad
        // );

        // conectarnos a la base de datos y en base al ID del diseno, traer el json/html y cargarlos.
        // si viene vacios, dejarlo en blanco. OOOOO uno con fondo blanco.
       emailEditorRef.current.editor.loadDesign(sample);
    };

    const onReady = () => {
        // editor is ready
        console.log('onReady');
    };

    return (
        <div>
            <div>
                <button onClick={exportHtml}>Export HTML</button>
            </div>

            <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
        </div>
    );
}