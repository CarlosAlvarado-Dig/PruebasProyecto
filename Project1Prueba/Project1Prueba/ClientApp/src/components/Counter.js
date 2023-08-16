import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import sample from './sample.json';
import EmailEditor from 'react-email-editor';


export function Counter() {
    const emailEditorRef = useRef(null);
    const [isEditorLoading, setIsEditorLoading] = useState(true);

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
         // emailEditorRef.current.editor.addEventListener(
         //  'design:loaded',
         //  onDesignLoad
         //);

        // conectarnos a la base de datos y en base al ID del diseno, traer el json/html y cargarlos.
        // si viene vacios, dejarlo en blanco. OOOOO uno con fondo blanco.
        //emailEditorRef.current.editor.loadDesign(sample);
        emailEditorRef.current.setMergeTags({
            prueba: {
                name: "PRUEBA",
                value: "<var> RTaxId </var>",
                sample: "PRUEBA"
            }
        })
    };
        
    const onReady = () => {
        // editor is ready
        console.log('onReady');
    };
    const loadTemplate = (id) => {
        if (id == 1) {
            emailEditorRef.current.editor.loadDesign(sample);
        }
    };


    return (
        <div>
            <div>
                <button onClick={exportHtml}>Export Image</button>
            </div>
            <div>
                <button onClick={() => {
                    loadTemplate(1);
                }}>Load template 1</button>
            </div>
            
            {/*<div>*/}
            {/*    <a class="template" onClick={loadTemplate(1)}>*/}
            {/*        <p>Template 1</p>*/}
            {/*    </a>*/}

            {/*    <a class="template" onClick={loadTemplate(2)}>*/}
            {/*        <p>Template 2</p>*/}
            {/*    </a>*/}

            {/*    <a class="template" onClick={loadTemplate(3)}>*/}
            {/*        <p>Template 3</p>*/}
            {/*    </a>*/}
            {/*</div>*/}
            <br></br>
            <EmailEditor
                ref={emailEditorRef}
                onLoad={onLoad}
                options={{
                    mergeTags: {
                        prueba: {
                            name: "PRUEBA",
                            value: "<var> RTaxId </var>",
                        },
                    }
                }}
                appearance={{
                    theme: 'dark',
                    panels: {
                        tools: {
                            dock: 'right',
                            collapsible: true
                        }
                    }
                }}
                features={{
                    sendTestEmail: true
                }}
            />
        </div>
    );
}