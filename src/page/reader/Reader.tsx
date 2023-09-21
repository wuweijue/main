import React, { useEffect, useState } from 'react';
import './reader.less';
import ReactMarkdown from 'react-markdown';

const Reader = () => {
    const [markdownContent, setMarkdownContent] = useState('');
    useEffect(() => {
        fetch('/books/V8引擎：垃圾回收机制.md')
            .then(res => res.text())
            .then(data => setMarkdownContent(data.replace(/<br\s*\/?>/g, '\n\n')))
    }, [])
    return <div className="reader">
        <ReactMarkdown       
            children={markdownContent}
        />
    </div>
}

export default Reader