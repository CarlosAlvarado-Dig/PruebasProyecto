import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import sample from './sample.json';
import EmailEditor from 'react-email-editor';

const designJSON = { "counters": { "u_column": 1, "u_row": 1, "u_content_image": 1 }, "body": { "rows": [{ "cells": [1], "columns": [{ "contents": [{ "type": "image", "values": { "containerPadding": "10px", "_meta": { "htmlID": "u_content_image_1", "htmlClassNames": "u_content_image" }, "selectable": true, "draggable": true, "duplicatable": true, "deletable": true, "src": { "url": "{{img_logo}}" }, "textAlign": "center", "altText": "Image", "action": { "name": "web", "values": { "href": "", "target": "_blank" } }, "hideDesktop": false, "hideMobile": false } }], "values": { "backgroundColor": "", "padding": "0px", "border": {}, "_meta": { "htmlID": "u_column_1", "htmlClassNames": "u_column" } } }], "values": { "displayCondition": null, "columns": false, "backgroundColor": "", "columnsBackgroundColor": "", "backgroundImage": { "url": "", "fullWidth": true, "repeat": false, "center": true, "cover": false }, "padding": "0px", "hideDesktop": false, "hideMobile": false, "noStackMobile": false, "_meta": { "htmlID": "u_row_1", "htmlClassNames": "u_row" }, "selectable": true, "draggable": true, "duplicatable": true, "deletable": true } }], "values": { "backgroundColor": "#e7e7e7", "backgroundImage": { "url": "", "fullWidth": true, "repeat": false, "center": true, "cover": false }, "contentWidth": "500px", "fontFamily": { "label": "Arial", "value": "arial,helvetica,sans-serif" }, "linkStyle": { "body": true, "linkColor": "#0000ee", "linkHoverColor": "#0000ee", "linkUnderline": true, "linkHoverUnderline": true }, "_meta": { "htmlID": "u_body", "htmlClassNames": "u_body" } } }, "schemaVersion": 5 }

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
        //  emailEditorRef.current.editor.addEventListener(
        //   'design:loaded',
        //   onDesignLoad
        // );

        // conectarnos a la base de datos y en base al ID del diseno, traer el json/html y cargarlos.
        // si viene vacios, dejarlo en blanco. OOOOO uno con fondo blanco.
        emailEditorRef.current.editor.loadDesign(sample);
        emailEditorRef.current.setMergeTags({
            img_logo: {
                name: "Logo",
                value: "{{img_logo}}",
                sample: "https://via.placeholder.com/500x100?text=IMAGE"
            }
        })


    };
        
    const onReady = () => {
        // editor is ready
        console.log('onReady');
    };



    return (
        <>
            <EmailEditor
                ref={emailEditorRef}
                onLoad={onLoad}
                options={{
                    mergeTags: {
                        img_logo: {
                            name: "Logo",
                            value: "{{img_logo}}",
                        },
                    }
                }}
            />
        </>
    );
}