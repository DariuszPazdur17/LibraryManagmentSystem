import { collection, doc, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { fire } from './files/firebase'


const useCollection = (c, _q) => {
    const [documents, setDocuments] = useState(null)
    const q = useRef(_q).current
    useEffect( () => {
        let ref = collection(fire, c)
        if (q) {
            ref = query(ref,where(...q))
        }
        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc =>{
                results.push({
                    ...doc.data(),
                    id: doc.id,
                })
                setDocuments(results)
            })
        })
        return () => unsub()
    },[c])
  return {
      documents
  }
}

export default useCollection

