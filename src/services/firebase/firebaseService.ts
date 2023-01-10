import { collection, doc, FieldPath, getDoc, getDocs, query, QueryConstraint, where, WhereFilterOp, documentId, collectionGroup } from '@firebase/firestore'

import { entity } from '../../models/entity'
import { db } from './firebaseConfig'

export interface IQuery {
  key: string
  condition?: WhereFilterOp
  value: string | number | boolean
}

const renderQuery = (queries: IQuery[]): QueryConstraint[] => {
  return queries.map((q) => {
    return where(q.key, q.condition || '==', q.value)
  })
}




class FirebaseService {
  list = async (entity: entity, queries?: IQuery[]) => {
    const collectionRef = query(collection(db, entity), ...renderQuery(queries || []))
    const result = await getDocs(collectionRef)
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[]
  }


  getById = async (entity: entity, id: string) => {
    const item = doc(db, entity, id)
    const result = await getDoc(item)
    return result.data() as any
  }


  fetchChart = async () => {
  const ref = collection(db, 'FiberChart/OverAll/DataSet')
  const result = await getDocs(ref)
  return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[]
  }


  fetchStackChart = async (id: string) => {
    const ref = collection(db, `FiberChart/${id}/DataSet`)
    const result = await getDocs(ref)
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[]
  }
}

export const firebaseService = new FirebaseService()
