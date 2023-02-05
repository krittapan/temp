import {
  collection,
  doc,
  FieldPath,
  getDoc,
  getDocs,
  query,
  QueryConstraint,
  where,
  WhereFilterOp,
  documentId,
  collectionGroup,
} from "@firebase/firestore";
import { async } from "@firebase/util";

import { entity } from "../../models/entity";
import { db } from "./firebaseConfig";
import { chunkArray } from "./utils";

export interface IQuery {
  key: string;
  condition?: WhereFilterOp;
  value: string | number | boolean;
}

const renderQuery = (queries: IQuery[]): QueryConstraint[] => {
  return queries.map((q) => {
    return where(q.key, q.condition || "==", q.value);
  });
};

class FirebaseService {
  list = async (entity: entity, queries?: IQuery[]) => {
    const collectionRef = query(
      collection(db, entity),
      ...renderQuery(queries || [])
    );
    const result = await getDocs(collectionRef);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  };

  getById = async (entity: entity, id: string) => {
    const item = doc(db, entity, id);
    const result = await getDoc(item);
    return result.data() as any;
  };

  fetchChart = async () => {
    const ref = collection(db, "FiberChart/OverAll/DataSet");
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  };

  fetchProductionInfo = async (id: string) => {
    const ref = collection(db, `FiberType/${id}/Specifications`);
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  };

  fetchPlantSpec = async (id: string) => {
    const ref = collection(db, `PlantsType/${id}/Specifications`);
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  };

  fetchStackChart = async (id: string) => {
    const ref = collection(db, `FiberChart/${id}/DataSet`);
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  };

  fetchColorChart = async () => {
    const ref = collection(db, "ColorChart/OverAll/DataSet");
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  }
  
  fetchColorTreeMap = async (id: string) => {
    const ref = collection(db, `ColorChart/${id}/DataSet`);
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  }



  fetchRegionChart = async(id: string) => {
    const ref = collection(db, `RegionChart/${id}/DataSet`);
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  }

  fetchClusterMainChart = async() => {
    const ref = collection(db, "ClusterChart/OverAll/DataSet");
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  }

  fetchClusterChart = async(id: string) => {
    const ref = collection(db, `ClusterChart/${id}/DataSet`);
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  }


  fetchPlantChart = async(id: string) => {
    const ref = collection(db, `PlantsChart/${id}/DataSet`);
    const result = await getDocs(ref);
    return result.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
  }

  bulkFetchEnterprise = async(ids: string[]) => {

    const result = chunkArray(ids, 10)

    const output:any[] = []

    const fetchEnterprise = async (queries: string[]) => {

      const collectionRef = query(
        collection(db, 'Enterprise'),
        where('__name__', 'in', queries)

      );
      const r = await getDocs(collectionRef);
      const toReturn = r.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
      output.push(...toReturn)
    }



    await Promise.all(result.map(async (q) => {
      await fetchEnterprise(q)
    }))


    return output
  }
  bulkFetch = async(entity: entity, ids: string[]) => {

    const result = chunkArray(ids, 10)

    const output:any[] = []

    const fetchEnterprise = async (queries: string[]) => {

      const collectionRef = query(
        collection(db, entity),
        where('__name__', 'in', queries)

      );
      const r = await getDocs(collectionRef);
      const toReturn = r.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any[];
      output.push(...toReturn)
    }



    await Promise.all(result.map(async (q) => {
      await fetchEnterprise(q)
    }))


    return output
  }

  fetchSilkChartSpec = async (ids: string[]) => {
    const output: any[] = []

    await Promise.all(
      ids.map(async (id) => {
        const k = await this.fetchProductionInfo(id);

        if (k.length === 0) {
          output.push([{ name: "ไม่พบในฐานข้อมูล" }]);
        } else {
          output.push(k);
        }
      })
    );

    return output

  }
}

export const firebaseService = new FirebaseService();
