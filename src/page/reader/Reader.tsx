import React, { useEffect, useState } from 'react';
import './reader.less';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLocation } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

function generateRandomHash() {
    let hash = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) { // 更改此数字以生成不同长度的哈希值  
        hash += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return hash;
}

const formatMenu = (markdownContent: string) => {
    let regex = /<a[^>]*>\s*<\/a>\s*#{2,}(.+)/g;
    const head = markdownContent.match(regex)
    if (head && head.length) {
        return head.map((item, idx) => {
            let name = (item.match(/<a name="(.+?)">/) as Array<string>)[1];
            let level = item.match(/#/g)?.length || 1;
            let title = (item.match(/#{2,} (.+)/) as Array<string>)[1];
            let key = 'h' + level + '-' + idx + '-' + generateRandomHash();
            return React.createElement('h' + level, {
                key,
                children: <a href={name}>{title}</a>
            })
    
        })
    }
}

const Reader = () => {
    const location = useLocation()
    const [markdownContent, setMarkdownContent] = useState('');
    useEffect(() => {
        fetch('/books/V8引擎：垃圾回收机制.md')
            .then(res => res.text())
            .then(data => setMarkdownContent(data.replace(/<br\s*\/?>/g, '\n\n')))
    }, [location.pathname])
    return <div className="reader-wrapper">
        <div className="reader scroll" >
            <Markdown>
                {markdownContent}
            </Markdown>
        </div>
        <div className="reader-menu scroll">
            {
                formatMenu(markdownContent)
            }
        </div>
    </div>
}

export default Reader