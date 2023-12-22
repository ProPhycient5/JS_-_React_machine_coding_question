## The given question is asked at Round 2 of Ninja Cart Machine coding round.

### With the given data structure, write a reactjs code to create UI of Folder structure.
```
{
    'data' : [
       { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" },
       { "id" : "ajson2", "parent" : "#", "text" : "Root node 2" },
       { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1" },
       { "id" : "ajson4", "parent" : "ajson2", "text" : "Child 2" },
    ]
}
```

#### Main component:

```
import { useState } from "react";

export const FolderStructure = ({ data, parentId }) => {
  const [showChild, setShowChild] = useState({});

  const children = data.filter((obj) => obj.parent === parentId);

  const handleToggle = (id) => {
    setShowChild((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      {children.map((obj) => {
        return (
          <div key={obj.id}>
            <div className="parent" onClick={() => handleToggle(obj.id)}>
              📂 {obj.text}
            </div>

            {showChild[obj.id] && (
              <div className="child">
                <FolderStructure data={data} parentId={obj.id} key={obj.id} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

```

At the link of [replit](https://replit.com/@Sawan5/FolderStructurefromarrcontainingobjs), you can find code and the corresponding UI.  
