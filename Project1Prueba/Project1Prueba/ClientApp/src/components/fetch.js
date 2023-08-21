import { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
export const Card = ({ template }) => {
    const fileInputRef = useRef(null);
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const htmlContent = e.target.result;
                const container = document.createElement('div');
                container.innerHTML = htmlContent;
                document.body.appendChild(container);
                html2canvas(container).then(canvas => {
                    const url = canvas.toDataURL('image/png');
                    setThumbnailUrl(url);
                    document.body.removeChild(container);
                });
            };
            reader.readAsText(file);
        }
    };
    return (
        <div>
            <div id={template.id}>
                <div>
                    <input type="file" accept=".html" ref={fileInputRef} onChange={handleFileChange} />
                    {thumbnailUrl && <img src={thumbnailUrl} alt="Miniatura" />}
                </div>
                <div>
                    <a href="/edit-template">Editar</a>
                </div>
            </div>
        </div>
        
    )
}