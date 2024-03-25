import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime document data
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        // need to make sure the doc exists & has data
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("Hittar inte dokumentet");
        }
      },
      (err) => {
        console.log(err.message);
        setError("Misslyckades hämta dokumentet");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};
