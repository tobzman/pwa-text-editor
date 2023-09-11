import { openDB } from "idb";

const DB_NAME = "jate";
const STORE_NAME = "jate";

const initdb = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
        console.log(`${STORE_NAME} database created`);
      }
    },
  });
};

export const putDb = async (content) => {
  try {
    const db = await initdb();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    const data = { content, timestamp: new Date().getTime() };

    const id = await store.add(data);

    console.log(`Data added with ID: ${id}`);

    await tx.done;
  } catch (error) {
    console.error("Error adding data to IndexedDB:", error);
  }
};

export const getDb = async () => {
  try {
    const db = await initdb();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);

    const data = await store.getAll();

    await tx.done;

    return data;
  } catch (error) {
    console.error("Error getting data from IndexedDB:", error);
    return [];
  }
};
