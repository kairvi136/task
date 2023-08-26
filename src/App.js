import React, { useState } from 'react';
import './App.css';
import FamilyTree from './components/FamilyTree';
import FamilyInputForm from './components/FamilyInputForm';

function App() {
  const [treeData, setTreeData] = useState({
    name: 'You',
    children: [
      {
        name: 'Parent 1',
        children: [
          {
            name: 'Grandparent 1',
          },
          {
            name: 'Grandparent 2',
          },
        ],
      },
      {
        name: 'Parent 2',
      },
    ],
  });

  const handleAddMember = (memberName) => {
    const newMember = {
      name: memberName,
    };

    setTreeData((prevTreeData) => {
      prevTreeData.children.push(newMember);
      return { ...prevTreeData };
    });
  };

  const handleEditMember = (index, newName) => {
    setTreeData((prevTreeData) => {
      prevTreeData.children[index].name = newName;
      return { ...prevTreeData };
    });
  };

  const handleDeleteMember = (index) => {
    setTreeData((prevTreeData) => {
      prevTreeData.children.splice(index, 1);
      return { ...prevTreeData };
    });
  };

  return (
    <div className="App">
      <h1>Family Tree Visualization</h1>
      <FamilyInputForm
        onAddMember={handleAddMember}
        onEditMember={handleEditMember}
        onDeleteMember={handleDeleteMember}
      />
      <FamilyTree data={treeData} />
    </div>
  );
}

export default App;
