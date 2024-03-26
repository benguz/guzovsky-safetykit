import { Box } from '@chakra-ui/react'
import { useState, useRef } from 'react';

export default function CopyPasteElement({ children }) {
    const [isSvgHidden, setIsSvgHidden] = useState(false);
    const containerRef = useRef(null);
        
    function copyText(event) {
        // Check if the container ref is current and copy its text content
        if (containerRef.current) {
            const texts = [];
            // Iterate over child nodes
            containerRef.current.childNodes.forEach(node => {
                // Add the text content of each node to the array
                texts.push(node.innerText || node.textContent);
            });

            const textToCopy = texts.join('\n');

            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    console.log('Text copied to clipboard');
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            } else {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = textToCopy;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }

            // Toggle the SVG visibility to indicate a click has happened
            setIsSvgHidden(true);
            setTimeout(() => {
                setIsSvgHidden(false); 
            }, 150);
        }
      }  
    return <Box className="copy-paste-element">
        <Box ref={containerRef}>
        { children }
        </Box>
        
        <button className="copy-icon" onClick={copyText}>
            <svg className={`svg2 ${isSvgHidden ? 'hidden' : ''}`} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"></rect>
            <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path>
            </svg>
        </button>
        </Box>
}

// SAMPLE USAGE
{/* <CopyPasteElement>
  
    <p>Hi Ms. Harrison,<br>
    <br>
I am writing to ask for an extension on the To Kill A Mockingbird essay due Monday. I am behind on this assignment because I have my regional cross country meet on Saturday and have spent an unusual amount of time this week training. 
    <br><br>
I can finish the paper by Wednesday morning. I believe this extension would give me the time I need to do my best work. 
    <br><br>
Thank you for considering my request, and please let me know if there’s anything else I can do!
    <br><br>
Regards,<br>
April Maddigan  
</p>
  </div>

</CopyPasteElement> */}