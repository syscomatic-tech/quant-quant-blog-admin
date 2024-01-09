'use client'
import React, { useState } from 'react'
import "draft-js/dist/Draft.css"
import "draftail/dist/draftail.css"
import ReactDOM from "react-dom"
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail"
import { ENTITY_TYPE } from 'draftail';
const initial = JSON.parse(sessionStorage.getItem("draftail:content"))
const onSave = (content) => {
    console.log("saving", content)
    sessionStorage.setItem("draftail:content", JSON.stringify(content))
}
let id = ''

const TextEditor = () => {
    return (
        <DraftailEditor

            rawContentState={initial || null}
            onSave={onSave}
            blockTypes={[
                { type: BLOCK_TYPE.ORDERED_LIST_ITEM},
                { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
                { type: BLOCK_TYPE.BLOCKQUOTE, },
                { type: BLOCK_TYPE.ATOMIC, },
                {
                    type: 'tiny-text',
                    label: 'tiny',
                },
                {
                    type: 'code-block',
                    label: 'code',
                },
                
               
            ]}
            entityTypes={[
               
              ]}
            inlineStyles={[
                { type: INLINE_STYLE.BOLD }, 
                { type: INLINE_STYLE.ITALIC },
                { type: INLINE_STYLE.STRIKETHROUGH },
                { type: INLINE_STYLE.UNDERLINE },
            ]}
        />
    )
}
export default TextEditor